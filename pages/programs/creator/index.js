import React, {useState} from "react";
import Navigation from "@/components/primary/Navigation";
import path from "path";

export default function ProgramCreator({}) {
    const [selectedSplit, setSelectedSplit] = useState("")
    const [page, setPage] = useState(0)

    const [workout, setWorkout] = useState({}); // Store workout data

    const handleSplitSelection = (split) => {
        setPage(1); // Move to the next page for workout builder
    };

    return (
        <div className={"flex flex-col items-center w-full h-screen"}>
            <Navigation/>

            {page === 0 &&
                <SplitSelector
                    selectedSplit={selectedSplit}
                    setSelectedSplit={setSelectedSplit}
                    handleSplitSelection={handleSplitSelection}/>
            }

            {page === 1 && (
                <WorkoutBuilder
                    selectedSplit={selectedSplit}
                    workout={workout}
                    setWorkout={setWorkout}
                />
            )}

        </div>
    )
}

function Split({ selectedSplit, setSelectedSplit, title, description, id }) {
    return (<div onClick={() => {
        if (selectedSplit === id)
            setSelectedSplit("")
        else
            setSelectedSplit(id)}
    } className={"border-1 rounded-xl px-6 py-4 transform transition duration-200 " +
        "hover:cursor-pointer hover:scale-105 hover:border-cyan-accent " +
        `${selectedSplit === id ? "bg-blue-50 border-sky-500" : "bg-white border-neutral-900"}`}>

        <h2 className={"font-bold w-full mb-2 text-1xl"}>{title}</h2>
        <p className={"min-[424px]:text-md min-[1350px]:text-lg text-base"}>{description}</p>
        {selectedSplit === id && <div className={"absolute -right-3 -top-3"}>
            <div className={"bg-white rounded-full w-6 h-6 absolute top-[4px] right-[4px] -z-10"}></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-blue-400 w-8 h-8">
                <path className={"z-20"} fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
        </div>}
    </div>);
}

