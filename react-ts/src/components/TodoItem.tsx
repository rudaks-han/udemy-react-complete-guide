const TodoItem: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};
/*function TodoItem({ id: string, text: string }) {
  return <li key={id}>{text}</li>;
}*/

export default TodoItem;
