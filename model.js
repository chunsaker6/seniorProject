const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chunsaker-SE4200:tE5gDZ6YlZKZcnHg@cluster0.6txnlrl.mongodb.net/masterpiece?retryWrites=true&w=majority');

const Shred = mongoose.model('Shred', { 
    shred: String
});



const ChestWorkoutDataSchema = new mongoose.Schema({
    dateTime: {
        type: String,
        // required: [true, "Title for Warmup Required."]
    },
    chestWarmupTitle: {
        type: String,
        // required: [true, "Title for Warmup Required."]
    },
    workoutWarmupWeight: {
        type: Number,
        // required: [true, "Workout Weight for Warmup Required."]
    },
    setsWarmupAccomplished: {
        type: Number,
        // required: [true, "Sets for Warmup Required."]
    },
    repsWarmupAccomplished: {
        type: Number,
        // required: [true, "Reps for Warmup Required."]
    },
    //
    newChestPressTitle: {
        type: String,
        // required: [true, "Title for Press One Required."]
    },
    newPressOneWeight: {
        type: Number,
        // required: [true, "Workout Weight for Press One Required."]
    },
    newSetsPressOneAccomplished: {
        type: Number,
        // required: [true, "Sets for Press One Required."]
    },
    newRepsPressOneAccomplished: {
        type: Number,
        // required: [true, "Reps for Press One Required."]
    },
    //
    newChestFlyOneTitle: {
        type: String,
        // required: [true, "Title for Fly One Required."]
    },
    newFlyOneWeight: {
        type: Number,
        // required: [true, "Workout Weight for Fly One Required."]
    },
    newSetsFlyOneAccomplished: {
        type: Number,
        // required: [true, "Sets for Fly One Required."]
    },
    newRepsFlyOneAccomplished: {
        type: Number,
        // required: [true, "Reps for Fly One Required."]
    },
    //
    chestPressTwoTitle: {
        type: String,
        // required: [true, "Title for Press Two Required."]
    },
    newPressTwoWeight: {
        type: Number,
        // required: [true, "Workout Weight for Press Two Required."]
    },
    newSetsPressTwoAccomplished: {
        type: Number,
        // required: [true, "Sets for Press Two Required."]
    },
    newRepsPressTwoAccomplished: {
        type: Number,
        // required: [true, "Reps for Press Two Required."]
    },
    //
    newFlyTwoTitle: {
        type: String,
        // required: [true, "Title for Fly Two Required."]
    },
    newFlyTwoWeight: {
        type: Number,
        // required: [true, "Workout Weight for Fly Two Required."]
    },
    newSetsFlyTwoAccomplished: {
        type: Number,
        // required: [true, "Sets for Fly Two Required."]
    },
    newRepsFlyTwoAccomplished: {
        type: Number,
        // required: [true, "Reps for Fly Two Required."]
    },
    //
    newTricepsTitle: {
        type: String,
        // required: [true, "Title for Triceps Required."]
    },
    newTricepsWeight: {
        type: Number,
        // required: [true, "Workout Weight for Triceps Required."]
    },
    newSetsTricepsAccomplished: {
        type: Number,
        // required: [true, "Sets for Triceps Required."]
    },
    newRepsTricepsAccomplished: {
        type: Number,
        // required: [true, "Reps for Triceps Required."]
    }

});

const ChestWorkoutData = mongoose.model('ChestWorkoutData', ChestWorkoutDataSchema);


const ShoulderWorkoutDataSchema = new mongoose.Schema({
    dateTime: {
        type: String,
    },
    shoulderWarmupTitle: {
        type: String,
    },
    shoulderWarmupWeight: {
        type: Number,
    },
    setsWarmupShoulderAccomplished: {
        type: Number,
    },
    repsWarmupShoulderAccomplished: {
        type: Number,
    },
    //
    newRearDeltTitle: {
        type: String,
    },
    newRearDeltWeight: {
        type: Number,
    },
    newSetsRearDeltAccomplished: {
        type: Number,
    },
    newRepsRearDeltAccomplished: {
        type: Number,
    },
    //
    newShouldersAuxOneTitle: {
        type: String,
    },
    newAuxOneWeight: {
        type: Number,
    },
    newSetsAuxOneAccomplished: {
        type: Number,
    },
    newRepsAuxOneAccomplished: {
        type: Number,
    },
    //
    shoulderPressTitle: {
        type: String,
    },
    newShoulderPressWeight: {
        type: Number,
    },
    newSetsShoulderPressAccomplished: {
        type: Number,
    },
    newRepsShoulderPressAccomplished: {
        type: Number,
    },
    //
    newShouldersAuxTwoTitle: {
        type: String,
    },
    newAuxTwoWeight: {
        type: Number,
    },
    newSetsAuxTwoAccomplished: {
        type: Number,
    },
    newRepsAuxTwoAccomplished: {
        type: Number,
    },

});