function SplitSelector({ selectedSplit, setSelectedSplit, handleSplitSelection }) {
    return (
        <div className={"flex flex-row justify-center items-center w-full h-fit max-w-screen-2xl px-10 mt-48"}>
            <button onClick={() => {
            }} className={"bg-gray-700 hover:bg-gray-600 px-3 transition-all hover:shadow-button ease-in duration-200 hover:scale-105 h-12 rounded-full text-white flex items-center mr-16"}>
                {/* TODO IMPLEMENT THIS <span className={"ml-1 min-[424px]:text-lg text-base"}>{content[keys.indexOf(activeTopic) + 1]}</span>*/}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
            </button>

            <div className={"w-full h-full flex flex-col items-center"}>
                <h1 className={"text-3xl font-bold mb-10 w-full text-left"}>What split would you like?</h1>
                <div className={"grid grid-cols-3 gap-12"}>
                    <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Push Pull Legs"} description={"You would run this as a push day, pull day, and then a leg day, one of the most common splits."} id={"push-pull-legs"}/>
                    <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Upper Lower"} description={"You would run this as a upper body day, then a lower body day."} id={"ul"}/>
                    <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Push Pull Legs x Upper Lower"} description={"You would run this as a push day, pull day, leg day, upper body day, lower body day."} id={"pplxul"}/>
                    <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Full Body Split"} description={"This split works every muscle every workout. Should not be ran consistently."} id={"full"}/>
                    <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Four Day Split"} description={"You would run this as a day 1, day 2, day 3, and then day 4."} id={"four-day"}/>
                    <Split selectedSplit={selectedSplit} setSelectedSplit={setSelectedSplit} title={"Five Day Split"} description={"Very similar to the four day split, ran as a day 1, day 2, day 3, and then day 4."} id={"five-day"}/>
                </div>
            </div>

            <button onClick={() => handleSplitSelection()} className={(true ? "bg-cyan-accent hover:bg-cyan-accent-light " : "bg-gray-700 hover:bg-gray-600 ") + "px-3 transition-all hover:shadow-button ease-in duration-200 hover:scale-105 h-12 rounded-full text-white flex items-center ml-16"}>
                {/* TODO IMPLEMENT THIS <span className={"ml-1 min-[424px]:text-lg text-base"}>{content[keys.indexOf(activeTopic) + 1]}</span>*/}
                <svg className="w-6 h-6 -scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
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

function WorkoutBuilder({ selectedSplit, workout, setWorkout }) {
    const [currentDay, setCurrentDay] = useState(0);
    const [exercises, setExercises] = useState([{ exercise: '', sets: null, reps: null }]);

    const daysInSplit = determineDaysInSplit(selectedSplit); // Function to determine days based on split

    const moveNextDay = () => {
        if (currentDay + 1 < daysInSplit) {
            setWorkout({ ...workout, [currentDay]: exercises });
            console.dir(workout)

            setExercises([{ exercise: '', sets: null, reps: null }])

            setCurrentDay(currentDay + 1);
        } else {
            // Workout building is complete
            // You may want to perform some action here, like saving the workout
            console.log('Workout Building Complete!', workout);
        }
    };

    const moveLastDay = () => {
        if (currentDay > 0) {
            setWorkout({ ...workout, [currentDay]: exercises });

            // get yesterday's exercises
            console.log(workout[currentDay - 1]);
            setExercises(workout[currentDay-1] || [{ exercise: '', sets: null, reps: null }])
            console.log(exercises)

            setCurrentDay(currentDay - 1);

        }
    };

    return (
        <div className={'workout-builder'}>
            <h1>Day {currentDay+1}</h1>
            <ExerciseInput exercises={exercises} setExercises={setExercises} />
            <button onClick={moveLastDay}>Last Day</button>
            <button onClick={moveNextDay}>Next Day</button>
        </div>
    );
}

function ExerciseInput({ exercises, setExercises }) {
    const [error, setError] = useState(true);

    const handleAddExercise = () => {
        setExercises([...exercises, { exercise: '', sets: null, reps: null }]);
    }

    const setExercise = (index, exercise) => {
        const updatedExercises = [...exercises];
        updatedExercises[index].exercise = exercise;

        console.log(updatedExercises[index])
        setExercises(updatedExercises);
    }

    const setSets = (index, sets) => {
        const updatedExercises = [...exercises];
        updatedExercises[index].sets = sets;
        setExercises(updatedExercises);
    }

    const setReps = (index, reps) => {
        const updatedExercises = [...exercises];
        updatedExercises[index].reps = reps;
        setExercises(updatedExercises);
    }

    return (
        <div className={"flex flex-col items-center"}>
            <div className={"border-1 border-neutral-900 rounded-lg px-2 py-2"}>
                {exercises.map((e, index) => (
                    <div key={index} className={`exercise-input ${index > 0 && "border-t-1 border-neutral-900 mt-2 pt-1"}`}>
                        <input
                            type="text"
                            value={e.exercise || ''}
                            onChange={(e) => setExercise(index, e.target.value)}
                            placeholder="Exercise"
                            className={`${error && e.exercise.length < 1 ? "border-1 border-red-400" : "border-none"} rounded-lg focus:ring-0 =px-2 py-1 ${index > 0 && "mt-1"}`}
                        />
                        <input
                            type="number"
                            value={e.reps || ''}
                            onChange={(e) => setReps(index, e.target.value)}
                            placeholder="Reps"
                            className={`${error && e.reps === null ? "border-1 border-red-400" : "border-none"} rounded-lg focus:ring-0 px-2 py-1 ml-2`}
                        />
                        <input
                            type="number"
                            value={e.sets || ''}
                            onChange={(e) => setSets(index, e.target.value)}
                            placeholder="Sets"
                            className={`${error && e.sets === null ? "border-1 border-red-400" : "border-none"} rounded-lg focus:ring-0 px-2 py-1 ml-2`}
                        />
                    </div>
                ))}
            </div>
            <button onClick={handleAddExercise}>Add Exercise</button>
        </div>
    );
}