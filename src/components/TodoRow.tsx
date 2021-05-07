import { Modal, Button, Grid, Heading, Select, TextInput } from "src/components/_lib_";
import { useStoreActions } from "src/models";


export const TodoRow = ({ todo }) => {
  const editTodo = useStoreActions(a => a.app.editTodo);

  return <Grid className="items-center" style={{ gridTemplateColumns: 'auto 1fr' }}>
    <input className="h-10 w-10" type="checkbox" checked={todo.is_complete} onChange={e => {
      editTodo([todo.id, { id: todo.id, is_complete: !todo.is_complete }])
    }} />
    <TextInput inputProps={{ className: todo.is_complete ? 'line-through' : '' }} value={todo.task} onChange={e => {
      editTodo([todo.id, { id: todo.id, task: e.target.value }])
    }} />
  </Grid>;
};
