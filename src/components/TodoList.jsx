import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h2 className="mt-4 text-gray-200 text-base font-normal">
        Todo List....
      </h2>

      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
