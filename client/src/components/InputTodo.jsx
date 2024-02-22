import { useState } from 'react'

function InputTodo() {

    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:8000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <>
            <h1 className="mt-12 text-4xl">Pern Todo List</h1>
            <form className="flex flex-col justify-center mt-6" onSubmit={onSubmitForm}>
                <input type="text" className="p-2 border border-gray-300 rounded-md mb-6" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button className="p-2 rounded-md bg-green-600 text-white">Add Todo</button>
            </form>
        </>
    )
}
export default InputTodo
