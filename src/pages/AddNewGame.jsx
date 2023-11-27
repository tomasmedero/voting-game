import { useState } from "react"
import { MainTitle } from "../components"
import { Navigate } from "react-router-dom"
import { useForm } from "react-hook-form"

// Este componente permite al usuario agregar un nuevo juego
export const AddNewGame = () => {
    // Estos son los estados para los campos del formulario

    // Este estado se utiliza para redirigir al usuario después de que se ha agregado un juego
    const [shouldRedirect, setShouldRedirect] = useState(false)

    // Estas funciones manejan los cambios en los campos del formulario

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // Esta función maneja el envío del formulario
    const onHandleSubmit = (data, e) => {
        // Previene la recarga de la página al enviar el formulario
        e.preventDefault()
        // Creamos un objeto con los datos del juego
        const game = data
        // Hacemos una solicitud POST a la API para agregar el juego
        fetch("http://localhost:3000/api/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(game),
        })
            // Convertimos la respuesta a JSON
            .then((response) => response.json())
            .then(() => {
                // Imprimimos un mensaje de éxito en la consola
                console.log("Juego agregado con éxito")
                // Cambiamos el estado para redirigir al usuario
                setShouldRedirect(true)
            })
            .catch((error) => {
                // Imprimimos cualquier error en la consola
                console.error("Error:", error)
            })
    }

    if (shouldRedirect) {
        return <Navigate to="/games" />
    }

    return (
        <>
            <MainTitle title={"Agregar nuevo juego"} />
            <div className="flex justify-center items-center max-h-screen">
                <div className="w-2/4 flex flex-col items-center">
                    <form
                        onSubmit={handleSubmit(onHandleSubmit)}
                        className="flex flex-col space-y-4 mx-auto w-[50%]"
                    >
                        <label className="flex flex-col text-xl">
                            Nombre:
                            <input
                                type="text"
                                {...register("name", {
                                    required: "Este valor es requerido",
                                    minLength: {
                                        value: 1,
                                        message:
                                            "El mínimo de caracteres permitidos es 1",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message:
                                            "El máximo de caracteres permitidos es 30",
                                    },
                                })}
                                className="px-2 py-1 border border-gray-300 rounded"
                            />
                            {errors.name && (
                                <p className="text-red-500 font-bold">
                                    {errors.name.message}
                                </p>
                            )}
                        </label>
                        <label className="flex flex-col text-xl">
                            Género:
                            <input
                                type="text"
                                {...register("genre", {
                                    required: "Este valor es requerido",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message:
                                            "Solo se permiten letras y espacios",
                                    },
                                    minLength: {
                                        value: 1,
                                        message:
                                            "El mínimo de caracteres permitidos es 1",
                                    },
                                    maxLength: {
                                        value: 30,
                                        message:
                                            "El máximo de caracteres permitidos es 30",
                                    },
                                })}
                                className="px-2 py-1 border border-gray-300 rounded"
                            />
                            {errors.genre && (
                                <p className="text-red-500 font-bold">
                                    {errors.genre.message}
                                </p>
                            )}
                        </label>
                        <label className="flex flex-col text-xl">
                            Edición:
                            <input
                                type="text"
                                {...register("edition", {
                                    required: "Este valor es requerido",
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: "Solo se permiten números",
                                    },
                                    min: {
                                        value: 1950,
                                        message:
                                            "El número mínimo permitido es 1950",
                                    },
                                    max: {
                                        value: 2024,
                                        message:
                                            "El número máximo permitido es 2024",
                                    },
                                })}
                                className="px-2 py-1 border border-gray-300 rounded"
                            />
                            {errors.edition && (
                                <p className="text-red-500 font-bold">
                                    {errors.edition.message}
                                </p>
                            )}
                        </label>
                        <button
                            type="submit"
                            className="text-white hover:py-5 hover:px-7 hover:text-black bg-emerald-700 hover:bg-emerald-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition-all"
                        >
                            Agregar juego
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
