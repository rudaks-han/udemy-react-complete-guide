import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

/*function Todos(props: React.FC<{}) {
    return <ul>
        <li>Learn React</li>
        <li>Learn TypeScript</li>
    </ul>
}*/

export default Todos;