const ShoulderWorkoutData = mongoose.model('ShoulderWorkoutData', ShoulderWorkoutDataSchema);

const LegWorkoutDataSchema = new mongoose.Schema({
    dateTime: {
        type: String,
    },
    //
    legWarmupTitle: {
        type: String,
    },
    legWarmupWeight: {
        type: Number,
    },
    setsWarmupLegAccomplished: {
        type: Number,
    },
    repsWarmupLegAccomplished: {
        type: Number,
    },
    //
    newCalvesTitle: {
        type: String,
    },
    newCalvesWeight: {
        type: Number,
    },
    newSetsCalvesAccomplished: {
        type: Number,
    },
    newRepsCalvesAccomplished: {
        type: Number,
    },
    //
    newHamCompoundTitle: {
        type: String,
    },
    newHamCompoundWeight: {
        type: Number,
    },
    newSetsHamCompoundAccomplished: {
        type: Number,
    },
    newRepsHamCompoundAccomplished: {
        type: Number,
    },
    //
    auxQuadTitle: {
        type: String,
    },
    newAuxQuadWeight: {
        type: Number,
    },
    newSetsAuxQuadAccomplished: {
        type: Number,
    },
    newRepsAuxQuadAccomplished: {
        type: Number,
    },
    //
    hamAuxTitle: {
        type: String,
    },
    newHamAuxWeight: {
        type: Number,
    },
    newSetsHamAuxAccomplished: {
        type: Number,
    },
    newRepsHamAuxAccomplished: {
        type: Number,
    },

});

const LegsWorkoutData = mongoose.model('LegsWorkoutData', LegWorkoutDataSchema);


const BackWorkoutDataSchema = new mongoose.Schema({
    dateTime: {
        type: String,
    },
    //
    backTitle: {
        type: String,
    },
    backWarmupWeight: {
        type: Number,
    },
    setsWarmupBackAccomplished: {
        type: Number,
    },
    repsWarmupBackAccomplished: {
        type: Number,
    },
    //
    newPulldownTitle: {
        type: String,
    },
    newPulldownWeight: {
        type: Number,
    },
    newSetsPulldownAccomplished: {
        type: Number,
    },
    newRepsPulldownAccomplished: {
        type: Number,
    },
    //
    newRowTitle: {
        type: String,
    },
    newRowWeight: {
        type: Number,
    },
    newSetsRowAccomplished: {
        type: Number,
    },
    newRepsRowAccomplished: {
        type: Number,
    },
    //
    pulldownTwoTitle: {
        type: String,
    },
    newPulldownTwoWeight: {
        type: Number,
    },
    newSetsPulldownTwoAccomplished: {
        type: Number,
    },
    newRepsPulldownTwoAccomplished: {
        type: Number,
    },
    //
    trapsTitle: {
        type: String,
    },
    newTrapsWeight: {
        type: Number,
    },
    newSetsTrapsAccomplished: {
        type: Number,
    },
    newRepsTrapsAccomplished: {
        type: Number,
    },
    //
    newBicepsTitle: {
        type: String,
    },
    newBicepsWeight: {
        type: Number,
    },
    newSetsBicepsAccomplished: {
        type: Number,
    },
    newRepsBicepsAccomplished: {
        type: Number,
    }

});

const BackWorkoutData = mongoose.model('BackWorkoutData', BackWorkoutDataSchema);


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."]
    },
    lastName: { 
        type: String,
        required: [true, "Last name is required."]
        
    },
    email: { 
        type: String,
        required: [true, "Email is required."],
        unique: true // database constraint; not a normal mongoose validator
    },
    encryptedPassword: { 
        type: String,
        required: [true, "Password is required."],
    },
}, {
    toJSON: {
        versionKey:false,
        transform: function (doc, ret){
            delete ret.email
            delete ret.encryptedPassword
        }
    }

});

userSchema.methods.setEncryptedPassword = function(plainPassword){
    // encrypt given plain password and store in model instance

    var promise = new Promise((resolve, reject) => {
        // resolve is then()
        // reject is catch()
        bcrypt.hash(plainPassword, 12).then(hash => {
            // Store hash in your password DB.
            this.encryptedPassword = hash
            // Resolve the promise..
            resolve() // this invokes the callers then function
        });
    })
    return promise;
}
userSchema.methods.verifyEncryptedPassword = function(plainPassword){
    // verify an attempted password compared to stored password or encrypted password
    var promise = new Promise((resolve, reject) => {
        bcrypt.compare(plainPassword, this.encryptedPassword).then(result => {
            resolve(result) 
        });
    })
    return promise;
}

const User = mongoose.model('User', userSchema);




module.exports = {
    Shred: Shred,
    ChestWorkoutData: ChestWorkoutData,
    ShoulderWorkoutData: ShoulderWorkoutData,
    LegsWorkoutData: LegsWorkoutData,
    BackWorkoutData: BackWorkoutData,
    User: User
}