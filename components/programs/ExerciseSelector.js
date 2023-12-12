

export default function ExerciseSelector({ selectedExerciseDay, setSelectedExercise, selectedExerciseIndex, exercises }) {
    return (
        <div className={"absolute z-20 bg-white rounded-xl left-0 right-0 top-24 pt-3 mx-auto w-full max-w-[1280px]"}>
            <div className={"flex flex-col items-center justify-center px-6"}>
                <h1 className={"font-bold text-3xl text-center"}>Select an Exercise</h1>
                <table className={"w-full table-border-spacing border-separate"}>
                    <thead>
                        <tr className="border-b border-gray-200 text-neutral-950 dark:text-white min-[424px]:text-lg min-[1350px]:text-xl text-md">
                            <th className={"w-1/4 text-left"}>Exercise</th>
                            <th className={"w-1/4 text-left"}>Mechanic</th>
                            <th className={"w-1/4 text-left"}>Muscles</th>
                            <th className={"w-1/4 text-left"}>Equipment</th>
                        </tr>
                    </thead>
                    <tbody>
                    {exercises.map((exercise, index) => {
                        return (
                                <tr onClick={() => setSelectedExercise(selectedExerciseIndex, selectedExerciseDay, exercise)} key={index} className={"border-1 border-gray-200 rounded-xl mb-2 hover:bg-gray-100 hover:cursor-pointer"}>
                                    <td className={"flex flex-row"}>
                                        <div className={"w-2 h-full"}></div>
                                        <p className={"text-left"}>{exercise.name}</p>
                                    </td>
                                    <td>
                                        <p className={"text-left"}>{exercise.mechanic === "" ? exercise.category : exercise.mechanic}</p>
                                    </td>
                                    <td>
                                        <p className={"text-left"}>{exercise.primaryMuscles}</p>
                                    </td>
                                    <td>
                                        <p className={"text-left"}>{exercise.equipment === "" ? "Bodyweight" : exercise.equipment}</p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}