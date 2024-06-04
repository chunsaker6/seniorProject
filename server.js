const express = require('express')
const session = require('express-session')

const model = require('./model')
const cors = require('cors');


const app = express()
app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: "6r6t8puie55689uihugfrw4jbuyyghj76655tt32wserted",
    saveUninitialized: true,
    resave: false,
}));
app.use(express.static("public"));


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

// SHOULDER WORKOUT DATA SECTION
app.get("/shoulder_workout_data", function(request, response){
    model.ShoulderWorkoutData.find().then((maxs) => {
        //  response.set("Access-Control-Allow-Origin", "*")
         response.json(maxs)
     });
});
app.post("/shoulder_workout_data", function(request, response){
    console.log("request_body:", request.body);
    const newShoulderWorkoutData = new model.ShoulderWorkoutData({
        dateTime: request.body.dateTime,
        //
        shoulderWarmupTitle: request.body.shoulderWarmupTitle,
        shoulderWarmupWeight: request.body.shoulderWarmupWeight,
        setsWarmupShoulderAccomplished: request.body.setsWarmupShoulderAccomplished,
        repsWarmupShoulderAccomplished: request.body.repsWarmupShoulderAccomplished,
        //
        newRearDeltTitle: request.body.newRearDeltTitle,
        newRearDeltWeight: request.body.newRearDeltWeight,
        newSetsRearDeltAccomplished: request.body.newSetsRearDeltAccomplished,
        newRepsRearDeltAccomplished: request.body.newRepsRearDeltAccomplished,
        //
        newShouldersAuxOneTitle: request.body.newShouldersAuxOneTitle,
        newAuxOneWeight: request.body.newAuxOneWeight,
        newSetsAuxOneAccomplished: request.body.newSetsAuxOneAccomplished,
        newRepsAuxOneAccomplished: request.body.newRepsAuxOneAccomplished,
        //
        shoulderPressTitle: request.body.shoulderPressTitle,
        newShoulderPressWeight: request.body.newShoulderPressWeight,
        newSetsShoulderPressAccomplished: request.body.newSetsShoulderPressAccomplished,
        newRepsShoulderPressAccomplished: request.body.newRepsShoulderPressAccomplished,
        //
        newShouldersAuxTwoTitle: request.body.newShouldersAuxTwoTitle,
        newAuxTwoWeight: request.body.newAuxTwoWeight,
        newSetsAuxTwoAccomplished: request.body.newSetsAuxTwoAccomplished,
        newRepsAuxTwoAccomplished: request.body.newRepsAuxTwoAccomplished,
    })
    newShoulderWorkoutData.save().then(() => {
        // response.set("Access-Control-Allow-Origin", "*")
        response.status(201).send("Created")

    });
});
// delete shoulders max member
app.delete("/shoulder_workout_data/:workoutId", function(request, response){
    // Access for Vue.js
    console.log("Deleting workout data with id:", request.params.workoutId);

    // Use Mongoose's findOneAndDelete to find and delete the food item
    model.ShoulderWorkoutData.findOneAndDelete({ _id: request.params.workoutId })
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

// end of shoulders
// LEGS WORKOUT 

app.get("/leg_workout_data", function(request, response){
    model.LegsWorkoutData.find().then((maxs) => {
        //  response.set("Access-Control-Allow-Origin", "*")
         response.json(maxs)
     });
});
app.post("/leg_workout_data", function(request, response){
    console.log("request_body:", request.body);
    const newLegWorkoutData = new model.LegsWorkoutData({
        dateTime: request.body.dateTime,
        //
        legWarmupTitle: request.body.legWarmupTitle,
        legWarmupWeight: request.body.legWarmupWeight,
        setsWarmupLegAccomplished: request.body.setsWarmupLegAccomplished,
        repsWarmupLegAccomplished: request.body.repsWarmupLegAccomplished,
        //
        newCalvesTitle: request.body.newCalvesTitle,
        newCalvesWeight: request.body.newCalvesWeight,
        newSetsCalvesAccomplished: request.body.newSetsCalvesAccomplished,
        newRepsCalvesAccomplished: request.body.newRepsCalvesAccomplished,
        //
        newHamCompoundTitle: request.body.newHamCompoundTitle,
        newHamCompoundWeight: request.body.newHamCompoundWeight,
        newSetsHamCompoundAccomplished: request.body.newSetsHamCompoundAccomplished,
        newRepsHamCompoundAccomplished: request.body.newRepsHamCompoundAccomplished,
        //
        auxQuadTitle: request.body.auxQuadTitle,
        newAuxQuadWeight: request.body.newAuxQuadWeight,
        newSetsAuxQuadAccomplished: request.body.newSetsAuxQuadAccomplished,
        newRepsAuxQuadAccomplished: request.body.newRepsAuxQuadAccomplished,
        //
        hamAuxTitle: request.body.hamAuxTitle,
        newHamAuxWeight: request.body.newHamAuxWeight,
        newSetsHamAuxAccomplished: request.body.newSetsHamAuxAccomplished,
        newRepsHamAuxAccomplished: request.body.newRepsHamAuxAccomplished,
    })
    newLegWorkoutData.save().then(() => {
        // response.set("Access-Control-Allow-Origin", "*")
        response.status(201).send("Created")

    });
});
// delete shoulders max member
app.delete("/leg_workout_data/:workoutId", function(request, response){
    // Access for Vue.js
    console.log("Deleting workout data with id:", request.params.workoutId);

    // Use Mongoose's findOneAndDelete to find and delete the food item
    model.LegsWorkoutData.findOneAndDelete({ _id: request.params.workoutId })
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

// END OF LEGS
// NEW SECTION
// BACK

app.get("/back_workout_data", function(request, response){
    model.BackWorkoutData.find().then((maxs) => {
        //  response.set("Access-Control-Allow-Origin", "*")
         response.json(maxs)
     });
});
app.post("/back_workout_data", function(request, response){
    console.log("request_body:", request.body);
    const newBackWorkoutData = new model.BackWorkoutData({
        dateTime: request.body.dateTime,
        //
        backTitle: request.body.backTitle,
        backWarmupWeight: request.body.backWarmupWeight,
        setsWarmupBackAccomplished: request.body.setsWarmupBackAccomplished,
        repsWarmupBackAccomplished: request.body.repsWarmupBackAccomplished,
        //
        newPulldownTitle: request.body.newPulldownTitle,
        newPulldownWeight: request.body.newPulldownWeight,
        newSetsPulldownAccomplished: request.body.newSetsPulldownAccomplished,
        newRepsPulldownAccomplished: request.body.newRepsPulldownAccomplished,
        //
        newRowTitle: request.body.newRowTitle,
        newRowWeight: request.body.newRowWeight,
        newSetsRowAccomplished: request.body.newSetsRowAccomplished,
        newRepsRowAccomplished: request.body.newRepsRowAccomplished,
        //
        pulldownTwoTitle: request.body.pulldownTwoTitle,
        newPulldownTwoWeight: request.body.newPulldownTwoWeight,
        newSetsPulldownTwoAccomplished: request.body.newSetsPulldownTwoAccomplished,
        newRepsPulldownTwoAccomplished: request.body.newRepsPulldownTwoAccomplished,
        //
        trapsTitle: request.body.trapsTitle,
        newTrapsWeight: request.body.newTrapsWeight,
        newSetsTrapsAccomplished: request.body.newSetsTrapsAccomplished,
        newRepsTrapsAccomplished: request.body.newRepsTrapsAccomplished,
        //
        newBicepsTitle: request.body.newBicepsTitle,
        newBicepsWeight: request.body.newBicepsWeight,
        newSetsBicepsAccomplished: request.body.newSetsBicepsAccomplished,
        newRepsBicepsAccomplished: request.body.newRepsBicepsAccomplished,
    })
    newBackWorkoutData.save().then(() => {
        // response.set("Access-Control-Allow-Origin", "*")
        response.status(201).send("Created")

    });
});
// delete shoulders max member
app.delete("/back_workout_data/:workoutId", function(request, response){
    // Access for Vue.js
    console.log("Deleting workout data with id:", request.params.workoutId);

    // Use Mongoose's findOneAndDelete to find and delete the food item
    model.BackWorkoutData.findOneAndDelete({ _id: request.params.workoutId })
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
// END OF BACK


// create new user member
app.post("/users", function(request, response){
    //access for vue.js
    console.log("request_body:", request.body);
    const newUser = new model.User({
         firstName: request.body.firstName,
         lastName: request.body.lastName,
         email: request.body.email
    })
    newUser.setEncryptedPassword(request.body.plainPassword).then(function(){
        // at this time the password has been encrypted and set on the user
        newUser.save().then(() => {
            request.session.userId = newUser._id
            console.log("new user id", request.session.userId)
            response.status(201).send("Created")
    
        }).catch((error) => {
            if (error.code == 11000){
                response.status(422).json({email: "User with email already exists."});
            }else if (error.errors){
                var errorMessages = {};
                for (var fieldName in error.errors){
                    errorMessages[fieldName] = error.errors[fieldName].message;
                }
    
                response.status(422).json(errorMessages);
    
            }
            else{
                console.error("Unknown error")
                response.status(500).send("Unknown error creating food.")
            }
    
        });

    })   
    //status code 201   
})

// delete session
app.delete("/session", function(request, response){
    request.session.userId = null;
    console.log("session user id", request.session.userId)
    response.status(200).send("Logged Out.")
})

//retrieve session
app.get("/session", (request, response) =>{
    console.log("session:", request.session)
    console.log("session user id", request.session.userId)
    if (request.session && request.session.userId){
        response.status(201).json("Autheticated");
    }else{
        response.status(401).json("Not Autheticated");
    }
    //console.log("user get session info", request.user)
    
    
    // response.status(201).send("Autheticated")
})
// authentification: create session
app.post("/session", function(request, response){
    // 1. get user credentials: request.body.email & request.body.plainPassword
    // 2. find user database using given email.
    model.User.findOne({email: request.body.loginEmail}).then(function(user){
        if (user){
            user.verifyEncryptedPassword(request.body.loginPassword).then(function (match){
                if(match){
                    request.session.userId = user._id
                    console.log("post session user id", request.session.userId)
                    console.log("post session", request.session)
                    // TODO: save user ID into session data
                    response.status(201).send("Authenticated")
                    //respond with 201
                }else {
                    response.status(401).send("Not Authenticated")
                }
            });
        }else{
            response.status(401).send("Not Authenticated")
        }
    });
    // 3. if found: verify given password against encryptedPassword from DB
    //   4. if the password is verified respond with 201
            //else: respond with 404
    //  else: respond with 401
});

app.listen(8080, function(){
    console.log("Server is running.. ")
})