import { Action, State } from 'easy-peasy';

type Obj = Record<string, unknown>

// we can use this meta object later to store metadata,
// like a `shouldDelete` flag or something
export interface NormalizedDataMeta { }

export type PossibleIndexTypes = string | number | symbol;

export type ById<T, Index extends PossibleIndexTypes = string> = {
  [k in Index]: [T, NormalizedDataMeta]
}
export interface NormalizedData<T, Index extends PossibleIndexTypes = string> {
  // using Redux's approach - https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
  byId: ById<T, Index>,
  allIds: Index[],
};

export function transformToNormalized<ToTransformType, TransformedType>(
  arrayOfDataToTransform: ToTransformType[],
  reduceFunction: (
    acc: NormalizedData<TransformedType>,
    entry: ToTransformType
  ) => NormalizedData<TransformedType>
): NormalizedData<TransformedType> {
  return arrayOfDataToTransform.reduce(reduceFunction, { byId: {}, allIds: [] });
};

// type NormalizedOperations = 'insert' | 'delete' | 'update';
// type NormalizedOperationsPlural = 'set';

// type NormalizedOptional<Name extends string, PluralName extends string> = {
//   [K in Name as`${NormalizedOperations}${Name}` | `${NormalizedOperationsPlural}${PluralName}`]?: string;
// };

// type Normalized<T, Name extends string, PluralName extends string = `${Name}s`> = {
//   [K in Name as Uncapitalize<PluralName>]: NormalizedData<string> & NormalizedOptional<'', ''>;
// } & NormalizedOptional<Name, PluralName>;


// type createNormalizedOptions<M extends Record<string, unknown>, T, I extends PossibleIndexTypes = string> = {
//   initialData: NormalizedData<T, I>
//   overrideFunctions?: {
//     insert: <Payload>(insertFunction: (state) => void) => Action<M, Payload> | Thunk<M, Payload>,
//     update: <Payload>(insertFunction: (state) => void) => Action<M, Payload> | Thunk<M, Payload>,
//     delete: <Payload>(insertFunction: (state) => void) => Action<M, Payload> | Thunk<M, Payload>,
//     set: <Payload>(insertFunction: (state) => void) => Action<M, Payload> | Thunk<M, Payload>,
//   }
// }

// function createNormalized
//   <
//     M,
//     T,
//     Name extends string = string | 'Item',
//     PluralName extends string = `${Name}s`
//   >
//   (
//     names: readonly [Name, PluralName | undefined] = ['Item' as Name, 'Items' as PluralName],
//     props: createNormalizedOptions<M, T> | undefined = undefined
//   ): Normalized<T, Name, PluralName> {

//   const name = names[0];
//   const pluralName = names?.[1] ?? `${name}s` as PluralName;

//   const dataKey = `${uncapitalize(pluralName)}`;
//   const initialData = props?.initialData;

//   return {
//     [dataKey]: initialData || {
//       byId: {},
//       allIds: [],
//     },
//     [`insert${name}`]: () => { return },
//     [`update${name}`]: () => { return },
//     [`delete${name}`]: () => { return },
//     [`set${pluralName}`]: () => { return },
//   } as Normalized<T, Name, PluralName>;
//

// const names = ['Howdy', 'Howdys'] as const;

export interface CreateNormalizedActionPayloads<T> {
  insert: [newId?: string, newEntry?: Partial<T>]
  update: [id: string, newParams: Partial<T>]
  remove: [id: string] // can't use delete since it's a reserved word
}

export type CreateNormalizedActionReturnType<M extends Obj, T> = {
  state: State<M>,
  entry: T,
  id: string,
};

export interface CreateNormalizedActions<M extends Obj, T extends Obj = {}> {
  insert: (state: State<M>, payload: CreateNormalizedActionPayloads<T>['insert']) => CreateNormalizedActionReturnType<M, T>
  update: (state: State<M>, payload: CreateNormalizedActionPayloads<T>['update']) => State<M>
  remove: (state: State<M>, payload: CreateNormalizedActionPayloads<T>['remove']) => State<M>
};

export type NormalizedAction<Model extends Obj, Payload> =
  (helpers: CreateNormalizedActions<Model>) => Action<Model, Payload>

export type CreateNormalizedParams<T> = {
  idBy?: <IdByEntry extends T = T>(entry: IdByEntry) => PossibleIndexTypes
  idGenerator?: <IdByEntry extends T = T>() => string
  create?: () => T
};

export type CreateNormalized<M extends Obj, T extends Obj, Name extends string> = {
  data?: Record<Name, NormalizedData<T>>
  get: <M2 extends Obj = M>(state: State<M>, id: string) => T
  action: <M2 extends Obj = M, P>(actionFunc: (helpers: CreateNormalizedActions<M, T>) => Action<M, P>) => NormalizedAction<M, P>
} & CreateNormalizedActions<M, T>

export function createNormalized
  <Model extends { [k: Name]: NormalizedData<T> },
    T extends Obj,
    Name extends string = string>
  (name: Name, params: CreateNormalizedParams<T>): CreateNormalized<Model, T, Name> {

  const idBy = params?.idBy ?? (() => Math.random().toString());
  const idGenerator = params?.idGenerator ?? (() => Math.random().toString());
  const create = params?.create ?? ((state) => ({} as T));

  const insert: CreateNormalizedActions<Model, T>['insert'] = (state, [newId, newEntry]) => {
    const id = idGenerator();
    const entry = create(state);
    state[name as string].byId[id] = entry;
    state[name as string].allIds.push(id);
    return { state, entry, id };
  };

  const update: CreateNormalizedActions<Model, T>['update'] = (state, [id, newParams]) => {
    state[name as string].byId[id] = { ...state[name as string].byId[id], ...newParams };
    return state;
  };

  const remove: CreateNormalizedActions<Model, T>['remove'] = (state, [idToDelete]) => {
    delete state[name as string].byId[idToDelete];
    const i = state[name as string].allIds.findIndex(id => id === idToDelete);
    if (i > -1) {
      state[name as string].allIds.splice(i, 1);
    }
    return state;
  };

  return {
    data: {
      [name]: {
        byId: {},
        allIds: [],
      }
    } as Record<Name, NormalizedData<T>>,
    get: function <M2 extends Obj>(state: State<M2>, id: string) {
      return state[name as string].byId[id];
    },
    insert,
    update,
    remove,
    action: function <M2 extends Obj>(actionFunc) {
      return actionFunc({ insert, update, remove })
    }
  };
};
