import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
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
        <li className="py-4 px-2" key={todo.id}>
          <p>{todo.text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </li>
      </ul>
    </div>
  );
};

export default TodoItem;
