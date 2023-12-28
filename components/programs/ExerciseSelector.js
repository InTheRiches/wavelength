import React, {useEffect, useState} from "react";
import path from "path";

export default function ExerciseSelector({
                                             selectedExerciseDay = -1,
                                             setSelectedExercise,
                                             selectedExerciseIndex = -1,
                                             exercises,
                                             setClose
                                         }) {
    const [muscles, setMuscles] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [showMuscleFilter, setShowMuscleFilter] = useState(false);
    const [searchValue, setSearchValue] = useState("")
    const [exerciseTrigrams, setExerciseTrigrams] = useState({});

    // variable used to store which muscles are checked/unchecked; MUSCLES NOT INTERACTED WITH ARE UNDEFINED IN OBJECT
    const [muscleFilter, setMuscleFilter] = useState({});

    // generate all exercise trigrams on load to improve searching time; TODO possibly move to inside json?
    useEffect(() => {
        setExerciseTrigrams(exercises.reduce((obj, exercise) => ({...obj,[exercise.name]: generateTrigram(exercise.name)}), {}));
    }, [exercises])

    // get all muscles; TODO this doesn't look like it's getting muscles that do not appear in locations other than prrimaryMuscles[0]
    useEffect(() => {
        let muscleSet = new Set();
        exercises.forEach((exercise) => {
            if (muscleSet.has(exercise.primaryMuscles[0])) return;

            muscleSet.add(exercise.primaryMuscles[0]);
        })
        setMuscles(Array.from(muscleSet));

        console.log(muscleSet)
    }, []);

    function generateTrigram(text) {
        const words = text.toLowerCase().replace(/[^A-z0-9 ]/g, '').split(' ');

        return words.reduce((acc, word) => {
            const wordTrigrams = word.split("").reduce((acc, char, index) => {
                if (index < word.length - 2) {
                    return [...acc, word.slice(index, index + 3)];
                }

                return acc;
            }, []);

            return [...acc, ...wordTrigrams];
        }, []);
    }

    function filterExercises(exercises) {
        let exercisesToReturn = structuredClone(exercises);

        console.log(Object.entries(muscleFilter).filter(([exercise, enabled]) => enabled).length);

        if (Object.entries(muscleFilter).filter(([exercise, enabled]) => enabled).length > 0)
            exercisesToReturn = exercisesToReturn.filter(exercise => muscleFilter[exercise.primaryMuscles[0]]);

        exercisesToReturn = exercisesToReturn.filter(exercise => {
            const searchTrigrams = generateTrigram(searchValue);

            // make sure all chunks in the search term are in the current exercise trigram
            for (let i = 0; i < searchTrigrams.length; i++) {
                if (!exerciseTrigrams[exercise.name]?.includes(searchTrigrams[i]))
                    return false;
            }

            return true;
        });

        return exercisesToReturn;
    }

    return [
        <div className={"absolute w-full h-screen top-0 left-0 bg-gray-400/40 z-30 overflow-hidden"}></div>,
        <div
            className={"absolute z-50 max-h-[80vh] h-[80vh] bg-white rounded-xl left-0 right-0 top-24 pt-5 mx-auto w-full max-w-[1280px]"}>
            <div className={"flex flex-col items-center justify-center px-6"}>
                <div
                    className={"flex flex-col items-center justify-between w-full max-w-[1280px] py-4 bg-white px-4 border-b-1"}>
                    <h1 className={"font-bold text-3xl text-center mb-3"}>Select an Exercise</h1>
                    <div onClick={setClose} className={"absolute top-5 right-5 hover:cursor-pointer"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </div>
                    <div className={"w-full flex flex-row justify-between"}>
                        <input
                            value={searchValue}
                            onChange={e => setSearchValue(e.target.value)}
                            placeholder={"Search..."}
                            className="w-1/3 lg:flex border-1 border-slate-200/50 hover:border-cyan-accent hover:border-opacity-75 items-center text-sm leading-6 text-neutral-700 dark:text-slate-300 hover:dark:text-slate-50 hover:text-neutral-900 rounded-md shadow-sm py-1.5 pl-2 pr-3 transition duration-200 bg-transparent"
                        />
                        <div className={"w-fit"}>
                            <button onClick={() => setShowFilters(!showFilters)}
                                    className={"border-1 px-3 leading-6 py-1.5 rounded-md transition duration-200 " +
                                        "hover:border-cyan-accent/75 flex flex-row items-center justify-between " +
                                        `${showFilters && "bg-blue-50 border-sky-500 dark:bg-blue-500 dark:bg-opacity-5" || "border-slate-200/50"}`}>
                                Filters
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.25}
                                     stroke="currentColor"
                                     className={`w-5 h-5 transition-transform duration-100 mt-1 ml-2 ${
                                         !showFilters
                                             ? "-scale-y-100"
                                             : "scale-y-100"}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className={"w-full flex flex-row justify-between"}>
                        {showFilters && <div className={"w-fit"}>
                            <button onClick={() => setShowMuscleFilter(!showMuscleFilter)}
                                    className={"border-1 mt-3 px-3 leading-6 py-1.5 rounded-md transition duration-200 " +
                                        "hover:border-cyan-accent/75 " +
                                        `${showMuscleFilter && "bg-blue-50 border-sky-500 dark:bg-blue-500 dark:bg-opacity-5" || "border-slate-200/50"}`}>
                                By Muscle
                            </button>
                            {showMuscleFilter &&
                                <div
                                    className={"absolute mt-2 shadow-black shadow-xl h-96 bg-white border-slate-200 border-1 rounded-lg overflow-y-scroll px-1 pt-1"}>
                                    {muscles.length > 0 && muscles.map((exercise, index) => {
                                        return (
                                            <div
                                                key={"muscleFilter-" + exercise}
                                            >
                                                <input
                                                    className={"hidden peer"}
                                                    id={"muscleFilter-" + exercise}
                                                    type={"checkbox"}
                                                    checked={muscleFilter[exercise] ?? false}
                                                    onChange={e => setMuscleFilter({
                                                        ...muscleFilter,
                                                        [exercise]: e.target.checked
                                                    })}
                                                />
                                                <label
                                                    className={"block peer-checked:bg-blue-50 peer-checked:border-sky-500 peer-checked:dark:bg-blue-500 peer-checked:dark:bg-opacity-5 border-1 px-3 py-1.5 rounded-md mb-2 hover:bg-gray-100 hover:cursor-pointer text-center transition duration-200"}
                                                    htmlFor={"muscleFilter-" + exercise}
                                                >
                                                    {exercise}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            }
                        </div>}
                    </div>
                </div>
                <div className={"w-full overflow-y-scroll"}
                     style={{
                         maxHeight: `calc(80vh - 10.25rem${showFilters ? " - 3rem" : ""})`,
                     }}
                >
                    <table
                        className={"w-full table-border-spacing border-separate table-auto exerciseTable"}>
                        <thead>
                        <tr className="border-b border-gray-200 text-neutral-950 dark:text-white min-[424px]:text-lg min-[1350px]:text-xl text-md">
                            <th className={"flex flex-row w-1/4 text-left"}>
                                <div className={"w-2 h-full"}></div>
                                Exercise
                            </th>
                            <th className={"w-1/4 text-left"}>Mechanic</th>
                            <th className={"w-1/4 text-left"}>Muscles</th>
                            <th className={"w-1/4 text-left"}>Equipment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filterExercises(exercises).map((exercise, index) => {
                            return (
                                <tr onClick={() => {
                                    if (selectedExerciseIndex === -1 && selectedExerciseDay === -1) {
                                        setSelectedExercise(exercise);
                                    } else if (selectedExerciseIndex !== -1 && selectedExerciseDay === -1) {
                                        setSelectedExercise(selectedExerciseIndex, exercise)
                                    } else if (selectedExerciseDay !== -1 && selectedExerciseIndex === -1) {
                                        setSelectedExercise(selectedExerciseIndex, exercise)
                                    } else {
                                        setSelectedExercise(selectedExerciseIndex, selectedExerciseDay, exercise)
                                    }
                                }}
                                    key={index}
                                    className={"border-1 border-gray-200 rounded-xl mb-2 hover:bg-gray-100 hover:cursor-pointer"}>
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
        </div>
    ]
}