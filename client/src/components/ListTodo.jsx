import { useEffect, useState } from "react";

function ListTodo() {

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:8000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    });


    return (

        <div className="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase border-b-4 border-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Edit
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {todos.map((todo) => (
                        <tr key={todo.todo_id} className="odd:bg-white even:bg-gray-50 border-b">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {todo.description}
                            </th>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default ListTodo
