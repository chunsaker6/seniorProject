const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://chunsaker-SE4200:tE5gDZ6YlZKZcnHg@cluster0.6txnlrl.mongodb.net/workout?retryWrites=true&w=majority');

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

module.exports = {
    Shred: Shred,
    ChestWorkoutData: ChestWorkoutData,
    ShoulderWorkoutData: ShoulderWorkoutData
}