import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="h-dvh grid place-items-center my-0 mx-auto text-center">
      <div className="md:w-[600px] w-[400px]">
        <h1 className="text-3xl font-bold  p-4 mb-4">Todo List!</h1>
        <TodoForm />
        {todos.length > 0 ? <TodoList /> : <h3 className="mt-4">No Todos</h3>}
      </div>
    </div>
  );
}

export default App;
