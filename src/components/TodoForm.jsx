import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({
    text: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.text === "") return;
    dispatch(addTodo(todo.text));
  };
  return (
    <div>
      <form className="w-full mt-4" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            name="text"
            type="text"
            placeholder="Input your task!"
            aria-label="Task"
            value={todo.text}
            onChange={handleChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
