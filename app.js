Vue.createApp({

    data: function (){
        return {
            // showPage: 'G',
            // logPage: 'E',
            showPage: 'A',
            logPage: 'A',

            // showPage: 'L',
            
            newShred: "",
            shredded: "",
            imageUrl1: null, // To store the URL of the selected image
            imageUrl2: null, // To store the URL of the second selected image
            // SHRED HOMEPAGE
            shredChestSubset: 'N',
            shredBackSubset: 'N',
            shredArmsSubset: 'N',
            shredShouldersSubset: 'N',
            shredLegsSubset: 'N',
            totalChestShredWorkouts: 0,
            chestAccomplishedIntensifiedPercent: 0,
            totalChestShredIntensifiedWorkouts: 0,
            chestShredAccomplishedList: [],
            newWarmupWorkoutWeight: "",
            newSetsWarmupAccomplished: "",
            newRepsAccomplished: "",
            chestShredWorkoutData: [],
            // SHOULDER MAX PAGE
            shoulderMaxWorkouts: [],
            newDumbbellShoulderPress: "",
            newCableShoulderPress: "",
            newPlateLoadedShoulderPress: "",
            newSmithShoulderPress: "",
            newShoulderWeek: "",
            errorMessages: {}, 
            // SHOULDER PAGE 
            // WARMUP           
            warmupHeader: 'Warmups',
            videoSrc: 'dixie11/movie.mp4',
            isWarmupVisible: 'A',
            instructions: [],
            // REAR DELT
            isRearDeltVisible: 'A',
            rearDeltHeader: 'Rear Delts',
            rearDeltStorage: '',
            rearDeltP: '3 to 4 sets, 6 to 10 reps.',
            intensifiedRearDelt: 'A',
            intensifiedInstructions: [],
            rearDeltInstructions: [],
            rearDeltHeaderConfirmed: '',
            // AUX
            auxileriesOneHeader: 'Auxileries 1',
            isAuxOneVisible: 'A',
            intensifiedAux : 'A',
            auxIntensifiedInstructions: [],
            auxOneInstructions: [],
            auxOneP: '3 to 4 sets, 8 to 10 reps',
            auxOneHeaderConfirmed: '',
            // PRESS
            pressHeader: 'Shoulder Press',
            isPressVisible: 'A',
            intensifiedPress : 'A',
            pressIntensifiedInstructions: [],
            pressInstructions: [],
            pressP: '3 to 4 sets, 8 to 10 reps',
            pressHeaderConfirmed: '',
            // AUX 2 
            auxileriesTwoHeader: 'Auxileries 2',
            isAuxTwoVisible: 'A',
            intensifiedAuxTwo : 'A',
            auxTwoIntensifiedInstructions: [],
            auxTwoInstructions: [],
            auxTwoP: '3 to 4 sets, 8 to 10 reps',
            auxTwoHeaderConfirmed: '',
            // NEW PAGE
            // CHEST MAX PAGE
            chestAccomplishedPercent: 0,
            chestMaxWorkouts: [],
            newPlateLoadedInclineChestPress: "",
            newPlateLoadedFlatChestPress: "",
            newPlateLoadedDeclineChestPress: "",
            newDumbbellInclineChestPress: "",
            newDumbbellFlatChestPress: "",
            newDumbbellDeclineChestPress: "",
            newSmithMachineInclineChestPress: "",
            newSmithMachineFlatChestPress: "",
            newSmithMachineDeclineChestPress: "",
            newChestWeek: "",
            errorMessages: {}, 
            // CHEST PAGE WARMUPS
            chestWarmupTitle: "",
            chestWarmupHeader: 'Warmups',
            isChestWarmupVisible: 'A',
            chestWarmupInstructions: [],
            intensifiedchestWarmup: 'A',
            chestWarmupP: '3 to 4 sets, 8 to 10 reps',
            chestShredWarmupForm: 'N',
            chestShredPressOneForm: 'N',

            // CHEST PRESS 1
            chestPressOneHeader: 'Chest Press 1',
            ischestPressOneVisible: 'A',
            intensifiedchestPressOne : 'A',
            chestPressOneIntensifiedInstructions: [],
            chestPressOneInstructions: [],
            chestPressOneP: '3 to 4 sets, 8 to 10 reps',
            chestPressOneHeaderConfirmed: '',
            newPressOneWeight: "",
            newSetsPressOneAccomplished: "",
            newRepsPressOneAccomplished: "",
            newChestPressTitle: "",
            //CHEST FLIES 1
            chestFlyOneHeader: 'Chest Fly 1',
            ischestFlyOneVisible: 'A',
            intensifiedchestFlyOne : 'A',
            chestFlyOneIntensifiedInstructions: [],
            chestFlyOneInstructions: [],
            chestFlyOneP: '3 to 4 sets, 8 to 10 reps',
            chestFlyOneHeaderConfirmed: '',
            chestFlyOneSupersetInstructions: [],
            chestShredFlyOneForm: 'N',
            newChestFlyOneTitle: "",
            newFlyOneWeight: "",
            newSetsFlyOneAccomplished: "",
            newRepsFlyOneAccomplished: "",
            // CHEST PRESS 2
            chestPressTwoHeader: 'Chest Press 2',
            ischestPressTwoVisible: 'A',
            intensifiedchestPressTwo : 'A',
            chestPressTwoIntensifiedInstructions: [],
            chestPressTwoInstructions: [],
            chestPressTwoP: '3 to 4 sets, 8 to 10 reps',
            chestPressTwoHeaderConfirmed: '',
            chestShredPressTwoForm: 'N',
            chestPressTwoTitle: "",
            newPressTwoWeight: "",
            newSetsPressTwoAccomplished: "",
            newRepsPressTwoAccomplished: "",
            // CHEST FLIES 2
            chestFlyTwoHeader: 'Chest Fly 2',
            ischestFlyTwoVisible: 'A',
            intensifiedchestFlyTwo : 'A',
            chestFlyTwoIntensifiedInstructions: [],
            chestFlyTwoInstructions: [],
            chestFlyTwoP: '3 to 4 sets, 8 to 10 reps',
            chestFlyTwoHeaderConfirmed: '',
            chestFlyTwoSupersetInstructions: [],
            chestShredFlyTwoForm: 'N',
            newFlyTwoTitle: "",
            newFlyTwoWeight: "",
            newSetsFlyTwoAccomplished: "",
            newRepsFlyTwoAccomplished: "",
            // CHEST TRICEPS
            chestTricepsHeader: 'Triceps',
            ischestTricepsVisible: 'A',
            intensifiedchestTriceps : 'A',
            chestTricepsIntensifiedInstructions: [],
            chestTricepsInstructions: [],
            chestTricepsP: '3 to 4 sets, 8 to 10 reps',
            chestTricepsHeaderConfirmed: '',
            chestTricepsSupersetInstructions: [],
            chestShredTricepsForm: 'N',
            newTricepsTitle: "",
            newTricepsWeight: "",
            newSetsTricepsAccomplished: "",
            newRepsTricepsAccomplished: "",
            // PROGRESS REPORT
            showProgress: "A",
            chestDataProgress: [],
            progressCount: 0,
            firstCountVar: 0,
            secondCountVar: 0,
            thirdCountVar: 0,
            fourthCountVar: 0,
            fifthCountVar: 0,
            sixthCountVar: 0,
            seventhCountVar: 0,
            eighthCountVar: 0,
            ninthCountVar: 0,
            tenthCountVar: 0,
            eleventhCountVar: 0,
            twelveCountVar: 0,
            thirteenthCountVar: 0,
            fourteenthCountVar: 0,
            fifteenthCountVar: 0,
            sixteenthCountVar: 0,
            seventeenthCountVar: 0,
            eighteenthCountVar: 0,
            chestWarmupProgress: 'T',
            chestFlyTwoProgress: 'T',
            chestPressOneProgress: 'T',
            chestFlyOneProgress: 'T',
            chestPressTwoProgress: 'T',
            chestTricepsProgress: 'T'


            
        };
    },

    methods:{
        previewImage(event, imageNumber) {
            // Check if files are selected and browser supports FileReader
            if (event.target.files && event.target.files[0] && window.FileReader) {
              const reader = new FileReader();
              
              reader.onload = (e) => {
                // Update imageUrl based on the imageNumber parameter
                this[imageNumber === 'image1' ? 'imageUrl1' : 'imageUrl2'] = e.target.result;
              };
              
              reader.readAsDataURL(event.target.files[0]); // Read the selected file
            }
        },

        // START OF SHOULDERS WARMUP

        handleShoulderWarmup(warmup) {
            this.isWarmupVisible = 'B';
            switch (warmup) {
                case 'lightDumbbellRaise':
                    this.warmupHeader = 'Light Dumbbell Raises';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.instructions = [
                        "To perform light dumbbell lateral raises, follow these steps: Stand with your feet shoulder-width apart and hold a light dumbbell in each hand at your sides, with your palms facing your body.",
                        "Keeping your elbows slightly bent, lift the dumbbells out to the sides, raising them to shoulder level. Hold the dumbbells at the top of the movement for a brief pause.",
                        "Lower the dumbbells back down to your sides in a controlled manner. Repeat for the desired number of repetitions."
                    ];
                    break;
                case 'rotatorCuffWarm':
                    this.warmupHeader = 'Rotator Cuff Warmups';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.instructions = [
                        "To perform this exercise, you stand in the middle of a cable machine with one foot slightly in front of the other for balance, and hold one handle in each hand.",
                        "Your arms should be extended out to the sides at shoulder height, and your palms facing forward. From this position, you bring the handles together in front of your chest, squeezing your chest muscles at the top of the movement, and then slowly return the handles to the starting position in a controlled manner.",
                        "This exercise provides constant tension throughout the movement due to the cable resistance, which can help to build and define the chest muscles. It also engages the core muscles to help maintain stability during the exercise."
                    ];
                    break;
                case 'lightCableRearDelt':
                    this.warmupHeader = 'Light Cable Rear Delt Flies';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.instructions = [
                        "Stand beside the cable machine with your feet shoulder-width apart and your side facing the machine. Adjust the cable pulley to the lowest position and attach a single handle to the pulley.",
                        "Grab the handle with the hand closest to the cable machine. Your palm should be facing down. Take a step away from the machine to create tension in the cable. Position yourself at a distance where your arm is fully extended, but there is still tension in the cable.",
                        "Position your working arm slightly in front of your body with a slight bend in your elbow. This will be your starting position. Initiate the movement by squeezing your rear deltoid and pulling the cable handle away from the machine in an arc-like motion. Continue the movement until your working arm is parallel to the ground or slightly above shoulder level. Keep your elbow slightly bent throughout the exercise."
                    ];
                    break;
                default:
                    break;
                }
        },
        goBackShoulderWarmup() {
            this.isWarmupVisible = 'A';
            this.warmupHeader = 'Warmups';
            this.videoSrc = 'dixie11/movie.mp4';
            this.instructions = [];
        },
        confirmWarmupShoulder() {
            this.isWarmupVisible = 'C';
            // Additional logic if needed
        },

        // END OF SHOULDERS WARMUP
        // START OF REAR DELT SHOULDERS


        handleRearDelt(rearDelt) {
            this.isRearDeltVisible = 'B';
            switch (rearDelt) {
                case 'rearDeltCables':
                    this.intensifiedRearDelt = 'A';
                    this.rearDeltHeader = 'Rear Delt Cable Flies';
                    this.rearDeltStorage = 'Rear Delt Cable Flies';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.rearDeltInstructions = [
                        "Here's a description of how to perform rear delt cables: Stand facing a cable machine with the pulleys set at shoulder height. Attach D-handle grips to each pulley.",
                        "Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet shoulder-width apart, with a slight bend in your knees and a neutral spine. Engage your core for stability.",
                        "Start with your arms extended forward in front of you, maintaining a slight bend in your elbows. Initiate the movement by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion.",
                        "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Hold the contracted position for a brief moment, feeling the tension in your rear deltoids.",
                        "Slowly return your arms to the starting position, maintaining control over the cables' resistance."

                    ];
                    break;
                case 'chestRearDelt':
                    this.intensifiedRearDelt = 'B';
                    this.rearDeltHeader = 'Chest Supported Rear Delt Dumbbell Flies';
                    this.rearDeltStorage = 'Chest Supported Rear Delt Dumbbell Flies';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.rearDeltInstructions = [
                        "Here's a description of how to perform chest supported rear delt dumbbell flies: Set an incline bench to a moderate angle (around 30-45 degrees). Position the bench in front of a rack or a flat surface where you can rest the dumbbells before starting the exercise.",
                        "Lie face down on the incline bench with your chest fully supported on the pad. Ensure that your head, neck, and upper body are in a comfortable and stable position. Hold a dumbbell in each hand with your palms facing each other. Extend your arms downward toward the floor, just below shoulder level. This is your starting position.",
                        "Engage your core and stabilize your body on the bench to prevent excessive swinging during the exercise. Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion.",
                        "Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Keep a slight bend in your elbows throughout the exercise to avoid putting excessive stress on the joints. Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides.",
                        "Hold the fully extended position for a brief moment to maximize the muscle engagement. Lower the dumbbells back down in a controlled manner to the starting position."
                    ];
                    break;
                case 'rearDeltFlies':
                    this.intensifiedRearDelt = 'C';
                    this.rearDeltHeader = 'Rear Delt Dumbbell Flies';
                    this.rearDeltStorage = 'Rear Delt Dumbbell Flies';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.rearDeltInstructions = [
                        "Here's a description of how to perform rear delt dumbbell flies: Stand with your feet shoulder-width apart and hold a dumbbell in each hand with a neutral grip (palms facing each other).",
                        "Bend your knees slightly and hinge forward at your hips, maintaining a flat back. Your upper body should be almost parallel to the ground, and your chest should be facing down. Keep your shoulders back and down, and engage your core for stability.",
                        "Start with your arms hanging down toward the floor, just below shoulder level. Your elbows should have a slight bend. Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion.",
                        "Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Your arms should be in line with your shoulders, forming a T shape with your body. Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides.",
                        "Hold the fully extended position for a brief moment to maximize the muscle engagement. Slowly lower the dumbbells back to the starting position, maintaining control over the movement."
                    ];
                    break;
                case 'rearDeltPeckDeck':
                    this.intensifiedRearDelt = 'D';
                    this.rearDeltHeader = 'Rear Delt Peck Deck Flies';
                    this.rearDeltStorage = 'Rear Delt Peck Deck Flies';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.rearDeltInstructions = [
                        "Here's a description of how to perform rear delt peck deck flies: Begin by adjusting the peck deck machine to a height that allows you to comfortably grip the handles while seated. Sit on the machine with your back against the backrest and your feet flat on the floor.",
                        "Grasp the handles of the peck deck machine with an overhand grip, ensuring that your palms are facing each other. Your elbows should be slightly bent, and your arms should be at about shoulder height. Sit with your chest lifted and shoulders relaxed, maintaining a neutral spine and engaging your core for stability.",
                        "Initiate the movement by squeezing your shoulder blades together and pulling the handles outward and backward. Continue the movement until your arms are fully extended to the sides, maintaining a slight bend in your elbows throughout the exercise.",
                        "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until you feel a contraction in the rear deltoids. Hold the fully extended position for a brief moment to maximize the muscle engagement.",
                        "Slowly return your arms to the starting position, maintaining control over the resistance."
                    ];
                    break;
                default:
                    break;
                }
        },

        handleIntensfier(intensifiedRearDelts) {
            this.isRearDeltVisible = 'E';
            var statement = this.intensifiedRearDelt;
            switch (statement){
                case 'A':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.rearDeltHeader = 'Drop Set';
                            this.rearDeltHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Here's a description of how to perform a rear delt cables drop set: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                                "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability. Start with your arms extended forward in front of you, maintaining a slight bend in your elbows.",
                                "Perform a set of rear delt cable flyes by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion. Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Hold the contracted position for a brief moment, feeling the tension in your rear deltoids.",
                                "Slowly return your arms to the starting position, maintaining control over the cables' resistance. Without resting, quickly reduce the weight on the cable machine by moving the pin to a lower weight setting or using a lighter weight stack.",
                                "Immediately continue with another set of rear delt cable flyes with the reduced resistance. Aim to perform as many reps as possible with the lighter weight."

                            ];
                            break;
                        case 'seth_press_two':
                            this.rearDeltHeader = 'Seth Set';
                            this.rearDeltHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.rearDeltHeader = 'Pause Repetitions';
                            this.rearDeltHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Here's a description of how to perform rear delt cables pause reps: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                                "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability.",
                                "Start with your arms extended forward in front of you, maintaining a slight bend in your elbows. Initiate the movement by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Once you reach the desired position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly return your arms to the starting position, maintaining control over the cables' resistance."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.rearDeltHeader = 'Negatives';
                            this.rearDeltHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'B':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.rearDeltHeader = 'Drop Set';
                            this.rearDeltHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Here's a description of how to perform chest supported rear delt dumbbell fly drop sets: Set up an incline bench to a moderate angle (around 30-45 degrees) and place it in front of a rack or a flat surface where you can rest the dumbbells. Lie face down on the incline bench with your chest fully supported on the pad. Position your head, neck, and upper body comfortably and securely on the bench.",
                                "Hold a pair of dumbbells in each hand with your palms facing each other. Extend your arms downward toward the floor, just below shoulder level. This is your starting position. Engage your core and maintain stability on the bench throughout the exercise.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Keep a slight bend in your elbows to avoid strain on the joints.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Hold the fully extended position for a brief moment to maximize muscle engagement. Lower the dumbbells back down in a controlled manner to the starting position.",
                                "Perform the chest supported rear delt dumbbell fly for the desired number of repetitions with a challenging weight that allows you to maintain proper form. Without resting, quickly switch to a lighter set of dumbbells (reducing the weight by around 20-30% or as needed) and immediately perform another set of rear delt flyes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.rearDeltHeader = 'Seth Set';
                            this.rearDeltHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.rearDeltHeader = 'Pause Repetitions';
                            this.rearDeltHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Here's a description of how to perform chest supported rear delt dumbbell fly with pause reps: Set up an incline bench to a moderate angle (around 30-45 degrees) and place it in front of a rack or a flat surface where you can rest the dumbbells. Lie face down on the incline bench with your chest fully supported on the pad. Position your head, neck, and upper body comfortably and securely on the bench.",
                                "Hold a pair of dumbbells in each hand with your palms facing each other. Extend your arms downward toward the floor, just below shoulder level. This is your starting position. Engage your core and maintain stability on the bench throughout the exercise.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Keep a slight bend in your elbows to avoid strain on the joints.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Once your arms are fully extended to the sides, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly lower the dumbbells back down to the starting position in a controlled manner."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.rearDeltHeader = 'Negatives';
                            this.rearDeltHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'C':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.rearDeltHeader = 'Drop Set';
                            this.rearDeltHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Here's a description of how to perform rear delt dumbbell fly drop sets: Stand with your feet shoulder-width apart and hold a dumbbell in each hand with a neutral grip (palms facing each other). Bend your knees slightly and hinge forward at your hips, maintaining a flat back. Your upper body should be almost parallel to the ground, and your chest should be facing down.",
                                "Keep your shoulders back and down, and engage your core for stability. Start with your arms hanging down toward the floor, just below shoulder level. Your elbows should have a slight bend.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Your arms should be in line with your shoulders, forming a T shape with your body.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Hold the fully extended position for a brief moment to maximize the muscle engagement. Slowly lower the dumbbells back to the starting position, maintaining control over the movement.",
                                "Perform the rear delt dumbbell fly for the desired number of repetitions with a challenging weight that allows you to maintain proper form. Without resting, quickly switch to a lighter set of dumbbells (reducing the weight by around 20-30% or as needed) and immediately perform another set of rear delt flyes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.rearDeltHeader = 'Seth Set';
                            this.rearDeltHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.rearDeltHeader = 'Pause Repetitions';
                            this.rearDeltHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Here's a description of how to perform rear delt dumbbell fly with pause reps: Stand with your feet shoulder-width apart and hold a dumbbell in each hand with a neutral grip (palms facing each other). Bend your knees slightly and hinge forward at your hips, maintaining a flat back. Your upper body should be almost parallel to the ground, and your chest should be facing down.",
                                "Keep your shoulders back and down, and engage your core for stability. Start with your arms hanging down toward the floor, just below shoulder level. Your elbows should have a slight bend.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Your arms should be in line with your shoulders, forming a T shape with your body.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Once your arms are fully extended to the sides, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly lower the dumbbells back to the starting position in a controlled manner."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.rearDeltHeader = 'Negatives';
                            this.rearDeltHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'D':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.rearDeltHeader = 'Drop Set';
                            this.rearDeltHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Here's a description of how to perform rear delt peck deck flies drop set: Begin by adjusting the peck deck machine to a height that allows you to comfortably grip the handles while seated. Sit on the machine with your back against the backrest and your feet flat on the floor.",
                                "Grasp the handles of the peck deck machine with an overhand grip, ensuring that your palms are facing each other. Your elbows should be slightly bent, and your arms should be at about shoulder height. Sit with your chest lifted and shoulders relaxed, maintaining a neutral spine and engaging your core for stability.",
                                "Initiate the movement by squeezing your shoulder blades together and pulling the handles outward and backward. Continue the movement until your arms are fully extended to the sides, maintaining a slight bend in your elbows throughout the exercise.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until you feel a contraction in the rear deltoids. Hold the fully extended position for a brief moment to maximize the muscle engagement. Slowly return your arms to the starting position, maintaining control over the resistance.",
                                "Without resting, quickly reduce the weight on the peck deck machine by moving the pin to a lower weight setting or using a lighter weight stack. Immediately continue with another set of rear delt peck deck flies with the reduced resistance. Aim to perform as many reps as possible with the lighter weight."
                            ];
                            break;
                        case 'seth_press_two':
                            this.rearDeltHeader = 'Seth Set';
                            this.rearDeltHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.rearDeltHeader = 'Pause Repetitions';
                            this.rearDeltHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Here's a description of how to perform rear delt peck deck flies with pause reps: Begin by adjusting the peck deck machine to a height that allows you to comfortably grip the handles while seated. Sit on the machine with your back against the backrest and your feet flat on the floor.",
                                "Grasp the handles of the peck deck machine with an overhand grip, ensuring that your palms are facing each other. Your elbows should be slightly bent, and your arms should be at about shoulder height. Sit with your chest lifted and shoulders relaxed, maintaining a neutral spine and engaging your core for stability.",
                                "Initiate the movement by squeezing your shoulder blades together and pulling the handles outward and backward. Continue the movement until your arms are fully extended to the sides, maintaining a slight bend in your elbows throughout the exercise.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until you feel a contraction in the rear deltoids. Once you reach the fully extended position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly return your arms to the starting position, maintaining control over the resistance. Repeat the movement for the desired number of repetitions, incorporating a pause at the fully extended position for each rep."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.rearDeltHeader = 'Negatives';
                            this.rearDeltHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.intensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },
        goBackShoulderRearDelt() {
            this.isRearDeltVisible = 'A';
            this.rearDeltHeader = 'Rear Delts';
            this.videoSrc = 'dixie11/movie.mp4';
            this.instructions = [];
        },
        confirmRearDeltShoulder() {
            this.isRearDeltVisible = 'C';
            // Additional logic if needed
        },
        confirmRearDeltShoulderTwo() {
            this.isRearDeltVisible = 'F';
            this.rearDeltHeader = this.rearDeltStorage;
            // Additional logic if needed
        },
        intensifyRearDeltShoulder() {
            this.rearDeltHeader = 'Intensified';
            this.isRearDeltVisible = 'D';
            this.rearDeltP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackShoulderRearDeltSecond() {
            this.isRearDeltVisible = 'B'           
            this.rearDeltHeader = this.rearDeltStorage;
            this.rearDeltP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackShoulderRearDeltThird() {
            this.isRearDeltVisible = 'D'           
            // this.rearDeltHeader = this.rearDeltStorage;
            // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';

        },

        // END OF REAR DELT SHOULDERS
        // START OF AUX ONE SHOUDLERS

        handleAuxOne(rearDelt) {
            this.isAuxOneVisible = 'B';
            switch (rearDelt) {
                case 'dumbbellLateralRaises':
                    this.intensifiedAuxOne = 'A';
                    this.auxileriesOneHeader = 'Dumbbell Lateral Raises';
                    this.rearDeltStorage = 'Dumbbell Lateral Raises';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.auxOneInstructions = [
                        "Stand beside the cable machine with your feet shoulder-width apart and your side facing the machine. Adjust the cable pulley to the lowest position and attach a single handle to the pulley.",
                        "Grab the handle with the hand closest to the cable machine. Your palm should be facing down. Take a step away from the machine to create tension in the cable. Position yourself at a distance where your arm is fully extended, but there is still tension in the cable.",
                        "Position your working arm slightly in front of your body with a slight bend in your elbow. This will be your starting position. Initiate the movement by squeezing your rear deltoid and pulling the cable handle away from the machine in an arc-like motion.",
                        "Continue the movement until your working arm is parallel to the ground or slightly above shoulder level. Keep your elbow slightly bent throughout the exercise.",
                        "Focus on using your rear deltoid to lift the cable handle and maintain control throughout the movement."
                    ];
                    break;
                case 'cableLateralRaises':
                    this.intensifiedAuxOne = 'B';
                    this.auxileriesOneHeader = 'Cable Lateral Raises';
                    this.rearDeltStorage = 'Cable Lateral Raises';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.auxOneInstructions = [
                        "To perform cable lateral raises, follow these steps: Begin by standing with your feet shoulder-width apart and facing the cable machine. Grasp the handle of the cable with your right hand, palm facing inward.",
                        "Keep your arm straight and raise your right arm out to the side until it reaches shoulder level. Hold this position for a moment to fully engage the lateral deltoid.",
                        "Slowly lower the cable back down to the starting position. Repeat for the desired number of repetitions on the right side.",
                        "Switch to the left side and repeat the same steps. The cable provides a constant resistance throughout the movement, which challenges the lateral deltoids and helps to improve strength and muscle growth in the shoulders.",
                        "It is important to choose a weight that challenges you but still allows you to maintain proper form throughout the exercise."
                    ];
                    break;
                case 'frontLateralRaises':
                    this.intensifiedAuxOne = 'C';
                    this.auxileriesOneHeader = 'Front Lateral Raises';
                    this.rearDeltStorage = 'Front Lateral Raises';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.auxOneInstructions = [
                        "Here's how to perform front lateral raises: Begin by standing with your feet shoulder-width apart, your knees slightly bent, and a dumbbell in each hand with palms facing down.",
                        "Engage your core and keep your back straight throughout the exercise. Slowly lift the dumbbells straight out in front of your body until they reach shoulder height. Make sure to keep your arms straight and your elbows locked.",
                        "Pause at the top of the movement and hold for a second or two, then slowly lower the dumbbells back down to your sides. Repeat for the desired number of repetitions.",
                        "Front lateral raises can be done with both arms simultaneously, or one arm at a time. To make the exercise more challenging, you can increase the weight of the dumbbells or slow down the movement to increase the time under tension.",
                        "Front lateral raises are an effective way to isolate and strengthen the front deltoids, which can improve shoulder stability and mobility and help to prevent shoulder injuries. They can also help to improve posture and contribute to a more defined, sculpted upper body."
                    ];
                    break;
                case 'uprightRows':
                    this.intensifiedAuxOne = 'D';
                    this.auxileriesOneHeader = 'Upright Rows';
                    this.rearDeltStorage = 'Upright Rows';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.auxOneInstructions = [
                        "To perform the exercise, stand with your feet shoulder-width apart, grasp a weight plate with both hands and hold it in front of your thighs with your palms facing inward.",
                        "Keeping the plate close to your body, lift it up to your chin, bending your elbows out to the sides",
                        "Pause briefly at the top of the movement, then lower the plate back down to the starting position.",
                        "Repeat for the desired number of repetitions.",
                        "Upright plate rows are a weight training exercise that primarily targets the upper trapezius muscles in the shoulders, as well as the deltoids, biceps, and forearms."
                    ];
                    break;
                default:
                    break;
                }
        },
        handleAuxIntensfier(intensifiedRearDelts) {
            this.isAuxOneVisible = 'E';
            var statement = this.intensifiedAuxOne;
            switch (statement){
                case 'A':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.auxileriesOneHeader = 'Drop Set';
                            this.auxOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform a rear delt cables drop set: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                                "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability. Start with your arms extended forward in front of you, maintaining a slight bend in your elbows.",
                                "Perform a set of rear delt cable flyes by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion. Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Hold the contracted position for a brief moment, feeling the tension in your rear deltoids.",
                                "Slowly return your arms to the starting position, maintaining control over the cables' resistance. Without resting, quickly reduce the weight on the cable machine by moving the pin to a lower weight setting or using a lighter weight stack.",
                                "Immediately continue with another set of rear delt cable flyes with the reduced resistance. Aim to perform as many reps as possible with the lighter weight."

                            ];
                            break;
                        case 'seth_press_tricep':
                            this.auxileriesOneHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.auxileriesOneHeader = 'Pause Repetitions';
                            this.auxOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt cables pause reps: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                                "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability.",
                                "Start with your arms extended forward in front of you, maintaining a slight bend in your elbows. Initiate the movement by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Once you reach the desired position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly return your arms to the starting position, maintaining control over the cables' resistance."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.auxileriesOneHeader = 'Negatives';
                            this.auxOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'B':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.auxileriesOneHeader = 'Drop Set';
                            this.auxOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform chest supported rear delt dumbbell fly drop sets: Set up an incline bench to a moderate angle (around 30-45 degrees) and place it in front of a rack or a flat surface where you can rest the dumbbells. Lie face down on the incline bench with your chest fully supported on the pad. Position your head, neck, and upper body comfortably and securely on the bench.",
                                "Hold a pair of dumbbells in each hand with your palms facing each other. Extend your arms downward toward the floor, just below shoulder level. This is your starting position. Engage your core and maintain stability on the bench throughout the exercise.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Keep a slight bend in your elbows to avoid strain on the joints.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Hold the fully extended position for a brief moment to maximize muscle engagement. Lower the dumbbells back down in a controlled manner to the starting position.",
                                "Perform the chest supported rear delt dumbbell fly for the desired number of repetitions with a challenging weight that allows you to maintain proper form. Without resting, quickly switch to a lighter set of dumbbells (reducing the weight by around 20-30% or as needed) and immediately perform another set of rear delt flyes."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.auxileriesOneHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.auxileriesOneHeader = 'Pause Repetitions';
                            this.auxOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform chest supported rear delt dumbbell fly with pause reps: Set up an incline bench to a moderate angle (around 30-45 degrees) and place it in front of a rack or a flat surface where you can rest the dumbbells. Lie face down on the incline bench with your chest fully supported on the pad. Position your head, neck, and upper body comfortably and securely on the bench.",
                                "Hold a pair of dumbbells in each hand with your palms facing each other. Extend your arms downward toward the floor, just below shoulder level. This is your starting position. Engage your core and maintain stability on the bench throughout the exercise.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Keep a slight bend in your elbows to avoid strain on the joints.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Once your arms are fully extended to the sides, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly lower the dumbbells back down to the starting position in a controlled manner."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.auxileriesOneHeader = 'Negatives';
                            this.auxOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'C':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.auxileriesOneHeader = 'Drop Set';
                            this.auxOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt dumbbell fly drop sets: Stand with your feet shoulder-width apart and hold a dumbbell in each hand with a neutral grip (palms facing each other). Bend your knees slightly and hinge forward at your hips, maintaining a flat back. Your upper body should be almost parallel to the ground, and your chest should be facing down.",
                                "Keep your shoulders back and down, and engage your core for stability. Start with your arms hanging down toward the floor, just below shoulder level. Your elbows should have a slight bend.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Your arms should be in line with your shoulders, forming a T shape with your body.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Hold the fully extended position for a brief moment to maximize the muscle engagement. Slowly lower the dumbbells back to the starting position, maintaining control over the movement.",
                                "Perform the rear delt dumbbell fly for the desired number of repetitions with a challenging weight that allows you to maintain proper form. Without resting, quickly switch to a lighter set of dumbbells (reducing the weight by around 20-30% or as needed) and immediately perform another set of rear delt flyes."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.auxileriesOneHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.auxileriesOneHeader = 'Pause Repetitions';
                            this.auxOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt dumbbell fly with pause reps: Stand with your feet shoulder-width apart and hold a dumbbell in each hand with a neutral grip (palms facing each other). Bend your knees slightly and hinge forward at your hips, maintaining a flat back. Your upper body should be almost parallel to the ground, and your chest should be facing down.",
                                "Keep your shoulders back and down, and engage your core for stability. Start with your arms hanging down toward the floor, just below shoulder level. Your elbows should have a slight bend.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Your arms should be in line with your shoulders, forming a T shape with your body.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Once your arms are fully extended to the sides, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly lower the dumbbells back to the starting position in a controlled manner."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.auxileriesOneHeader = 'Negatives';
                            this.auxOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'D':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.auxileriesOneHeader = 'Drop Set';
                            this.auxOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt peck deck flies drop set: Begin by adjusting the peck deck machine to a height that allows you to comfortably grip the handles while seated. Sit on the machine with your back against the backrest and your feet flat on the floor.",
                                "Grasp the handles of the peck deck machine with an overhand grip, ensuring that your palms are facing each other. Your elbows should be slightly bent, and your arms should be at about shoulder height. Sit with your chest lifted and shoulders relaxed, maintaining a neutral spine and engaging your core for stability.",
                                "Initiate the movement by squeezing your shoulder blades together and pulling the handles outward and backward. Continue the movement until your arms are fully extended to the sides, maintaining a slight bend in your elbows throughout the exercise.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until you feel a contraction in the rear deltoids. Hold the fully extended position for a brief moment to maximize the muscle engagement. Slowly return your arms to the starting position, maintaining control over the resistance.",
                                "Without resting, quickly reduce the weight on the peck deck machine by moving the pin to a lower weight setting or using a lighter weight stack. Immediately continue with another set of rear delt peck deck flies with the reduced resistance. Aim to perform as many reps as possible with the lighter weight."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.auxileriesOneHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.auxileriesOneHeader = 'Pause Repetitions';
                            this.auxOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt peck deck flies with pause reps: Begin by adjusting the peck deck machine to a height that allows you to comfortably grip the handles while seated. Sit on the machine with your back against the backrest and your feet flat on the floor.",
                                "Grasp the handles of the peck deck machine with an overhand grip, ensuring that your palms are facing each other. Your elbows should be slightly bent, and your arms should be at about shoulder height. Sit with your chest lifted and shoulders relaxed, maintaining a neutral spine and engaging your core for stability.",
                                "Initiate the movement by squeezing your shoulder blades together and pulling the handles outward and backward. Continue the movement until your arms are fully extended to the sides, maintaining a slight bend in your elbows throughout the exercise.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until you feel a contraction in the rear deltoids. Once you reach the fully extended position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly return your arms to the starting position, maintaining control over the resistance. Repeat the movement for the desired number of repetitions, incorporating a pause at the fully extended position for each rep."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.auxileriesOneHeader = 'Negatives';
                            this.auxOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },
        goBackShoulderAuxOne() {
            this.isAuxOneVisible = 'A';
            this.auxileriesOneHeader = 'Auxileries 1';
            this.videoSrc = 'dixie11/movie.mp4';
            this.auxOneInstructions = [];
        },
        confirmAuxOneShoulder() {
            this.isAuxOneVisible = 'C';
            // Additional logic if needed
        },
        confirmAuxOneShoulderTwo() {
            this.isAuxOneVisible = 'F';
            this.auxileriesOneHeader = this.rearDeltStorage;
            // Additional logic if needed
        },
        intensifyAuxOneShoulder() {
            this.auxileriesOneHeader = 'Intensified';
            this.isAuxOneVisible = 'D';
            this.auxOneP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackShoulderAuxOneSecond() {
            this.isAuxOneVisible = 'B'           
            this.auxileriesOneHeader = this.rearDeltStorage;
            this.auxOneP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackShoulderAuxOneThird() {
            this.isAuxOneVisible = 'D'           
            // this.rearDeltHeader = this.rearDeltStorage;
            // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';

        },

        // END OF AUX ONE SHOULDERS
        // START OF PRESS SHOULDERS

        handlePress(rearDelt) {
            this.isPressVisible = 'B';
            switch (rearDelt) {
                case 'dumbbellShoulderPress':
                    this.intensifiedPress = 'A';
                    this.pressHeader = 'Dumbbell Shoulder Press';
                    this.rearDeltStorage = 'Dumbbell Shoulder Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.pressInstructions = [
                        "To perform the exercise, you will need a set of dumbbells and a flat bench or chair. Start by sitting on a bench or chair with your feet flat on the ground and your back straight.",
                        "Hold a dumbbell in each hand and lift them up to shoulder level, palms facing forward. Your elbows should be bent at a 90-degree angle. Press the dumbbells upward, straightening your arms above your head.",
                        "Pause for a moment at the top of the movement and then slowly lower the dumbbells back to the starting position. Repeat for the desired number of repetitions.",
                        "Maintaining proper form throughout the exercise is important, as keeping your back straight and your core engaged.",
                        "It is also important to use a weight appropriate for your fitness level and avoid arching your back or locking your elbows during the exercise."

                    ];
                    break;
                case 'plateLoadedShoulder':
                    this.intensifiedPress = 'B';
                    this.pressHeader = 'Plate Loaded Shoulder Press';
                    this.rearDeltStorage = 'Plate Loaded Shoulder Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.pressInstructions = [
                        "To perform the plate-loaded shoulder press, follow these steps: Sit on a bench with your back straight and your feet flat on the ground.",
                        "Adjust the seat height so that the handles of the machine are at shoulder level. Load the machine with the desired amount of weight plates.",
                        "Grasp the handles with an overhand grip and press them upward, straightening your arms above your head.",
                        "Lower the handles back to the starting position, keeping your elbows bent at a 90-degree angle. Repeat for the desired number of repetitions.",
                        "Maintaining proper form throughout the exercise is important, as keeping your back straight and your core engaged."
                    ];
                    break;
                case 'cableShoulderPress':
                    this.intensifiedPress = 'C';
                    this.pressHeader = 'Cable Shoulder Press';
                    this.rearDeltStorage = 'Cable Shoulder Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.pressInstructions = [
                        "To perform the cable shoulder press, follow these steps: Attach a cable to a high pulley on a cable machine and adjust the weight to the desired resistance.",
                        "Stand facing the machine with your feet shoulder-width apart and grasp the handles with an overhand grip. Bring the handles down to shoulder level with your elbows bent at a 90-degree angle.",
                        "Press the handles upward, straightening your arms above your head. Lower the handles back to the starting position, keeping your elbows bent at a 90-degree angle.",
                        "Repeat for the desired number of repetitions. It is important to maintain proper form throughout the exercise, keeping your back straight and your core engaged. ",
                        "You can vary the intensity of the exercise by adjusting the weight of the machine or by changing the grip width or hand position."
                    ];
                    break;
                case 'smithShoulderPress':
                    this.intensifiedPress = 'D';
                    this.pressHeader = 'Smith Machine Shoulder Press';
                    this.rearDeltStorage = 'Smith Machine Shoulder Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.pressInstructions = [
                        "To perform the Smith machine shoulder press, follow these steps: Stand with your feet shoulder-width apart and position yourself under the Smith machine bar.",
                        "Adjust the height of the bar so that it is at shoulder level. Grasp the bar with an overhand grip, with your hands slightly wider than shoulder-width apart.",
                        "Unrack the bar and press it upward, straightening your arms above your head. Lower the bar back to the starting position, keeping your elbows bent at a 90-degree angle.",
                        "Repeat for the desired number of repetitions. It is important to maintain proper form throughout the exercise, keeping your back straight and your core engaged. The Smith machine can provide a more stable movement pattern than free weights, which can be useful for beginners or those with joint limitations.",
                        "However, it is important to ensure that the bar is properly aligned with your body and that you are not straining your neck or shoulders to compensate for an improperly aligned bar."
                    ];
                    break;
                default:
                    break;
                }
        },
        handlePressIntensfier(intensifiedRearDelts) {
            this.isPressVisible = 'E';
            var statement = this.intensifiedPress;
            switch (statement){
                case 'A':
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            this.pressHeader = 'Drop Set';
                            this.pressHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "The dumbell shoulder press drop set is a variation of the traditional dumbbell press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would grab a heavy set of dumbbells and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.pressHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.pressHeader = 'Pause Repetitions';
                            this.pressHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "To perform this exercise, you would grab a set of dumbbells of weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The shoulder press primarily targets the deltoid muscles of the shoulders, as well as the triceps and upper back muscles",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.pressHeader = 'Negatives';
                            this.pressHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'B':
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            this.pressHeader = 'Drop Set';
                            this.pressHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "The plate-loaded shoulder press drop set is a variation of the traditional shoulder press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load a plate-loaded shoulder press machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.pressHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.pressHeader = 'Pause Repetitions';
                            this.pressHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "To perform this exercise, you would load a plate-loaded shoulder press machine with a weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The incline press primarily targets the deltoid muscles of the shoulders, as well as the triceps and upper back muscles.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.pressHeader = 'Negatives';
                            this.pressHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'C':
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            this.pressHeader = 'Drop Set';
                            this.pressHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "The cable drop set is a variation of the traditional cable press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would set the cables to a weight that you can perform a set of 8-12 repetitions with.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.pressHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.pressHeader = 'Pause Repetitions';
                            this.pressHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "To perform this exercise, you would load a cable loaded press machine with a weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The cable press primarily targets the deltoids, as well as the upper back and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.pressHeader = 'Negatives';
                            this.pressHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'D':
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            this.pressHeader = 'Drop Set';
                            this.pressHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "The smith machine shoulder press drop set is a variation of the traditional smith machine shoulder press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load a smith press machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.pressHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.pressHeader = 'Pause Repetitions';
                            this.pressHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "To perform this exercise, you would load a smith machine shoulder press with a weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The smith press machine primarily targets the deltoids , as well as your upper back and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.pressHeader = 'Negatives';
                            this.pressHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.pressIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },
        goBackShoulderPress() {
            this.isPressVisible = 'A';
            this.pressHeader = 'Shoulder Press';
            this.videoSrc = 'dixie11/movie.mp4';
            this.pressInstructions = [];
        },
        confirmPressShoulder() {
            this.isPressVisible = 'C';
            // Additional logic if needed
        },
        confirmPressShoulderTwo() {
            this.isPressVisible = 'F';
            this.pressHeader = this.rearDeltStorage;
            // Additional logic if needed
        },
        intensifyPressShoulder() {
            this.pressHeader = 'Intensified';
            this.isPressVisible = 'D';
            this.pressP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackShoulderPressSecond() {
            this.isPressVisible = 'B'           
            this.pressHeader = this.rearDeltStorage;
            this.pressP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackShoulderPressThird() {
            this.isPressVisible = 'D'           
            // this.rearDeltHeader = this.rearDeltStorage;
            // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';

        },

        // END OF PRESS SHOULDERS
        // START OF AUXILERIES 2

        handleAuxTwo(rearDelt) {
            this.isAuxTwoVisible = 'B';
            switch (rearDelt) {
                case 'dumbbellLateralRaises_two':
                    this.intensifiedAuxTwo = 'A';
                    this.auxileriesTwoHeader = 'Dumbbell Lateral Raises';
                    this.rearDeltStorage = 'Dumbbell Lateral Raises';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.auxTwoInstructions = [
                        "Stand beside the cable machine with your feet shoulder-width apart and your side facing the machine. Adjust the cable pulley to the lowest position and attach a single handle to the pulley.",
                        "Grab the handle with the hand closest to the cable machine. Your palm should be facing down. Take a step away from the machine to create tension in the cable. Position yourself at a distance where your arm is fully extended, but there is still tension in the cable.",
                        "Position your working arm slightly in front of your body with a slight bend in your elbow. This will be your starting position. Initiate the movement by squeezing your rear deltoid and pulling the cable handle away from the machine in an arc-like motion.",
                        "Continue the movement until your working arm is parallel to the ground or slightly above shoulder level. Keep your elbow slightly bent throughout the exercise.",
                        "Focus on using your rear deltoid to lift the cable handle and maintain control throughout the movement."
                    ];
                    break;
                case 'cableLateralRaises':
                    this.intensifiedAuxTwo = 'B';
                    this.auxileriesTwoHeader = 'Cable Lateral Raises';
                    this.rearDeltStorage = 'Cable Lateral Raises';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.auxTwoInstructions = [
                        "To perform cable lateral raises, follow these steps: Begin by standing with your feet shoulder-width apart and facing the cable machine. Grasp the handle of the cable with your right hand, palm facing inward.",
                        "Keep your arm straight and raise your right arm out to the side until it reaches shoulder level. Hold this position for a moment to fully engage the lateral deltoid.",
                        "Slowly lower the cable back down to the starting position. Repeat for the desired number of repetitions on the right side.",
                        "Switch to the left side and repeat the same steps. The cable provides a constant resistance throughout the movement, which challenges the lateral deltoids and helps to improve strength and muscle growth in the shoulders.",
                        "It is important to choose a weight that challenges you but still allows you to maintain proper form throughout the exercise."
                    ];
                    break;
                case 'frontLateralRaises':
                    this.intensifiedAuxTwo = 'C';
                    this.auxileriesTwoHeader = 'Front Lateral Raises';
                    this.rearDeltStorage = 'Front Lateral Raises';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.auxTwoInstructions = [
                        "Here's how to perform front lateral raises: Begin by standing with your feet shoulder-width apart, your knees slightly bent, and a dumbbell in each hand with palms facing down.",
                        "Engage your core and keep your back straight throughout the exercise. Slowly lift the dumbbells straight out in front of your body until they reach shoulder height. Make sure to keep your arms straight and your elbows locked.",
                        "Pause at the top of the movement and hold for a second or two, then slowly lower the dumbbells back down to your sides. Repeat for the desired number of repetitions.",
                        "Front lateral raises can be done with both arms simultaneously, or one arm at a time. To make the exercise more challenging, you can increase the weight of the dumbbells or slow down the movement to increase the time under tension.",
                        "Front lateral raises are an effective way to isolate and strengthen the front deltoids, which can improve shoulder stability and mobility and help to prevent shoulder injuries. They can also help to improve posture and contribute to a more defined, sculpted upper body."
                    ];
                    break;
                case 'uprightRows':
                    this.intensifiedAuxTwo = 'D';
                    this.auxileriesTwoHeader = 'Upright Rows';
                    this.rearDeltStorage = 'Upright Rows';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.auxTwoInstructions = [
                        "To perform the exercise, stand with your feet shoulder-width apart, grasp a weight plate with both hands and hold it in front of your thighs with your palms facing inward.",
                        "Keeping the plate close to your body, lift it up to your chin, bending your elbows out to the sides",
                        "Pause briefly at the top of the movement, then lower the plate back down to the starting position.",
                        "Repeat for the desired number of repetitions.",
                        "Upright plate rows are a weight training exercise that primarily targets the upper trapezius muscles in the shoulders, as well as the deltoids, biceps, and forearms."
                    ];
                    break;
                default:
                    break;
                }
        },
        handleAuxTwoIntensfier(intensifiedRearDelts) {
            this.isAuxTwoVisible = 'E';
            var statement = this.intensifiedAuxTwo;
            switch (statement){
                case 'A':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.auxileriesTwoHeader = 'Drop Set';
                            this.auxTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform a rear delt cables drop set: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                                "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability. Start with your arms extended forward in front of you, maintaining a slight bend in your elbows.",
                                "Perform a set of rear delt cable flyes by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion. Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Hold the contracted position for a brief moment, feeling the tension in your rear deltoids.",
                                "Slowly return your arms to the starting position, maintaining control over the cables' resistance. Without resting, quickly reduce the weight on the cable machine by moving the pin to a lower weight setting or using a lighter weight stack.",
                                "Immediately continue with another set of rear delt cable flyes with the reduced resistance. Aim to perform as many reps as possible with the lighter weight."

                            ];
                            break;
                        case 'seth_press_fly':
                            this.auxileriesTwoHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.auxileriesTwoHeader = 'Pause Repetitions';
                            this.auxTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt cables pause reps: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                                "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability.",
                                "Start with your arms extended forward in front of you, maintaining a slight bend in your elbows. Initiate the movement by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Once you reach the desired position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly return your arms to the starting position, maintaining control over the cables' resistance."
                            ];
                            break;
                        case 'negatives_fly':
                            this.auxileriesTwoHeader = 'Negatives';
                            this.auxTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'B':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.auxileriesTwoHeader = 'Drop Set';
                            this.auxTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform chest supported rear delt dumbbell fly drop sets: Set up an incline bench to a moderate angle (around 30-45 degrees) and place it in front of a rack or a flat surface where you can rest the dumbbells. Lie face down on the incline bench with your chest fully supported on the pad. Position your head, neck, and upper body comfortably and securely on the bench.",
                                "Hold a pair of dumbbells in each hand with your palms facing each other. Extend your arms downward toward the floor, just below shoulder level. This is your starting position. Engage your core and maintain stability on the bench throughout the exercise.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Keep a slight bend in your elbows to avoid strain on the joints.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Hold the fully extended position for a brief moment to maximize muscle engagement. Lower the dumbbells back down in a controlled manner to the starting position.",
                                "Perform the chest supported rear delt dumbbell fly for the desired number of repetitions with a challenging weight that allows you to maintain proper form. Without resting, quickly switch to a lighter set of dumbbells (reducing the weight by around 20-30% or as needed) and immediately perform another set of rear delt flyes."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.auxileriesTwoHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.auxileriesTwoHeader = 'Pause Repetitions';
                            this.auxTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform chest supported rear delt dumbbell fly with pause reps: Set up an incline bench to a moderate angle (around 30-45 degrees) and place it in front of a rack or a flat surface where you can rest the dumbbells. Lie face down on the incline bench with your chest fully supported on the pad. Position your head, neck, and upper body comfortably and securely on the bench.",
                                "Hold a pair of dumbbells in each hand with your palms facing each other. Extend your arms downward toward the floor, just below shoulder level. This is your starting position. Engage your core and maintain stability on the bench throughout the exercise.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Keep a slight bend in your elbows to avoid strain on the joints.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Once your arms are fully extended to the sides, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly lower the dumbbells back down to the starting position in a controlled manner."
                            ];
                            break;
                        case 'negatives_fly':
                            this.auxileriesTwoHeader = 'Negatives';
                            this.auxTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'C':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.auxileriesTwoHeader = 'Drop Set';
                            this.auxTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt dumbbell fly drop sets: Stand with your feet shoulder-width apart and hold a dumbbell in each hand with a neutral grip (palms facing each other). Bend your knees slightly and hinge forward at your hips, maintaining a flat back. Your upper body should be almost parallel to the ground, and your chest should be facing down.",
                                "Keep your shoulders back and down, and engage your core for stability. Start with your arms hanging down toward the floor, just below shoulder level. Your elbows should have a slight bend.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Your arms should be in line with your shoulders, forming a T shape with your body.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Hold the fully extended position for a brief moment to maximize the muscle engagement. Slowly lower the dumbbells back to the starting position, maintaining control over the movement.",
                                "Perform the rear delt dumbbell fly for the desired number of repetitions with a challenging weight that allows you to maintain proper form. Without resting, quickly switch to a lighter set of dumbbells (reducing the weight by around 20-30% or as needed) and immediately perform another set of rear delt flyes."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.auxileriesTwoHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.auxileriesTwoHeader = 'Pause Repetitions';
                            this.auxTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt dumbbell fly with pause reps: Stand with your feet shoulder-width apart and hold a dumbbell in each hand with a neutral grip (palms facing each other). Bend your knees slightly and hinge forward at your hips, maintaining a flat back. Your upper body should be almost parallel to the ground, and your chest should be facing down.",
                                "Keep your shoulders back and down, and engage your core for stability. Start with your arms hanging down toward the floor, just below shoulder level. Your elbows should have a slight bend.",
                                "Initiate the movement by squeezing your shoulder blades together and lifting the dumbbells outward and upward in an arc-like motion. Continue the movement until your arms are parallel to the ground or slightly above shoulder level. Your arms should be in line with your shoulders, forming a T shape with your body.",
                                "Focus on engaging your rear deltoid muscles as you lift the dumbbells to the sides. Once your arms are fully extended to the sides, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly lower the dumbbells back to the starting position in a controlled manner."
                            ];
                            break;
                        case 'negatives_fly':
                            this.auxileriesTwoHeader = 'Negatives';
                            this.auxTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'D':
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.auxileriesTwoHeader = 'Drop Set';
                            this.auxTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt peck deck flies drop set: Begin by adjusting the peck deck machine to a height that allows you to comfortably grip the handles while seated. Sit on the machine with your back against the backrest and your feet flat on the floor.",
                                "Grasp the handles of the peck deck machine with an overhand grip, ensuring that your palms are facing each other. Your elbows should be slightly bent, and your arms should be at about shoulder height. Sit with your chest lifted and shoulders relaxed, maintaining a neutral spine and engaging your core for stability.",
                                "Initiate the movement by squeezing your shoulder blades together and pulling the handles outward and backward. Continue the movement until your arms are fully extended to the sides, maintaining a slight bend in your elbows throughout the exercise.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until you feel a contraction in the rear deltoids. Hold the fully extended position for a brief moment to maximize the muscle engagement. Slowly return your arms to the starting position, maintaining control over the resistance.",
                                "Without resting, quickly reduce the weight on the peck deck machine by moving the pin to a lower weight setting or using a lighter weight stack. Immediately continue with another set of rear delt peck deck flies with the reduced resistance. Aim to perform as many reps as possible with the lighter weight."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.auxileriesTwoHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.auxileriesTwoHeader = 'Pause Repetitions';
                            this.auxTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt peck deck flies with pause reps: Begin by adjusting the peck deck machine to a height that allows you to comfortably grip the handles while seated. Sit on the machine with your back against the backrest and your feet flat on the floor.",
                                "Grasp the handles of the peck deck machine with an overhand grip, ensuring that your palms are facing each other. Your elbows should be slightly bent, and your arms should be at about shoulder height. Sit with your chest lifted and shoulders relaxed, maintaining a neutral spine and engaging your core for stability.",
                                "Initiate the movement by squeezing your shoulder blades together and pulling the handles outward and backward. Continue the movement until your arms are fully extended to the sides, maintaining a slight bend in your elbows throughout the exercise.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until you feel a contraction in the rear deltoids. Once you reach the fully extended position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly return your arms to the starting position, maintaining control over the resistance. Repeat the movement for the desired number of repetitions, incorporating a pause at the fully extended position for each rep."
                            ];
                            break;
                        case 'negatives_fly':
                            this.auxileriesTwoHeader = 'Negatives';
                            this.auxTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.auxTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },

        goBackShoulderAuxTwo() {
            this.isAuxTwoVisible = 'A';
            this.auxileriesTwoHeader = 'Auxileries 2';
            this.videoSrc = 'dixie11/movie.mp4';
            this.auxTwoInstructions = [];
        },
        confirmAuxTwoShoulder() {
            this.isAuxTwoVisible = 'C';
            // Additional logic if needed
        },
        confirmAuxTwoShoulderTwo() {
            this.isAuxTwoVisible = 'F';
            this.auxileriesTwoHeader = this.rearDeltStorage;
            // Additional logic if needed
        },
        intensifyAuxTwoShoulder() {
            this.auxileriesTwoHeader = 'Intensified';
            this.isAuxTwoVisible = 'D';
            this.auxTwoP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackShoulderAuxTwoSecond() {
            this.isAuxTwoVisible = 'B'           
            this.auxileriesTwoHeader = this.rearDeltStorage;
            this.auxTwoP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackShoulderAuxTwoThird() {
            this.isAuxTwoVisible = 'D'           
            // this.rearDeltHeader = this.rearDeltStorage;
            // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';

        },


        // END OF AUX 2
        // END OF SHOULDERS
        // START OF CHEST WARMUP
        incrementChestAccomplishedPercent(){
            this.chestAccomplishedPercent = this.chestAccomplishedPercent + 1;
        },
        incrementChestIntensifierAccomplishedPercent(){
            this.chestAccomplishedIntensifiedPercent = this.chestAccomplishedIntensifiedPercent + 1;
        },
        //YEET
        endOfChestWorkout(){
            this.totalChestShredWorkouts = this.chestAccomplishedPercent;
            this.totalChestShredIntensifiedWorkouts = this.chestAccomplishedIntensifiedPercent;
            if (this.totalChestShredWorkouts > 0 || this.totalChestShredIntensifiedWorkouts > 0){
                this.shredChestSubset = 'Y';
                //this.addChestShredAccomplished();
            }
            //this.shredChestSubset = 'Y';
            this.chestAccomplishedIntensifiedPercent = 0;
            this.chestAccomplishedPercent = 0;
            // if (this.showPage === 'I'){
            //     this.goBackShoulderAuxTwo();
            //     this.goBackShoulderPress();
            //     this.goBackShoulderAuxOne();
            //     this.goBackShoulderRearDelt();
            //     this.goBackShoulderWarmup();
            // }
            if (this.showPage === 'L'){
                this.goBackChestWarmup();
                this.goBackShoulderChestPressOne();
                this.goBackChestFlyOne();
                this.goBackChestPressTwo();
                this.goBackChestFlyTwo();
                this.goBackChestTricep();
            }
            this.showPage ='G';
            this.addChestWorkoutData();
        },
        handleChest(warmup) {
            this.isChestWarmupVisible = 'B';
            switch (warmup) {
                case 'seated_cable_fly':
                    this.chestWarmupHeader = 'Seated Cable Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestWarmupInstructions = [
                        "To perform this exercise, you sit on a bench or chair with your back straight and your feet flat on the floor.",
                        "Then, you hold a pair of dumbbells or cables with your arms extended out to your sides at shoulder height.",
                        "From this position, you slowly bring the weights together in front of your chest, squeezing your chest muscles at the top of the movement, and then lower the weights back to the starting position in a controlled manner."
                    ];
                    break;
                case 'standing_cable_fly':
                    this.chestWarmupHeader = 'Standing Cable Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestWarmupInstructions = [
                        "To perform this exercise, you stand in the middle of a cable machine with one foot slightly in front of the other for balance, and hold one handle in each hand.",
                        "Your arms should be extended out to the sides at shoulder height, and your palms facing forward. From this position, you bring the handles together in front of your chest, squeezing your chest muscles at the top of the movement, and then slowly return the handles to the starting position in a controlled manner.",
                        "This exercise provides constant tension throughout the movement due to the cable resistance, which can help to build and define the chest muscles. It also engages the core muscles to help maintain stability during the exercise."
                    ];
                    break;
                case 'incline_dumbbell_fly':
                    this.chestWarmupHeader = 'Incline Dumbbell FLy';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestWarmupInstructions = [
                        "To perform this exercise, you lie on an incline bench with your feet flat on the floor and your back and head supported on the bench. Holding a pair of dumbbells, you start with your arms extended out to the sides and slightly bent at the elbow, and your palms facing each other.",
                        "From this position, you slowly lower the dumbbells down and out to your sides, keeping your arms slightly bent, until you feel a stretch in your chest muscles. Then, you bring the dumbbells back up to the starting position, squeezing your chest muscles at the top of the movement.",
                        "This exercise can help to strengthen and define the upper chest muscles, and also engage the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'flat_dumbbell_fly':
                    this.chestWarmupHeader = 'Flat Dumbbell Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestWarmupInstructions = [
                        "To perform this exercise, you lie on a flat bench with your feet flat on the floor and your back and head supported on the bench.",
                        "Holding a pair of dumbbells with your arms extended straight up and your palms facing each other, you slowly lower the dumbbells out to your sides in a wide arc, keeping a slight bend in your elbows, until you feel a stretch in your chest muscles. Then, you bring the dumbbells back up to the starting position, squeezing your chest muscles at the top of the movement.",
                        "This exercise can help to strengthen and define the chest muscles, as well as improve overall upper body strength and posture. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                default:
                    break;
                }
        },

        goBackChestWarmup() {
            this.isChestWarmupVisible = 'A';
            this.chestWarmupHeader = 'Warmups';
            this.videoSrc = 'dixie11/movie.mp4';
            this.chestWarmupInstructions = [];
        },
        confirmWarmupChest() {
            this.isChestWarmupVisible = 'C';
            this.chestShredWarmupForm = 'Y';
            // Additional logic if needed
        },

        // CHEST PRESS 1 SECTION
        // first section
        handleChestPressOne(rearDelt) {
            this.ischestPressOneVisible = 'B';
            switch (rearDelt) {
                case 'plateLoadedInclinePress':
                    this.intensifiedchestPressOne = 'A';
                    this.chestPressOneHeader = 'Plate Loaded Incline Press';
                    this.rearDeltStorage = 'Plate Loaded Incline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you sit on an incline bench with your back supported and your feet flat on the floor.",
                        "You grasp two handles attached to weight plates on either side of you and position them at chest level.",
                        "From this position, you push the handles away from your body, extending your arms until they are fully extended, and then bring them back towards your chest in a controlled manner.",
                        "This exercise provides a constant tension throughout the movement due to the weight plates, which can help to build and define the chest muscles.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."

                    ];
                    break;
                case 'plateLoadedFlatPress':
                    this.intensifiedchestPressOne = 'B';
                    this.chestPressOneHeader = 'Plate Loaded Flat Press';
                    this.rearDeltStorage = 'Plate Loaded Flat Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you sit on a bench with your back supported and your feet flat on the floor.",
                        "You grasp two handles attached to weight plates on either side of you and position them at chest level.",
                        "From this position, you push the handles away from your body, extending your arms until they are fully extended, and then bring them back towards your chest in a controlled manner.",
                        "This exercise provides a constant tension throughout the movement due to the weight plates, which can help to build and define the chest muscles.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'plateLoadedDeclinePress':
                    this.intensifiedchestPressOne = 'C';
                    this.chestPressOneHeader = 'Plate Loaded Decline Press';
                    this.rearDeltStorage = 'Plate Loaded Decline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you lie on a decline bench with your feet secured and your back and head supported.", 
                        "You grasp two handles attached to weight plates on either side of you and position them at chest level.",
                        "From this position, you push the handles away from your body, extending your arms until they are fully extended, and then bring them back towards your chest in a controlled manner.",
                        "This exercise provides a constant tension throughout the movement due to the weight plates, which can help to build and define the lower chest muscles.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dumbbellInclinePress':
                    this.intensifiedchestPressOne = 'D';
                    this.chestPressOneHeader = 'Dumbbell Incline Press';
                    this.rearDeltStorage = 'Dumbbell Incline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you lie on an incline bench with your back and head supported and your feet flat on the floor.",
                        "Holding a dumbbell in each hand, you position them at shoulder level with your palms facing forward.",
                        "From this position, you press the dumbbells up and away from your body until your arms are fully extended, and then lower them back down to shoulder level in a controlled manner.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dumbbellFlatPress':
                    this.intensifiedchestPressOne = 'E';
                    this.chestPressOneHeader = 'Dumbbell Flat Press';
                    this.rearDeltStorage = 'Dumbbell Flat Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you lie on a flat bench with your back and head supported and your feet flat on the floor.",
                        "Holding a dumbbell in each hand, you position them at chest level with your palms facing forward.",
                        "From this position, you press the dumbbells up and away from your body until your arms are fully extended, and then lower them back down to chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dumbbellDeclinePress':
                    this.intensifiedchestPressOne = 'F';
                    this.chestPressOneHeader = 'Dumbbell Decline Press';
                    this.rearDeltStorage = 'Dumbbell Decline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you lie on a decline bench with your feet secured and your back and head supported.",
                        "Holding a dumbbell in each hand, you position them at chest level with your palms facing forward.",
                        "From this position, you press the dumbbells up and away from your body until your arms are fully extended, and then lower them back down to chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'machineInclinePress':
                    this.intensifiedchestPressOne = 'G';
                    this.chestPressOneHeader = 'Smith Machine Incline Press';
                    this.rearDeltStorage = 'Smith Machine Incline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you lie on an incline bench placed underneath the Smith machine bar.",
                        "Your feet are planted firmly on the ground, and your back and head are supported by the bench. Grasp the bar with your palms facing forward, at a width slightly wider than shoulder-width apart.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury.",
                        "From this position, press the bar upward until your arms are fully extended, and then slowly lower it back down to your upper chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'machineFlatPress':
                    this.intensifiedchestPressOne = 'H';
                    this.chestPressOneHeader = 'Smith Machine Flat Press';
                    this.rearDeltStorage = 'Smith Machine Flat Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you lie on a flat bench placed underneath the Smith machine bar",
                        "Your feet are planted firmly on the ground, and your back and head are supported by the bench. Grasp the bar with your palms facing forward, at a width slightly wider than shoulder-width apart.",
                        "From this position, press the bar upward until your arms are fully extended, and then slowly lower it back down to your chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'machineDeclinePress':
                    this.intensifiedchestPressOne = 'I';
                    this.chestPressOneHeader = 'Smith Machine Decline Press';
                    this.rearDeltStorage = 'Smith Machine Decline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressOneInstructions = [
                        "To perform this exercise, you lie on a decline bench placed underneath the Smith machine bar.",
                        "Your feet are secured at the top of the bench, and your back and head are supported by the bench. Grasp the bar with your palms facing forward, at a width slightly wider than shoulder-width apart.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury.",
                        "From this position, press the bar upward until your arms are fully extended, and then slowly lower it back down to your lower chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                default:
                    break;
                }
        },

        handleChestPressOneIntensfier(intensifiedRearDelts) {
            this.ischestPressOneVisible = 'E';
            var statement = this.intensifiedchestPressOne;
            console.log("statement passed", statement)
            switch (statement){
                case 'A':
                    // PLATE LOADED INCLINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed A", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The plate-loaded incline press drop set is a variation of the traditional incline press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load a plate-loaded incline press machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."

                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you would load a plate-loaded incline press machine with a weight that is appropriate for your fitness level and adjust the machine so that you are sitting at a slight incline.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The incline press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                break;
                case 'B':
                     // PLATE LOADED FLAT PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed B", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The plate-loaded press drop set is a variation of the traditional press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load a plate-loaded press machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you would load a plate-loaded press machine with a weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The press primarily targets the middle portion of the chest muscles, and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                break;
                case 'C':
                     // PLATE LOADED DECLINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed C", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The plate-loaded incline press drop set is a variation of the traditional incline press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load a plate-loaded decline press machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you would load a plate-loaded decline press machine with a weight that is appropriate for your fitness level and adjust the machine so that you are sitting at a slight decline.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The decline press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                break;
                case 'D':
                     // INCLINE DUMBBELL PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed D", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The incline dumbbell press drop set is a variation of the traditional incline dumbbell press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would grab a set of dumbbells and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you would grab a set of dumbbells with a weight that is appropriate for your fitness level and adjust the bench so that you are sitting at a slight incline.",
                                "Then press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The incline dumbbell press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                break;
                case 'E':
                    // FLAT DUMBBELL PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed E", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The dumbbell press drop set is a variation of the traditional dumbbell press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would grab a set of dumbbells with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you would grab dumbbells with a weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The dumbbell press primarily targets the middle portion of the chest muscles, and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                break;
                case 'F':
                    // DECLINE DUMBBELL PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed F", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The decline dumbbell press drop set is a variation of the traditional decline dumbbell press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would grab a set of dummbells with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you would load a decline dummbbell press machine with a weight that is appropriate for your fitness level and adjust the bench so that you are sitting at a slight decline.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The decline dumbbell press primarily targets the lower portion of the chest muscles, and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'G':
                    // INCLINE SMITH MACHINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed G", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The incline smith machine press drop set is a variation of the traditional incline smith machine press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load the bar of the incline smich machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you lie on an incline bench placed underneath the Smith machine bar.",
                                "Your feet are planted firmly on the ground, and your back and head are supported by the bench. Grasp the bar with your palms facing forward, at a width slightly wider than shoulder-width apart.",
                                "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury.",
                                "From this position, press the bar upward until your arms are fully extended, and then slowly lower it back down to your upper chest level in a controlled manner.",
                                "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'H':
                    // FLAT SMITH MACHINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed H", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The smith machine press drop set is a variation of the traditional smith machine press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load the bar of the smith machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you would load the bar of the smith machine with a weight that is appropriate for your fitness level.",
                                "Then press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The smith machine press primarily targets the middle portion of the chest muscles, and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'I':
                    // DECLINE SMITH MACHINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            console.log("statement passed I", statement)
                            this.chestPressOneHeader = 'Drop Set';
                            this.chestPressOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "The decline smith machine press drop set is a variation of the traditional decline smith machine press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load the bar of the smith machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.chestPressOneHeader = 'Pause Repetitions';
                            this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "To perform this exercise, you would load the bar of the smith press machine with a weight that is appropriate for your fitness level and adjust the bench so that you are sitting at a slight decline.",
                                "Grasp the bar and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The decline smith machine press primarily targets the lower portion of the chest muscles and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.chestPressOneHeader = 'Negatives';
                            this.chestPressOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                }
                break;
            default:
                break;
            }
        },


        goBackShoulderChestPressOne() {
            this.ischestPressOneVisible = 'A';
            this.chestPressOneHeader = 'Chest Press 1';
            this.videoSrc = 'dixie11/movie.mp4';
            this.chestPressOneInstructions = [];
        },
        confirmChestPressOneShoulder() {
            this.ischestPressOneVisible = 'C';
            this.chestShredPressOneForm = 'Y';
            // Additional logic if needed
        },
        confirmChestPressOneShoulderTwo() {
            this.ischestPressOneVisible = 'F';
            this.chestPressOneHeader = this.rearDeltStorage;
            this.chestPressOneP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredPressOneForm = 'Y';
            // Additional logic if needed
        },
        intensifyChestPressOneShoulder() {
            this.chestPressOneHeader = 'Intensified';
            this.ischestPressOneVisible = 'D';
            this.chestPressOneP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackShoulderChestPressOneSecond() {
            this.ischestPressOneVisible = 'B'           
            this.chestPressOneHeader = this.rearDeltStorage;
            this.chestPressOneP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackShoulderChestPressOneThird() {
            this.ischestPressOneVisible = 'D'           
            // this.rearDeltHeader = this.rearDeltStorage;
            // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';

        },

        // NEW SECTION
        // CHEST FLIES 1
        // second section
        handleChestFlyOne(rearDelt) {
            this.ischestFlyOneVisible = 'B';
            switch (rearDelt) {
                case 'inclineSeatedCableFly':
                    this.intensifiedchestFlyOne = 'A';
                    this.chestFlyOneHeader = 'Incline Seated Cable Fly';
                    this.rearDeltStorage = 'Incline Seated Cable Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneInstructions = [
                        "To perform this exercise, you sit on an incline bench facing a cable machine with your feet flat on the ground.",
                        "Grasp the handles attached to the cables with your palms facing inward and positioned at shoulder height. From this position, you pull the cables together and towards the center of your chest, keeping your arms slightly bent and your elbows pointing outwards.",
                        "Then, slowly release the cables back to the starting position in a controlled manner.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'flatSeatedCableFly':
                    this.intensifiedchestFlyOne = 'B';
                    this.chestFlyOneHeader = 'Seated Cable Fly';
                    this.rearDeltStorage = 'Seated Cable Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneInstructions = [
                        "To perform this exercise, you would sit on a bench facing a cable machine with the cables set at chest height.",
                        "You would grasp each cable with a neutral grip (palms facing each other), then lean back slightly and keep your feet firmly planted on the ground.",
                        "From this starting position, you would pull the cables together in front of your chest, making sure to keep a slight bend in your elbows and a steady, controlled motion.",
                        "Once the cables meet in front of your chest, pause for a moment, then slowly return to the starting position.",
                        "The flat seated cable fly is a great exercise for targeting the entire chest muscle, including the upper, middle, and lower portions."
                    ];
                    break;
                case 'declineSeatedCableFly':
                    this.intensifiedchestFlyOne = 'C';
                    this.chestFlyOneHeader = 'Decline Seated Cable Fly';
                    this.rearDeltStorage = 'Decline Seated Cable Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneInstructions = [
                        "To perform this exercise, you sit on a decline bench facing a cable machine with your feet flat on the ground.",
                        "Grasp the handles attached to the cables with your palms facing inward and positioned at chest height. From this position, you pull the cables together and towards the center of your chest, keeping your arms slightly bent and your elbows pointing outwards.",
                        "Then, slowly release the cables back to the starting position in a controlled manner.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'inclineStandingFly':
                    this.intensifiedchestFlyOne = 'D';
                    this.chestFlyOneHeader = 'Incline Standing Fly';
                    this.rearDeltStorage = 'Incline Standing Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneInstructions = [
                        "To perform this exercise, you stand facing a cable machine with one foot forward and the other foot back for stability.",
                        "Grasp the handles attached to the cables with your palms facing inward and positioned at shoulder height. Lean forward slightly, keeping your back straight, and extend your arms out to the sides. From this position, you pull the cables together and towards the center of your chest, keeping your arms slightly bent and your elbows pointing outwards.",
                        "Then, slowly release the cables back to the starting position in a controlled manner.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'declineStandingFly':
                    this.intensifiedchestFlyOne = 'E';
                    this.chestFlyOneHeader = 'Decline Standing Fly';
                    this.rearDeltStorage = 'Decline Standing Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneInstructions = [
                        "To perform this exercise, you stand facing a cable machine with one foot forward and the other foot back for stability.", 
                        "Grasp the handles attached to the cables with your palms facing inward and positioned at chest height. Lean forward slightly, keeping your back straight, and extend your arms out to the sides. From this position, you pull the cables together and towards the center of your chest, keeping your arms slightly bent and your elbows pointing outwards.",
                        "Then, slowly release the cables back to the starting position in a controlled manner.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dumbbellInclineFly':
                    this.intensifiedchestFlyOne = 'F';
                    this.chestFlyOneHeader = 'Dumbbell Incline Fly';
                    this.rearDeltStorage = 'Dumbbell Incline Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneInstructions = [
                        "To perform this exercise, you lie on an incline bench with your feet firmly on the ground.",
                        "Hold a dumbbell in each hand with your arms extended upward and your palms facing each other. From this position, you lower the dumbbells out to the sides in a wide arc, keeping a slight bend in your elbows, until you feel a stretch in your chest muscles.",
                        "Then, use your chest muscles to bring the dumbbells back to the starting position, squeezing them together at the top of the movement.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dumbbellFlatFly':
                    this.intensifiedchestFlyOne = 'G';
                    this.chestFlyOneHeader = 'Dumbbell Flat Fly';
                    this.rearDeltStorage = 'Dumbbell Flat Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneInstructions = [
                        "To perform this exercise, you would lie flat on a bench with a dumbbell in each hand.",
                        "You would start with your arms extended straight out to the sides, with your palms facing up.",
                        "From this starting position, you would slowly lower the dumbbells down towards the ground, keeping a slight bend in your elbows and maintaining control throughout the motion.",
                        "Once the dumbbells reach chest level, pause for a moment, then slowly raise them back up to the starting position.",
                        "When performed correctly, the flat dumbbell fly can be an effective exercise for building strength and size in the chest muscles."
                    ];
                    break;
                case 'dumbbellDeclineFly':
                    this.intensifiedchestFlyOne = 'H';
                    this.chestFlyOneHeader = 'Dumbbell Decline Fly';
                    this.rearDeltStorage = 'Dumbbell Decline Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneInstructions = [
                        "To perform this exercise, you lie on an decline bench with your feet firmly on the ground.", 
                        "Hold a dumbbell in each hand with your arms extended upward and your palms facing each other. From this position, you lower the dumbbells out to the sides in a wide arc, keeping a slight bend in your elbows, until you feel a stretch in your chest muscles.",
                        "Then, use your chest muscles to bring the dumbbells back to the starting position, squeezing them together at the top of the movement.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                default:
                    break;
                }
        },

        handleChestFlyOneIntensify(intensifiedRearDelts) {
            this.ischestFlyOneVisible = 'G';
            var statement = this.intensifiedchestFlyOne;
            switch (statement){
                case 'A':
                    // INCLINE SEATED CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.chestFlyOneHeader = 'Drop Set';
                            this.chestFlyOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "To perform the seated cable incline fly exercise, you sit on a bench with an adjustable incline, facing away from the cable machine. Perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "The key to performing seated cable incline fly drop sets effectively is to focus on maintaining proper form throughout the exercise, even as the weight gets lighter.",
                                "Aim for 3 to 4 different weight changes."

                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.chestFlyOneHeader = 'Pause Repetitions';
                            this.chestFlyOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "To perform seated cable incline fly pause reps, you begin by sitting on a bench with an adjustable incline, facing away from the cable machine.",
                                "You then grab the handles attached to the cables, with your arms extended out to the sides at shoulder height.",
                                "From this starting position, you then bring your arms together in front of your chest, squeezing your pectoral muscles as you do so, before pausing for a brief moment at the top of the movement before slowly lowering your arms back out to the starting position.",
                                "The pause is typically held for 2-3 seconds at the point where your arms are fully extended in front of your chest, creating maximum tension in your pectoral muscles.",
                                "By holding this pause, you increase the amount of time under tension for your muscles, which can stimulate muscle growth and help to develop greater muscle strength."
                            ];
                            break;
                        case 'negatives_fly':
                            this.chestFlyOneHeader = 'Negatives';
                            this.chestFlyOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'B':
                     // FLAT SEATED CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.chestFlyOneHeader = 'Drop Set';
                            this.chestFlyOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "To perform the seated cable flat fly exercise, you sit on a bench facing away from the cable machine. Perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "The key to performing seated cable flat fly drop sets effectively is to focus on maintaining proper form throughout the exercise, even as the weight gets lighter.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.chestFlyOneHeader = 'Pause Repetitions';
                            this.chestFlyOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "To perform seated cable flat fly pause reps, you begin by sitting on a bench facing away from the cable machine.",
                                "You then grab the handles attached to the cables, with your arms extended out to the sides at shoulder height.",
                                "From this starting position, you then bring your arms together in front of your chest, squeezing your pectoral muscles as you do so, before pausing for a brief moment at the top of the movement before slowly lowering your arms back out to the starting position.",
                                "The pause is typically held for 2-3 seconds at the point where your arms are fully extended in front of your chest, creating maximum tension in your pectoral muscles.",
                                "By holding this pause, you increase the amount of time under tension for your muscles, which can stimulate muscle growth and help to develop greater muscle strength."
                            ];
                            break;
                        case 'negatives_fly':
                            this.chestFlyOneHeader = 'Negatives';
                            this.chestFlyOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'C':
                     // DECLINE SEATED CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.chestFlyOneHeader = 'Drop Set';
                            this.chestFlyOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "To perform the seated cable decline fly exercise, you sit on a bench with an adjustable decline, facing away from the cable machine. Perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "The key to performing seated cable decline fly drop sets effectively is to focus on maintaining proper form throughout the exercise, even as the weight gets lighter.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.chestFlyOneHeader = 'Pause Repetitions';
                            this.chestFlyOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "To perform seated cable decline fly pause reps, you begin by sitting on a bench with an adjustable decline, facing away from the cable machine.",
                                "You then grab the handles attached to the cables, with your arms extended out to the sides at shoulder height.",
                                "From this starting position, you then bring your arms together in front of your chest, squeezing your pectoral muscles as you do so, before pausing for a brief moment at the top of the movement before slowly lowering your arms back out to the starting position.",
                                "The pause is typically held for 2-3 seconds at the point where your arms are fully extended in front of your chest, creating maximum tension in your pectoral muscles.",
                                "By holding this pause, you increase the amount of time under tension for your muscles, which can stimulate muscle growth and help to develop greater muscle strength."
                            ];
                            break;
                        case 'negatives_fly':
                            this.chestFlyOneHeader = 'Negatives';
                            this.chestFlyOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'D':
                     // INCLINE STANDING CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.chestFlyOneHeader = 'Drop Set';
                            this.chestFlyOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the high position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for a moment at the bottom of the movement, then slowly bring your arms back up to the starting position. Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.chestFlyOneHeader = 'Pause Repetitions';
                            this.chestFlyOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the high position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for a 1 to 3 seconds at the bottom of the movement, then slowly bring your arms back up to the starting position."
                            ];
                            break;
                        case 'negatives_fly':
                            this.chestFlyOneHeader = 'Negatives';
                            this.chestFlyOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'E':
                    // DECLINE STANDING CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.chestFlyOneHeader = 'Drop Set';
                            this.chestFlyOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the low position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for a moment at the bottom of the movement, then slowly bring your arms back up to the starting position. Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.chestFlyOneHeader = 'Pause Repetitions';
                            this.chestFlyOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the low position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for 1 to 3 seconds at the bottom of the movement, then slowly bring your arms back up to the starting position."
                            ];
                            break;
                        case 'negatives_fly':
                            this.chestFlyOneHeader = 'Negatives';
                            this.chestFlyOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'F':
                    // INCLINE DUMBBELL FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.chestFlyOneHeader = 'Drop Set';
                            this.chestFlyOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Adjust an incline bench to a comfortable angle and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for a moment at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.chestFlyOneHeader = 'Pause Repetitions';
                            this.chestFlyOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Adjust an incline bench to a comfortable angle and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for 2 - 3 seconds at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Repeat for 3 to 4 reps."
                            ];
                            break;
                        case 'negatives_fly':
                            this.chestFlyOneHeader = 'Negatives';
                            this.chestFlyOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'G':
                    // FLAT DUMBBELL FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.chestFlyOneHeader = 'Drop Set';
                            this.chestFlyOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Garb an flat bench and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for a moment at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.chestFlyOneHeader = 'Pause Repetitions';
                            this.chestFlyOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "To perform this exercise, you would lie flat on a bench with a dumbbell in each hand.",
                                "You would start with your arms extended straight out to the sides, with your palms facing up.",
                                "From this starting position, you would slowly lower the dumbbells down towards the ground, keeping a slight bend in your elbows and maintaining control throughout the motion.",
                                "Once the dumbbells reach chest level, pause for a moment, then slowly raise them back up to the starting position.",
                                "When performed correctly, the flat dumbbell fly can be an effective exercise for building strength and size in the chest muscles."
                            ];
                            break;
                        case 'negatives_fly':
                            this.chestFlyOneHeader = 'Negatives';
                            this.chestFlyOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'H':
                    // DECLINE DUMBBELL FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.chestFlyOneHeader = 'Drop Set';
                            this.chestFlyOneHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Adjust an decline bench to a comfortable angle and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for a moment at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.chestFlyOneHeader = 'Pause Repetitions';
                            this.chestFlyOneHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Adjust an decline bench to a comfortable angle and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for 2 - 3 seconds at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Repeat for 3 - 4 sets."
                            ];
                            break;
                        case 'negatives_fly':
                            this.chestFlyOneHeader = 'Negatives';
                            this.chestFlyOneHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyOneIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },

        handleChestFlyOneSuperSet(rearDelt) {
            this.ischestFlyOneVisible = 'I';
            switch (rearDelt) {
                case 'fly_platePinchPress':
                    this.chestFlyOneHeader = 'Plate Pinch Press';
                    this.chestFlyOneHeaderConfirmed = 'Plate Pinch Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneSupersetInstructions = [
                        "To perform the plate pinch press, follow these steps:",
                        "Lie down on a flat bench with your feet firmly planted on the ground and your back and shoulders pressed against the bench.",
                        "Hold a weight plate between your fingers with your palms facing each other and your elbows bent, bringing the plate to your chest.",
                        "Extend your arms to press the weight plate away from your body, keeping your fingers pinched tightly on the plate to maintain your grip.",
                        "Pause for a moment at the top of the movement, then slowly lower the plate back down to your chest."
                    ];
                    break;
                case 'fly_super_unilateral':
                    this.chestFlyOneHeader = 'Unilateral Fly';
                    this.chestFlyOneHeaderConfirmed = 'Unilateral Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneSupersetInstructions = [
                        "Begin in a plank position with your hands placed slightly wider than shoulder-width apart on the ground.",
                        "Keep your core engaged and your body in a straight line from your head to your heels.",
                        "Lower your body towards the ground by bending your elbows, keeping them close to your body.",
                        "Stop when your chest is just above the ground or when your elbows reach a 90-degree angle.",
                        "Push back up to the starting position by extending your arms and squeezing your chest and triceps."
                    ];
                    break;
                case 'fly_super_pushUps':
                    this.chestFlyOneHeader = 'Push Ups';
                    this.chestFlyOneHeaderConfirmed = 'Push Ups';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyOneSupersetInstructions = [
                        "Begin in a plank position with your hands placed slightly wider than shoulder-width apart on the ground.",
                        "Keep your core engaged and your body in a straight line from your head to your heels.",
                        "Lower your body towards the ground by bending your elbows, keeping them close to your body.",
                        "Stop when your chest is just above the ground or when your elbows reach a 90-degree angle.",
                        "Push back up to the starting position by extending your arms and squeezing your chest and triceps."
                    ];
                    break;
                default:
                    break;
                }
        },

        goBackChestFlyOne() {
            this.ischestFlyOneVisible = 'A';
            this.chestFlyOneHeader = 'Chest Fly 1';
            this.videoSrc = 'dixie11/movie.mp4';
            this.chestFlyOneInstructions = [];
        },
        confirmChestFlyOne() {
            this.ischestFlyOneVisible = 'C'; 
            this.chestShredFlyOneForm = 'Y';
            // Additional logic if needed
        },
        confirmChestFlyOneSecond() {
            this.ischestFlyOneVisible = 'H';
            this.chestFlyOneHeader = this.rearDeltStorage;
            this.chestFlyOneP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredFlyOneForm = 'Y';

            // Additional logic if needed
        },
        confirmChestFlyOneThird() {
            this.ischestFlyOneVisible = 'J';
            this.chestFlyOneHeader = this.rearDeltStorage;
            this.chestFlyOneP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredFlyOneForm = 'Y';

            // Additional logic if needed
        },
        intensifyChestFlyOne() {
            this.chestFlyOneHeader = 'Intensified';
            this.ischestFlyOneVisible = 'D';
            this.chestFlyOneP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackChestFlyOneSecond() {
            this.ischestFlyOneVisible = 'B'           
            this.chestFlyOneHeader = this.rearDeltStorage;
            this.chestFlyOneP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackChestFlyOneThird() {
            this.ischestFlyOneVisible = 'D';          
        },
        goBackChestFlyOneFourth() {
            this.ischestFlyOneVisible = 'D';           
        },
        goBackChestFlyOneFifth() {
            this.ischestFlyOneVisible = 'E';           
        },
        goBackChestFlyOneSixth() {
            this.ischestFlyOneVisible = 'F';           
        },


        // NEW SECTION
        // CHEST PRESS 2

        handleChestPressTwo(rearDelt) {
            this.ischestPressTwoVisible = 'B';
            switch (rearDelt) {
                case 'secondInclinePlate':
                    this.intensifiedchestPressTwo = 'A';
                    this.chestPressTwoHeader = 'Plate Loaded Incline Press';
                    this.rearDeltStorage = 'Plate Loaded Incline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you sit on an incline bench with your back supported and your feet flat on the floor.",
                        "You grasp two handles attached to weight plates on either side of you and position them at chest level.",
                        "From this position, you push the handles away from your body, extending your arms until they are fully extended, and then bring them back towards your chest in a controlled manner.",
                        "This exercise provides a constant tension throughout the movement due to the weight plates, which can help to build and define the chest muscles.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."

                    ];
                    break;
                case 'secondFlatPlate':
                    this.intensifiedchestPressTwo = 'B';
                    this.chestPressTwoHeader = 'Plate Loaded Flat Press';
                    this.rearDeltStorage = 'Plate Loaded Flat Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you sit on a bench with your back supported and your feet flat on the floor.",
                        "You grasp two handles attached to weight plates on either side of you and position them at chest level.",
                        "From this position, you push the handles away from your body, extending your arms until they are fully extended, and then bring them back towards your chest in a controlled manner.",
                        "This exercise provides a constant tension throughout the movement due to the weight plates, which can help to build and define the chest muscles.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'secondDeclinePlate':
                    this.intensifiedchestPressTwo = 'C';
                    this.chestPressTwoHeader = 'Plate Loaded Decline Press';
                    this.rearDeltStorage = 'Plate Loaded Decline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you lie on a decline bench with your feet secured and your back and head supported.", 
                        "You grasp two handles attached to weight plates on either side of you and position them at chest level.",
                        "From this position, you push the handles away from your body, extending your arms until they are fully extended, and then bring them back towards your chest in a controlled manner.",
                        "This exercise provides a constant tension throughout the movement due to the weight plates, which can help to build and define the lower chest muscles.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'secondDumbbellIncline':
                    this.intensifiedchestPressTwo = 'D';
                    this.chestPressTwoHeader = 'Dumbbell Incline Press';
                    this.rearDeltStorage = 'Dumbbell Incline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you lie on an incline bench with your back and head supported and your feet flat on the floor.",
                        "Holding a dumbbell in each hand, you position them at shoulder level with your palms facing forward.",
                        "From this position, you press the dumbbells up and away from your body until your arms are fully extended, and then lower them back down to shoulder level in a controlled manner.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'secondDumbbellFlat':
                    this.intensifiedchestPressTwo = 'E';
                    this.chestPressTwoHeader = 'Dumbbell Flat Press';
                    this.rearDeltStorage = 'Dumbbell Flat Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you lie on a flat bench with your back and head supported and your feet flat on the floor.",
                        "Holding a dumbbell in each hand, you position them at chest level with your palms facing forward.",
                        "From this position, you press the dumbbells up and away from your body until your arms are fully extended, and then lower them back down to chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'secondDumbbellDecline':
                    this.intensifiedchestPressTwo = 'F';
                    this.chestPressTwoHeader = 'Dumbbell Decline Press';
                    this.rearDeltStorage = 'Dumbbell Decline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you lie on a decline bench with your feet secured and your back and head supported.",
                        "Holding a dumbbell in each hand, you position them at chest level with your palms facing forward.",
                        "From this position, you press the dumbbells up and away from your body until your arms are fully extended, and then lower them back down to chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'secondSmithIncline':
                    this.intensifiedchestPressTwo = 'G';
                    this.chestPressTwoHeader = 'Smith Machine Incline Press';
                    this.rearDeltStorage = 'Smith Machine Incline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you lie on an incline bench placed underneath the Smith machine bar.",
                        "Your feet are planted firmly on the ground, and your back and head are supported by the bench. Grasp the bar with your palms facing forward, at a width slightly wider than shoulder-width apart.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury.",
                        "From this position, press the bar upward until your arms are fully extended, and then slowly lower it back down to your upper chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'secondSmithFlat':
                    this.intensifiedchestPressTwo = 'H';
                    this.chestPressTwoHeader = 'Smith Machine Flat Press';
                    this.rearDeltStorage = 'Smith Machine Flat Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you lie on a flat bench placed underneath the Smith machine bar",
                        "Your feet are planted firmly on the ground, and your back and head are supported by the bench. Grasp the bar with your palms facing forward, at a width slightly wider than shoulder-width apart.",
                        "From this position, press the bar upward until your arms are fully extended, and then slowly lower it back down to your chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'secondSmithDecline':
                    this.intensifiedchestPressTwo = 'I';
                    this.chestPressTwoHeader = 'Smith Machine Decline Press';
                    this.rearDeltStorage = 'Smith Machine Decline Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestPressTwoInstructions = [
                        "To perform this exercise, you lie on a decline bench placed underneath the Smith machine bar.",
                        "Your feet are secured at the top of the bench, and your back and head are supported by the bench. Grasp the bar with your palms facing forward, at a width slightly wider than shoulder-width apart.",
                        "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury.",
                        "From this position, press the bar upward until your arms are fully extended, and then slowly lower it back down to your lower chest level in a controlled manner.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                default:
                    break;
                }
        },

        handleChestPressTwoIntensfier(intensifiedRearDelts) {
            this.ischestPressTwoVisible = 'E';
            var statement = this.intensifiedchestPressTwo;
            switch (statement){
                case 'A':
                    this.chestPressTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
                    // PLATE LOADED INCLINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The plate-loaded incline press drop set is a variation of the traditional incline press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load a plate-loaded incline press machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."

                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you would load a plate-loaded incline press machine with a weight that is appropriate for your fitness level and adjust the machine so that you are sitting at a slight incline.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The incline press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'B':
                     // PLATE LOADED FLAT PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The plate-loaded press drop set is a variation of the traditional press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load a plate-loaded press machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you would load a plate-loaded press machine with a weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The press primarily targets the middle portion of the chest muscles, and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'C':
                     // PLATE LOADED DECLINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The plate-loaded decline press drop set is a variation of the traditional decline press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load a plate-loaded decline press machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you would load a plate-loaded decline press machine with a weight that is appropriate for your fitness level and adjust the machine so that you are sitting at a slight decline.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The decline press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'D':
                     // INCLINE DUMBBELL PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The incline dumbbell press drop set is a variation of the traditional incline dumbbell press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would grab a set of dumbbells and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you would grab a set of dumbbells with a weight that is appropriate for your fitness level and adjust the bench so that you are sitting at a slight incline.",
                                "Then press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The incline dumbbell press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'E':
                    // FLAT DUMBBELL PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The dumbbell press drop set is a variation of the traditional dumbbell press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would grab a set of dumbbells with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you would grab dumbbells with a weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The dumbbell press primarily targets the middle portion of the chest muscles, and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'F':
                    // DECLINE DUMBBELL PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The decline dumbbell press drop set is a variation of the traditional decline dumbbell press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would grab a set of dummbells with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPreschestPressTwoHeaderConfirmedsOneHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you would load a decline dummbbell press machine with a weight that is appropriate for your fitness level and adjust the bench so that you are sitting at a slight decline.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The decline dumbbell press primarily targets the lower portion of the chest muscles, and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'G':
                    // INCLINE SMITH MACHINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The incline smith machine press drop set is a variation of the traditional incline smith machine press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load the bar of the incline smich machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you lie on an incline bench placed underneath the Smith machine bar.",
                                "Your feet are planted firmly on the ground, and your back and head are supported by the bench. Grasp the bar with your palms facing forward, at a width slightly wider than shoulder-width apart.",
                                "It also engages the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury.",
                                "From this position, press the bar upward until your arms are fully extended, and then slowly lower it back down to your upper chest level in a controlled manner.",
                                "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'H':
                    // FLAT SMITH MACHINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The smith machine press drop set is a variation of the traditional smith machine press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load the bar of the smith machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you would load the bar of the smith machine with a weight that is appropriate for your fitness level.",
                                "Then press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The smith machine press primarily targets the middle portion of the chest muscles, and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'I':
                    // DECLINE SMITH MACHINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_two':
                            this.chestPressTwoHeader = 'Drop Set';
                            this.chestPressTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "The decline smith machine press drop set is a variation of the traditional decline smith machine press exercise that involves performing a set with progressively lighter weights, or “dropping” the weight, to increase muscle fatigue and potentially achieve greater muscle growth.",
                                "To perform this exercise, you would load the bar of the smith machine with a heavy weight and perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_two':
                            this.chestPressTwoHeader = 'Pause Repetitions';
                            this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "To perform this exercise, you would load the bar of the smith press machine with a weight that is appropriate for your fitness level and adjust the bench so that you are sitting at a slight decline.",
                                "Grasp the bar and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The decline smith machine press primarily targets the lower portion of the chest muscles and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press_two':
                            this.chestPressTwoHeader = 'Negatives';
                            this.chestPressTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestPressTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },


        goBackChestPressTwo() {
            this.ischestPressTwoVisible = 'A';
            this.chestPressTwoHeader = 'Chest Press 2';
            this.videoSrc = 'dixie11/movie.mp4';
            this.chestPressTwoInstructions = [];
        },
        confirmChestPressTwo() { 
            this.ischestPressTwoVisible = 'C';
            this.chestShredPressTwoForm = 'Y';

            // Additional logic if needed
        },
        confirmChestPressTwoSecond() {
            this.ischestPressTwoVisible = 'F';
            this.chestPressTwoHeader = this.rearDeltStorage;
            this.chestPressTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredPressTwoForm = 'Y';

            // Additional logic if needed
        },
        intensifyChestPressTwo() {
            this.chestPressTwoHeader = 'Intensified';
            this.ischestPressTwoVisible = 'D';
            this.chestPressTwoP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackChestPressTwoSecond() {
            this.ischestPressTwoVisible = 'B'           
            this.chestPressTwoHeader = this.rearDeltStorage;
            this.chestPressTwoP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackChestPressTwoThird() {
            this.ischestPressTwoVisible = 'D'           
            // this.rearDeltHeader = this.rearDeltStorage;
            // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';

        },

        // NEW SECTION
        // CHEST FLIES 2



        handleChestFlyTwo(rearDelt) {
            this.ischestFlyTwoVisible = 'B';
            switch (rearDelt) {
                case 'inclineSeatedCableFly_two':
                    this.intensifiedchestFlyTwo = 'A';
                    this.chestFlyTwoHeader = 'Incline Seated Cable Fly';
                    this.rearDeltStorage = 'Incline Seated Cable Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoInstructions = [
                        "To perform this exercise, you sit on an incline bench facing a cable machine with your feet flat on the ground.",
                        "Grasp the handles attached to the cables with your palms facing inward and positioned at shoulder height. From this position, you pull the cables together and towards the center of your chest, keeping your arms slightly bent and your elbows pointing outwards.",
                        "Then, slowly release the cables back to the starting position in a controlled manner.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'flatSeatedCableFly_two':
                    this.intensifiedchestFlyTwo = 'B';
                    this.chestFlyTwoHeader = 'Seated Cable Fly';
                    this.rearDeltStorage = 'Seated Cable Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoInstructions = [
                        "To perform this exercise, you would sit on a bench facing a cable machine with the cables set at chest height.",
                        "You would grasp each cable with a neutral grip (palms facing each other), then lean back slightly and keep your feet firmly planted on the ground.",
                        "From this starting position, you would pull the cables together in front of your chest, making sure to keep a slight bend in your elbows and a steady, controlled motion.",
                        "Once the cables meet in front of your chest, pause for a moment, then slowly return to the starting position.",
                        "The flat seated cable fly is a great exercise for targeting the entire chest muscle, including the upper, middle, and lower portions."
                    ];
                    break;
                case 'declineSeatedCableFly_two':
                    this.intensifiedchestFlyTwo = 'C';
                    this.chestFlyTwoHeader = 'Decline Seated Cable Fly';
                    this.rearDeltStorage = 'Decline Seated Cable Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoInstructions = [
                        "To perform this exercise, you sit on a decline bench facing a cable machine with your feet flat on the ground.",
                        "Grasp the handles attached to the cables with your palms facing inward and positioned at chest height. From this position, you pull the cables together and towards the center of your chest, keeping your arms slightly bent and your elbows pointing outwards.",
                        "Then, slowly release the cables back to the starting position in a controlled manner.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'inclineStandingFly_two':
                    this.intensifiedchestFlyTwo = 'D';
                    this.chestFlyTwoHeader = 'Incline Standing Fly';
                    this.rearDeltStorage = 'Incline Standing Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoInstructions = [
                        "To perform this exercise, you stand facing a cable machine with one foot forward and the other foot back for stability.",
                        "Grasp the handles attached to the cables with your palms facing inward and positioned at shoulder height. Lean forward slightly, keeping your back straight, and extend your arms out to the sides. From this position, you pull the cables together and towards the center of your chest, keeping your arms slightly bent and your elbows pointing outwards.",
                        "Then, slowly release the cables back to the starting position in a controlled manner.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'declineStandingFly_two':
                    this.intensifiedchestFlyTwo = 'E';
                    this.chestFlyTwoHeader = 'Decline Standing Fly';
                    this.rearDeltStorage = 'Decline Standing Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoInstructions = [
                        "To perform this exercise, you stand facing a cable machine with one foot forward and the other foot back for stability.", 
                        "Grasp the handles attached to the cables with your palms facing inward and positioned at chest height. Lean forward slightly, keeping your back straight, and extend your arms out to the sides. From this position, you pull the cables together and towards the center of your chest, keeping your arms slightly bent and your elbows pointing outwards.",
                        "Then, slowly release the cables back to the starting position in a controlled manner.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dumbbellInclineFly_two':
                    this.intensifiedchestFlyTwo = 'F';
                    this.chestFlyTwoHeader = 'Dumbbell Incline Fly';
                    this.rearDeltStorage = 'Dumbbell Incline Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoInstructions = [
                        "To perform this exercise, you lie on an incline bench with your feet firmly on the ground.",
                        "Hold a dumbbell in each hand with your arms extended upward and your palms facing each other. From this position, you lower the dumbbells out to the sides in a wide arc, keeping a slight bend in your elbows, until you feel a stretch in your chest muscles.",
                        "Then, use your chest muscles to bring the dumbbells back to the starting position, squeezing them together at the top of the movement.",
                        "This exercise can help to strengthen and define the upper chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dumbbellFlatFly_two':
                    this.intensifiedchestFlyTwo = 'G';
                    this.chestFlyTwoHeader = 'Dumbbell Flat Fly';
                    this.rearDeltStorage = 'Dumbbell Flat Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoInstructions = [
                        "To perform this exercise, you would lie flat on a bench with a dumbbell in each hand.",
                        "You would start with your arms extended straight out to the sides, with your palms facing up.",
                        "From this starting position, you would slowly lower the dumbbells down towards the ground, keeping a slight bend in your elbows and maintaining control throughout the motion.",
                        "Once the dumbbells reach chest level, pause for a moment, then slowly raise them back up to the starting position.",
                        "When performed correctly, the flat dumbbell fly can be an effective exercise for building strength and size in the chest muscles."
                    ];
                    break;
                case 'dumbbellDeclineFly_two':
                    this.intensifiedchestFlyTwo = 'H';
                    this.chestFlyTwoHeader = 'Dumbbell Decline Fly';
                    this.rearDeltStorage = 'Dumbbell Decline Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoInstructions = [
                        "To perform this exercise, you lie on an decline bench with your feet firmly on the ground.", 
                        "Hold a dumbbell in each hand with your arms extended upward and your palms facing each other. From this position, you lower the dumbbells out to the sides in a wide arc, keeping a slight bend in your elbows, until you feel a stretch in your chest muscles.",
                        "Then, use your chest muscles to bring the dumbbells back to the starting position, squeezing them together at the top of the movement.",
                        "This exercise can help to strengthen and define the lower chest muscles, as well as engage the shoulders and triceps as secondary muscles.",
                        "It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                default:
                    break;
                }
        },
        handleChestFlyTwoIntensify(intensifiedRearDelts) {
            this.ischestFlyTwoVisible = 'G';
            var statement = this.intensifiedchestFlyTwo;
            switch (statement){
                case 'A':
                    // INCLINE SEATED CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_shoulder':
                            this.chestFlyTwoHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "To perform the seated cable incline fly exercise, you sit on a bench with an adjustable incline, facing away from the cable machine. Perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "The key to performing seated cable incline fly drop sets effectively is to focus on maintaining proper form throughout the exercise, even as the weight gets lighter.",
                                "Aim for 3 to 4 different weight changes."

                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_shoulder':
                            this.chestFlyTwoHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "To perform seated cable incline fly pause reps, you begin by sitting on a bench with an adjustable incline, facing away from the cable machine.",
                                "You then grab the handles attached to the cables, with your arms extended out to the sides at shoulder height.",
                                "From this starting position, you then bring your arms together in front of your chest, squeezing your pectoral muscles as you do so, before pausing for a brief moment at the top of the movement before slowly lowering your arms back out to the starting position.",
                                "The pause is typically held for 2-3 seconds at the point where your arms are fully extended in front of your chest, creating maximum tension in your pectoral muscles.",
                                "By holding this pause, you increase the amount of time under tension for your muscles, which can stimulate muscle growth and help to develop greater muscle strength."
                            ];
                            break;
                        case 'negatives_shoulder':
                            this.chestFlyTwoHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'B':
                     // FLAT SEATED CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_shoulder':
                            this.chestFlyTwoHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "To perform the seated cable flat fly exercise, you sit on a bench facing away from the cable machine. Perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "The key to performing seated cable flat fly drop sets effectively is to focus on maintaining proper form throughout the exercise, even as the weight gets lighter.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_shoulder':
                            this.chestFlyTwoHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "To perform seated cable flat fly pause reps, you begin by sitting on a bench facing away from the cable machine.",
                                "You then grab the handles attached to the cables, with your arms extended out to the sides at shoulder height.",
                                "From this starting position, you then bring your arms together in front of your chest, squeezing your pectoral muscles as you do so, before pausing for a brief moment at the top of the movement before slowly lowering your arms back out to the starting position.",
                                "The pause is typically held for 2-3 seconds at the point where your arms are fully extended in front of your chest, creating maximum tension in your pectoral muscles.",
                                "By holding this pause, you increase the amount of time under tension for your muscles, which can stimulate muscle growth and help to develop greater muscle strength."
                            ];
                            break;
                        case 'negatives_shoulder':
                            this.chestFlyTwoHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'C':
                     // DECLINE SEATED CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_shoulder':
                            this.chestFlyTwoHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "To perform the seated cable decline fly exercise, you sit on a bench with an adjustable decline, facing away from the cable machine. Perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "The key to performing seated cable decline fly drop sets effectively is to focus on maintaining proper form throughout the exercise, even as the weight gets lighter.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_shoulder':
                            this.chestFlyTwoHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "To perform seated cable decline fly pause reps, you begin by sitting on a bench with an adjustable decline, facing away from the cable machine.",
                                "You then grab the handles attached to the cables, with your arms extended out to the sides at shoulder height.",
                                "From this starting position, you then bring your arms together in front of your chest, squeezing your pectoral muscles as you do so, before pausing for a brief moment at the top of the movement before slowly lowering your arms back out to the starting position.",
                                "The pause is typically held for 2-3 seconds at the point where your arms are fully extended in front of your chest, creating maximum tension in your pectoral muscles.",
                                "By holding this pause, you increase the amount of time under tension for your muscles, which can stimulate muscle growth and help to develop greater muscle strength."
                            ];
                            break;
                        case 'negatives_shoulder':
                            this.chestFlyTwoHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'D':
                     // INCLINE STANDING CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_shoulder':
                            this.chestFlyTwoHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the high position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for a moment at the bottom of the movement, then slowly bring your arms back up to the starting position. Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_shoulder':
                            this.chestFlyTwoHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the high position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for a 1 to 3 seconds at the bottom of the movement, then slowly bring your arms back up to the starting position."
                            ];
                            break;
                        case 'negatives_shoulder':
                            this.chestFlyTwoHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'E':
                    // DECLINE STANDING CABLE FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_shoulder':
                            this.chestFlyTwoHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the low position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for a moment at the bottom of the movement, then slowly bring your arms back up to the starting position. Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_shoulder':
                            this.chestFlyTwoHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the low position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for 1 to 3 seconds at the bottom of the movement, then slowly bring your arms back up to the starting position."
                            ];
                            break;
                        case 'negatives_shoulder':
                            this.chestFlyTwoHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'F':
                    // INCLINE DUMBBELL FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_shoulder':
                            this.chestFlyTwoHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Adjust an incline bench to a comfortable angle and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for a moment at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_shoulder':
                            this.chestFlyTwoHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Adjust an incline bench to a comfortable angle and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for 2 - 3 seconds at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Repeat for 3 to 4 reps."
                            ];
                            break;
                        case 'negatives_shoulder':
                            this.chestFlyTwoHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'G':
                    // FLAT DUMBBELL FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_shoulder':
                            this.chestFlyTwoHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Garb an flat bench and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for a moment at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_shoulder':
                            this.chestFlyTwoHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "To perform this exercise, you would lie flat on a bench with a dumbbell in each hand.",
                                "You would start with your arms extended straight out to the sides, with your palms facing up.",
                                "From this starting position, you would slowly lower the dumbbells down towards the ground, keeping a slight bend in your elbows and maintaining control throughout the motion.",
                                "Once the dumbbells reach chest level, pause for a moment, then slowly raise them back up to the starting position.",
                                "When performed correctly, the flat dumbbell fly can be an effective exercise for building strength and size in the chest muscles."
                            ];
                            break;
                        case 'negatives_shoulder':
                            this.chestFlyTwoHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'H':
                    // DECLINE DUMBBELL FLY
                    switch (intensifiedRearDelts) {
                        case 'drop_press_shoulder':
                            this.chestFlyTwoHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Adjust an decline bench to a comfortable angle and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for a moment at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_shoulder':
                            this.chestFlyTwoHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Adjust an decline bench to a comfortable angle and select a pair of dumbbells that are appropriate for your fitness level.",
                                "Lie back on the bench and hold the dumbbells with your palms facing each other, extending your arms straight above your chest.",
                                "Keeping a slight bend in your elbows, slowly lower the dumbbells out to the sides in a fly motion until your arms are parallel to the floor.",
                                "Pause for 2 - 3 seconds at the bottom of the movement, then slowly bring the dumbbells back up to the starting position.",
                                "Repeat for 3 - 4 sets."
                            ];
                            break;
                        case 'negatives_shoulder':
                            this.chestFlyTwoHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },

        handleChestFlyTwoSuperSet(rearDelt) {
            this.ischestFlyTwoVisible = 'I';
            switch (rearDelt) {
                case 'shoulder_platePinchPress':
                    this.chestFlyTwoHeader = 'Plate Pinch Press';
                    this.chestFlyTwoHeaderConfirmed = 'Plate Pinch Press';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoSupersetInstructions = [
                        "To perform the plate pinch press, follow these steps:",
                        "Lie down on a flat bench with your feet firmly planted on the ground and your back and shoulders pressed against the bench.",
                        "Hold a weight plate between your fingers with your palms facing each other and your elbows bent, bringing the plate to your chest.",
                        "Extend your arms to press the weight plate away from your body, keeping your fingers pinched tightly on the plate to maintain your grip.",
                        "Pause for a moment at the top of the movement, then slowly lower the plate back down to your chest."
                    ];
                    break;
                case 'shoulder_super_unilateral':
                    this.chestFlyTwoHeader = 'Unilateral Fly';
                    this.chestFlyTwoHeaderConfirmed = 'Unilateral Fly';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoSupersetInstructions = [
                        "Begin in a plank position with your hands placed slightly wider than shoulder-width apart on the ground.",
                        "Keep your core engaged and your body in a straight line from your head to your heels.",
                        "Lower your body towards the ground by bending your elbows, keeping them close to your body.",
                        "Stop when your chest is just above the ground or when your elbows reach a 90-degree angle.",
                        "Push back up to the starting position by extending your arms and squeezing your chest and triceps."
                    ];
                    break;
                case 'shoulder_super_pushUps':
                    this.chestFlyTwoHeader = 'Push Ups';
                    this.chestFlyTwoHeaderConfirmed = 'Push Ups';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestFlyTwoSupersetInstructions = [
                        "Begin in a plank position with your hands placed slightly wider than shoulder-width apart on the ground.",
                        "Keep your core engaged and your body in a straight line from your head to your heels.",
                        "Lower your body towards the ground by bending your elbows, keeping them close to your body.",
                        "Stop when your chest is just above the ground or when your elbows reach a 90-degree angle.",
                        "Push back up to the starting position by extending your arms and squeezing your chest and triceps."
                    ];
                    break;
                default:
                    break;
                }
        },
        goBackChestFlyTwo() {
            this.ischestFlyTwoVisible = 'A';
            this.chestFlyTwoHeader = 'Chest Fly 2';
            this.videoSrc = 'dixie11/movie.mp4';
            this.chestFlyOneInstructions = [];
        },
        confirmChestFlyTwo() {
            this.ischestFlyTwoVisible = 'C';
            this.chestShredFlyTwoForm = 'Y';

            // Additional logic if needed
        },
        confirmChestFlyTwoSecond() {
            this.ischestFlyTwoVisible = 'H';
            this.chestFlyTwoHeader = this.rearDeltStorage;
            this.chestFlyTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredFlyTwoForm = 'Y';

            // Additional logic if needed
        },
        confirmChestFlyTwoThird() {
            this.ischestFlyTwoVisible = 'J';
            this.chestFlyTwoHeader = this.rearDeltStorage;
            this.chestFlyTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredFlyTwoForm = 'Y';

            // Additional logic if needed
        },
        intensifyChestFlyTwo() {
            this.chestFlyTwoHeader = 'Intensified';
            this.ischestFlyTwoVisible = 'D';
            this.chestFlyTwoP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackChestFlyTwoSecond() {
            this.ischestFlyTwoVisible = 'B'           
            this.chestFlyTwoHeader = this.rearDeltStorage;
            this.chestFlyTwoP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackChestFlyTwoThird() {
            this.ischestFlyTwoVisible = 'D';          
        },
        goBackChestFlyTwoFourth() {
            this.ischestFlyTwoVisible = 'D';           
        },
        goBackChestFlyTwoFifth() {
            this.ischestFlyTwoVisible = 'E';           
        },
        goBackChestFlyTwoSixth() {
            this.ischestFlyTwoVisible = 'F';           
        },


        // NEW SECTION
        // CHEST TRICEPS
        // third section
        handleTriceps(rearDelt) {
            this.ischestTricepsVisible = 'B';
            switch (rearDelt) {
                case 'inclineEZbar':
                    this.intensifiedchestTriceps = 'A';
                    this.chestTricepsHeader = 'Incline EZ Bar';
                    this.rearDeltStorage = 'Incline EZ Bar';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestTricepsInstructions = [
                        "To perform this exercise, you lie on an incline bench with your head positioned at the high end and your feet planted firmly on the ground.",
                        "Hold an EZ curl bar with an overhand grip and your hands are placed slightly closer than shoulder-width apart. From this position, extend your arms straight up over your chest, keeping your elbows tucked in and your upper arms stationary.",
                        "Then, lower the bar down towards your forehead by bending your elbows, until the bar is close to touching your forehead.",
                        "Pause for a moment, then use your triceps to straighten your arms and bring the bar back up to the starting position.",
                        "This exercise can help to strengthen and tone the triceps muscles, as well as improve overall upper body strength. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'flatEZBar':
                    this.intensifiedchestTriceps = 'B';
                    this.chestTricepsHeader = 'Flat EZ Bar';
                    this.rearDeltStorage = 'Flat EZ Bar';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestTricepsInstructions = [
                        "To perform this exercise, you lie on an flat bench with your head positioned at the high end and your feet planted firmly on the ground.",
                        "Hold an EZ curl bar with an overhand grip and your hands are placed slightly closer than shoulder-width apart. From this position, extend your arms straight up over your chest, keeping your elbows tucked in and your upper arms stationary.",
                        "Then, lower the bar down towards your forehead by bending your elbows, until the bar is close to touching your forehead.",
                        "Pause for a moment, then use your triceps to straighten your arms and bring the bar back up to the starting position.",
                        "This exercise can help to strengthen and tone the triceps muscles, as well as improve overall upper body strength. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dip':
                    this.intensifiedchestTriceps = 'C';
                    this.chestTricepsHeader = 'Dips';
                    this.rearDeltStorage = 'Dips';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestTricepsInstructions = [
                        "Here are the steps to perform dips: Begin by placing your hands on the parallel bars or a sturdy surface, shoulder-width apart.",
                        "Lift yourself up and support your body weight on your arms with your elbows straight.",
                        "Lower your body by bending your elbows, keeping them close to your body, and lowering your body towards the ground.",
                        "Stop when your shoulders are below your elbows or when you feel a stretch in your chest muscles.",
                        "Push back up to the starting position by extending your arms and squeezing your triceps."
                    ];
                    break;
                case 'dip_machine':
                    this.intensifiedchestTriceps = 'D';
                    this.chestTricepsHeader = 'Dip Machine';
                    this.rearDeltStorage = 'Dip Machine';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestTricepsInstructions = [
                        "A dip machine is a piece of gym equipment designed to help perform the dip exercise with added stability and support.",
                        "It usually consists of a pair of parallel bars attached to a frame with a padded backrest and handles.",
                        "The machine allows you to adjust the height of the bars to accommodate your height and arm length, and often includes a weight stack or resistance band to provide additional resistance.",
                        "To use the dip machine, you typically begin by adjusting the height of the bars to your desired position, then gripping the handles and placing your elbows on the padded backrest.",
                        "From there, you perform the dip exercise by lowering your body towards the ground, keeping your elbows close to your body, and then pushing back up to the starting position by extending your arms."
                    ];
                    break;
                default:
                    break;
                }
        },

        handleChestTricepIntensify(intensifiedRearDelts) {
            this.ischestTricepsVisible = 'G';
            var statement = this.intensifiedchestTriceps;
            switch (statement){
                case 'A':
                    // INCLINE EZ BAR
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.chestTricepsHeader = 'Drop Set';
                            this.chestTricepsHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set an adjustable bench to a comfortable incline angle and load an EZ bar with weight plates that are appropriate for your fitness level.",
                                "Sit on the bench and grasp the EZ bar with an overhand grip, keeping your hands shoulder-width apart.",
                                "Begin the exercise by extending the EZ bar up and overhead, keeping your elbows close to your head and slowly lowering the bar down towards your forehead.",
                                "Without allowing your elbows to move, pause briefly at the bottom of the movement, and then extend the bar back up towards the starting position.",
                                "Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure. Once you have completed the drop set, rest for a brief moment, and then repeat the exercise for the desired number of sets."

                            ];
                            break;
                        case 'seth_press_tricep':
                            this.chestTricepsHeader = 'Seth Set';
                            this.chestTricepsHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.chestTricepsHeader = 'Pause Repetitions';
                            this.chestTricepsHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set an adjustable bench to a comfortable incline angle and load an EZ bar with weight plates that are appropriate for your fitness level.",
                                "Sit on the bench and grasp the EZ bar with an overhand grip, keeping your hands shoulder-width apart.",
                                "Begin the exercise by extending the EZ bar up and overhead, keeping your elbows close to your head and slowly lowering the bar down towards your forehead.",
                                "Without allowing your elbows to move, pause briefly at the bottom of the movement, and then extend the bar back up towards the starting position.",
                                "At the bottom of your repitition pause for 2 to 3 seconds."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.chestTricepsHeader = 'Negatives';
                            this.chestTricepsHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'B':
                     // FLAT EZ BAR
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.chestTricepsHeader = 'Drop Set';
                            this.chestTricepsHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Get a flat bench and load an EZ bar with weight plates that are appropriate for your fitness level.",
                                "Sit on the bench and grasp the EZ bar with an overhand grip, keeping your hands shoulder-width apart.",
                                "Begin the exercise by extending the EZ bar up and overhead, keeping your elbows close to your head and slowly lowering the bar down towards your forehead.",
                                "Without allowing your elbows to move, pause briefly at the bottom of the movement, and then extend the bar back up towards the starting position.",
                                "Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure. Once you have completed the drop set, rest for a brief moment, and then repeat the exercise for the desired number of sets."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.chestTricepsHeader = 'Seth Set';
                            this.chestTricepsHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.chestTricepsHeader = 'Pause Repetitions';
                            this.chestTricepsHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up on a flat bench and load an EZ bar with weight plates that are appropriate for your fitness level.",
                                "Sit on the bench and grasp the EZ bar with an overhand grip, keeping your hands shoulder-width apart.",
                                "Begin the exercise by extending the EZ bar up and overhead, keeping your elbows close to your head and slowly lowering the bar down towards your forehead.",
                                "Without allowing your elbows to move, pause briefly at the bottom of the movement, and then extend the bar back up towards the starting position.",
                                "At the bottom of your repition pause for 2 to 3 seconds."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.chestTricepsHeader = 'Negatives';
                            this.chestTricepsHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'C':
                     // DIPS
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.chestTricepsHeader = 'Drop Set';
                            this.chestTricepsHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "To perform the seated cable decline fly exercise, you sit on a bench with an adjustable decline, facing away from the cable machine. Perform a set of 8-12 repetitions.",
                                "Without rest, you would then immediately decrease the weight by 10-20% and perform another set of 8-12 repetitions.",
                                "You may continue this process, decreasing the weight and performing another set, until you are unable to perform a set with good form or reach a predetermined number of sets.",
                                "The key to performing seated cable decline fly drop sets effectively is to focus on maintaining proper form throughout the exercise, even as the weight gets lighter.",
                                "Aim for 3 to 4 different weight changes."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.chestTricepsHeader = 'Seth Set';
                            this.chestTricepsHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.chestTricepsHeader = 'Pause Repetitions';
                            this.chestTricepsHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "To perform pause rep dips, you will need parallel bars or dip bars.",
                                "Begin by gripping the bars with your hands shoulder-width apart and your palms facing inward.",
                                "Keep your elbows straight and your shoulders down as you lower your body toward the bars by bending your elbows and leaning forward slightly.",
                                "As you lower yourself down, pause for 1-2 seconds at the bottom of the movement before pushing yourself back up to the starting position.",
                                "At the top of the movement, pause for another 1-2 seconds before beginning your next repetition."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.chestTricepsHeader = 'Negatives';
                            this.chestTricepsHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                case 'D':
                     // DIP MACHINE
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.chestTricepsHeader = 'Drop Set';
                            this.chestTricepsHeaderConfirmed = 'Drop Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Here are the steps to perform this exercise: Set up the cable machine with the handles at the high position.",
                                "Grab the handles and stand with your feet shoulder-width apart, facing the cable machine with your back to the bench.",
                                "Lean forward slightly and bend your arms slightly at the elbows with your palms facing each other. This is the starting position.",
                                "Keeping your arms slightly bent and your palms facing each other, slowly bring your arms forward and downward in a fly motion until your hands are in front of your chest.",
                                "Pause for a moment at the bottom of the movement, then slowly bring your arms back up to the starting position. Perform a drop set by decreasing the weight and immediately performing another set of repetitions until failure."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.chestTricepsHeader = 'Seth Set';
                            this.chestTricepsHeaderConfirmed = 'Seth Set';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.chestTricepsHeader = 'Pause Repetitions';
                            this.chestTricepsHeaderConfirmed = 'Pause Repetitions';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "To perform pause rep dips on a dip machine, begin by adjusting the machine to the appropriate height and weight for your fitness level.",
                                "Sit on the machine with your back against the padded support and grip the handles with your palms facing inward.",
                                "Keep your elbows close to your body and your shoulders down as you lower your body toward the handles by bending your elbows and leaning forward slightly.",
                                "As you lower yourself down, pause for 1-2 seconds at the bottom of the movement before pushing yourself back up to the starting position.",
                                "At the top of the movement, pause for another 1-2 seconds before beginning your next repetition."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.chestTricepsHeader = 'Negatives';
                            this.chestTricepsHeaderConfirmed = 'Negatives';
                            this.videoSrc = 'dixie11/christian_curls.mp4';
                            this.chestTricepsIntensifiedInstructions = [
                                "Negatives, also known as eccentric training, involve focusing on the lowering or negative phase of an exercise, rather than the lifting or positive phase.",
                                "To perform negatives, start by lifting the weight using good form and control on the positive phase of the exercise.",
                                "Then, focus on slowing down and controlling the weight as you lower it back down to the starting position.",
                                "This should take about 2-3 times longer than the positive phase. Negatives can help to build strength and muscle by creating more muscle damage and tension during the eccentric phase of the exercise.",
                                "They can also help to improve your overall technique and control during both the positive and negative phases of an exercise."
                            ];
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
        },

        handleChestTricepsSuperSet(rearDelt) {
            this.ischestTricepsVisible = 'I';
            switch (rearDelt) {
                case 'inclineEZbar_superset':
                    this.chestTricepsHeader = 'Incline EZ Bar';
                    this.chestTricepsHeaderConfirmed = 'Incline EZ Bar';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestTricepsSupersetInstructions = [
                        "To perform this exercise, you lie on an incline bench with your head positioned at the high end and your feet planted firmly on the ground.",
                        "Hold an EZ curl bar with an overhand grip and your hands are placed slightly closer than shoulder-width apart. From this position, extend your arms straight up over your chest, keeping your elbows tucked in and your upper arms stationary.",
                        "Then, lower the bar down towards your forehead by bending your elbows, until the bar is close to touching your forehead.",
                        "Pause for a moment, then use your triceps to straighten your arms and bring the bar back up to the starting position.",
                        "This exercise can help to strengthen and tone the triceps muscles, as well as improve overall upper body strength. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'flatEZBar_superset':
                    this.chestTricepsHeader = 'Flat EZ Bar';
                    this.chestTricepsHeaderConfirmed = 'Flat EZ Bar';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestTricepsSupersetInstructions = [
                        "To perform this exercise, you lie on an flat bench with your head positioned at the high end and your feet planted firmly on the ground.",
                        "Hold an EZ curl bar with an overhand grip and your hands are placed slightly closer than shoulder-width apart. From this position, extend your arms straight up over your chest, keeping your elbows tucked in and your upper arms stationary.",
                        "Then, lower the bar down towards your forehead by bending your elbows, until the bar is close to touching your forehead.",
                        "Pause for a moment, then use your triceps to straighten your arms and bring the bar back up to the starting position.",
                        "This exercise can help to strengthen and tone the triceps muscles, as well as improve overall upper body strength. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'dip_superset':
                    this.chestTricepsHeader = 'Dips';
                    this.chestTricepsHeaderConfirmed = 'Dips';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestTricepsSupersetInstructions = [
                        "Here are the steps to perform dips: Begin by placing your hands on the parallel bars or a sturdy surface, shoulder-width apart.",
                        "Lift yourself up and support your body weight on your arms with your elbows straight.",
                        "Lower your body by bending your elbows, keeping them close to your body, and lowering your body towards the ground.",
                        "Stop when your shoulders are below your elbows or when you feel a stretch in your chest muscles.",
                        "Push back up to the starting position by extending your arms and squeezing your triceps."
                    ];
                    break;
                case 'dip_machine_superset':
                    this.chestTricepsHeader = 'Dip Machine';
                    this.chestTricepsHeaderConfirmed = 'Dip Machine';
                    this.videoSrc = 'dixie11/christian_curls.mp4';
                    this.chestTricepsSupersetInstructions = [
                        "A dip machine is a piece of gym equipment designed to help perform the dip exercise with added stability and support.",
                        "It usually consists of a pair of parallel bars attached to a frame with a padded backrest and handles.",
                        "The machine allows you to adjust the height of the bars to accommodate your height and arm length, and often includes a weight stack or resistance band to provide additional resistance.",
                        "To use the dip machine, you typically begin by adjusting the height of the bars to your desired position, then gripping the handles and placing your elbows on the padded backrest.",
                        "From there, you perform the dip exercise by lowering your body towards the ground, keeping your elbows close to your body, and then pushing back up to the starting position by extending your arms."
                    ];
                    break;
                default:
                    break;
                }
        },

        goBackChestTricep() {
            this.ischestTricepsVisible = 'A';
            this.chestTricepsHeader = 'Chest Fly 2';
            this.videoSrc = 'dixie11/movie.mp4';
            this.chestTricepsInstructions = [];
        },
        confirmChestTricep() {
            this.ischestTricepsVisible = 'C';
            this.chestShredTricepsForm = 'Y';

            // Additional logic if needed
        },
        confirmChestTricepSecond() {
            this.ischestTricepsVisible = 'H';
            this.chestTricepsHeader = this.rearDeltStorage;
            this.chestTricepsP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredTricepsForm = 'Y';

            // Additional logic if needed
        },
        confirmChestTricepThird() {
            this.ischestTricepsVisible = 'J';
            this.chestTricepsHeader = this.rearDeltStorage;
            this.chestTricepsP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredTricepsForm = 'Y';

            // Additional logic if needed
        },
        intensifyTricep() {
            this.chestTricepsHeader = 'Intensified';
            this.ischestTricepsVisible = 'D';
            this.chestTricepsP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackChestTricepSecond() {
            this.ischestTricepsVisible = 'B'           
            this.chestTricepsHeader = this.rearDeltStorage;
            this.chestTricepsP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackChestTricepThird() {
            this.ischestTricepsVisible = 'D';          
        },
        goBackChestTricepFourth() {
            this.ischestTricepsVisible = 'D';           
        },
        goBackChestTricepFifth() {
            this.ischestTricepsVisible = 'E';           
        },
        goBackChestTricepSixth() {
            this.ischestTricepsVisible = 'F';           
        },
        addToChestExtractedList(item) {
            // Here, you could also implement logic to prevent duplicates.
            this.chestDataProgress.push(item.workoutWarmupWeight);
            this.chestDataProgress.push(item.setsWarmupAccomplished);
            this.chestDataProgress.push(item.repsWarmupAccomplished);
            this.chestDataProgress.push(item.newPressOneWeight);
            this.chestDataProgress.push(item.newSetsPressOneAccomplished);
            this.chestDataProgress.push(item.newRepsPressOneAccomplished);
            this.chestDataProgress.push(item.newFlyOneWeight);
            this.chestDataProgress.push(item.newSetsFlyOneAccomplished);
            this.chestDataProgress.push(item.newRepsFlyOneAccomplished);
            this.chestDataProgress.push(item.newPressTwoWeight);
            this.chestDataProgress.push(item.newSetsPressTwoAccomplished);
            this.chestDataProgress.push(item.newRepsPressTwoAccomplished);
            this.chestDataProgress.push(item.newFlyTwoWeight);
            this.chestDataProgress.push(item.newSetsFlyTwoAccomplished);
            this.chestDataProgress.push(item.newRepsFlyTwoAccomplished);
            this.chestDataProgress.push(item.newTricepsWeight);
            this.chestDataProgress.push(item.newSetsTricepsAccomplished);
            this.chestDataProgress.push(item.newRepsTricepsAccomplished);

            this.progressCount = this.progressCount + 1;

            if (this.progressCount === 2){
                this.showProgress = 'B';
            }
        },
        // third section
        calculateChestComparision(){
            if (this.chestDataProgress[0] === 0 && this.chestDataProgress[18] === 0){
                this.chestWarmupProgress = 'F';
                //this.firstCountVar = 0;
            }else if(this.chestDataProgress[0] === 0){
                this.firstCountVar = 100;
            }else{
                this.firstCountVar = Math.trunc(((this.chestDataProgress[18] - this.chestDataProgress[0]) / this.chestDataProgress[0]) * 100);
            }
            if (this.chestDataProgress[1] === 0 && this.chestDataProgress[19] === 0){
                this.chestWarmupProgress = 'F';
                //this.secondCountVar = 0;
            }else if(this.chestDataProgress[1] === 0){
                this.secondCountVar = 100;
            }else{
                this.secondCountVar = Math.trunc(((this.chestDataProgress[19] - this.chestDataProgress[1]) / this.chestDataProgress[1]) * 100);
            }
            if (this.chestDataProgress[2] === 0 && this.chestDataProgress[20] === 0){
                this.chestWarmupProgress = 'F';
                //this.thirdCountVar = 0;
            }else if(this.chestDataProgress[2] === 0){
                this.thirdCountVar = 100;
            }else{
                this.thirdCountVar = Math.trunc(((this.chestDataProgress[20] - this.chestDataProgress[2]) / this.chestDataProgress[2]) * 100);
            }
            if (this.chestDataProgress[3] === 0 && this.chestDataProgress[21] === 0){
                this.chestPressOneProgress = 'F';
                //this.fourthCountVar = 0;
            }else if(this.chestDataProgress[3] === 0){
                this.fourthCountVar = 100;
            }else{
                this.fourthCountVar = Math.trunc(((this.chestDataProgress[21] - this.chestDataProgress[3]) / this.chestDataProgress[3]) * 100);
            }
            if (this.chestDataProgress[4] === 0 && this.chestDataProgress[22] === 0){
                this.chestPressOneProgress = 'F';
                //this.fifthCountVar = 0;
            }else if(this.chestDataProgress[4] === 0){
                this.fifthCountVar = 100;
            }else{
                this.fifthCountVar = Math.trunc(((this.chestDataProgress[22] - this.chestDataProgress[4]) / this.chestDataProgress[4]) * 100);
            }
            if (this.chestDataProgress[5] === 0 && this.chestDataProgress[23] === 0){
                this.chestPressOneProgress = 'F';
                //this.sixthCountVar = 0;
            }else if(this.chestDataProgress[5] === 0){
                this.sixthCountVar = 100;
            }else{
                this.sixthCountVar = Math.trunc(((this.chestDataProgress[23] - this.chestDataProgress[5]) / this.chestDataProgress[5]) * 100);
            }
            if (this.chestDataProgress[6] === 0 && this.chestDataProgress[24] === 0){
                this.chestFlyOneProgress = 'F';
                //this.seventhCountVar = 0;
            }else if(this.chestDataProgress[6] === 0){
                this.seventhCountVar = 100;
            }else{
                this.seventhCountVar = Math.trunc(((this.chestDataProgress[24] - this.chestDataProgress[6]) / this.chestDataProgress[6]) * 100);
            }
            if (this.chestDataProgress[7] === 0 && this.chestDataProgress[25] === 0){
                //this.eighthCountVar = 0;
                this.chestFlyOneProgress = 'F';
            }else if(this.chestDataProgress[7] === 0){
                this.eighthCountVar = 100;
            }else{
                this.eighthCountVar = Math.trunc(((this.chestDataProgress[25] - this.chestDataProgress[7]) / this.chestDataProgress[7]) * 100);
            }
            if (this.chestDataProgress[8] === 0 && this.chestDataProgress[26] === 0){
                this.chestFlyOneProgress = 'F';
                //this.ninthCountVar = 0;
            }else if(this.chestDataProgress[8] === 0){
                this.ninthCountVar = 100;
            }else{
                this.ninthCountVar = Math.trunc(((this.chestDataProgress[26] - this.chestDataProgress[8]) / this.chestDataProgress[8]) * 100);
            }
            if (this.chestDataProgress[9] === 0 && this.chestDataProgress[27] === 0){
                this.chestPressTwoProgress = 'F';
                //this.tenthCountVar = 0;
            }else if(this.chestDataProgress[9] === 0){
                this.tenthCountVar = 100;
            }else{
                this.tenthCountVar = Math.trunc(((this.chestDataProgress[27] - this.chestDataProgress[9]) / this.chestDataProgress[9]) * 100);
            }
            if (this.chestDataProgress[10] === 0 && this.chestDataProgress[28] === 0){
                this.chestPressTwoProgress = 'F';
                //this.eleventhCountVar = 0;
            }else if(this.chestDataProgress[10] === 0){
                this.eleventhCountVar = 100;
            }else{
                this.eleventhCountVar = Math.trunc(((this.chestDataProgress[28] - this.chestDataProgress[10]) / this.chestDataProgress[10]) * 100);
            }
            if (this.chestDataProgress[11] === 0 && this.chestDataProgress[29] === 0){
                this.chestPressTwoProgress = 'F';
                //this.twelveCountVar = 0;
            }else if(this.chestDataProgress[11] === 0){
                this.twelveCountVar = 100;
            }else{
                this.twelveCountVar = Math.trunc(((this.chestDataProgress[29] - this.chestDataProgress[11]) / this.chestDataProgress[11]) * 100);
            }
            if (this.chestDataProgress[12] === 0 && this.chestDataProgress[30] === 0){
                this.chestFlyTwoProgress = 'F';
                //this.thirteenthCountVar = 0;
            }else if(this.chestDataProgress[12] === 0){
                this.thirteenthCountVar = 100;
            }else{
                this.thirteenthCountVar = Math.trunc(((this.chestDataProgress[30] - this.chestDataProgress[12]) / this.chestDataProgress[12]) * 100);
            }
            if (this.chestDataProgress[13] === 0 && this.chestDataProgress[31] === 0){
                this.chestFlyTwoProgress = 'F';
                //this.fourteenthCountVar = 0;
            }else if(this.chestDataProgress[13] === 0){
                this.fourteenthCountVar = 100;
            }else{
                this.fourteenthCountVar = Math.trunc(((this.chestDataProgress[31] - this.chestDataProgress[13]) / this.chestDataProgress[13]) * 100);
            }
            if (this.chestDataProgress[14] === 0 && this.chestDataProgress[32] === 0){
                this.chestFlyTwoProgress = 'F';
                //this.fifteenthCountVar = 0;
            }else if(this.chestDataProgress[14] === 0){
                this.fifteenthCountVar = 100;
            }else{
                this.fifteenthCountVar = Math.trunc(((this.chestDataProgress[32] - this.chestDataProgress[14]) / this.chestDataProgress[14]) * 100);
            }
            if (this.chestDataProgress[15] === 0 && this.chestDataProgress[33] === 0){
                this.chestTricepsProgress = 'F';
                //this.sixteenthCountVar = 0;
            }else if(this.chestDataProgress[15] === 0){
                this.sixteenthCountVar = 100;
            }else{
                this.sixteenthCountVar = Math.trunc(((this.chestDataProgress[33] - this.chestDataProgress[15]) / this.chestDataProgress[15]) * 100);
            }
            if (this.chestDataProgress[16] === 0 && this.chestDataProgress[34] === 0){
                this.chestTricepsProgress = 'F';
                //this.seventeenthCountVar = 0;
            }else if(this.chestDataProgress[16] === 0){
                this.seventeenthCountVar = 100;
            }else{
                this.seventeenthCountVar = Math.trunc(((this.chestDataProgress[34] - this.chestDataProgress[16]) / this.chestDataProgress[16]) * 100);
            }
            if (this.chestDataProgress[17] === 0 && this.chestDataProgress[35] === 0){
                this.chestTricepsProgress = 'F';
                //this.eighteenthCountVar = 0;
            }else if(this.chestDataProgress[17] === 0){
                this.eighteenthCountVar = 100;
            }else{
                this.eighteenthCountVar = Math.trunc(((this.chestDataProgress[35] - this.chestDataProgress[17]) / this.chestDataProgress[17]) * 100);
            }
        },
        //
        shredOption: function(){
            this.newShred = "Yes";
            this.showPage = "G";
            this.logPage = "E";
            // this.addShred();
        },
        // chest workout data non intensified
        workoutTitle: function(parameter){
            if (parameter === "chestWarmup"){
                this.chestWarmupTitle = this.chestWarmupHeader;
            }
            if(parameter === "chestPressOne"){
                this.newChestPressTitle = this.chestPressOneHeader;
            }
            if (parameter === "chestPressOneConfirmed"){
                this.newChestPressTitle = this.chestPressOneHeaderConfirmed;
            }
            if (parameter === "chestFlyOneConfirmed"){
                this.newChestFlyOneTitle = this.chestFlyOneHeaderConfirmed;
            }
            if (parameter === "chestFlyOne"){
                this.newChestFlyOneTitle = this.chestFlyOneHeader;
            }
            if (parameter === "chestPressTwoConfirmed"){
                this.chestPressTwoTitle = this.chestPressTwoHeaderConfirmed;
            }
            if (parameter === "chestPressTwo"){
                this.chestPressTwoTitle = this.chestPressTwoHeader;
            }
            if (parameter === "chestFlyTwo"){
                this.newFlyTwoTitle = this.chestFlyTwoHeader;
            }
            if (parameter === "chestFlyTwoConfirmed"){
                this.newFlyTwoTitle = this.chestFlyTwoHeaderConfirmed;
            }
            if (parameter === "chestTriceps"){
                this.newTricepsTitle = this.chestTricepsHeader;
            }
            if (parameter === "chestTricepsConfirmed"){
                this.newTricepsTitle = this.chestTricepsHeaderConfirmed;
            }
        },
        validateWorkoutData: function(){
            if (this.chestWarmupTitle == ""){
                this.chestWarmupTitle = "Exercise Not Complete";
                this.newWarmupWorkoutWeight = 0;
                this.newSetsWarmupAccomplished = 0;
                this.newRepsWarmupAccomplished = 0;
            }
            if (this.newChestPressTitle == ""){
                this.newChestPressTitle = "Exercise Not Complete";
                this.newPressOneWeight = 0;
                this.newSetsPressOneAccomplished = 0;
                this.newRepsPressOneAccomplished = 0;
            }
            if (this.newChestFlyOneTitle == ""){
                this.newChestFlyOneTitle = "Exercise Not Complete";
                this.newFlyOneWeight = 0;
                this.newSetsFlyOneAccomplished = 0;
                this.newRepsFlyOneAccomplished = 0;
            }
            if (this.chestPressTwoTitle == ""){
                this.chestPressTwoTitle = "Exercise Not Complete";
                this.newPressTwoWeight = 0;
                this.newSetsPressTwoAccomplished = 0;
                this.newRepsPressTwoAccomplished = 0;
            }
            if (this.newFlyTwoTitle == ""){
                this.newFlyTwoTitle = "Exercise Not Complete";
                this.newFlyTwoWeight = 0;
                this.newSetsFlyTwoAccomplished = 0;
                this.newRepsFlyTwoAccomplished = 0;
            }
            if (this.newTricepsTitle == ""){
                this.newTricepsTitle = "Exercise Not Complete";
                this.newTricepsWeight = 0;
                this.newSetsTricepsAccomplished = 0;
                this.newRepsTricepsAccomplished = 0;
            }
        },
        addChestWorkoutData: function(){
            this.validateWorkoutData();
            // date
            const date = new Date().toUTCString();
            const extractedDateTime = date.slice(5, 16);
            var data= "dateTime=" + encodeURIComponent(extractedDateTime);
            // warmups
            data += "&chestWarmupTitle=" + encodeURIComponent(this.chestWarmupTitle);
            data += "&workoutWarmupWeight=" + encodeURIComponent(this.newWarmupWorkoutWeight);
            data += "&setsWarmupAccomplished=" + encodeURIComponent(this.newSetsWarmupAccomplished);
            data += "&repsWarmupAccomplished=" + encodeURIComponent(this.newRepsWarmupAccomplished);
            // press one
            data += "&newChestPressTitle=" + encodeURIComponent(this.newChestPressTitle);
            data += "&newPressOneWeight=" + encodeURIComponent(this.newPressOneWeight);
            data += "&newSetsPressOneAccomplished=" + encodeURIComponent(this.newSetsPressOneAccomplished);
            data += "&newRepsPressOneAccomplished=" + encodeURIComponent(this.newRepsPressOneAccomplished);
            // fly one
            data += "&newChestFlyOneTitle=" + encodeURIComponent(this.newChestFlyOneTitle);
            data += "&newFlyOneWeight=" + encodeURIComponent(this.newFlyOneWeight);
            data += "&newSetsFlyOneAccomplished=" + encodeURIComponent(this.newSetsFlyOneAccomplished);
            data += "&newRepsFlyOneAccomplished=" + encodeURIComponent(this.newRepsFlyOneAccomplished);
            // press two
            data += "&chestPressTwoTitle=" + encodeURIComponent(this.chestPressTwoTitle);
            data += "&newPressTwoWeight=" + encodeURIComponent(this.newPressTwoWeight);
            data += "&newSetsPressTwoAccomplished=" + encodeURIComponent(this.newSetsPressTwoAccomplished);
            data += "&newRepsPressTwoAccomplished=" + encodeURIComponent(this.newRepsPressTwoAccomplished);
            // fly two
            data += "&newFlyTwoTitle=" + encodeURIComponent(this.newFlyTwoTitle);
            data += "&newFlyTwoWeight=" + encodeURIComponent(this.newFlyTwoWeight);
            data += "&newSetsFlyTwoAccomplished=" + encodeURIComponent(this.newSetsFlyTwoAccomplished);
            data += "&newRepsFlyTwoAccomplished=" + encodeURIComponent(this.newRepsFlyTwoAccomplished);
            // triceps
            data += "&newTricepsTitle=" + encodeURIComponent(this.newTricepsTitle);
            data += "&newTricepsWeight=" + encodeURIComponent(this.newTricepsWeight);
            data += "&newSetsTricepsAccomplished=" + encodeURIComponent(this.newSetsTricepsAccomplished);
            data += "&newRepsTricepsAccomplished=" + encodeURIComponent(this.newRepsTricepsAccomplished);
            fetch("http://localhost:8080/chest_workout_data", {
                body: data,
                method: "POST",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((response) => {
                if (response.status == 201){
                    console.log("Added Chest Workout Data");
                    this.chestWarmupTitle= "";
                    this.newWarmupWorkoutWeight= "";
                    this.newSetsWarmupAccomplished= "";
                    this.newRepsWarmupAccomplished= "";
                    this.newChestPressTitle= "";
                    this.newPressOneWeight= "";
                    this.newSetsPressOneAccomplished= "";
                    this.newRepsPressOneAccomplished= "";
                    this.newChestFlyOneTitle= "";
                    this.newFlyOneWeight= "";
                    this.newSetsFlyOneAccomplished= "";
                    this.newRepsFlyOneAccomplished= "";
                    this.chestPressTwoTitle= "";
                    this.newPressTwoWeight= "";
                    this.newSetsPressTwoAccomplished= "";
                    this.newRepsPressTwoAccomplished= "";
                    this.newFlyTwoTitle= "";
                    this.newFlyTwoWeight= "";
                    this.newSetsFlyTwoAccomplished= "";
                    this.newRepsFlyTwoAccomplished= "";
                    this.newTricepsTitle= "";
                    this.newTricepsWeight= "";
                    this.newSetsTricepsAccomplished= "";
                    this.newRepsTricepsAccomplished= "";
                    this.loadChestWorkoutData();
                }

            });
        },
        loadChestWorkoutData: function (){
            fetch("http://localhost:8080/chest_workout_data").then((response) => {
                if (response.status == 200){
                    response.json().then((maxShoulderFromServer) => {
                        console.log("recieved foods from API:", maxShoulderFromServer);
                        this.chestShredWorkoutData = maxShoulderFromServer;
                    });
                }
            });
        },
        deleteChestWorkoutData: function(workoutID){
            fetch("http://localhost:8080/chest_workout_data/" + workoutID, {
                method: "DELETE"
            }).then((response) => {
                if (response.status == 200){
                    this.loadChestWorkoutData();
                }

            });
        },

        //
        addShred: function(){
            var data= "shred=" + encodeURIComponent(this.newShred);
            fetch("http://localhost:8080/workouts", {
                body: data,
                method: "POST",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((response) => {
                if (response.status == 201){
                    this.newShred;
                    this.loadShred();
                }

            });
        },
        loadShred: function (){
            fetch("http://localhost:8080/workouts").then((response) => {
                if (response.status == 200){
                    response.json().then((shredsFromServer) => {
                        console.log("recieved foods from API:", shredsFromServer);
                        this.shredded = shredsFromServer;
                    });
                }
            });
        }

    },
    computed:{
        shoulderMaxIsValid: function(){
            return Object.keys(this.errorMessages).length == 0;
        }
    },

    created: function(){
        console.log("Hello Vue");
        this.loadChestWorkoutData();
    }


}).mount("#app");