import React, {useEffect, useState} from "react";
import Navigation from "@/components/primary/Navigation";
import path from "path";
import Footer from "@/components/Footer";
import {ScrollButton, scrollPageToContent} from "@/components/ContentScroll";
import useDarkMode from "@/components/useDarkMode/use-dark-mode";
import {loginUser} from "@/components/backend/Authentication";
import exerciseJson from "@/data/exercises_new.json";
import ExerciseSelector from "@/components/programs/ExerciseSelector";

export default function ProgramCreator({ exercises }) {
    const [selectedSplit, setSelectedSplit] = useState("")
    const [page, setPage] = useState(0)
    const [workout, setWorkout] = useState({}); // Store workout data

    const {value: isDarkMode, toggle: toggleDarkMode} = useDarkMode();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const steps = [
        "Select Split",
        "Build Workout",
        "Finish Program"
    ]

    const handleNext = () => {
        if (page === 0) {
            if (selectedSplit === "") return;

            const daysInSplit = determineDaysInSplit(selectedSplit); // Function to determine days based on split
            // initialize workout with the days in split
            setWorkout(new Array(daysInSplit).fill(null).map(() => [{ exercise: '', sets: null, reps: null }, { exercise: '', sets: null, reps: null }, { exercise: '', sets: null, reps: null }]));

            setPage(1);
        } else {
            // Workout building is complete
            // You may want to perform some action here, like saving the workout
            console.log('Workout Building Complete!', workout);
        }
    }

    const handleLast = () => {
        if (page === 1) {
            setPage(0);
        }
    }

    return (
        <div className={"flex flex-col items-center w-screen min-h-screen bg-slate-50 dark:bg-neutral-900"}>
            <Navigation/>
            <div className={"flex flex-col justify-between items-center w-full"}>
                <div className={"flex flex-row justify-between items-start w-full h-full mt-64 px-10 text-neutral-900 dark:text-slate-50 max-w-screen-3xl mb-24"}>
                    <div className='h-full w-1/4 overflow-y-auto flex justify-start flex-col mt-16'>
                        <h2 className={"text-2xl font-bold mb-3 w-full text-left"}>Program Completion</h2>
                        <div className={"flex flex-col w-fit"}>
                            {steps.map((step, index) => (
                                <a key={index}
                                   className={`${page > index ? "text-neutral-900" : "text-zinc-400"} duration-200 transition-all font-bold text-xl px-4 py-3 rounded-lg items-center inline-flex hover:bg-gray-100 hover:cursor-pointer`}>
                                    {page > index ?
                                        <svg className="w-5 h-5 mr-3 text-cyan-accent"
                                             xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                  clipRule="evenodd"></path>
                                        </svg> :
                                        <svg className="w-5 h-5 mr-3 text-zinc-300" xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>}
                                    {step}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={"mt-56 flex items-center"}>
                        <button onClick={() => handleLast()}
                                className={(page > 0 ? "bg-cyan-accent hover:bg-cyan-accent-light" : "bg-gray-700 hover:bg-gray-600") + " px-3 transition-all hover:shadow-button ease-in duration-200 hover:scale-105 h-12 rounded-full text-white flex items-center mr-16"}>
                            {/* TODO IMPLEMENT THIS <span className={"ml-1 min-[424px]:text-lg text-base"}>{content[keys.indexOf(activeTopic) + 1]}</span>*/}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                    </div>
                    <div className={"flex flex-row items-center justify-center w-3/4 h-full"}>
                        {page === 0 &&
                            <SplitSelector
                                selectedSplit={selectedSplit}
                                setSelectedSplit={setSelectedSplit}/>
                        }

                        {page === 1 && (
                            <WorkoutBuilder
                                exercises={exercises}
                                selectedSplit={selectedSplit}
                                workout={workout}
                                setWorkout={setWorkout}
                            />
                        )}
                    </div>
                    <div className={"mt-56 flex items-center"}>
                        <button onClick={() => handleNext()}
                                className={((page === 0 && selectedSplit === "") ? "bg-gray-700 hover:bg-gray-600 " : "bg-cyan-accent hover:bg-cyan-accent-light ") + "px-3 transition-all hover:shadow-button ease-in duration-200 hover:scale-105 h-12 rounded-full text-white flex items-center ml-16"}>
                            {/* TODO IMPLEMENT THIS <span className={"ml-1 min-[424px]:text-lg text-base"}>{content[keys.indexOf(activeTopic) + 1]}</span>*/}
                            <svg className="w-6 h-6 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* TODO MAKE FOOTER ABSOLUTE SO THAT NOT MATTER SIZE OF SCREEN CONTENT IT IS ALWAYS AT BOTTOM */}
                <Footer/>
            </div>
        </div>
    )
}

function Split({selectedSplit, setSelectedSplit, title, description, id}) {
    return (<div onClick={() => {
        if (selectedSplit === id)
            setSelectedSplit("")
        else
            setSelectedSplit(id)
    }
    } className={"border-1 rounded-xl px-6 py-4 transform transition duration-200 " +
        "hover:cursor-pointer hover:scale-105 hover:border-cyan-accent " +
        `${selectedSplit === id ? "bg-blue-50 border-sky-500 dark:bg-blue-500 dark:bg-opacity-5" : "bg-white border-neutral-900 dark:bg-neutral-800"}`}>

        <h2 className={"font-bold w-full mb-2 text-1xl"}>{title}</h2>
        <p className={"min-[424px]:text-md min-[1350px]:text-lg text-base"}>{description}</p>
        {selectedSplit === id && <div className={"absolute -right-3 -top-3"}>
            <div className={"bg-white rounded-full w-6 h-6 absolute top-[4px] right-[4px] -z-10"}></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-blue-400 w-8 h-8">
                <path className={"z-20"} fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"/>
            </svg>
        </div>}
    </div>);
}

function SplitSelector({selectedSplit, setSelectedSplit}) {
    return (
        <div className={"w-full h-full flex flex-col items-center"}>
            <h1 className={"text-3xl font-bold mb-10 w-full text-left "}>What split would you like?</h1>
            <div className={"grid grid-cols-3 gap-12"}>
                <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Push Pull Legs"}
                       description={"You would run this as a push day, pull day, and then a leg day, one of the most common splits."}
                       id={"push-pull-legs"}/>
                <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Upper Lower"}
                       description={"You would run this as a upper body day, then a lower body day."} id={"ul"}/>
                <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit}
                       title={"Push Pull Legs x Upper Lower"}
                       description={"You would run this as a push day, pull day, leg day, upper body day, lower body day."}
                       id={"pplxul"}/>
                <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Full Body Split"}
                       description={"This split works every muscle every workout. Should not be ran consistently."}
                       id={"full"}/>
                <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Four Day Split"}
                       description={"You would run this as a day 1, day 2, day 3, and then day 4."} id={"four-day"}/>
                <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Five Day Split"}
                       description={"Very similar to the four day split, ran as a day 1, day 2, day 3, and then day 4."}
                       id={"five-day"}/>
            </div>
        </div>
    )
}

function determineDaysInSplit(selectedSplit) {
    switch (selectedSplit) {
        case 'push-pull-legs':
            return 3; // Push, Pull, Legs
        case 'ul':
            return 2; // Upper, Lower
        case 'pplxul':
            return 5; // Push, Pull, Legs, Upper, Lower
        case 'full':
            return 1; // Full Body
        case 'four-day':
            return 4; // Day 1, Day 2, Day 3, Day 4
        case 'five-day':
            return 5; // Day 1, Day 2, Day 3, Day 4, Day 5
        default:
            return 0; // Default to 0 days if split is not recognized
    }
}

function WorkoutBuilder({exercises, selectedSplit, workout, setWorkout}) {
    const [selectedExerciseIndex, setSelectedExerciseIndex] = useState(null);
    const [selectedExerciseDay, setSelectedExerciseDay] = useState(null);

    const setExercises = (exercises, currentDay) => {
        setWorkout({...workout, [currentDay]: exercises});
    }

    const setSelectedExercise = (index, currentDay, exercise) => {
        const updatedExercises = [...workout[currentDay]];
        updatedExercises[index].exercise = exercise;

        setExercises(updatedExercises, currentDay);

        setSelectedExerciseIndex(null);
        setSelectedExerciseDay(null);
    }

    const showExerciseSelector = (index, currentDay) => {
        setSelectedExerciseIndex(index);
        setSelectedExerciseDay(currentDay);
    }

    return (
        <div className={"w-full h-full flex flex-col items-center"}>
            <h1 className={"text-3xl font-bold mb-10 w-full text-left"}>Design Your Workout</h1>
            <div className={"grid grid-cols-2 gap-10 w-full"}>
                {Object.entries(workout).map(([key, value]) =>
                    <ExerciseInput key={key}
                                   showExerciseSelector={showExerciseSelector}
                                   exercisesForDay={value}
                                   currentDay={key}
                                   exercises={exercises}
                                   setExercisesForDay={setExercises}/>
                )}
                {selectedExerciseIndex !== null &&
                    <ExerciseSelector selectedExerciseDay={selectedExerciseDay}
                                      setSelectedExercise={setSelectedExercise}
                                      exercises={exercises}
                                      selectedExerciseIndex={selectedExerciseIndex}
                                      setClose={() => setSelectedExerciseIndex(null)}
                        ></ExerciseSelector>}
            </div>
        </div>
    )
}

function ExerciseInput({exercisesForDay, setExercisesForDay, exercises, currentDay, showExerciseSelector}) {
    const [error, setError] = useState(true);
    const [showNewExercise, setShowNewExercise] = useState(false);

    const handleAddExercise = () => {
        if (exercisesForDay.length >= 10) return;
        setExercisesForDay([...exercisesForDay, {exercise: '', sets: null, reps: null}], currentDay);
    }

    const handleMinusExercise = () => {
        if (exercisesForDay.length > 1) {
            const updatedExercises = [...exercisesForDay];
            updatedExercises.pop();
            setExercisesForDay(updatedExercises, currentDay);
        }
    }

    const setSets = (index, sets) => {
        const updatedExercises = [...exercisesForDay];
        updatedExercises[index].sets = sets;
        setExercisesForDay(updatedExercises, currentDay);
    }

    const setReps = (index, reps) => {
        const updatedExercises = [...exercisesForDay];
        updatedExercises[index].reps = reps;
        setExercisesForDay(updatedExercises, currentDay);
    }

    const setSelectedExercise = (exercise) => {
        const updatedExercises = [...exercisesForDay];
        updatedExercises.push({ exercise: exercise, sets: null, reps: null })
        setExercisesForDay(updatedExercises, currentDay);
        setShowNewExercise(false)
    }

    return (
        <div className={"flex flex-col justify-center w-full"}>
            <h1 className={"text-3xl font-bold mb-5 text-left"}>Day {parseInt(currentDay) + 1}</h1>
            <div className={"border-1 border-neutral-900 rounded-lg px-2 py-2 mb-5"}>
                {exercisesForDay.map((e, index) => (
                    <div key={index}
                         className={`flex flex-row justify-around ${index > 0 && "border-t-1 border-neutral-900 mt-2 pt-1"}`}>
                            <button onClick={() => showExerciseSelector(index, currentDay)} className={`rounded-lg bg-white px-2 py-1 overflow-wrap w-1/3 border-1 ${e.exercise === "" ? "border-red-400 hover:bg-red-100" : "border-gray-300 hover:bg-gray-200"} duration-200 transition  ${index > 0 && "mt-1"}`}>
                                {e.exercise === '' ? 'Select Exercise' : e.exercise.name}
                            </button>
                        <input
                            type="number"
                            value={e.reps || ''}
                            onChange={(e) => setReps(index, e.target.value)}
                            placeholder="Reps"
                            className={`border-1 ${error && e.reps === null ? "border-red-400" : "border-gray-300"} rounded-lg focus:ring-0 px-2 py-1 ml-2 w-1/3 ${index > 0 && "mt-1"}`}
                        />
                        <input
                            type="number"
                            value={e.sets || ''}
                            onChange={(e) => setSets(index, e.target.value)}
                            placeholder="Sets"
                            className={`border-1 ${error && e.sets === null ? "border-red-400" : "border-gray-300"} rounded-lg focus:ring-0 px-2 py-1 ml-2 w-1/3 ${index > 0 && "mt-1"}`}
                        />
                    </div>
                ))}
            </div>
            <div className={"flex flex-row justify-center w-full"}>
                {showNewExercise && <ExerciseSelector setSelectedExercise={setSelectedExercise}
                                                      exercises={exercises}
                                                      setClose={() => setShowNewExercise(false)}></ExerciseSelector>}
                <button onClick={() => setShowNewExercise(true)} className={(exercisesForDay.length < 10 ? "bg-cyan-accent hover:bg-cyan-accent-light" : "bg-gray-700 hover:bg-gray-600") + " p-2 bg-cyan-accent hover:bg-cyan-accent-light transition-all duration-200 text-white rounded-full"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
                <button onClick={handleMinusExercise} className={(exercisesForDay.length > 1 ? "bg-cyan-accent hover:bg-cyan-accent-light" : "bg-gray-700 hover:bg-gray-600") + " ml-4 p-2 transition-all duration-200 text-white rounded-full"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            exercises: exerciseJson.exercises
        }
    }
}