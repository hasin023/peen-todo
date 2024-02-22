import { useState } from "react";

function EditTodo({ todo }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <button onClick={() => setShowModal(true)} className="py-1 px-3 rounded-md bg-yellow-500 text-white hover:bg-yellow-600">Edit</button>
            {showModal ? (
                <>
                    <div key={todo.todo_id} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-[25rem] my-6 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Edit Todo
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex flex-col">
                                    <form className="flex flex-col justify-center mt-6">
                                        <input type="text" className="p-2 border border-gray-300 rounded-md mb-6" value={todo.description} />
                                        <button className="p-2 rounded-md bg-green-600 text-white">Save Changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>

    );
}

export default EditTodo
