import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../features/todo/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id)); // Dispatch delete action
  };

  const handleEdit = () => {
    const newText = prompt("Edit your todo:", todo.text); // Get new text from user
    if (newText) {
      dispatch(editTodo({ id: todo.id, text: newText })); // Dispatch edit action
    }
  };

  return (
    <div className="mt-4">
      <ul className="list-disc">
        <li className=" py-4 px-2" key={todo.id}>
          <div className="grid grid-cols-4 gap-4">
            <p className="col-span-2 text-gray-300 text-lg">{todo.text}</p>
            <button
              className="bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-700 transition duration-300 text-base font-bold"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition duration-300 text-base font-bold"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
