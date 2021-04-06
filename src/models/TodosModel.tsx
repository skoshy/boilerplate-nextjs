import { Action, action, Thunk, thunk, ThunkOn, thunkOn, useStoreActions } from "easy-peasy";
import uuidGen from 'uuid-random';
import { keyBy, debounce } from 'lodash';
import { deleteTodo, getTodos, upsertTodo } from "src/api";
import { StoreTypes } from "src/types";
import { NormalizedData, NormalizedAction, createNormalized } from "src/types/normalized";

const createNewTodo = ({ id = '', task = '', is_complete = false }): StoreTypes.Todo => ({
  id,
  task,
  is_complete,
})

const debounced = {
  upserts: {},
};

export const todosModel: StoreTypes.TodosModel = {
  todos: {},

  fetchTodos: thunk(async (actions) => {
    const { body: todosArray } = await getTodos();
    const todos = keyBy(todosArray, (o) => o.id);
    actions._setTodos(todos);
  }),
  addTodo: thunk(async (actions) => {
    // create the todo locally
    const id = uuidGen();
    const newTodo = createNewTodo({ id });
    return actions._upsertTodo([id, newTodo]);
  }),
  editTodo: thunk(async (actions, [id, todo]) => {
    return actions._upsertTodo([id, todo]);
  }),
  deleteTodo: thunk(async (actions, id) => {
    actions._deleteTodo(id);
  }),

  _upsertTodo: thunk(async (actions, [id, newTodo], { getState }) => {
    actions._setTodoLocally([id, newTodo]);

    debounced.upserts[id] = debounced.upserts[id] || debounce(upsertTodo, 1000);

    const oldTodo = getState().todos[id] ?? {};
    return debounced.upserts[id]({ ...oldTodo, ...newTodo });
  }),
  _setTodos: action((state, payload) => {
    state.todos = payload;
  }),
  _setTodoLocally: action((state, [id, newTodo]) => {
    state.todos[id] = { ...(state.todos[id] ?? {}), ...newTodo };
  }),
  _deleteTodo: thunk(async (actions, id) => {
    actions._deleteTodoLocally(id);

    // persist it also to the server
    return deleteTodo(id);
  }),
  _deleteTodoLocally: action((state, id) => {
    delete state.todos[id];
  }),
};


type Todo = {
  id: string;
}

export type TodoModel = {
  todos: NormalizedData<Todo>;

  insertTodo: Thunk<TodoModel, [string]>;
  updateTodo: NormalizedAction<TodoModel, [string, Partial<Todo>]>;
  removeTodo: NormalizedAction<TodoModel, [string]>;

  remoteUpsertTodo: ThunkOn<TodoModel, [id: string, newTodo: Partial<Todo>]>;
  remoteDeleteTodo: Thunk<TodoModel, [id: string]>;
}

const name = 'todos';
const normTodos = createNormalized<TodoModel, Todo, typeof name>(name, { idBy: e => e.id });

export const howdyModel: TodoModel = {
  ...normTodos.data,

  insertTodo: thunk((actions, [id], { getState }) => {
    const state = getState();
    const { entry } = normTodos.insert(state, [id]);
    state.remoteUpsertTodo([id,]);
    state.remoteUpsertTodo();
  }),
  updateTodo: normTodos.action(normProps => action((s, [id, newParams]) => {
    normProps.update(s, [id, newParams]);
  })),
  removeTodo: normTodos.action(normProps => action((s, [id]) => {
    normProps.remove(s, [id]);
  })),

  _locallyUpsertTodo
  remoteUpsertTodo: thunkOn(actions =>  actions.insertTodo, async (actions, [id, newTodo], { getState }) => {
    debounced.upserts[id] = debounced.upserts[id] || debounce(upsertTodo, 1000);

    const oldTodo = normTodos.get(getState(), id) ?? {};
    return debounced.upserts[id]({ ...oldTodo, ...newTodo });
  }),
  remoteDeleteTodo: thunk(async (actions, [id]) => {
    // persist it also to the server
    return deleteTodo(id);
  }),
  _setTodos: action((state, payload) => {
    state.todos = payload;
  }),
  _setTodoLocally: action((state, [id, newTodo]) => {
    state.todos[id] = { ...(state.todos[id] ?? {}), ...newTodo };
  }),
  _deleteTodo: thunk(async (actions, id) => {
    // persist it also to the server
    return deleteTodo(id);
  }),
};
