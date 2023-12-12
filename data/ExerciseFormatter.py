# loop through exercises.json and make all the values capital on the first letter
# and lowercase the rest of the letters

import json

with open('exercises.json', 'r', encoding="utf8") as f:
    data = json.load(f)

    print(data)

    for exercise in data['exercises']:
        exercise['name'] = exercise['name'].capitalize()
        exercise['force'] = exercise['force'].capitalize()
        exercise['level'] = exercise['level'].capitalize()
        exercise['mechanic'] = exercise['mechanic'].capitalize()
        exercise['equipment'] = exercise['equipment'].capitalize()

        # muscles is a array
        for muscle in exercise['primaryMuscles']:
            muscle = muscle.capitalize()

        for muscle_secondary in exercise['secondaryMuscles']:
            muscle_secondary = muscle_secondary.capitalize()

        exercise['category'] = exercise['category'].capitalize()

    # save the new data to a new file
    with open('exercises_new.json', 'w') as f:
        json.dump(data, f, indent=4)

    print('Done!')
