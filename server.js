const express = require('express')
const model = require('./model')
const cors = require('cors');


const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: false }))


// CHEST WORKOUT DATA SECTION
app.get("/chest_workout_data", function(request, response){
    model.ChestWorkoutData.find().then((maxs) => {
        //  response.set("Access-Control-Allow-Origin", "*")
         response.json(maxs)
     });
});
app.post("/chest_workout_data", function(request, response){
    console.log("request_body:", request.body);
    const newChestWorkoutData = new model.ChestWorkoutData({
        dateTime: request.body.dateTime,
        //
        chestWarmupTitle: request.body.chestWarmupTitle,
        workoutWarmupWeight: request.body.workoutWarmupWeight,
        setsWarmupAccomplished: request.body.setsWarmupAccomplished,
        repsWarmupAccomplished: request.body.repsWarmupAccomplished,
        //
        newChestPressTitle: request.body.newChestPressTitle,
        newPressOneWeight: request.body.newPressOneWeight,
        newSetsPressOneAccomplished: request.body.newSetsPressOneAccomplished,
        newRepsPressOneAccomplished: request.body.newRepsPressOneAccomplished,
        //
        newChestFlyOneTitle: request.body.newChestFlyOneTitle,
        newFlyOneWeight: request.body.newFlyOneWeight,
        newSetsFlyOneAccomplished: request.body.newSetsFlyOneAccomplished,
        newRepsFlyOneAccomplished: request.body.newRepsFlyOneAccomplished,
        //
        chestPressTwoTitle: request.body.chestPressTwoTitle,
        newPressTwoWeight: request.body.newPressTwoWeight,
        newSetsPressTwoAccomplished: request.body.newSetsPressTwoAccomplished,
        newRepsPressTwoAccomplished: request.body.newRepsPressTwoAccomplished,
        //
        newFlyTwoTitle: request.body.newFlyTwoTitle,
        newFlyTwoWeight: request.body.newFlyTwoWeight,
        newSetsFlyTwoAccomplished: request.body.newSetsFlyTwoAccomplished,
        newRepsFlyTwoAccomplished: request.body.newRepsFlyTwoAccomplished,
        //
        newTricepsTitle: request.body.newTricepsTitle,
        newTricepsWeight: request.body.newTricepsWeight,
        newSetsTricepsAccomplished: request.body.newSetsTricepsAccomplished,
        newRepsTricepsAccomplished: request.body.newRepsTricepsAccomplished,
    })
    newChestWorkoutData.save().then(() => {
        // response.set("Access-Control-Allow-Origin", "*")
        response.status(201).send("Created")

    });
});
// delete chest max member
app.delete("/chest_workout_data/:workoutId", function(request, response){
    // Access for Vue.js
    console.log("Deleting workout data with id:", request.params.workoutId);

    // Use Mongoose's findOneAndDelete to find and delete the food item
    model.ChestWorkoutData.findOneAndDelete({ _id: request.params.workoutId })
        .then((deletedWorkout) => {
            if (deletedWorkout) {
                // response.set("Access-Control-Allow-Origin", "*");
                response.json({ message: 'Max deleted successfully' });
            } else {
                response.sendStatus(404); // If food item not found
            }
        })
        .catch((error) => {
            console.error("Failed to delete workout data with ID:", request.params.workoutId);
            response.sendStatus(404);
        });
});

// end of chest

app.get("/workouts", function(request, response){
    model.Shred.find().then((shreds) => {
        //  response.set("Access-Control-Allow-Origin", "*")
         response.json(shreds)
     })
})
app.post("/workouts", function(request, response){
    console.log("request_body:", request.body);
    const newShred = new model.Shred({
         shred: request.body.shred,
    })
    newShred.save().then(() => {
        // response.set("Access-Control-Allow-Origin", "*")
        response.status(201).send("Created")

    })
})
app.listen(8080, function(){
    console.log("Server is running.. ")
})