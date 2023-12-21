export default function WorkoutTable({ workout }) {
    return (
        <div className="mb-8 h-min">
            <span className={"font-bold text-slate-900 dark:text-slate-50 text-[1.4rem]"}>{workout.title}</span>
            <div className="border-neutral-700 border-1 px-4 rounded-md mt-4 mb-4 min-[424px]:text-md min-[1350px]:text-lg text-base">
                <table className="myTable w-full">
                    <thead>
                        <tr className="border-neutral-700 border-b-1 text-neutral-950 dark:text-white min-[424px]:text-lg min-[1350px]:text-xl text-md">
                            <th className="py-4 text-left">Exercises</th>
                            <th className="py-4 text-left">Reps</th>
                            <th className="py-4 text-left">Sets</th>
                        </tr>
                    </thead>
                    <tbody>{
                        workout.exercises.map((piece, index) =>
                            <tr key={index} className={index !== workout.exercises.length-1 ? "border-b-1 border-neutral-700" : ""}>
                                <td style={{ paddingRight: "1rem" }} className={"py-2 flex-row flex full-width items-center"}>{piece.name}{piece.optional ? <div className={"w-fit h-fit ml-2 rounded-xl border-1 border-sky-500 py-0.5 px-2 dark:bg-blue-500 dark:bg-opacity-5 text-sky-600 dark:text-sky-500 bg-blue-50 text-sm"}>OPTIONAL</div> : <></>}</td>
                                <td className={"py-2"}>{piece.reps === "FAILURE" ? <div className={"relative -left-2 w-fit h-fit rounded-xl border-1 border-red-500 py-0.5 px-2 dark:bg-red-500 dark:bg-opacity-5 text-red-600 dark:text-red-500 bg-red-50 text-sm"}>FAILURE</div> : piece.reps}</td>
                                <td className={"py-2"}>{piece.sets}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}