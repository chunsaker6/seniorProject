Vue.createApp({

    data: function (){
        return {
            // showPage: 'Q',
            // showPage: 'G',
            // logPage: 'E',
            showPage: 'A',
            logPage: 'A',
            // showPage: 'F',
            // logPage: 'D',

            // showPage: 'L',

            slides: [
                {
                  beforeImage: "images/pre_transformations_c.jpg",
                  beforeAlt: "calvin_before",
                  afterImage: "images/post_transformation_c.jpg",
                  afterAlt: "calvin_after",
                  caption: "Caption Text"
                },
                {
                  beforeImage: "images/pre_transformations_c.jpg",
                  beforeAlt: "calvin_before",
                  afterImage: "images/post_transformation_c.jpg",
                  afterAlt: "calvin_after",
                  caption: "Caption Two"
                },
                {
                  beforeImage: "images/pre_transformations_c.jpg",
                  beforeAlt: "calvin_before",
                  afterImage: "images/post_transformation_c.jpg",
                  afterAlt: "calvin_after",
                  caption: "Caption Three"
                }
              ],
            currentSlideIndex: 0,
            slideInterval: null,
            // LOGIN STUFF
            newLoginEmail: '',
            newLoginPassword: '',
            newFirstName: '',
            newLastName: '',
            newEmail: '',
            newPlainTextPassword: '',
            errorSessionMessages: {},
            errorMessageForUsers: {},
            
            newShred: "",
            shredded: "",
            imageUrl1: null, // To store the URL of the selected image
            imageUrl2: null, // To store the URL of the second selected image
            // SHRED HOMEPAGE
            shredChestSubset: 'N',
            shredBackSubset: 'N',
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
            chestShredShoulderData: [],
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
            // videoSrc: 'dixie11/movie.mp4',
            isWarmupVisible: 'A',
            instructions: [],
            shoulderShredWarmupForm: 'N',
            shoulderShredPressOneForm: 'N',
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
            // NEW SECTION
            // BACK SECTION
            backWarmupHeader: 'Warmups',
            backWarmupP: '3 to 4 sets, 8 to 10 reps',
            // BACK PULLDOWN 1
            backPressOneHeader: 'Pulldown 1',
            backPressOneP: 'Aim for 3 - 4 sets. 8 - 12 reps.',
            // BACK ROWS
            backRowHeader: 'Rows',
            backRowP: '3 to 4 sets, 8 to 10 reps',
            // PULLDOWN 2 / PULLOVERS
            backPulldownTwoHeader: 'Pulldowns 2 / Pullovers',
            backPulldownTwoP: '3 to 4 sets, 8 to 10 reps',
            // TRAPS
            backTrapsHeader: 'Traps',
            backTrapsP: '3 to 4 sets, 8 to 10 reps',
            // BICEPS
            backBicepsHeader: 'Biceps',
            backBicepsP: '3 to 4 sets, 8 to 10 reps',
            // BACK LIST
            backWorkoutData: [],
            // LEGS SECTION
            // CALVES
            calvesHeader: 'Calves',
            // COMPOUND LIFTS
            hamstringHeader: 'Hamstring Compound',
            // QUAD LIFTS
            quadHeader: 'Auxileries Quad',
            // HAM LIFTS
            hamAuxHeader: 'Auxileries Hamstrings',
            // LEG LIST
            chestShredLegData: [],



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
        endOfShoulderWorkout(){
            this.totalChestShredWorkouts = this.chestAccomplishedPercent;
            this.totalChestShredIntensifiedWorkouts = this.chestAccomplishedIntensifiedPercent;
            if (this.totalChestShredWorkouts > 0 || this.totalChestShredIntensifiedWorkouts > 0){
                this.shredShouldersSubset = 'Y';
                //this.addChestShredAccomplished();
            }
            //this.shredChestSubset = 'Y';
            this.chestAccomplishedIntensifiedPercent = 0;
            this.chestAccomplishedPercent = 0;
            if (this.showPage === 'I'){
                this.goBackShoulderAuxTwo();
                this.goBackShoulderPress();
                this.goBackShoulderAuxOne();
                this.goBackShoulderRearDelt();
                this.goBackShoulderWarmup();
            }
            this.showPage ='G';
            this.addShoulderWorkoutData();
        },
        // START OF SHOULDERS WARMUP

        handleShoulderWarmup(warmup) {
            this.isWarmupVisible = 'B';
            switch (warmup) {
                case 'lightDumbbellRaise':
                    this.warmupHeader = 'Light Dumbbell Raises';
                    this.instructions = [
                        "To perform light dumbbell lateral raises, follow these steps: Stand with your feet shoulder-width apart and hold a light dumbbell in each hand at your sides, with your palms facing your body.",
                        "Keeping your elbows slightly bent, lift the dumbbells out to the sides, raising them to shoulder level. Hold the dumbbells at the top of the movement for a brief pause.",
                        "Lower the dumbbells back down to your sides in a controlled manner. Repeat for the desired number of repetitions."
                    ];
                    break;
                case 'rotatorCuffWarm':
                    this.warmupHeader = 'Rotator Cuff Warmups';
                    this.instructions = [
                        "To perform this exercise, you stand in the middle of a cable machine with one foot slightly in front of the other for balance, and hold one handle in each hand.",
                        "Your arms should be extended out to the sides at shoulder height, and your palms facing forward. From this position, you bring the handles together in front of your chest, squeezing your chest muscles at the top of the movement, and then slowly return the handles to the starting position in a controlled manner.",
                        "This exercise provides constant tension throughout the movement due to the cable resistance, which can help to build and define the chest muscles. It also engages the core muscles to help maintain stability during the exercise."
                    ];
                    break;
                case 'lightCableRearDelt':
                    this.warmupHeader = 'Light Cable Rear Delt Flies';
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
            this.instructions = [];
        },
        confirmWarmupShoulder() {
            this.isWarmupVisible = 'C';
            this.shoulderShredWarmupForm = 'Y';
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
                            this.intensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.rearDeltHeader = 'Seth Set';
                            this.rearDeltHeaderConfirmed = 'Seth Set';
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
                            this.intensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.rearDeltHeader = 'Seth Set';
                            this.rearDeltHeaderConfirmed = 'Seth Set';
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
                            this.intensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.rearDeltHeader = 'Seth Set';
                            this.rearDeltHeaderConfirmed = 'Seth Set';
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
                            this.intensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.rearDeltHeader = 'Seth Set';
                            this.rearDeltHeaderConfirmed = 'Seth Set';
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
            this.instructions = [];
        },
        confirmRearDeltShoulder() {
            this.isRearDeltVisible = 'C';
            this.chestShredPressOneForm = 'Y';

            // Additional logic if needed
        },
        confirmRearDeltShoulderTwo() {
            this.isRearDeltVisible = 'F';
            this.rearDeltHeader = this.rearDeltStorage;
            this.chestShredPressOneForm = 'Y';
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
                            this.auxIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."

                            ];
                            break;
                        case 'seth_press_tricep':
                            this.auxileriesOneHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
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
                            this.auxIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.auxileriesOneHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
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
                            this.auxIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.auxileriesOneHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
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
                            this.auxIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.auxileriesOneHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
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
            this.auxOneInstructions = [];
        },
        confirmAuxOneShoulder() {
            this.isAuxOneVisible = 'C';
            this.chestShredFlyOneForm = 'Y';
            // Additional logic if needed
        },
        confirmAuxOneShoulderTwo() {
            this.isAuxOneVisible = 'F';
            this.auxileriesOneHeader = this.rearDeltStorage;
            this.chestShredFlyOneForm = 'Y';
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
                            this.pressIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.pressHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
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
                            this.pressIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.pressHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
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
                            this.pressIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.pressHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
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
                            this.pressIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.pressHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
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
            this.pressInstructions = [];
        },
        confirmPressShoulder() {
            this.isPressVisible = 'C';
            this.chestShredPressTwoForm = 'Y';
            // Additional logic if needed
        },
        confirmPressShoulderTwo() {
            this.isPressVisible = 'F';
            this.pressHeader = this.rearDeltStorage;
            this.chestShredPressTwoForm = 'Y';
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
                            this.auxTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.auxileriesTwoHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
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
                            this.auxTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.auxileriesTwoHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
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
                            this.auxTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.auxileriesTwoHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
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
                            this.auxTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.auxileriesTwoHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
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
            this.auxTwoInstructions = [];
        },
        confirmAuxTwoShoulder() {
            this.isAuxTwoVisible = 'C';
            this.chestShredFlyTwoForm = 'Y';
            // Additional logic if needed
        },
        confirmAuxTwoShoulderTwo() {
            this.isAuxTwoVisible = 'F';
            this.auxileriesTwoHeader = this.rearDeltStorage;
            this.chestShredFlyTwoForm = 'Y';
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
                    this.chestWarmupInstructions = [
                        "To perform this exercise, you sit on a bench or chair with your back straight and your feet flat on the floor.",
                        "Then, you hold a pair of dumbbells or cables with your arms extended out to your sides at shoulder height.",
                        "From this position, you slowly bring the weights together in front of your chest, squeezing your chest muscles at the top of the movement, and then lower the weights back to the starting position in a controlled manner."
                    ];
                    break;
                case 'standing_cable_fly':
                    this.chestWarmupHeader = 'Standing Cable Fly';
                    this.chestWarmupInstructions = [
                        "To perform this exercise, you stand in the middle of a cable machine with one foot slightly in front of the other for balance, and hold one handle in each hand.",
                        "Your arms should be extended out to the sides at shoulder height, and your palms facing forward. From this position, you bring the handles together in front of your chest, squeezing your chest muscles at the top of the movement, and then slowly return the handles to the starting position in a controlled manner.",
                        "This exercise provides constant tension throughout the movement due to the cable resistance, which can help to build and define the chest muscles. It also engages the core muscles to help maintain stability during the exercise."
                    ];
                    break;
                case 'incline_dumbbell_fly':
                    this.chestWarmupHeader = 'Incline Dumbbell FLy';
                    this.chestWarmupInstructions = [
                        "To perform this exercise, you lie on an incline bench with your feet flat on the floor and your back and head supported on the bench. Holding a pair of dumbbells, you start with your arms extended out to the sides and slightly bent at the elbow, and your palms facing each other.",
                        "From this position, you slowly lower the dumbbells down and out to your sides, keeping your arms slightly bent, until you feel a stretch in your chest muscles. Then, you bring the dumbbells back up to the starting position, squeezing your chest muscles at the top of the movement.",
                        "This exercise can help to strengthen and define the upper chest muscles, and also engage the shoulders and triceps as secondary muscles. It is important to use a weight that is manageable and to maintain proper form throughout the exercise to avoid strain or injury."
                    ];
                    break;
                case 'flat_dumbbell_fly':
                    this.chestWarmupHeader = 'Flat Dumbbell Fly';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.chestPressOneHeader = 'Seth Set';
                            this.chestPressOneHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyOneIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.chestFlyOneHeader = 'Seth Set';
                            this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPreschestPressTwoHeaderConfirmedsOneHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestPressTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_two':
                            this.chestPressTwoHeader = 'Seth Set';
                            this.chestPressTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_shoulder':
                            this.chestFlyTwoHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
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
                            this.chestTricepsIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.chestTricepsHeader = 'Seth Set';
                            this.chestTricepsHeaderConfirmed = 'Seth Set';
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
                            this.chestTricepsIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.chestTricepsHeader = 'Seth Set';
                            this.chestTricepsHeaderConfirmed = 'Seth Set';
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
                            this.chestTricepsIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.chestTricepsHeader = 'Seth Set';
                            this.chestTricepsHeaderConfirmed = 'Seth Set';
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
                            this.chestTricepsIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.chestTricepsHeader = 'Seth Set';
                            this.chestTricepsHeaderConfirmed = 'Seth Set';
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
        // NEW SECTION
        // BACK

        endOfBackWorkout(){
            this.totalChestShredWorkouts = this.chestAccomplishedPercent;
            this.totalChestShredIntensifiedWorkouts = this.chestAccomplishedIntensifiedPercent;
            if (this.totalChestShredWorkouts > 0 || this.totalChestShredIntensifiedWorkouts > 0){
                this.shredBackSubset = 'Y';
            }
            this.chestAccomplishedIntensifiedPercent = 0;
            this.chestAccomplishedPercent = 0;
            this.goBackWarmup();
            this.goBackPullDownOne();
            this.goBackPulldownsTwoFirst();
            this.goBackPulldownTwo();
            this.goBackTrapsTwoFirst();
            this.goBackBiceps();
            this.showPage ='G';
            this.addBackWorkoutData();

        },

        handleBack(warmup) {
            this.isChestWarmupVisible = 'B';
            switch (warmup) {
                case 'pull_ups':
                    this.backWarmupHeader = 'Pull Ups';
                    this.chestWarmupInstructions = [
                        "They are performed by hanging from a horizontal bar with an overhand grip and then pulling the body up towards the bar until the chin is above the bar.",
                        "The movement involves using the back and arm muscles to lift the body weight against gravity. Pull-ups can be performed with different grips, such as wide, narrow, or neutral, and with variations in hand positioning, such as palms facing towards or away from the body.",
                        "These variations can target different muscles, including the biceps, forearms, and chest. Pull-ups are considered a challenging exercise and require significant upper-body strength."
                    ];
                    break;
                case 'cable_pull_downs':
                    this.backWarmupHeader = 'Cable Pulldowns';
                    this.chestWarmupInstructions = [
                        "This exercise is performed using a cable machine, which has a weight stack and a cable attached to a handle. The cable is adjusted to a height above the head, and the handle is grasped with an overhand grip.",
                        "To perform the exercise, the individual sits facing the cable machine with their feet flat on the ground and knees bent. They reach up and grasp the handle, and then pull it down towards the chest, using the back muscles to squeeze the shoulder blades together.",
                        "Cable pulldowns can be performed with different grips, such as wide, narrow, or neutral, and with variations in hand positioning, such as palms facing towards or away from the body. These variations can target different muscles, including the lats, rhomboids, and biceps."
                    ];
                    break;
                default:
                    break;
                }
        },

        goBackWarmup() {
            this.isChestWarmupVisible = 'A';
            this.backWarmupHeader = 'Warmups';
            this.chestWarmupInstructions = [];
        },
        confirmWarmup() {
            this.isChestWarmupVisible = 'C';
            this.chestShredWarmupForm = 'Y';
            // Additional logic if needed
        },

        // BACK PULLDOWN 1

        handleBackPulldownOne(rearDelt) {
            switch (rearDelt) {
                case 'bilateral_cable_pulldowns':
                    this.ischestFlyOneVisible = 'B';
                    this.intensifiedchestFlyOne = 'A';
                    this.backPressOneHeader = 'Bilateral Cable Pulldowns';
                    this.rearDeltStorage = 'Bilateral Cable Pulldowns';
                    break;
                case 'unliteral_cable_pulldowns':
                    this.ischestFlyOneVisible = 'D';
                    this.intensifiedchestFlyOne = 'B';
                    this.backPressOneHeader = 'Unilateral Cable Pulldowns';
                    this.rearDeltStorage = 'Unilateral Cable Pulldowns';
                    break;
                default:
                    break;
                }
        },
        handleBackPulldownOneBilateral(rearDelt) {
            this.ischestFlyOneVisible = 'C';
            switch (rearDelt) {
                case 'narrow_reverse_grip':
                    this.backPressOneHeader = 'Narrow Reverse Grip Pulldown';
                    this.chestFlyOneHeaderConfirmed = 'Narrow Reverse Grip Pulldown';
                    this.chestFlyOneInstructions = [
                        "Here's how to perform narrow reverse grip bilateral pulldowns: Sit on a lat pulldown machine and adjust the knee pad or thigh support so that it fits snugly against your legs.",
                        "Grasp the handles of the lat pulldown bar with a reverse (underhand) grip, hands shoulder-width apart or slightly closer. Plant your feet firmly on the ground and keep your knees bent at a comfortable angle.",
                        "Sit upright with a straight back and engage your core for stability throughout the exercise. Start with your arms fully extended, elbows slightly bent, and the bar just above your chest.",
                        "As you exhale, pull the bar down towards your upper chest, leading with your elbows. Focus on engaging your back muscles, especially the lats, to initiate the movement.",
                        "Squeeze your shoulder blades together at the bottom of the movement, feeling the contraction in your back muscles. Hold this position for a moment to maximize muscle engagement. Inhale as you slowly and under control, allow the bar to return to the starting position, fully extending your arms."
                    ];
                    break;
                case 'supinated_grip':
                    this.backPressOneHeader = 'Supinated Grip Pulldowns';
                    this.chestFlyOneHeaderConfirmed = 'Supinated Grip Pulldowns';
                    this.chestFlyOneInstructions = [
                        "Here's how to perform supinated grip bilateral pulldowns: Sit on a lat pulldown machine and adjust the thigh support so that it fits snugly against your legs.",
                        "Grasp the handles of the lat pulldown bar with a supinated grip, palms facing you. Your hands should be closer together than shoulder-width apart, allowing for a narrow grip. Plant your feet firmly on the ground and keep your knees bent at a comfortable angle.",
                        "Sit upright with a straight back and engage your core for stability throughout the exercise. Start with your arms fully extended, elbows slightly bent, and the bar just above your chest.",
                        "As you exhale, pull the bar down towards your upper chest, leading with your elbows. Focus on engaging your back muscles, particularly the lats, to initiate the movement. Squeeze your shoulder blades together at the bottom of the movement, feeling the contraction in your back muscles. Simultaneously, focus on flexing your biceps as you bring your hands closer to your body.",
                        "Hold the contracted position for a moment to maximize muscle engagement and feel the peak contraction in your back and biceps. Inhale as you slowly and under control, allow the bar to return to the starting position, fully extending your arms."
                    ];
                    break;
                case 'wide_grip':
                    this.backPressOneHeader = 'Wide Grip Pulldowns';
                    this.chestFlyOneHeaderConfirmed = 'Wide Grip Pulldowns';
                    this.chestFlyOneInstructions = [
                        "Here's how to perform wide grip bilateral pulldowns: Sit on a lat pulldown machine and adjust the thigh support so that it fits snugly against your legs.",
                        "Grasp the handles of the lat pulldown bar with a wide grip, hands placed slightly wider than shoulder-width apart. Your palms should be facing away from you (overhand grip). Plant your feet firmly on the ground and keep your knees bent at a comfortable angle.",
                        "LSit upright with a straight back and engage your core for stability throughout the exercise. Start with your arms fully extended, elbows slightly bent, and the bar just above your chest.",
                        "As you exhale, pull the bar down towards your upper chest, leading with your elbows. Focus on engaging your back muscles, particularly the lats, to initiate the movement. Squeeze your shoulder blades together at the bottom of the movement, feeling the contraction in your back muscles. Maintain tension in your back throughout the movement.",
                        "Inhale as you slowly and under control, allow the bar to return to the starting position, fully extending your arms."
                    ];
                    break;
                default:
                    break;
                }
        },
        handleBackPulldownOneUnilateral(rearDelt) {
            this.ischestFlyOneVisible = 'E';
            switch (rearDelt) {
                case 'plate_loaded_pulldown':
                    this.backPressOneHeader = 'Plate Loaded Pulldowns';
                    this.chestFlyOneHeaderConfirmed = 'Plate Loaded Pulldowns';
                    this.chestFlyOneInstructions = [
                        "Here's a description of how to perform unilateral plate loaded pulldowns: Adjust the seat height of the plate loaded pulldown machine so that your thighs are firmly pressed against the pads and your feet are flat on the floor.",
                        "Select an appropriate weight plate and load it onto the machine. Make sure it is securely in place. Sit facing the machine, grasping the handles with an overhand grip (palms facing away from you). Position yourself with your back straight and your chest up.",
                        "Extend your arms fully and keep a slight bend in your elbows. This is your starting position. Inhale and engage your core muscles. Begin the movement by pulling the handle down and towards your chest in a controlled and fluid motion. Focus on squeezing your back muscles as you initiate the pull.",
                        "Continue pulling until the handle reaches your chest and your elbows are fully flexed. Keep your shoulders down and back, and avoid shrugging them up towards your ears.",
                        "Pause for a moment at the bottom of the movement, focusing on feeling the contraction in your back muscles. Exhale and slowly extend your arms back to the starting position, maintaining control and tension in your muscles throughout the entire range of motion."
                    ];
                    break;
                case 'cable_machine_pulldown':
                    this.backPressOneHeader = 'Cable Machine Pulldowns';
                    this.chestFlyOneHeaderConfirmed = 'Cable Machine Pulldowns';
                    this.chestFlyOneInstructions = [
                        "Here's a description of how to perform unilateral cable machine pulldowns: Set up a cable machine with a single handle attachment at a height slightly above your head level. Make sure the cable is securely attached to the weight stack.",
                        "Stand next to the machine and grasp the handle with an overhand grip (palms facing away from you) using one hand. Step away from the machine, allowing your arm to fully extend. This is your starting position. Position yourself with your feet shoulder-width apart, knees slightly bent, and maintain a neutral spine with your chest up and shoulders back.",
                        "Inhale and engage your core muscles. Begin the movement by pulling the handle down and towards the side of your torso in a controlled and fluid motion. Focus on squeezing your back muscles as you initiate the pull.",
                        "Continue pulling until your elbow is fully flexed and the handle reaches the side of your torso. Keep your shoulder down and back, avoiding shrugging it up towards your ear.",
                        "Pause for a moment at the bottom of the movement, focusing on feeling the contraction in your back muscles. Exhale and slowly extend your arm back to the starting position, maintaining control and tension in your muscles throughout the entire range of motion."
                    ];
                    break;
                default:
                    break;
            }
        },
        handleBackPullDownOneIntensify(intensifiedRearDelts) {
            if (this.intensifiedchestFlyOne = 'A'){
                this.ischestFlyOneVisible = 'H';
            }
            else if (this.intensifiedchestFlyOne = 'B'){
                this.ischestFlyOneVisible = 'J';
            }
            switch (intensifiedRearDelts) {
                case 'drop_press_fly':
                    this.chestFlyOneHeader = 'Drop Set';
                    this.chestFlyOneHeaderConfirmed = 'Drop Set';
                    this.chestFlyOneIntensifiedInstructions = [
                        "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                        "This process can be repeated several times, typically three to four weight reductions in total.",
                        "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                        "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                        "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                    ];
                    break;
                case 'seth_press_fly':
                    this.chestFlyOneHeader = 'Seth Set';
                    this.chestFlyOneHeaderConfirmed = 'Seth Set';
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
        },
        goBackPullDownOne() {
            this.ischestFlyOneVisible = 'A';
            this.backPressOneHeader = 'Pulldowns 1';
            this.chestFlyOneInstructions = [];
        },
        confirmChestFlyOne() {
            this.ischestFlyOneVisible = 'L'; 
            this.chestShredFlyOneForm = 'Y';
            // Additional logic if needed
        },
        confirmBackPullDownOneThird() {
            if (this.intensifiedchestFlyOne = 'A'){
                this.ischestFlyOneVisible = 'I';
            }
            else if (this.intensifiedchestFlyOne = 'B'){
                this.ischestFlyOneVisible = 'K';
            }
            
            this.chestFlyOneHeader = this.rearDeltStorage;
            this.chestFlyOneP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredFlyOneForm = 'Y';

            // Additional logic if needed
        },
        intensifyPullDownOne() {
            this.chestFlyOneHeader = 'Intensified';
            this.ischestFlyOneVisible = 'F';
            this.backPressOneP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        intensifyPullDownTwo() {
            this.chestFlyOneHeader = 'Intensified';
            this.ischestFlyOneVisible = 'G';
            this.backPressOneP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackPullDownOneSecond() {
            this.ischestFlyOneVisible = 'F';          
            // this.chestFlyOneHeader = this.rearDeltStorage;
            // this.chestFlyOneP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackPullDownOneThird() {
            this.ischestFlyOneVisible = 'D';          
        },
        goBackPullDownOneFifth() {
            this.ischestFlyOneVisible = 'B';  
            this.backPressOneP = 'Aim for 3 - 4 sets. 8 - 12 reps.';         
        },
        goBackRowOneFifth() {
            this.ischestFlyOneVisible = 'C';           
        },
        // goBackPullDownOneSixth() {
        //     this.ischestFlyOneVisible = 'H';           
        // },
        goBackPullDownOneSeventh() {
            this.ischestFlyOneVisible = 'E';  
            this.backPressOneP = 'Aim for 3 - 4 sets. 8 - 12 reps.';         
         
        },
        // BACK ROW
        // first section
        handleBackRowOne(rearDelt) {
            this.ischestPressOneVisible = 'B';
            switch (rearDelt) {
                case 'low_dumbbell_rows':
                    this.intensifiedchestPressOne = 'A';
                    this.backRowHeader = 'Low Dumbbell Rows';
                    this.rearDeltStorage = 'Low Dumbbell Rows';
                    this.chestPressOneInstructions = [
                        "They are performed using dumbbells and a bench and are often used as a variation to traditional barbell rows.",
                        "To perform low dumbbell rows, the individual begins by placing one knee and hand on a flat bench, with the opposite foot on the ground.",
                        "The dumbbell is then grasped with the free hand and lifted towards the chest, using the back muscles to squeeze the shoulder blades together.",
                        "Low dumbbell rows can be performed with different grips, such as wide, narrow, or neutral, and with variations in hand positioning, such as palms facing towards or away from the body. These variations can target different muscles, including the lats, rhomboids, and biceps.",
                        "Low dumbbell rows are considered an effective exercise for building upper body strength and improving posture."

                    ];
                    break;
                case 'smith_machine_rows':
                    this.intensifiedchestPressOne = 'B';
                    this.backRowHeader = 'Smith Machine Rows';
                    this.rearDeltStorage = 'Smith Machine Rows';
                    this.chestPressOneInstructions = [
                        "It is performed using a Smith machine, which is a weight machine that consists of a barbell attached to a vertical track.",
                        "To perform the Smith machine row, the individual stands facing the machine with the barbell at waist height. They then grasp the bar with an overhand grip, and bend their knees slightly.",
                        "They pull the bar towards the lower chest by squeezing the shoulder blades together, and then slowly lower it back down to the starting position.",
                        "Smith machine rows can be performed with different grips, such as wide, narrow, or neutral, and with variations in hand positioning, such as palms facing towards or away from the body. These variations can target different muscles, including the lats, rhomboids, and biceps.",
                        "Smith machine rows are considered an effective exercise for building upper body strength and improving posture."
                    ];
                    break;
                case 'plate_loaded_rows':
                    this.intensifiedchestPressOne = 'C';
                    this.backRowHeader = 'Plate Loaded Rows';
                    this.rearDeltStorage = 'Plate Loaded Rows';
                    this.chestPressOneInstructions = [
                        "Here's how to perform plate loaded rows: Adjust the seat or position yourself in a way that allows you to comfortably reach the handles or grips of the machine.", 
                        "Sit down with your back against the pad and your feet flat on the floor. Grasp the handles or grips with both hands, keeping your palms facing each other.",
                        "With your back straight and core engaged, initiate the rowing movement by pulling the handles toward your torso. Squeeze your shoulder blades together as you pull, focusing on engaging the muscles of your upper back.",
                        "Squeeze your shoulder blades together as you pull, focusing on engaging the muscles of your upper back.",
                        "Pause for a moment when the handles reach your torso, then slowly release the weight back to the starting position."
                    ];
                    break;
                case 't_bar_rows':
                    this.intensifiedchestPressOne = 'D';
                    this.backRowHeader = 'T-Bar Rows';
                    this.rearDeltStorage = 'T-Bar Rows';
                    this.chestPressOneInstructions = [
                        "Here's how to perform T-bar rows: Set up the T-bar row machine or securely place one end of a barbell in a landmine attachment or a corner of a room.",
                        "Load the opposite end of the barbell with weight plates according to your desired resistance. Start with a manageable weight and adjust as needed. Straddle the barbell with your feet shoulder-width apart. Bend your knees slightly and hinge forward at the hips, maintaining a flat back and a neutral spine. Your torso should be at a roughly 45-degree angle to the floor.",
                        "With both hands, grip the handles or the barbell close to the weight plates. Your palms should be facing each other (neutral grip) or facing your body (pronated grip), depending on the setup of the equipment.",
                        "Pull the weight towards your chest by retracting your shoulder blades and bending your elbows. Keep your elbows close to your body throughout the movement.",
                        "Squeeze your back muscles at the top of the movement, ensuring a full contraction. Slowly lower the weight back down to the starting position, maintaining control and a slight stretch in your back muscles."
                    ];
                    break;
                case 'barbell_rows':
                    this.intensifiedchestPressOne = 'E';
                    this.backRowHeader = 'Barbell Rows';
                    this.rearDeltStorage = 'Barbell Rows';
                    this.chestPressOneInstructions = [
                        "To perform the cable shoulder press, follow these steps: Attach a cable to a high pulley on a cable machine and adjust the weight to the desired resistance.",
                        "Stand facing the machine with your feet shoulder-width apart and grasp the handles with an overhand grip. Bring the handles down to shoulder level with your elbows bent at a 90-degree angle.",
                        "Press the handles upward, straightening your arms above your head. Lower the handles back to the starting position, keeping your elbows bent at a 90-degree angle.",
                        "Repeat for the desired number of repetitions. It is important to maintain proper form throughout the exercise, keeping your back straight and your core engaged.",
                        "You can vary the intensity of the exercise by adjusting the weight of the machine or by changing the grip width or hand position."
                    ];
                    break;
                case 'cable_rows':
                    this.intensifiedchestPressOne = 'F';
                    this.backRowHeader = 'Cable Rows';
                    this.rearDeltStorage = 'Cable Rows';
                    this.chestPressOneInstructions = [
                        "They are performed using a cable machine and are considered a versatile exercise in many weightlifting routines.",
                        "To perform cable rows, the individual begins by sitting on a bench or a seat with their feet flat on the ground and their knees slightly bent. They then grasp the cable handle with an overhand grip, with their hands shoulder-width apart.",
                        "The cable is pulled towards the lower chest by squeezing the shoulder blades together, and then slowly released back to the starting position with control.",
                        "Cable rows can be performed with different grips, such as wide, narrow, or neutral, and with variations in hand positioning, such as palms facing towards or away from the body.",
                        "These variations can target different muscles, including the lats, rhomboids, and biceps. Cable rows are considered an effective exercise for building upper body strength and improving posture."
                    ];
                    break;
                case 'machine_rows':
                    this.intensifiedchestPressOne = 'G';
                    this.backRowHeader = 'Machine Rows';
                    this.rearDeltStorage = 'Machine Rows';
                    this.chestPressOneInstructions = [
                        "Here's how to perform machine rows: Adjust the seat and any other settings on the machine to fit your body size and comfort. Sit down on the machine with your feet flat on the footrests and your knees slightly bent.",
                        "Grasp the handles or grips of the machine with an overhand grip, keeping your hands shoulder-width apart or slightly wider. Sit with an upright posture, keeping your back straight and your chest lifted.",
                        "Begin the exercise by initiating the rowing movement. Pull the handles or grips towards your torso, retracting your shoulder blades and squeezing your back muscles.",
                        "Focus on using your back muscles to perform the movement rather than relying on your arms or momentum. Pull the handles as far back as possible while maintaining control and a stable position.",
                        "Pause for a moment at the fully contracted position, feeling the contraction in your back muscles. Slowly release the handles back to the starting position, extending your arms fully and allowing your shoulder blades to protract."
                    ];
                    break;
                default:
                    break;
                }
        },
        handleBackPulldownsTwoIntensfier(intensifiedRearDelts) {
            this.ischestPressOneVisible = 'E';
            var statement = this.intensifiedchestPressOne;
                // PLATE LOADED INCLINE PRESS
                switch (intensifiedRearDelts) {
                    case 'drop_press':
                        console.log("statement passed A", statement)
                        this.backRowHeader = 'Drop Set';
                        this.chestPressOneHeaderConfirmed = 'Drop Set';
                        this.chestPressOneIntensifiedInstructions = [
                            "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                            "This process can be repeated several times, typically three to four weight reductions in total.",
                            "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                            "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                            "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                        ];
                        break;
                    case 'seth_press':
                        this.backRowHeader = 'Seth Set';
                        this.chestPressOneHeaderConfirmed = 'Seth Set';
                        this.chestPressOneIntensifiedInstructions = [
                            "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                            "An example of this is when you are doing dumbbell bench press.",
                            "You start with 70 pound dumbbells and you hit 10 reps.",
                            "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                            "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                        ];
                        break;
                    case 'pause_press':
                        this.backRowHeader = 'Pause Repetitions';
                        this.chestPressOneHeaderConfirmed = 'Pause Repetitions';
                        this.chestPressOneIntensifiedInstructions = [
                            "To perform this exercise, you would load a plate-loaded incline press machine with a weight that is appropriate for your fitness level and adjust the machine so that you are sitting at a slight incline.",
                            "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                            "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                            "The incline press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                            "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                        ];
                        break;
                    case 'negatives_press':
                        this.backRowHeader = 'Negatives';
                        this.chestPressOneHeaderConfirmed = 'Negatives';
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
        },
        goBackPulldownsTwoFirst() {
            this.ischestPressOneVisible = 'A';
            this.backRowHeader = 'Rows';
            this.chestPressOneInstructions = [];
        },
        confirmBackPulldownsTwoFirst() {
            this.ischestPressOneVisible = 'C';
            this.chestShredPressOneForm = 'Y';
            // Additional logic if needed
        },
        confirmBackPulldownsTwoSecond() {
            this.ischestPressOneVisible = 'F';
            this.backRowHeader = this.rearDeltStorage;
            this.backRowP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
            this.chestShredPressOneForm = 'Y';
            // Additional logic if needed
        },
        intensifyBackPulldownsTwo() {
            this.backRowHeader = 'Intensified';
            this.ischestPressOneVisible = 'D';
            this.backRowP = 'Pick an Intensifier from the listed buttons below.';

            // Additional logic if needed
        },
        goBackPulldownsTwoSecond() {
            this.ischestPressOneVisible = 'B'           
            this.backRowHeader = this.rearDeltStorage;
            this.backRowP = '3 to 4 sets, 6 to 10 reps';

        },
        goBackPulldownsTwoThird() {
            this.ischestPressOneVisible = 'D'           
            // this.rearDeltHeader = this.rearDeltStorage;
            // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';

        },
        // NEW SECTION
        // PULLDOWNS2 / PULLOVERS

        handleBackPulldownTwo(rearDelt) {
            switch (rearDelt) {
                case 'bilateral_cable_pulldowns':
                    this.ischestPressTwoVisible = 'G';
                    this.intensifiedchestFlyTwo = 'A';
                    this.backPulldownTwoHeader = 'Bilateral Cable Pulldowns';
                    this.rearDeltStorage = 'Bilateral Cable Pulldowns';
                    break;
                case 'unilateral_cable_pulldowns':
                    this.ischestPressTwoVisible = 'H';
                    this.intensifiedchestFlyTwo = 'B';
                    this.backPulldownTwoHeader = 'Unilateral Cable Pulldowns';
                    this.rearDeltStorage = 'Unilateral Cable Pulldowns';
                    break;
                default:
                    break;
                }
        },
        handleBackPulldownTwoBilateral(rearDelt) {
            this.ischestPressTwoVisible = 'I';
            switch (rearDelt) {
                case 'narrow_reverse_grip':
                    this.backPulldownTwoHeader = 'Narrow Reverse Grip Pulldown';
                    this.chestPressTwoHeaderConfirmed = 'Narrow Reverse Grip Pulldown';
                    this.chestPressTwoInstructions = [
                        "Here's how to perform narrow reverse grip bilateral pulldowns: Sit on a lat pulldown machine and adjust the knee pad or thigh support so that it fits snugly against your legs.",
                        "Grasp the handles of the lat pulldown bar with a reverse (underhand) grip, hands shoulder-width apart or slightly closer. Plant your feet firmly on the ground and keep your knees bent at a comfortable angle.",
                        "Sit upright with a straight back and engage your core for stability throughout the exercise. Start with your arms fully extended, elbows slightly bent, and the bar just above your chest.",
                        "As you exhale, pull the bar down towards your upper chest, leading with your elbows. Focus on engaging your back muscles, especially the lats, to initiate the movement.",
                        "Squeeze your shoulder blades together at the bottom of the movement, feeling the contraction in your back muscles. Hold this position for a moment to maximize muscle engagement. Inhale as you slowly and under control, allow the bar to return to the starting position, fully extending your arms."
                    ];
                    break;
                case 'supinated_grip':
                    this.backPulldownTwoHeader = 'Supinated Grip Pulldowns';
                    this.chestPressTwoHeaderConfirmed = 'Supinated Grip Pulldowns';
                    this.chestPressTwoInstructions = [
                        "Here's how to perform supinated grip bilateral pulldowns: Sit on a lat pulldown machine and adjust the thigh support so that it fits snugly against your legs.",
                        "Grasp the handles of the lat pulldown bar with a supinated grip, palms facing you. Your hands should be closer together than shoulder-width apart, allowing for a narrow grip. Plant your feet firmly on the ground and keep your knees bent at a comfortable angle.",
                        "Sit upright with a straight back and engage your core for stability throughout the exercise. Start with your arms fully extended, elbows slightly bent, and the bar just above your chest.",
                        "As you exhale, pull the bar down towards your upper chest, leading with your elbows. Focus on engaging your back muscles, particularly the lats, to initiate the movement. Squeeze your shoulder blades together at the bottom of the movement, feeling the contraction in your back muscles. Simultaneously, focus on flexing your biceps as you bring your hands closer to your body.",
                        "Hold the contracted position for a moment to maximize muscle engagement and feel the peak contraction in your back and biceps. Inhale as you slowly and under control, allow the bar to return to the starting position, fully extending your arms."
                    ];
                    break;
                case 'wide_grip':
                    this.backPulldownTwoHeader = 'Wide Grip Pulldowns';
                    this.chestPressTwoHeaderConfirmed = 'Wide Grip Pulldowns';
                    this.chestPressTwoInstructions = [
                        "Here's how to perform wide grip bilateral pulldowns: Sit on a lat pulldown machine and adjust the thigh support so that it fits snugly against your legs.",
                        "Grasp the handles of the lat pulldown bar with a wide grip, hands placed slightly wider than shoulder-width apart. Your palms should be facing away from you (overhand grip). Plant your feet firmly on the ground and keep your knees bent at a comfortable angle.",
                        "Sit upright with a straight back and engage your core for stability throughout the exercise. Start with your arms fully extended, elbows slightly bent, and the bar just above your chest.",
                        "As you exhale, pull the bar down towards your upper chest, leading with your elbows. Focus on engaging your back muscles, particularly the lats, to initiate the movement. Squeeze your shoulder blades together at the bottom of the movement, feeling the contraction in your back muscles. Maintain tension in your back throughout the movement.",
                        "Inhale as you slowly and under control, allow the bar to return to the starting position, fully extending your arms."
                    ];
                    break;
                default:
                    break;
                }
        },
        handleBackPulldownTwoUnilateral(rearDelt) {
            this.ischestPressTwoVisible = 'J';
            switch (rearDelt) {
                case 'plate_loaded_pulldown':
                    this.backPulldownTwoHeader = 'Plate Loaded Pulldowns';
                    this.chestPressTwoHeaderConfirmed = 'Plate Loaded Pulldowns';
                    this.chestPressTwoInstructions = [
                        "Here's a description of how to perform unilateral plate loaded pulldowns: Adjust the seat height of the plate loaded pulldown machine so that your thighs are firmly pressed against the pads and your feet are flat on the floor.",
                        "Select an appropriate weight plate and load it onto the machine. Make sure it is securely in place. Sit facing the machine, grasping the handles with an overhand grip (palms facing away from you). Position yourself with your back straight and your chest up.",
                        "Extend your arms fully and keep a slight bend in your elbows. This is your starting position. Inhale and engage your core muscles. Begin the movement by pulling the handle down and towards your chest in a controlled and fluid motion. Focus on squeezing your back muscles as you initiate the pull.",
                        "Continue pulling until the handle reaches your chest and your elbows are fully flexed. Keep your shoulders down and back, and avoid shrugging them up towards your ears.",
                        "Pause for a moment at the bottom of the movement, focusing on feeling the contraction in your back muscles. Exhale and slowly extend your arms back to the starting position, maintaining control and tension in your muscles throughout the entire range of motion."
                    ];
                    break;
                case 'cable_machine_pulldown':
                    this.backPulldownTwoHeader = 'Cable Machine Pulldowns';
                    this.chestPressTwoHeaderConfirmed = 'Cable Machine Pulldowns';
                    this.chestPressTwoInstructions = [
                        "Here's a description of how to perform unilateral cable machine pulldowns: Set up a cable machine with a single handle attachment at a height slightly above your head level. Make sure the cable is securely attached to the weight stack.",
                        "Stand next to the machine and grasp the handle with an overhand grip (palms facing away from you) using one hand. Step away from the machine, allowing your arm to fully extend. This is your starting position. Position yourself with your feet shoulder-width apart, knees slightly bent, and maintain a neutral spine with your chest up and shoulders back.",
                        "Inhale and engage your core muscles. Begin the movement by pulling the handle down and towards the side of your torso in a controlled and fluid motion. Focus on squeezing your back muscles as you initiate the pull.",
                        "Continue pulling until your elbow is fully flexed and the handle reaches the side of your torso. Keep your shoulder down and back, avoiding shrugging it up towards your ear.",
                        "Pause for a moment at the bottom of the movement, focusing on feeling the contraction in your back muscles. Exhale and slowly extend your arm back to the starting position, maintaining control and tension in your muscles throughout the entire range of motion."
                    ];
                    break;
                default:
                    break;
            }
        },
        handleBackPullDownTwoIntensify(intensifiedRearDelts) {
            if (this.intensifiedchestFlyTwo = 'A'){
                this.ischestPressTwoVisible = 'H';
            }
            else if (this.intensifiedchestFlyTwo = 'B'){
                this.ischestPressTwoVisible = 'J';
            }
            // INCLINE SEATED CABLE FLY
            switch (intensifiedRearDelts) {
                case 'drop_press_fly':
                    this.backPulldownTwoHeader = 'Drop Set';
                    this.chestPressTwoHeaderConfirmed = 'Drop Set';
                    this.chestPressTwoIntensifiedInstructions = [
                        "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                        "This process can be repeated several times, typically three to four weight reductions in total.",
                        "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                        "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                        "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                    ];
                    break;
                case 'seth_press_fly':
                    this.backPulldownTwoHeader = 'Seth Set';
                    this.chestPressTwoHeaderConfirmed = 'Seth Set';
                    this.chestPressTwoIntensifiedInstructions = [
                        "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                        "An example of this is when you are doing dumbbell bench press.",
                        "You start with 70 pound dumbbells and you hit 10 reps.",
                        "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                        "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                    ];
                    break;
                case 'pause_press_fly':
                    this.backPulldownTwoHeader = 'Pause Repetitions';
                    this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                    this.chestPressTwoIntensifiedInstructions = [
                        "To perform seated cable incline fly pause reps, you begin by sitting on a bench with an adjustable incline, facing away from the cable machine.",
                        "You then grab the handles attached to the cables, with your arms extended out to the sides at shoulder height.",
                        "From this starting position, you then bring your arms together in front of your chest, squeezing your pectoral muscles as you do so, before pausing for a brief moment at the top of the movement before slowly lowering your arms back out to the starting position.",
                        "The pause is typically held for 2-3 seconds at the point where your arms are fully extended in front of your chest, creating maximum tension in your pectoral muscles.",
                        "By holding this pause, you increase the amount of time under tension for your muscles, which can stimulate muscle growth and help to develop greater muscle strength."
                    ];
                    break;
                case 'negatives_fly':
                    this.backPulldownTwoHeader = 'Negatives';
                    this.chestPressTwoHeaderConfirmed = 'Negatives';
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
        },
        handlePulldownTwo(rearDelt) {
            this.ischestPressTwoVisible = 'B';
            switch (rearDelt) {
                case 'dumbbell_pullovers':
                    this.intensifiedchestPressTwo = 'A';
                    this.backPulldownTwoHeader = 'Dumbbell Pullovers';
                    this.rearDeltStorage = 'Dumbbell Pullovers';
                    this.chestPressTwoInstructions = [
                        "Here's a description of how to perform dumbbell pullovers: Lie down on a flat bench with your head hanging slightly off the edge and your feet planted firmly on the ground.",
                        "Hold a dumbbell with both hands, gripping the inner part of the weight plates. Your palms should be facing upward (pronated grip). Extend your arms above your chest, keeping a slight bend in your elbows. This is your starting position.",
                        "Inhale and slowly lower the dumbbell backward in an arc-like motion while keeping your arms extended. Lower the dumbbell as far as you comfortably can without straining your shoulders or feeling discomfort in your lower back.",
                        "Pause briefly at the bottom of the movement, feeling a stretch in your chest and shoulders.",
                        "Exhale and engage your chest and back muscles as you reverse the motion and bring the dumbbell back to the starting position. Keep your arms relatively straight throughout the movement."

                    ];
                    break;
                case 'cable_pullovers':
                    this.intensifiedchestPressTwo = 'B';
                    this.backPulldownTwoHeader = 'Cable Pullovers';
                    this.rearDeltStorage = 'Cable Pullovers';
                    this.chestPressTwoInstructions = [
                        "Here's a description of how to perform rope attachment cable pullovers: Set up a cable machine with a rope attachment at a high position. Ensure that the rope is securely attached and the weight stack is appropriate for your strength level.",
                        "Stand facing away from the cable machine and position yourself in a stable stance with your feet shoulder-width apart. Keep a slight bend in your knees and maintain a straight back.",
                        "Grab the rope attachment with both hands, palms facing each other (neutral grip). Your hands should be positioned close together at the center of the rope. Step forward, allowing some tension on the cable, and position yourself so that your arms are fully extended in front of your body. This is your starting position.",
                        "Inhale and engage your core muscles. Begin the movement by slowly pulling the rope down and towards your thighs in a semicircular motion. Keep your arms straight and your elbows slightly bent throughout the exercise.As you reach the bottom of the movement, focus on squeezing your back and chest muscles while maintaining tension on the rope. Feel the stretch in your muscles.",
                        "Exhale and reverse the motion, slowly returning the rope to the starting position while maintaining control and tension in your muscles."
                    ];
                    break;
                default:
                    break;
            }
        },
        handlePulldownTwoIntensfier(intensifiedRearDelts) {
            this.ischestPressTwoVisible = 'E';
                this.backPulldownTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
                // PLATE LOADED INCLINE PRESS
                switch (intensifiedRearDelts) {
                    case 'drop_press_two':
                        this.backPulldownTwoHeader = 'Drop Set';
                        this.chestPressTwoHeaderConfirmed = 'Drop Set';
                        this.chestPressTwoIntensifiedInstructions = [
                            "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                            "This process can be repeated several times, typically three to four weight reductions in total.",
                            "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                            "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                            "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                        ];
                        break;
                    case 'seth_press_two':
                        this.backPulldownTwoHeader = 'Seth Set';
                        this.chestPressTwoHeaderConfirmed = 'Seth Set';
                        this.chestPressTwoIntensifiedInstructions = [
                            "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                            "An example of this is when you are doing dumbbell bench press.",
                            "You start with 70 pound dumbbells and you hit 10 reps.",
                            "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                            "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                        ];
                        break;
                    case 'pause_press_two':
                        this.backPulldownTwoHeader = 'Pause Repetitions';
                        this.chestPressTwoHeaderConfirmed = 'Pause Repetitions';
                        this.chestPressTwoIntensifiedInstructions = [
                            "To perform this exercise, you would load a plate-loaded incline press machine with a weight that is appropriate for your fitness level and adjust the machine so that you are sitting at a slight incline.",
                            "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                            "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                            "The incline press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                            "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                        ];
                        break;
                    case 'negatives_press_two':
                        this.backPulldownTwoHeader = 'Negatives';
                        this.chestPressTwoHeaderConfirmed = 'Negatives';
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
            },
            intensifyPulldownTwo() {
                this.backPulldownTwoHeader = 'Intensified';
                this.ischestPressTwoVisible = 'D';
                this.backPulldownTwoP = 'Pick an Intensifier from the listed buttons below.';
    
                // Additional logic if needed
            },
            goBackPulldownTwo() {
                this.ischestPressTwoVisible = 'A';
                this.backPulldownTwoHeader = 'Pulldown 2 / Pullovers';
                this.chestPressTwoInstructions = [];
            },
            confirmPulldownTwo() { 
                this.ischestPressTwoVisible = 'C';
                this.chestShredPressTwoForm = 'Y';
    
                // Additional logic if needed
            },
            confirmPulldownTwoSecond() {
                this.ischestPressTwoVisible = 'F';
                this.backPulldownTwoHeader = this.rearDeltStorage;
                this.chestPressTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
                this.chestShredPressTwoForm = 'Y';
    
                // Additional logic if needed
            },
            goBackPulldownTwoSecond() {
                this.ischestPressTwoVisible = 'B'           
                this.backPulldownTwoHeader = this.rearDeltStorage;
                this.chestPressTwoP = '3 to 4 sets, 6 to 10 reps';
    
            },
            goBackPulldownTwoThird() {
                this.ischestPressTwoVisible = 'D';
                this.backPulldownTwoHeader = 'Intensified';         
                // this.rearDeltHeader = this.rearDeltStorage;
                // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';
    
            },
            goBackPullDownTwo() {
                this.ischestPressTwoVisible = 'A';
                this.backPulldownTwoHeader = 'Pulldowns 2 / Pullovers';
                this.chestPressTwoInstructions = [];
            },
            goBackPullDownTwoSecondLat() {
                this.ischestPressTwoVisible = 'G';          
                // this.chestFlyOneHeader = this.rearDeltStorage;
                // this.chestFlyOneP = '3 to 4 sets, 6 to 10 reps';
    
            },
            goBackPullDownTwoThirdLat() {
                this.ischestPressTwoVisible = 'H';          
            },
            goBackPullDownOneFifth() {
                this.ischestPressTwoVisible = 'B';  
                this.backPulldownTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.';         
            },
            goBackRowOneFifth() {
                this.ischestPressTwoVisible = 'C';           
            },
            // goBackPullDownOneSixth() {
            //     this.ischestFlyOneVisible = 'H';           
            // },
            goBackPullDownOneSeventh() {
                this.ischestPressTwoVisible = 'E';  
                this.backPulldownTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.';         
             
            },
            confirmPulldownTwoThird (){
                this.ischestPressTwoVisible = 'K';  
                this.chestShredPressTwoForm = 'Y';
                //this.backPulldownTwoP = 'Aim for 3 - 4 sets. 8 - 12 reps.'; 
            },

            // NEW SECTION
            // TRAPS

            handleBackTrapsOne(rearDelt) {
                this.ischestFlyTwoVisible = 'B';
                switch (rearDelt) {
                    case 'dumbbell_shrugs':
                        this.intensifiedchestPressOne = 'A';
                        this.backTrapsHeader = 'Dumbbell Shrugs';
                        this.rearDeltStorage = 'Dumbbell Shrugs';
                        this.chestFlyTwoInstructions = [
                            "To perform dumbbell shrugs: Stand up straight with your feet shoulder-width apart and hold a dumbbell in each hand, with your palms facing your body.",
                            "Let your arms hang down at your sides, keeping your shoulders relaxed. Slowly lift your shoulders straight up towards your ears, keeping your arms straight.",
                            "Hold the contraction at the top of the movement for a second or two, squeezing your traps. Lower your shoulders back down to the starting position. Repeat the exercise for the desired number of repetitions.",
                            "Dumbbell shrugs can be a great exercise for building size and strength in the trapezius muscles, which can help to improve posture and support the neck and shoulders.",
                            "It's important to avoid shrugging your shoulders forward or rounding your back during the exercise, as this can put unnecessary strain on your neck and spine. Instead, focus on keeping your shoulders pulled back and your chest open."
    
                        ];
                        break;
                    case 'plate_shrugs':
                        this.intensifiedchestPressOne = 'B';
                        this.backTrapsHeader = 'Plate Shrugs';
                        this.rearDeltStorage = 'Plate Shrugs';
                        this.chestFlyTwoInstructions = [
                            "To perform plate shrugs: Stand up straight with your feet shoulder-width apart and hold a weight plate in each hand, with your palms facing your body.",
                            "Let your arms hang down at your sides, keeping your shoulders relaxed. Slowly lift your shoulders straight up towards your ears, keeping your arms straight.",
                            "Hold the contraction at the top of the movement for a second or two, squeezing your traps. Lower your shoulders back down to the starting position. Repeat the exercise for the desired number of repetitions.",
                            "Plate shrugs can be a great exercise for building size and strength in the trapezius muscles, which can help to improve posture and support the neck and shoulders.",
                            "It's important to avoid shrugging your shoulders forward or rounding your back during the exercise, as this can put unnecessary strain on your neck and spine. Instead, focus on keeping your shoulders pulled back and your chest open."
                        ];
                        break;
                    case 'cable_shrugs':
                        this.intensifiedchestPressOne = 'C';
                        this.backTrapsHeader = 'Cable Shrugs';
                        this.rearDeltStorage = 'Cable Shrugs';
                        this.chestFlyTwoInstructions = [
                            "To perform cable shrugs: Set the cable machine at a low height and attach a straight bar to the cable.", 
                            "Stand facing the machine with your feet shoulder-width apart and hold the bar with an overhand grip, with your palms facing down. Let your arms hang down at your sides, keeping your shoulders relaxed.",
                            "Slowly lift your shoulders straight up towards your ears, keeping your arms straight. Hold the contraction at the top of the movement for a second or two, squeezing your traps. Lower your shoulders back down to the starting position.",
                            "Cable shrugs can be a great exercise for building size and strength in the trapezius muscles, which can help to improve posture and support the neck and shoulders. Using a cable machine allows for constant resistance throughout the entire range of motion, which can help to maximize the effectiveness of the exercise.",
                            "It's important to avoid shrugging your shoulders forward or rounding your back during the exercise, as this can put unnecessary strain on your neck and spine. Instead, focus on keeping your shoulders pulled back and your chest open."
                        ];
                        break;
                    case 'barbell_shrugs':
                        this.intensifiedchestPressOne = 'D';
                        this.backTrapsHeader = 'Barbell Shrugs';
                        this.rearDeltStorage = 'Barbell Shrugs';
                        this.chestFlyTwoInstructions = [
                            "Here's how to perform barbell shrugs: Stand with your feet shoulder-width apart and hold a barbell in front of you using an overhand grip. Your hands should be slightly wider than shoulder-width apart.",
                            "Relax your arms and let the barbell hang in front of your thighs. This is the starting position.",
                            "Keeping your back straight and your core engaged, lift your shoulders upward as high as possible, focusing on squeezing your traps.",
                            "Hold the contracted position for a moment at the top, feeling the tension in your traps.",
                            "Slowly lower your shoulders back down to the starting position in a controlled manner."
                        ];
                        break;
                    case 'smith_machine_shrugs':
                        this.intensifiedchestPressOne = 'E';
                        this.backTrapsHeader = 'Smith Machine Shrugs';
                        this.rearDeltStorage = 'Smith Machine Shrugs';
                        this.chestFlyTwoInstructions = [
                            "Here's how to perform Smith machine shrugs: Stand in front of the Smith machine with your feet shoulder-width apart and position yourself underneath the barbell.",
                            "Grasp the barbell with an overhand grip, slightly wider than shoulder-width apart. Your palms should be facing your body.",
                            "Straighten your arms and allow the barbell to hang in front of your thighs. This is the starting position.",
                            "Keeping your back straight and your core engaged, lift your shoulders upward as high as possible, focusing on squeezing your traps.",
                            "Hold the contracted position for a moment at the top, feeling the tension in your traps. Slowly lower your shoulders back down to the starting position in a controlled manner."
                        ];
                        break;
                    case 'plate_loaded_shrugs':
                        this.intensifiedchestPressOne = 'F';
                        this.backTrapsHeader = 'Plate Loaded Shrugs';
                        this.rearDeltStorage = 'Plate Loaded Shrugs';
                        this.chestFlyTwoInstructions = [
                            "Here's how to perform plate loaded shrugs: Begin by standing with your feet shoulder-width apart, holding a weight plate in each hand with an overhand grip. The grip should be secure, and your palms should be facing your body.",
                            "Let your arms hang straight down at your sides, with the weight plates resting against your thighs. This is the starting position.",
                            "Keeping your back straight and your core engaged, lift your shoulders upward as high as possible, focusing on squeezing your traps.",
                            "Hold the contracted position at the top for a moment, feeling the tension in your traps.",
                            "Slowly lower your shoulders back down to the starting position in a controlled manner."
                        ];
                        break;
                    default:
                        break;
                    }
            },
            handleBackTrapsTwoIntensfier(intensifiedRearDelts) {
                this.ischestFlyTwoVisible = 'E';
                //var statement = this.intensifiedchestPressOne;
                    // PLATE LOADED INCLINE PRESS
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            this.backTrapsHeader = 'Drop Set';
                            this.chestFlyTwoHeaderConfirmed = 'Drop Set';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press':
                            this.backTrapsHeader = 'Seth Set';
                            this.chestFlyTwoHeaderConfirmed = 'Seth Set';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press':
                            this.backTrapsHeader = 'Pause Repetitions';
                            this.chestFlyTwoHeaderConfirmed = 'Pause Repetitions';
                            this.chestFlyTwoIntensifiedInstructions = [
                                "To perform this exercise, you would load a plate-loaded incline press machine with a weight that is appropriate for your fitness level and adjust the machine so that you are sitting at a slight incline.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The incline press primarily targets the upper portion of the chest muscles (pectoralis major), as well as the front of the shoulders (anterior deltoids) and the triceps.",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_press':
                            this.backTrapsHeader = 'Negatives';
                            this.chestFlyTwoHeaderConfirmed = 'Negatives';
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
            },
            goBackTrapsTwoFirst() {
                this.ischestFlyTwoVisible = 'A';
                this.backTrapsHeader = 'Traps';
                this.chestFlyTwoInstructions = [];
            },
            confirmBackTrapsTwoFirst() {
                this.ischestFlyTwoVisible = 'C';
                this.chestShredFlyTwoForm = 'Y';
                // Additional logic if needed
            },
            confirmBackTrapsTwoSecond() {
                this.ischestFlyTwoVisible = 'F';
                this.backTrapsHeader = this.rearDeltStorage;
                this.backRowP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
                this.chestShredFlyTwoForm = 'Y';
                // Additional logic if needed
            },
            intensifyBackTrapsTwo() {
                this.backTrapsHeader = 'Intensified';
                this.ischestFlyTwoVisible = 'D';
                this.backTrapsP = 'Pick an Intensifier from the listed buttons below.';
    
                // Additional logic if needed
            },
            goBackTrapsTwoSecond() {
                this.ischestFlyTwoVisible = 'B'           
                this.backTrapsHeader = this.rearDeltStorage;
                this.backRowP = '3 to 4 sets, 6 to 10 reps';
    
            },
            goBackTrapsTwoThird() {
                this.ischestFlyTwoVisible = 'D'           
                // this.rearDeltHeader = this.rearDeltStorage;
                // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';
    
            },
            // NEW SECTION
            // BICEPS
            handleStrictBiceps(rearDelt) {
                this.ischestTricepsVisible = 'B';
                this.intensifiedchestTriceps = 'A';
                switch (rearDelt) {
                    case 'strict_dumbbell_curls':
                        this.ischestTricepsVisible = 'C';
                        this.backBicepsHeader = 'Strict Dumbbell Curls';
                        this.rearDeltStorage = 'Strict Dumbbell Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform strict plate curls: Stand up straight with a weight plate in one hand, holding it vertically by gripping the edge with your fingers. Your palm should be facing forward (supinated grip). Maintain a shoulder-width stance and let your arm hang by your side. This is your starting position.",
                            "Keep your upper arm stationary and your elbow close to your torso throughout the exercise. This will ensure that the emphasis is on the biceps muscles and minimize any assistance from other muscle groups.",
                            "Engage your core and maintain a neutral spine. Avoid using excessive body momentum or swinging to lift the weight plate. Inhale and begin the movement by flexing your elbow joint and curling the weight plate upwards. Keep your wrist straight and the weight plate close to your body.",
                            "Continue the curling motion until the weight plate is near shoulder level, while maintaining control and tension in your biceps muscles.",
                            "At the top of the movement, squeeze your biceps for a brief moment to enhance the contraction. Exhale and slowly lower the weight plate back to the starting position, fully extending your elbow and maintaining control throughout the descent."
                        ];
                        break;
                    case 'strict_plate_curls':
                        this.ischestTricepsVisible = 'C';
                        this.backBicepsHeader = 'Strict Plate Curls';
                        this.rearDeltStorage = 'Strict Plate Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform strict plate curls: Stand up straight with a weight plate in one hand, holding it vertically by gripping the edge with your fingers. Your palm should be facing forward (supinated grip). Maintain a shoulder-width stance and let your arm hang by your side. This is your starting position.",
                            "Keep your upper arm stationary and your elbow close to your torso throughout the exercise. This will ensure that the emphasis is on the biceps muscles and minimize any assistance from other muscle groups.",
                            "Engage your core and maintain a neutral spine. Avoid using excessive body momentum or swinging to lift the weight plate. Inhale and begin the movement by flexing your elbow joint and curling the weight plate upwards. Keep your wrist straight and the weight plate close to your body.",
                            "Continue the curling motion until the weight plate is near shoulder level, while maintaining control and tension in your biceps muscles.",
                            "At the top of the movement, squeeze your biceps for a brief moment to enhance the contraction. Exhale and slowly lower the weight plate back to the starting position, fully extending your elbow and maintaining control throughout the descent."
                        ];
                        break;
                    case 'strict_cable_curls':
                        this.ischestTricepsVisible = 'C';
                        this.backBicepsHeader = 'Strict Cable Curls';
                        this.rearDeltStorage = 'Strict Cable Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform strict cable curls: Stand facing a cable machine with a straight bar attachment or rope attachment at the lowest position. Grab the attachment with an underhand grip (palms facing upward). Stand with your feet shoulder-width apart and maintain a slight bend in your knees. This is your starting position.",
                            "Keep your upper arms stationary and your elbows close to your torso throughout the exercise. This will ensure that the emphasis is on the biceps muscles and minimize any assistance from other muscle groups.",
                            "Engage your core and maintain a neutral spine. Avoid using excessive body momentum or swinging to lift the cable. Inhale and begin the movement by flexing your elbow joint and curling the cable attachment towards your shoulders. Keep your wrists straight and the attachment close to your body.",
                            "Continue the curling motion until the attachment reaches your shoulders, while maintaining control and tension in your biceps muscles.",
                            "At the top of the movement, squeeze your biceps for a brief moment to enhance the contraction. Exhale and slowly lower the cable attachment back to the starting position, fully extending your elbows and maintaining control throughout the descent."
                        ];
                        break;
                    case 'strict_EZ_bar_curls':
                        this.ischestTricepsVisible = 'C';
                        this.backBicepsHeader = 'Strict EZ Bar Curls';
                        this.rearDeltStorage = 'Strict  EZ Bar Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform strict EZ bar curls:",
                            "Stand up straight with your feet shoulder-width apart and grab the EZ bar with an underhand grip (palms facing up), hands slightly closer than shoulder-width apart on the outer angled grips of the bar. Your arms should be fully extended, and the bar should be resting against your thighs. This is your starting position.",
                            "Keeping your upper arms stationary, exhale and curl the EZ bar upward by contracting your biceps. Focus on using your forearms and biceps to lift the weight, rather than relying on momentum or swinging.",
                            "Continue curling the EZ bar until your biceps are fully contracted and the bar is at shoulder level. Squeeze your biceps at the top of the movement to maximize the contraction.",
                            "Inhale and slowly lower the EZ bar back to the starting position, controlling the descent and maintaining tension in your biceps. Repeat the movement for the desired number of repetitions."
                        ];
                        break;
                    case 'strict_straight_bar_curls':
                        this.ischestTricepsVisible = 'C';
                        this.backBicepsHeader = 'Strict Straight Bar Curls';
                        this.rearDeltStorage = 'Strict Straight Bar Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform strict straight bar curls: Stand up straight with your feet shoulder-width apart and grasp a straight barbell with an underhand grip (palms facing up). Your hands should be slightly wider than shoulder-width apart. The barbell should be resting against your thighs, and your arms should be fully extended. This is your starting position.",
                            "Keeping your upper arms stationary, exhale and curl the barbell upward by contracting your biceps. Focus on using your forearms and biceps to lift the weight, rather than relying on momentum or swinging.",
                            "Continue curling the barbell until your biceps are fully contracted and the barbell is at shoulder level. Squeeze your biceps at the top of the movement to maximize the contraction.",
                            "Inhale and slowly lower the barbell back to the starting position, controlling the descent and maintaining tension in your forearms and biceps.",
                            "Repeat the movement for the desired number of repetitions."
                        ];
                        break;
                    case 'partner_pressure_curls':
                        this.ischestTricepsVisible = 'C';
                        this.backBicepsHeader = 'Partner Pressure Curls';
                        this.rearDeltStorage = 'Partner Pressure Curls';
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
            handleBackBicepsIntensify(intensifiedRearDelts) {
                if (this.intensifiedchestTriceps = 'A'){
                    this.ischestTricepsVisible = 'E';
                }else if(this.intensifiedchestTriceps = 'B'){
                    this.ischestTricepsVisible = 'I';
                }
                switch (intensifiedRearDelts) {
                    case 'drop_press_tricep':
                        this.backBicepsHeader = 'Drop Set';
                        this.chestTricepsHeaderConfirmed = 'Drop Set';
                        this.chestTricepsIntensifiedInstructions = [
                            "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                            "This process can be repeated several times, typically three to four weight reductions in total.",
                            "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                            "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                            "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                        ];
                        break;
                    case 'seth_press_tricep':
                        this.backBicepsHeader = 'Seth Set';
                        this.chestTricepsHeaderConfirmed = 'Seth Set';
                        this.chestTricepsIntensifiedInstructions = [
                            "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                            "An example of this is when you are doing dumbbell bench press.",
                            "You start with 70 pound dumbbells and you hit 10 reps.",
                            "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                            "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                        ];
                        break;
                    case 'pause_press_tricep':
                        this.backBicepsHeader = 'Pause Repetitions';
                        this.chestTricepsHeaderConfirmed = 'Pause Repetitions';
                        this.chestTricepsIntensifiedInstructions = [
                            "Here are the steps to perform this exercise: Set an adjustable bench to a comfortable incline angle and load an EZ bar with weight plates that are appropriate for your fitness level.",
                            "Sit on the bench and grasp the EZ bar with an overhand grip, keeping your hands shoulder-width apart.",
                            "Begin the exercise by extending the EZ bar up and overhead, keeping your elbows close to your head and slowly lowering the bar down towards your forehead.",
                            "Without allowing your elbows to move, pause briefly at the bottom of the movement, and then extend the bar back up towards the starting position.",
                            "At the bottom of your repitition pause for 2 to 3 seconds."
                        ];
                        break;
                    case 'negatives_tricep':
                        this.backBicepsHeader = 'Negatives';
                        this.chestTricepsHeaderConfirmed = 'Negatives';
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
            },
            handleHammerCurls(rearDelt) {
                this.ischestTricepsVisible = 'G';
                this.intensifiedchestTriceps = 'B';
                switch (rearDelt) {
                    case 'dumbbell_hammer_curls':
                        this.backBicepsHeader = 'Dumbbell Hammer Curls';
                        this.rearDeltStorage = 'Dumbbell Hammer Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform plate hammer curls: Stand up straight with your feet shoulder-width apart and hold a weight plate in each hand. The weight plates should be held with an overhand grip (palms facing each other), and your thumbs should be on the inner rim of the plates.",
                            "Let your arms fully extend, keeping them close to your torso. This is your starting position.Keeping your upper arms stationary, exhale and curl the weight plates upward, contracting your forearms and biceps. Focus on using your wrists to lift the plates, rather than your shoulders or elbows.",
                            "Continue curling the weight plates until your biceps are fully contracted and the plates are at shoulder level. Squeeze your forearms and biceps at the top of the movement to maximize the contraction.",
                            "Inhale and slowly lower the weight plates back to the starting position, controlling the descent and maintaining tension in your forearms and biceps.",
                            "Repeat the movement for the desired number of repetitions."
                        ];
                        break;
                    case 'plate_hammer_curls':
                        this.backBicepsHeader = 'Plate Hammer Curls';
                        this.rearDeltStorage = 'Plate Hammer Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform plate hammer curls: Stand up straight with your feet shoulder-width apart and hold a weight plate in each hand. The weight plates should be held with an overhand grip (palms facing each other), and your thumbs should be on the inner rim of the plates.",
                            "Let your arms fully extend, keeping them close to your torso. This is your starting position.Keeping your upper arms stationary, exhale and curl the weight plates upward, contracting your forearms and biceps. Focus on using your wrists to lift the plates, rather than your shoulders or elbows.",
                            "Continue curling the weight plates until your biceps are fully contracted and the plates are at shoulder level. Squeeze your forearms and biceps at the top of the movement to maximize the contraction.",
                            "Inhale and slowly lower the weight plates back to the starting position, controlling the descent and maintaining tension in your forearms and biceps.",
                            "Repeat the movement for the desired number of repetitions."
                        ];
                        break;
                    case 'cable_hammer_curls':
                        this.backBicepsHeader = 'Cable Hammer Curls';
                        this.rearDeltStorage = 'Cable Hammer Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform cable hammer curls: Stand facing a cable machine with your feet shoulder-width apart. Attach a D-handle or rope attachment to the low pulley of the cable machine. Grasp the handle or rope with a neutral grip (palms facing each other), and let your arms fully extend downward. This is your starting position.",
                            "Keeping your upper arms stationary, exhale and curl the handle or rope upward, contracting your forearms and biceps. Focus on using your wrists to lift the weight, rather than your shoulders or elbows.",
                            "Continue curling until your biceps are fully contracted and the handle or rope is at shoulder level. Squeeze your forearms and biceps at the top of the movement to maximize the contraction.",
                            "Inhale and slowly lower the handle or rope back to the starting position, maintaining tension in your forearms and biceps throughout the descent.",
                            "Repeat the movement for the desired number of repetitions."
                        ];
                        break;
                    case 'reverse_EZ_curls':
                        this.backBicepsHeader = 'Reverse EZ Bar Curls';
                        this.rearDeltStorage = 'Reverse EZ Bar Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform reverse EZ bar curls: Stand up straight with your feet shoulder-width apart and grab an EZ bar with an overhand grip, palms facing down. Make sure your hands are slightly closer than shoulder-width apart on the bar.",
                            "Let your arms fully extend, keeping them close to your torso. This is your starting position. Keeping your upper arms stationary, exhale and curl the EZ bar upward, contracting your forearms and biceps. Focus on using your wrists to lift the weight, rather than your shoulders or elbows.",
                            "Continue curling the bar until your biceps are fully contracted and the bar is at shoulder level. Squeeze your forearms and biceps at the top of the movement to maximize the contraction.",
                            "Inhale and slowly lower the bar back to the starting position, controlling the descent and maintaining tension in your forearms and biceps.",
                            "Repeat the movement for the desired number of repetitions."
                        ];
                        break;
                    case 'reverse_straight_curls':
                        this.backBicepsHeader = 'Reverse Straight Bar Curls';
                        this.rearDeltStorage = 'Reverse Straight Bar Curls';
                        this.chestTricepsInstructions = [
                            "Here's a description of how to perform reverse straight bar curls: Stand up straight with your feet shoulder-width apart and grab a straight barbell with an overhand grip, palms facing down. Your hands should be slightly closer than shoulder-width apart on the bar.",
                            "Let your arms fully extend, keeping them close to your torso. This is your starting position. Keeping your upper arms stationary, exhale and curl the barbell upward, contracting your forearms and biceps. Focus on using your wrists to lift the weight, rather than your shoulders or elbows.",
                            "Continue curling the barbell until your biceps are fully contracted and the barbell is at shoulder level. Squeeze your forearms and biceps at the top of the movement to maximize the contraction.",
                            "Inhale and slowly lower the weight plates back to the starting position, controlling the descent and maintaining tension in your forearms and biceps.",
                            "Repeat the movement for the desired number of repetitions."
                        ];
                        break;
                    default:
                        break;
                    }
            },
            handleStrict(){
                this.ischestTricepsVisible = 'B';
                this.backBicepsHeader = 'Strict Curls';
            },
            handleHammer(){
                this.ischestTricepsVisible = 'F';
                this.backBicepsHeader = 'Hammer Curls';
            },
            goBackBiceps() {
                this.ischestTricepsVisible = 'A';
                this.backBicepsHeader = 'Biceps';
                this.chestTricepsInstructions = [];
            },
            confirmBackBiceps() {
                this.ischestTricepsVisible = 'K';
                this.chestShredTricepsForm = 'Y';
    
                // Additional logic if needed
            },
            confirmBackBicepsSecond() {
                this.ischestTricepsVisible = 'J';
                this.backBicepsHeader = this.rearDeltStorage;
                this.backBicepsP = 'Aim for 3 - 4 sets. 8 - 12 reps.';
                this.chestShredTricepsForm = 'Y';
    
                // Additional logic if needed
            },
            intensifyBiceps() {
                if (this.intensifiedchestTriceps = 'A'){
                    this.ischestTricepsVisible = 'D';
                }else if(this.intensifiedchestTriceps = 'B'){
                    this.ischestTricepsVisible = 'H';
                }
                this.backBicepsHeader = 'Intensified';
                this.backBicepsP = 'Pick an Intensifier from the listed buttons below.';
    
                // Additional logic if needed
            },
            goBackBicepsSecond() {
                this.ischestTricepsVisible = 'B'           
                this.chestTricepsHeader = this.rearDeltStorage;
                this.chestTricepsP = '3 to 4 sets, 6 to 10 reps';
    
            },
            goBackBicepsThird() {
                this.backBicepsHeader = this.rearDeltStorage;
                this.backBicepsP = '3 to 4 sets, 6 to 10 reps';
                this.ischestTricepsVisible = 'C';          
            },
            goBackBicepsFourth() {
                this.ischestTricepsVisible = 'D';           
            },
            goBackBicepsFifth() {
                this.backBicepsHeader = 'Hammer Curls';
                this.ischestTricepsVisible = 'F';           
            },
            goBackBicepsSixth() {
                this.ischestTricepsVisible = 'F';           
            },
            // NEW SECTION
            // LEGS

            endOfLegsWorkout(){
                this.totalChestShredWorkouts = this.chestAccomplishedPercent;
                this.totalChestShredIntensifiedWorkouts = this.chestAccomplishedIntensifiedPercent;
                if (this.totalChestShredWorkouts > 0 || this.totalChestShredIntensifiedWorkouts > 0){
                    this.shredLegsSubset = 'Y';
                }
                this.chestAccomplishedIntensifiedPercent = 0;
                this.chestAccomplishedPercent = 0;
                this.goBackLegsWarmup();
                this.goBackCalves();
                this.goBackCompoundOne();
                this.goBackQuad();
                this.goBackHamAuxTwo();
                this.showPage ='G';
                this.addLegWorkoutData();
            },

            handleLegsWarmup(warmup) {
                this.isWarmupVisible = 'B';
                switch (warmup) {
                    case 'leg_extensions':
                        this.warmupHeader = 'Leg Extensions';
                        this.instructions = [
                            "To perform leg extensions: Adjust the machine so that the seat is at a comfortable height and the padded bar rests on your shins just above your feet.",
                            "Sit on the machine with your back against the pad and your feet flat on the ground. Grab onto the handles on the sides of the seat to stabilize yourself. Slowly lift the padded bar up by extending your knees until your legs are fully straightened.",
                            "Hold the contraction at the top of the movement for a second or two, squeezing your quadriceps. Lower the padded bar back down to the starting position, keeping your movements slow and controlled. Leg extensions are a great exercise for isolating the quadriceps, which can help to build strength and size in the front of the thigh."
                        ];
                        break;
                    case 'light_squat':
                        this.warmupHeader = 'Light Squat';
                        this.instructions = [
                            "To perform a light squat, you would start by standing with your feet shoulder-width apart, with your toes pointing slightly outward. Step under the barbell, and adjust your body to the center of the bar.",
                            "Engage your core and inhale deeply, then begin to lower your body down into a squat position by bending at the knees and pushing your hips back.",
                            "Keep your back straight and your chest up as you lower yourself down until your thighs are parallel to the ground."
                        ];
                        break;
                    case 'lying_hamstring_curls':
                        this.warmupHeader = 'Lying Hamstring Curls';
                        this.instructions = [
                            "To perform hamstring curls: Adjust the machine so that the padded bench is at a comfortable height and the padded bar rests on your lower legs just above your ankles. Lie face down on the machine with your knees just off the edge of the bench and your feet pointed downward.",
                            "Hold onto the handles on the sides of the machine to stabilize yourself. Slowly curl your legs towards your buttocks by flexing your knees, and squeezing your hamstrings. Hold the contraction at the top of the movement for a second or two.",
                            "Lower your legs back down to the starting position, keeping your movements slow and controlled. Hamstring curls are a great exercise for isolating the hamstrings, which can help to build strength and size in the back of the thigh."
                        ];
                        break;
                    case 'seated_leg_curls':
                        this.warmupHeader = 'Seated Leg Curls';
                        this.instructions = [
                            "To perform seated leg curls: Adjust the leg curl machine so that the leg rest is set at your ankle height and the seat is positioned so that your knees are at the edge of the seat.",
                            "Sit on the machine with your back against the seat and your feet flat against the leg rest. Grasp the handles on the side of the seat and contract your core to stabilize your body.",
                            "Curl your legs towards your buttocks, squeezing your hamstrings at the top of the movement. Pause for a moment and then lower the weight back down to the starting position in a controlled manner."
                        ];
                        break;
                    default:
                        break;
                    }
            },
            goBackLegsWarmup() {
                this.isWarmupVisible = 'A';
                this.warmupHeader = 'Warmups';
                this.instructions = [];
            },
            confirmWarmupLegs() {
                this.isWarmupVisible = 'C';
                this.shoulderShredWarmupForm = 'Y';
                // Additional logic if needed
            },
            // CALF SECTION
            handleCalfRaises(rearDelt) {
                this.isRearDeltVisible = 'B';
                switch (rearDelt) {
                    case 'pendulum_calf_raises':
                        this.intensifiedRearDelt = 'A';
                        this.calvesHeader = 'Pendulum Calf Raises';
                        this.rearDeltStorage = 'Pendulum Calf Raises';
                        this.rearDeltInstructions = [
                            "To perform pendulum calf raises: Stand on the pendulum calf raise machine with the balls of your feet on the platform and your heels hanging off the edge. Hold onto the handles on the sides of the machine to stabilize yourself.",
                            "Slowly lower your heels towards the ground by dorsiflexing your ankles. Raise your heels by contracting your calf muscles, squeezing them at the top of the movement. Lower your heels back down to the starting position, keeping your movements slow and controlled.",
                            "Pendulum calf raises are a great exercise for isolating the calf muscles and improving ankle stability..",
                            "It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury. Instead, focus on using slow and controlled movements to maximize the effectiveness of the exercise.",
                            "You can also vary the exercise by using different foot positions, such as pointing your toes inward or outward, to target the muscles from different angles."
    
                        ];
                        break;
                    case 'smith_machine_calves':
                        this.intensifiedRearDelt = 'B';
                        this.calvesHeader = 'Smith Machine Calves';
                        this.rearDeltStorage = 'Smith Machine Calves';
                        this.rearDeltInstructions = [
                            "To perform Smith machine calf raises: Set the bar on the Smith machine to an appropriate height so that it sits on your shoulders comfortably. Stand with the balls of your feet on a weight plate or platform, with your heels hanging off the edge.",
                            "Place the bar on your shoulders and hold onto it with your hands for stability. Raise your heels as high as you can by contracting your calf muscles.",
                            "Pause briefly at the top of the movement to squeeze your calf muscles. Slowly lower your heels back down to the starting position.",
                            "Smith machine calf raises are a great exercise for building strength and size in the calf muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury.",
                            "Instead, focus on using slow and controlled movements and squeezing your calf muscles at the top of each rep to maximize the effectiveness of the exercise."
                        ];
                        break;
                    case 'plate_calf_raises':
                        this.intensifiedRearDelt = 'C';
                        this.calvesHeader = 'Plate Calf Raises';
                        this.rearDeltStorage = 'Plate Calf Raises';
                        this.rearDeltInstructions = [
                            "To perform plate calf raises: Stand with your feet shoulder-width apart and hold a weight plate in each hand.",
                            "Raise your heels as high as you can by contracting your calf muscles. Pause briefly at the top of the movement to squeeze your calf muscles.",
                            "Slowly lower your heels back down to the starting position.",
                            "Plate calf raises are a great exercise for building strength and size in the calf muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury.",
                            "Instead, focus on using slow and controlled movements and squeezing your calf muscles at the top of each rep to maximize the effectiveness of the exercise."
                        ];
                        break;
                    case 'dumbbell_calf_raises':
                        this.intensifiedRearDelt = 'D';
                        this.calvesHeader = 'Dumbbell Calf Raises';
                        this.rearDeltStorage = 'Dumbbell Calf Raises';
                        this.rearDeltInstructions = [
                            "To perform dumbbell calf raises: Stand with your feet shoulder-width apart and hold a dumbbell in each hand.",
                            "Raise your heels as high as you can by contracting your calf muscles. Pause briefly at the top of the movement to squeeze your calf muscles.",
                            "Slowly lower your heels back down to the starting position.",
                            "Dumbbell calf raises are a great exercise for building strength and size in the calf muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury.",
                            "Instead, focus on using slow and controlled movements and squeezing your calf muscles at the top of each rep to maximize the effectiveness of the exercise."
                        ];
                        break;
                    case 'leg_press_calf_raises':
                    this.intensifiedRearDelt = 'D';
                    this.calvesHeader = 'Leg Press Calf Raises';
                    this.rearDeltStorage = 'Leg Press Calf Raises';
                    this.rearDeltInstructions = [
                        "To perform leg press calf raises: Adjust the leg press machine so that the footplate is in a comfortable position for your feet.",
                        "Sit on the machine with your back against the backrest and place the balls of your feet on the footplate. Release the safety locks and extend your legs to raise the weight.",
                        "Once the weight is fully extended, bend your ankles to raise your heels and contract your calf muscles. Pause briefly at the top of the movement to squeeze your calf muscles. Slowly lower your heels back down to the starting position.",
                        "Leg press calf raises are a great exercise for building strength and size in the calf muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury.",
                        "Instead, focus on using slow and controlled movements and squeezing your calf muscles at the top of each rep to maximize the effectiveness of the exercise."
                    ];
                    break;
                    default:
                        break;
                    }
            },
    
            handleCalfIntensfier(intensifiedRearDelts) {
                this.isRearDeltVisible = 'E';
                switch (intensifiedRearDelts) {
                    case 'drop_press_two':
                        this.calvesHeader = 'Drop Set';
                        this.rearDeltHeaderConfirmed = 'Drop Set';
                        this.intensifiedInstructions = [
                            "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                            "This process can be repeated several times, typically three to four weight reductions in total.",
                            "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                            "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                            "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                        ];
                        break;
                    case 'seth_press_two':
                        this.calvesHeader = 'Seth Set';
                        this.rearDeltHeaderConfirmed = 'Seth Set';
                        this.intensifiedInstructions = [
                            "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                            "An example of this is when you are doing dumbbell bench press.",
                            "You start with 70 pound dumbbells and you hit 10 reps.",
                            "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                            "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                        ];
                        break;
                    case 'pause_press_two':
                        this.calvesHeader = 'Pause Repetitions';
                        this.rearDeltHeaderConfirmed = 'Pause Repetitions';
                        this.intensifiedInstructions = [
                            "Here's a description of how to perform rear delt cables pause reps: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                            "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability.",
                            "Start with your arms extended forward in front of you, maintaining a slight bend in your elbows. Initiate the movement by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion.",
                            "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Once you reach the desired position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                            "After the pause, slowly return your arms to the starting position, maintaining control over the cables' resistance."
                        ];
                        break;
                    case 'negatives_press_two':
                        this.calvesHeader = 'Negatives';
                        this.rearDeltHeaderConfirmed = 'Negatives';
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
                },
                goBackCalves() {
                    this.isRearDeltVisible = 'A';
                    this.calvesHeader = 'Calves';
                    this.instructions = [];
                },
                confirmCalves() {
                    this.isRearDeltVisible = 'C';
                    this.chestShredPressOneForm = 'Y';
        
                    // Additional logic if needed
                },
                confirmCalvesTwo() {
                    this.isRearDeltVisible = 'F';
                    this.calvesHeader = this.rearDeltStorage;
                    this.chestShredPressOneForm = 'Y';
                    // Additional logic if needed
                },
                intensifyCalves() {
                    this.calvesHeader = 'Intensified';
                    this.isRearDeltVisible = 'D';
                    this.rearDeltP = 'Pick an Intensifier from the listed buttons below.';
        
                    // Additional logic if needed
                },
                goBackCalvesSecond() {
                    this.isRearDeltVisible = 'B'           
                    this.calvesHeader = this.rearDeltStorage;
                    this.rearDeltP = '3 to 4 sets, 6 to 10 reps';
        
                },
                goBackCalvesThird() {
                    this.isRearDeltVisible = 'D'           
                    // this.rearDeltHeader = this.rearDeltStorage;
                    // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';
        
                },
                // HAMSTRING COMPOUND
                handleCompound(rearDelt) {
                    this.isAuxOneVisible = 'B';
                    switch (rearDelt) {
                        case 'wide_stance_hacksquat':
                            this.intensifiedAuxOne = 'A';
                            this.hamstringHeader = 'Wide Stance Hacksquat';
                            this.rearDeltStorage = 'Wide Stance Hacksquat';
                            this.auxOneInstructions = [
                                "To perform a wide stance hack squat: Adjust the machine so that the back pad is at a comfortable height for your shoulders and the foot platform is at a comfortable distance from the back pad.",
                                "Stand with your back against the back pad and place your shoulders under the shoulder pads. Place your feet on the foot platform, set them near the end of the platform.",
                                "Release the safety locks and slowly lower your body by bending your knees and hips, keeping your back straight and your chest up.",
                                "Lower your body until your thighs are parallel to the ground or lower, depending on your flexibility. Pause briefly at the bottom of the movement and then push up through your heels to return to the starting position.",
                                "Hack squats are a great exercise for building strength and size in the lower body muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury. Instead, focus on using slow and controlled movements and maintaining proper form throughout the exercise."
                            ];
                            break;
                        case 'wide_stance_pendulum':
                            this.intensifiedAuxOne = 'B';
                            this.hamstringHeader = 'Wide Stance Pendulum Squat';
                            this.rearDeltStorage = 'Wide Stance Pendulum Squat';
                            this.auxOneInstructions = [
                                "To perform a wide stance pendulum squat: Adjust the machine so that the back pad is at a comfortable height for your shoulders and the foot platform is at a comfortable distance from the back pad.",
                                "Stand with your back against the back pad and place your shoulders under the shoulder pads. Place your feet on the foot platform, set them near the end of the platform.",
                                "Release the safety locks and slowly lower your body by bending your knees and hips, keeping your back straight and your chest up.",
                                "Lower your body until your thighs are parallel to the ground or lower, depending on your flexibility. Pause briefly at the bottom of the movement and then push up through your heels to return to the starting position.",
                                "Wide Stance pendulum squats are a great exercise for building strength and size in the lower body muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury. Instead, focus on using slow and controlled movements and maintaining proper form throughout the exercise."
                            ];
                            break;
                        case 'wide_stance_smith':
                            this.intensifiedAuxOne = 'C';
                            this.hamstringHeader = 'Wide Stance Smith Machine Squat';
                            this.rearDeltStorage = 'Wide Stance Smith Machine Squat';
                            this.auxOneInstructions = [
                                "To perform a wide stance pendulum squat: Adjust the machine so that the back pad is at a comfortable height for your shoulders and the foot platform is at a comfortable distance from the back pad.",
                                "Stand with your back against the back pad and place your shoulders under the shoulder pads. Place your feet on the foot platform, set them near the end of the platform.",
                                "Release the safety locks and slowly lower your body by bending your knees and hips, keeping your back straight and your chest up.",
                                "Lower your body until your thighs are parallel to the ground or lower, depending on your flexibility. Pause briefly at the bottom of the movement and then push up through your heels to return to the starting position.",
                                "Wide Stance pendulum squats are a great exercise for building strength and size in the lower body muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury. Instead, focus on using slow and controlled movements and maintaining proper form throughout the exercise."
                            ];
                            break;
                        case 'wide_stance_leg_press':
                            this.intensifiedAuxOne = 'D';
                            this.hamstringHeader = 'Wide Stance Leg Press';
                            this.rearDeltStorage = 'Wide Stance Leg Press';
                            this.auxOneInstructions = [
                                "To perform a wide stance pendulum squat: Adjust the machine so that the back pad is at a comfortable height for your shoulders and the foot platform is at a comfortable distance from the back pad.",
                                "Stand with your back against the back pad and place your shoulders under the shoulder pads. Place your feet on the foot platform, set them near the end of the platform.",
                                "Release the safety locks and slowly lower your body by bending your knees and hips, keeping your back straight and your chest up.",
                                "Lower your body until your thighs are parallel to the ground or lower, depending on your flexibility. Pause briefly at the bottom of the movement and then push up through your heels to return to the starting position.",
                                "Wide Stance pendulum squats are a great exercise for building strength and size in the lower body muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury. Instead, focus on using slow and controlled movements and maintaining proper form throughout the exercise."
                            ];
                            break;
                        case 'straight_leg_deadlifts':
                            this.intensifiedAuxOne = 'D';
                            this.hamstringHeader = 'Straight Leg Deadlifts';
                            this.rearDeltStorage = 'Straight Leg Deadlifts';
                            this.auxOneInstructions = [
                                "To perform a wide stance pendulum squat: Adjust the machine so that the back pad is at a comfortable height for your shoulders and the foot platform is at a comfortable distance from the back pad.",
                                "Stand with your back against the back pad and place your shoulders under the shoulder pads. Place your feet on the foot platform, set them near the end of the platform.",
                                "Release the safety locks and slowly lower your body by bending your knees and hips, keeping your back straight and your chest up.",
                                "Lower your body until your thighs are parallel to the ground or lower, depending on your flexibility. Pause briefly at the bottom of the movement and then push up through your heels to return to the starting position.",
                                "Wide Stance pendulum squats are a great exercise for building strength and size in the lower body muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury. Instead, focus on using slow and controlled movements and maintaining proper form throughout the exercise."
                            ];
                            break;
                        default:
                        case 'dumbbell_straight_deadlifts':
                            this.intensifiedAuxOne = 'D';
                            this.hamstringHeader = 'Dumbbell Straight Leg Deadlifts';
                            this.rearDeltStorage = 'Dumbbell Straight Leg Deadlifts';
                            this.auxOneInstructions = [
                                "To perform a wide stance pendulum squat: Adjust the machine so that the back pad is at a comfortable height for your shoulders and the foot platform is at a comfortable distance from the back pad.",
                                "Stand with your back against the back pad and place your shoulders under the shoulder pads. Place your feet on the foot platform, set them near the end of the platform.",
                                "Release the safety locks and slowly lower your body by bending your knees and hips, keeping your back straight and your chest up.",
                                "Lower your body until your thighs are parallel to the ground or lower, depending on your flexibility. Pause briefly at the bottom of the movement and then push up through your heels to return to the starting position.",
                                "Wide Stance pendulum squats are a great exercise for building strength and size in the lower body muscles. It's important to avoid using momentum or swinging during the exercise, as this can reduce the effectiveness of the exercise and increase the risk of injury. Instead, focus on using slow and controlled movements and maintaining proper form throughout the exercise."
                            ]
                            break;
                        }
                },
                handleCompoundIntensfier(intensifiedRearDelts) {
                    this.isAuxOneVisible = 'E';
                    switch (intensifiedRearDelts) {
                        case 'drop_press_tricep':
                            this.hamstringHeader = 'Drop Set';
                            this.auxOneHeaderConfirmed = 'Drop Set';
                            this.auxIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.hamstringHeader = 'Seth Set';
                            this.auxOneHeaderConfirmed = 'Seth Set';
                            this.auxIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.hamstringHeader = 'Pause Repetitions';
                            this.auxOneHeaderConfirmed = 'Pause Repetitions';
                            this.auxIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt cables pause reps: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                                "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability.",
                                "Start with your arms extended forward in front of you, maintaining a slight bend in your elbows. Initiate the movement by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Once you reach the desired position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly return your arms to the starting position, maintaining control over the cables' resistance."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.hamstringHeader = 'Negatives';
                            this.auxOneHeaderConfirmed = 'Negatives';
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
                },
                goBackCompoundOne() {
                    this.isAuxOneVisible = 'A';
                    this.hamstringHeader = 'Hamstring Compound';
                    this.auxOneInstructions = [];
                },
                confirmCompound() {
                    this.isAuxOneVisible = 'C';
                    this.chestShredFlyOneForm = 'Y';
                    // Additional logic if needed
                },
                confirmCompoundTwo() {
                    this.isAuxOneVisible = 'F';
                    this.hamstringHeader = this.rearDeltStorage;
                    this.chestShredFlyOneForm = 'Y';
                    // Additional logic if needed
                },
                intensifyCompound() {
                    this.hamstringHeader = 'Intensified';
                    this.isAuxOneVisible = 'D';
                    this.auxOneP = 'Pick an Intensifier from the listed buttons below.';
        
                    // Additional logic if needed
                },
                goBackCompoundSecond() {
                    this.isAuxOneVisible = 'B'           
                    this.hamstringHeader = this.rearDeltStorage;
                    this.auxOneP = '3 to 4 sets, 6 to 10 reps';
        
                },
                goBackCompoundThird() {
                    this.isAuxOneVisible = 'D'           
                    // this.rearDeltHeader = this.rearDeltStorage;
                    // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';
        
                },
                // QUAD SECTION
                handleQuad(rearDelt) {
                    this.isPressVisible = 'B';
                    switch (rearDelt) {
                        case 'pin_loaded_leg':
                            this.intensifiedPress = 'A';
                            this.quadHeader = 'Pin Loaded Leg Extensions';
                            this.rearDeltStorage = 'Pin Loaded Leg Extensions';
                            this.pressInstructions = [
                                "Here's a description of how to perform pin loaded leg extensions: Adjust the seat height of the machine so that your knees are aligned with the axis of rotation. The back of your knees should be comfortably resting against the edge of the seat pad, and your feet should be positioned flat on the footrest.",
                                "Adjust the pin on the weight stack to select the desired resistance level. Start with a weight that allows you to maintain proper form and control throughout the exercise.",
                                "Grasp the handles on the sides of the seat for stability and support. Begin the movement by straightening your legs and extending them forward, lifting the padded lever with your shins. Exhale as you extend your legs, focusing on contracting your quadriceps muscles.",
                                "Hold the extended position for a brief pause to maximize the contraction in your quadriceps.",
                                "Inhale as you slowly lower the padded lever back to the starting position, maintaining control and keeping tension in your quadriceps throughout the descent."
        
                            ];
                            break;
                        case 'plate_loaded_leg':
                            this.intensifiedPress = 'B';
                            this.quadHeader = 'Plate Loaded Leg Extensions';
                            this.rearDeltStorage = 'Plate Loaded Leg Extensions';
                            this.pressInstructions = [
                                "Here's a description of how to perform plate loaded leg extensions: Adjust the seat and backrest of the leg extension machine to a comfortable position. Ensure that your knees are aligned with the machine's axis of rotation and your feet are flat on the footrest.",
                                "Load weight plates onto the machine's weight pegs according to your desired resistance level. Start with a weight that challenges you but allows you to maintain proper form.",
                                "Sit on the machine with your back against the backrest and grasp the handles on the sides for stability. Place your legs under the padded roller so that it rests just above your ankles.",
                                "Begin the exercise by straightening your legs and extending them forward, lifting the padded roller with your shins. Exhale as you extend your legs, focusing on contracting your quadriceps muscles.",
                                "Hold the extended position for a brief moment, squeezing your quadriceps muscles to maximize the contraction. Slowly lower the padded roller back to the starting position while inhaling, maintaining control and tension in your quadriceps."
                            ];
                            break;
                        case 'static_hold_body':
                            this.intensifiedPress = 'C';
                            this.quadHeader = 'Static Body Weight Hold Squat';
                            this.rearDeltStorage = 'Static Body Weight Hold Squat';
                            this.pressInstructions = [
                                "Here's a description of how to perform a static hold body weight squat: Stand with your feet shoulder-width apart or slightly wider, toes pointed slightly outward.",
                                "Lower your body by bending at the knees and hips, as if you are sitting back into an imaginary chair. Keep your back straight, chest lifted, and eyes looking forward. Continue lowering your body until your thighs are parallel to the ground or as low as you can comfortably go. Your knees should be directly over your toes, and your weight should be distributed evenly through your heels and the balls of your feet.",
                                "Once you have reached the desired squat depth, hold the position and focus on maintaining proper form. Engage your core muscles to stabilize your torso, and keep your leg muscles active to support your body weight.",
                                "Aim to hold the static squat position for a specific amount of time, such as 20 seconds, 30 seconds, or longer, depending on your strength and endurance level.",
                                "Breathe steadily throughout the exercise, inhaling and exhaling deeply to maintain relaxation and focus. When you're ready to finish the exercise, slowly stand back up by extending your knees and hips until you are back in the starting position."
                            ];
                            break;
                        case 'goblin_squats':
                            this.intensifiedPress = 'D';
                            this.quadHeader = 'Goblin Squats';
                            this.rearDeltStorage = 'Goblin Squats';
                            this.pressInstructions = [
                                "Here's a description of how to perform the goblin squat: Stand with your feet slightly wider than shoulder-width apart, toes pointed slightly outward. Place a kettlebell or a dumbbell in front of your chest, holding it with both hands. Your palms can either be facing each other or facing upward, depending on your preference and comfort.",
                                "Engage your core muscles by pulling your belly button in toward your spine and maintain an upright posture with your chest lifted. Start the movement by bending at your hips and knees, as if you are sitting back into a squat position. Keep your weight distributed evenly through your heels and the balls of your feet.",
                                "Lower your body down into a squat, aiming to have your thighs parallel to the ground or slightly below parallel. Maintain a straight back and avoid rounding your shoulders.",
                                "As you descend, keep the kettlebell or dumbbell close to your chest, with your elbows pointing down and slightly out to the sides. This position helps to engage the muscles of the upper back and core.",
                                "Pause briefly at the bottom of the squat, feeling a stretch in your muscles. Push through your heels and engage your leg muscles to rise back up to the starting position, fully extending your hips and knees."
                            ];
                            break;
                        case 'elevated_heel_smith':
                            this.intensifiedPress = 'D';
                            this.quadHeader = 'Elevated Heel Smith Machine Squats';
                            this.rearDeltStorage = 'Elevated Heel Smith Machine Squats';
                            this.pressInstructions = [
                                "Here's a description of how to perform elevated heel Smith machine squats: Set up the Smith machine by adjusting the bar to a comfortable height. Position yourself under the bar with your feet shoulder-width apart and slightly in front of you. Place weight plates or blocks under your heels to elevate them.",
                                "Step forward and position the barbell on your upper traps and shoulders, grasping it with a pronated (overhand) grip. Ensure that your grip is wide enough to maintain stability but comfortable for you.",
                                "Stand up straight with your chest lifted, shoulders back, and core engaged. This is your starting position. Begin the movement by bending at your hips and knees simultaneously, as if you're sitting back into a chair. Keep your back straight, and your head and chest up throughout the exercise.",
                                "Lower your body down until your thighs are parallel to the ground or slightly below parallel, while maintaining a controlled and steady descent.",
                                "Push through your heels and engage your leg muscles to rise back up to the starting position. Fully extend your hips and knees, squeezing your glutes at the top."
                            ];
                            break;
                        default:
                            break;
                        }
                },
                handleQuadIntensfier(intensifiedRearDelts) {
                    this.isPressVisible = 'E';
                    switch (intensifiedRearDelts) {
                        case 'drop_press':
                            this.quadHeader = 'Drop Set';
                            this.pressHeaderConfirmed = 'Drop Set';
                            this.pressIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_tricep':
                            this.quadHeader = 'Seth Set';
                            this.pressHeaderConfirmed = 'Seth Set';
                            this.pressIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_tricep':
                            this.quadHeader = 'Pause Repetitions';
                            this.pressHeaderConfirmed = 'Pause Repetitions';
                            this.pressIntensifiedInstructions = [
                                "To perform this exercise, you would grab a set of dumbbells of weight that is appropriate for your fitness level.",
                                "Grasp the handles with an overhand grip and press the weight up until your arms are fully extended. Once you reach the top of the movement, pause for 1-3 seconds before lowering the weight back down in a slow and controlled manner.",
                                "Pause again for 1-3 seconds at the bottom of the movement before pressing the weight back up. Incorporating pause reps into your workout routine can help to increase muscle activation and build strength by forcing your muscles to work harder during each phase of the movement.",
                                "The shoulder press primarily targets the deltoid muscles of the shoulders, as well as the triceps and upper back muscles",
                                "By pausing at various points during the exercise, you may be able to achieve greater muscle activation and potentially increase muscle growth and strength gains."
                            ];
                            break;
                        case 'negatives_tricep':
                            this.quadHeader = 'Negatives';
                            this.pressHeaderConfirmed = 'Negatives';
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
                },
                goBackQuad() {
                    this.isPressVisible = 'A';
                    this.quadHeader = 'Auxileries Quad';
                    this.pressInstructions = [];
                },
                confirmQuad() {
                    this.isPressVisible = 'C';
                    this.chestShredPressTwoForm = 'Y';
                    // Additional logic if needed
                },
                confirmQuadTwo() {
                    this.isPressVisible = 'F';
                    this.quadHeader = this.rearDeltStorage;
                    this.chestShredPressTwoForm = 'Y';
                    // Additional logic if needed
                },
                intensifyQuad() {
                    this.quadHeader = 'Intensified';
                    this.isPressVisible = 'D';
                    this.pressP = 'Pick an Intensifier from the listed buttons below.';
        
                    // Additional logic if needed
                },
                goBackQuadSecond() {
                    this.isPressVisible = 'B'           
                    this.quadHeader = this.rearDeltStorage;
                    this.pressP = '3 to 4 sets, 6 to 10 reps';
        
                },
                goBackQuadThird() {
                    this.isPressVisible = 'D'           
                    // this.rearDeltHeader = this.rearDeltStorage;
                    // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';
        
                },
                // HAMSTRING AUX
                handleHamAux(rearDelt) {
                    this.isAuxTwoVisible = 'B';
                    switch (rearDelt) {
                        case 'seated_leg_curls':
                            this.intensifiedAuxTwo = 'A';
                            this.hamAuxHeader = 'Seated Leg Curls';
                            this.rearDeltStorage = 'Seated Leg Curls';
                            this.auxTwoInstructions = [
                                "Stand beside the cable machine with your feet shoulder-width apart and your side facing the machine. Adjust the cable pulley to the lowest position and attach a single handle to the pulley.",
                                "Grab the handle with the hand closest to the cable machine. Your palm should be facing down. Take a step away from the machine to create tension in the cable. Position yourself at a distance where your arm is fully extended, but there is still tension in the cable.",
                                "Position your working arm slightly in front of your body with a slight bend in your elbow. This will be your starting position. Initiate the movement by squeezing your rear deltoid and pulling the cable handle away from the machine in an arc-like motion.",
                                "Continue the movement until your working arm is parallel to the ground or slightly above shoulder level. Keep your elbow slightly bent throughout the exercise.",
                                "Focus on using your rear deltoid to lift the cable handle and maintain control throughout the movement."
                            ];
                            break;
                        case 'lying_leg_curls':
                            this.intensifiedAuxTwo = 'B';
                            this.hamAuxHeader = 'Lying Leg Curls';
                            this.rearDeltStorage = 'Lying Leg Curls';
                            this.auxTwoInstructions = [
                                "To perform cable lateral raises, follow these steps: Begin by standing with your feet shoulder-width apart and facing the cable machine. Grasp the handle of the cable with your right hand, palm facing inward.",
                                "Keep your arm straight and raise your right arm out to the side until it reaches shoulder level. Hold this position for a moment to fully engage the lateral deltoid.",
                                "Slowly lower the cable back down to the starting position. Repeat for the desired number of repetitions on the right side.",
                                "Switch to the left side and repeat the same steps. The cable provides a constant resistance throughout the movement, which challenges the lateral deltoids and helps to improve strength and muscle growth in the shoulders.",
                                "It is important to choose a weight that challenges you but still allows you to maintain proper form throughout the exercise."
                            ];
                            break;
                        case 'lying_dumbbell_leg_curls':
                            this.intensifiedAuxTwo = 'C';
                            this.hamAuxHeader = 'Lying Dumbbell Leg Curls';
                            this.rearDeltStorage = 'Lying Dumbbell Leg Curls';
                            this.auxTwoInstructions = [
                                "Here's how to perform front lateral raises: Begin by standing with your feet shoulder-width apart, your knees slightly bent, and a dumbbell in each hand with palms facing down.",
                                "Engage your core and keep your back straight throughout the exercise. Slowly lift the dumbbells straight out in front of your body until they reach shoulder height. Make sure to keep your arms straight and your elbows locked.",
                                "Pause at the top of the movement and hold for a second or two, then slowly lower the dumbbells back down to your sides. Repeat for the desired number of repetitions.",
                                "Front lateral raises can be done with both arms simultaneously, or one arm at a time. To make the exercise more challenging, you can increase the weight of the dumbbells or slow down the movement to increase the time under tension.",
                                "Front lateral raises are an effective way to isolate and strengthen the front deltoids, which can improve shoulder stability and mobility and help to prevent shoulder injuries. They can also help to improve posture and contribute to a more defined, sculpted upper body."
                            ];
                            break;
                        default:
                            break;
                        }
                },
                handleHamTwoIntensfier(intensifiedRearDelts) {
                    this.isAuxTwoVisible = 'E';
                    switch (intensifiedRearDelts) {
                        case 'drop_press_fly':
                            this.hamAuxHeader = 'Drop Set';
                            this.auxTwoHeaderConfirmed = 'Drop Set';
                            this.auxTwoIntensifiedInstructions = [
                                "A drop set is a strength training technique in which you perform a set of an exercise to muscle fatigue, then immediately reduce the weight and continue for additional repetitions.",                        
                                "This process can be repeated several times, typically three to four weight reductions in total.",
                                "The goal is to push the muscles beyond their normal limits by extending the set's duration and intensity.",
                                "Drop sets are effective for increasing muscle hypertrophy due to the sustained time under tension.",
                                "This method can be applied to a wide range of exercises using free weights, machines, or cables."
                            ];
                            break;
                        case 'seth_press_fly':
                            this.hamAuxHeader = 'Seth Set';
                            this.auxTwoHeaderConfirmed = 'Seth Set';
                            this.auxTwoIntensifiedInstructions = [
                                "A Seth set is when you start with a weight that you can achieve 8-14 reps with and then you drop that weight in half and do double the amount of reps you did.",
                                "An example of this is when you are doing dumbbell bench press.",
                                "You start with 70 pound dumbbells and you hit 10 reps.",
                                "You then immediatly drop the weight to 35 pound dumbbells and do 20 reps. ",
                                "This is a slight variation of a drop set but gives you a clear amount of reps to achieve on the drop."
                            ];
                            break;
                        case 'pause_press_fly':
                            this.hamAuxHeader = 'Pause Repetitions';
                            this.auxTwoHeaderConfirmed = 'Pause Repetitions';
                            this.auxTwoIntensifiedInstructions = [
                                "Here's a description of how to perform rear delt cables pause reps: Set up the cable machine with the pulleys at shoulder height. Attach D-handle grips to each pulley.",
                                "Stand facing the cable machine with your feet shoulder-width apart. Grasp one D-handle in each hand with your palms facing downward. Step back slightly to create tension in the cables. Position your feet and torso for stability.",
                                "Start with your arms extended forward in front of you, maintaining a slight bend in your elbows. Initiate the movement by squeezing your shoulder blades together and pulling your arms outward and backward in an arc-like motion.",
                                "Focus on engaging your rear deltoid muscles as you bring your arms to the sides until they are parallel to the ground or slightly above shoulder level. Once you reach the desired position where your arms are parallel to the ground, hold the contracted position for a specific duration, such as 2-3 seconds. During the pause, concentrate on maintaining tension in your rear deltoids.",
                                "After the pause, slowly return your arms to the starting position, maintaining control over the cables' resistance."
                            ];
                            break;
                        case 'negatives_fly':
                            this.hamAuxHeader = 'Negatives';
                            this.auxTwoHeaderConfirmed = 'Negatives';
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
                },
                goBackHamAuxTwo() {
                    this.isAuxTwoVisible = 'A';
                    this.hamAuxHeader = 'Auxileries Hamstrings';
                    this.auxTwoInstructions = [];
                },
                confirmHamAux() {
                    this.isAuxTwoVisible = 'C';
                    this.chestShredFlyTwoForm = 'Y';
                    // Additional logic if needed
                },
                confirmHamAuxTwo() {
                    this.isAuxTwoVisible = 'F';
                    this.hamAuxHeader = this.rearDeltStorage;
                    this.chestShredFlyTwoForm = 'Y';
                    // Additional logic if needed
                },
                intensifyHamAuxShoulder() {
                    this.hamAuxHeader = 'Intensified';
                    this.isAuxTwoVisible = 'D';
                    this.auxTwoP = 'Pick an Intensifier from the listed buttons below.';
        
                    // Additional logic if needed
                },
                goBackHamAuxSecond() {
                    this.isAuxTwoVisible = 'B'           
                    this.hamAuxHeader = this.rearDeltStorage;
                    this.auxTwoP = '3 to 4 sets, 6 to 10 reps';
        
                },
                goBackHamAuxThird() {
                    this.isAuxTwoVisible = 'D'           
                    // this.rearDeltHeader = this.rearDeltStorage;
                    // this.rearDeltP = '3 to 4 sets, 6 to 10 reps';
        
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
        calculateLegsShouldersComparision(){
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
        addToBackExtractedList(item) {
            // Here, you could also implement logic to prevent duplicates.
            this.chestDataProgress.push(item.backWarmupWeight);
            this.chestDataProgress.push(item.setsWarmupBackAccomplished);
            this.chestDataProgress.push(item.repsWarmupBackAccomplished);
            this.chestDataProgress.push(item.newPulldownWeight);
            this.chestDataProgress.push(item.newSetsPulldownAccomplished);
            this.chestDataProgress.push(item.newRepsPulldownAccomplished);
            this.chestDataProgress.push(item.newRowWeight);
            this.chestDataProgress.push(item.newSetsRowAccomplished);
            this.chestDataProgress.push(item.newRepsRowAccomplished);
            this.chestDataProgress.push(item.newPulldownTwoWeight);
            this.chestDataProgress.push(item.newSetsPulldownTwoAccomplished);
            this.chestDataProgress.push(item.newRepsPulldownTwoAccomplished);
            this.chestDataProgress.push(item.newTrapsWeight);
            this.chestDataProgress.push(item.newSetsTrapsAccomplished);
            this.chestDataProgress.push(item.newRepsTrapsAccomplished);
            this.chestDataProgress.push(item.newBicepsWeight);
            this.chestDataProgress.push(item.newSetsBicepsAccomplished);
            this.chestDataProgress.push(item.newRepsBicepsAccomplished);

            this.progressCount = this.progressCount + 1;

            if (this.progressCount === 2){
                this.showProgress = 'B';
            }
        },
        addToLegsExtractedList(item) {
            // Here, you could also implement logic to prevent duplicates.
            this.chestDataProgress.push(item.legWarmupWeight);
            this.chestDataProgress.push(item.setsWarmupLegAccomplished);
            this.chestDataProgress.push(item.repsWarmupLegAccomplished);
            this.chestDataProgress.push(item.newCalvesWeight);
            this.chestDataProgress.push(item.newSetsCalvesAccomplished);
            this.chestDataProgress.push(item.newRepsCalvesAccomplished);
            this.chestDataProgress.push(item.newHamCompoundWeight);
            this.chestDataProgress.push(item.newSetsHamCompoundAccomplished);
            this.chestDataProgress.push(item.newRepsHamCompoundAccomplished);
            this.chestDataProgress.push(item.newAuxQuadWeight);
            this.chestDataProgress.push(item.newSetsAuxQuadAccomplished);
            this.chestDataProgress.push(item.newRepsAuxQuadAccomplished);
            this.chestDataProgress.push(item.newHamAuxWeight);
            this.chestDataProgress.push(item.newSetsHamAuxAccomplished);
            this.chestDataProgress.push(item.newRepsHamAuxAccomplished);

            this.progressCount = this.progressCount + 1;

            if (this.progressCount === 2){
                this.showProgress = 'B';
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
            if (parameter === "backWarmup"){
                this.chestWarmupTitle = this.backWarmupHeader;
            }
            if (parameter === "shoulderWarmup"){
                this.chestWarmupTitle = this.warmupHeader;
            }
            if(parameter === "chestPressOne"){
                this.newChestPressTitle = this.chestPressOneHeader;
            }
            if(parameter === "backPulldown"){
                this.newChestPressTitle = this.backPressOneHeader;
            }
            if(parameter === "rearDelt"){
                this.newChestPressTitle = this.rearDeltHeader;
            }
            if (parameter === "chestPressOneConfirmed"){
                this.newChestPressTitle = this.chestPressOneHeaderConfirmed;
            }
            if(parameter === "rearDeltConfirmed"){
                this.newChestPressTitle = this.rearDeltHeaderConfirmed;
            }
            if (parameter === "calves"){
                this.newChestPressTitle = this.calvesHeader;
            }
            if (parameter === "chestFlyOneConfirmed"){
                this.newChestFlyOneTitle = this.chestFlyOneHeaderConfirmed;
            }
            if (parameter === "backRow"){
                this.newChestFlyOneTitle = this.backRowHeader;
            }
            if (parameter === "hamstring"){
                this.newChestFlyOneTitle = this.hamstringHeader;
            }
            if (parameter === "chestFlyOne"){
                this.newChestFlyOneTitle = this.chestFlyOneHeader;
            }
            if (parameter === "shoulderAuxOne"){
                this.newChestFlyOneTitle = this.auxileriesOneHeader;
            }
            if (parameter === "chestPressTwoConfirmed"){
                this.chestPressTwoTitle = this.chestPressTwoHeaderConfirmed;
            }
            if (parameter === "backPulldownTwo"){
                this.chestPressTwoTitle = this.backPulldownTwoHeader;
            }
            if (parameter === "shoulderAuxOneConfirm"){
                this.newChestFlyOneTitle = this.auxOneHeaderConfirmed;
            }
            if (parameter === "chestPressTwo"){
                this.chestPressTwoTitle = this.chestPressTwoHeader;
            }
            if (parameter === "quad"){
                this.chestPressTwoTitle = this.quadHeader;
            }
            if (parameter === "shoulderPress"){
                this.chestPressTwoTitle = this.pressHeader;
            }
            if (parameter === "shoulderPressConfirmed"){
                this.chestPressTwoTitle = this.pressHeaderConfirmed;
            }
            if (parameter === "hamAuxTwo"){
                this.newFlyTwoTitle = this.hamAuxHeader;
            }
            if (parameter === "backTraps"){
                this.newFlyTwoTitle = this.backTrapsHeader;
            }
            if (parameter === "chestFlyTwo"){
                this.newFlyTwoTitle = this.chestFlyTwoHeader;
            }
            if (parameter === "shoulderAuxTwo"){
                this.newFlyTwoTitle = this.auxileriesTwoHeader;
            }
            if (parameter === "chestFlyTwoConfirmed"){
                this.newFlyTwoTitle = this.chestFlyTwoHeaderConfirmed;
            }
            if (parameter === "shoulderAuxTwoConfirm"){
                this.newFlyTwoTitle = this.auxTwoHeaderConfirmed;
            }
            if (parameter === "chestTriceps"){
                this.newTricepsTitle = this.chestTricepsHeader;
            }
            if (parameter === "chestTricepsConfirmed"){
                this.newTricepsTitle = this.chestTricepsHeaderConfirmed;
            }
            if (parameter === "backBiceps"){
                this.newTricepsTitle = this.backBicepsHeader;
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

        // NEW SECTION SHOULDERS

        addShoulderWorkoutData: function(){
            this.validateWorkoutData();
            // date
            const date = new Date().toUTCString();
            const extractedDateTime = date.slice(5, 16);
            var data= "dateTime=" + encodeURIComponent(extractedDateTime);
            // warmups
            data += "&shoulderWarmupTitle=" + encodeURIComponent(this.chestWarmupTitle);
            data += "&shoulderWarmupWeight=" + encodeURIComponent(this.newWarmupWorkoutWeight);
            data += "&setsWarmupShoulderAccomplished=" + encodeURIComponent(this.newSetsWarmupAccomplished);
            data += "&repsWarmupShoulderAccomplished=" + encodeURIComponent(this.newRepsWarmupAccomplished);
            // rear delts
            data += "&newRearDeltTitle=" + encodeURIComponent(this.newChestPressTitle);
            data += "&newRearDeltWeight=" + encodeURIComponent(this.newPressOneWeight);
            data += "&newSetsRearDeltAccomplished=" + encodeURIComponent(this.newSetsPressOneAccomplished);
            data += "&newRepsRearDeltAccomplished=" + encodeURIComponent(this.newRepsPressOneAccomplished);
            // aux one
            data += "&newShouldersAuxOneTitle=" + encodeURIComponent(this.newChestFlyOneTitle);
            data += "&newAuxOneWeight=" + encodeURIComponent(this.newFlyOneWeight);
            data += "&newSetsAuxOneAccomplished=" + encodeURIComponent(this.newSetsFlyOneAccomplished);
            data += "&newRepsAuxOneAccomplished=" + encodeURIComponent(this.newRepsFlyOneAccomplished);
            // shoulder press
            data += "&shoulderPressTitle=" + encodeURIComponent(this.chestPressTwoTitle);
            data += "&newShoulderPressWeight=" + encodeURIComponent(this.newPressTwoWeight);
            data += "&newSetsShoulderPressAccomplished=" + encodeURIComponent(this.newSetsPressTwoAccomplished);
            data += "&newRepsShoulderPressAccomplished=" + encodeURIComponent(this.newRepsPressTwoAccomplished);
            // aux two
            data += "&newShouldersAuxTwoTitle=" + encodeURIComponent(this.newFlyTwoTitle);
            data += "&newAuxTwoWeight=" + encodeURIComponent(this.newFlyTwoWeight);
            data += "&newSetsAuxTwoAccomplished=" + encodeURIComponent(this.newSetsFlyTwoAccomplished);
            data += "&newRepsAuxTwoAccomplished=" + encodeURIComponent(this.newRepsFlyTwoAccomplished);
            fetch("http://localhost:8080/shoulder_workout_data", {
                body: data,
                method: "POST",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((response) => {
                if (response.status == 201){
                    console.log("Added Shoulder Workout Data");
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
                    this.loadShoulderWorkoutData();
                }

            });
        },
        loadShoulderWorkoutData: function (){
            fetch("http://localhost:8080/shoulder_workout_data").then((response) => {
                if (response.status == 200){
                    response.json().then((maxShoulderFromServer) => {
                        console.log("recieved foods from API:", maxShoulderFromServer);
                        this.chestShredShoulderData = maxShoulderFromServer;
                    });
                }
            });
        },
        deleteShoulderWorkoutData: function(workoutID){
            fetch("http://localhost:8080/shoulder_workout_data/" + workoutID, {
                method: "DELETE"
            }).then((response) => {
                if (response.status == 200){
                    this.loadShoulderWorkoutData();
                }

            });
        },

        // LEG SECTION

        addLegWorkoutData: function(){
            this.validateWorkoutData();
            // date
            const date = new Date().toUTCString();
            const extractedDateTime = date.slice(5, 16);
            var data= "dateTime=" + encodeURIComponent(extractedDateTime);
            // warmups
            data += "&legWarmupTitle=" + encodeURIComponent(this.chestWarmupTitle);
            data += "&legWarmupWeight=" + encodeURIComponent(this.newWarmupWorkoutWeight);
            data += "&setsWarmupLegAccomplished=" + encodeURIComponent(this.newSetsWarmupAccomplished);
            data += "&repsWarmupLegAccomplished=" + encodeURIComponent(this.newRepsWarmupAccomplished);
            // rear delts
            data += "&newCalvesTitle=" + encodeURIComponent(this.newChestPressTitle);
            data += "&newCalvesWeight=" + encodeURIComponent(this.newPressOneWeight);
            data += "&newSetsCalvesAccomplished=" + encodeURIComponent(this.newSetsPressOneAccomplished);
            data += "&newRepsCalvesAccomplished=" + encodeURIComponent(this.newRepsPressOneAccomplished);
            // aux one
            data += "&newHamCompoundTitle=" + encodeURIComponent(this.newChestFlyOneTitle);
            data += "&newHamCompoundWeight=" + encodeURIComponent(this.newFlyOneWeight);
            data += "&newSetsHamCompoundAccomplished=" + encodeURIComponent(this.newSetsFlyOneAccomplished);
            data += "&newRepsHamCompoundAccomplished=" + encodeURIComponent(this.newRepsFlyOneAccomplished);
            // shoulder press
            data += "&auxQuadTitle=" + encodeURIComponent(this.chestPressTwoTitle);
            data += "&newAuxQuadWeight=" + encodeURIComponent(this.newPressTwoWeight);
            data += "&newSetsAuxQuadAccomplished=" + encodeURIComponent(this.newSetsPressTwoAccomplished);
            data += "&newRepsAuxQuadAccomplished=" + encodeURIComponent(this.newRepsPressTwoAccomplished);
            // aux two
            data += "&hamAuxTitle=" + encodeURIComponent(this.newFlyTwoTitle);
            data += "&newHamAuxWeight=" + encodeURIComponent(this.newFlyTwoWeight);
            data += "&newSetsHamAuxAccomplished=" + encodeURIComponent(this.newSetsFlyTwoAccomplished);
            data += "&newRepsHamAuxAccomplished=" + encodeURIComponent(this.newRepsFlyTwoAccomplished);
            fetch("http://localhost:8080/leg_workout_data", {
                body: data,
                method: "POST",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((response) => {
                if (response.status == 201){
                    console.log("Added Leg Workout Data");
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
                    this.loadLegWorkoutData();
                }

            });
        },
        loadLegWorkoutData: function (){
            fetch("http://localhost:8080/leg_workout_data").then((response) => {
                if (response.status == 200){
                    response.json().then((maxShoulderFromServer) => {
                        console.log("recieved foods from API:", maxShoulderFromServer);
                        this.chestShredLegData = maxShoulderFromServer;
                    });
                }
            });
        },
        deleteLegWorkoutData: function(workoutID){
            fetch("http://localhost:8080/leg_workout_data/" + workoutID, {
                method: "DELETE"
            }).then((response) => {
                if (response.status == 200){
                    this.loadLegWorkoutData();
                }

            });
        },

        // NEW SECTION
        // BACK
        addBackWorkoutData: function(){
            this.validateWorkoutData();
            // date
            const date = new Date().toUTCString();
            const extractedDateTime = date.slice(5, 16);
            var data= "dateTime=" + encodeURIComponent(extractedDateTime);
            // warmups
            data += "&backTitle=" + encodeURIComponent(this.chestWarmupTitle);
            data += "&backWarmupWeight=" + encodeURIComponent(this.newWarmupWorkoutWeight);
            data += "&setsWarmupBackAccomplished=" + encodeURIComponent(this.newSetsWarmupAccomplished);
            data += "&repsWarmupBackAccomplished=" + encodeURIComponent(this.newRepsWarmupAccomplished);
            // press one
            data += "&newPulldownTitle=" + encodeURIComponent(this.newChestPressTitle);
            data += "&newPulldownWeight=" + encodeURIComponent(this.newPressOneWeight);
            data += "&newSetsPulldownAccomplished=" + encodeURIComponent(this.newSetsPressOneAccomplished);
            data += "&newRepsPulldownAccomplished=" + encodeURIComponent(this.newRepsPressOneAccomplished);
            // fly one
            data += "&newRowTitle=" + encodeURIComponent(this.newChestFlyOneTitle);
            data += "&newRowWeight=" + encodeURIComponent(this.newFlyOneWeight);
            data += "&newSetsRowAccomplished=" + encodeURIComponent(this.newSetsFlyOneAccomplished);
            data += "&newRepsRowAccomplished=" + encodeURIComponent(this.newRepsFlyOneAccomplished);
            // press two
            data += "&pulldownTwoTitle=" + encodeURIComponent(this.chestPressTwoTitle);
            data += "&newPulldownTwoWeight=" + encodeURIComponent(this.newPressTwoWeight);
            data += "&newSetsPulldownTwoAccomplished=" + encodeURIComponent(this.newSetsPressTwoAccomplished);
            data += "&newRepsPulldownTwoAccomplished=" + encodeURIComponent(this.newRepsPressTwoAccomplished);
            // fly two
            data += "&trapsTitle=" + encodeURIComponent(this.newFlyTwoTitle);
            data += "&newTrapsWeight=" + encodeURIComponent(this.newFlyTwoWeight);
            data += "&newSetsTrapsAccomplished=" + encodeURIComponent(this.newSetsFlyTwoAccomplished);
            data += "&newRepsTrapsAccomplished=" + encodeURIComponent(this.newRepsFlyTwoAccomplished);
            // triceps
            data += "&newBicepsTitle=" + encodeURIComponent(this.newTricepsTitle);
            data += "&newBicepsWeight=" + encodeURIComponent(this.newTricepsWeight);
            data += "&newSetsBicepsAccomplished=" + encodeURIComponent(this.newSetsTricepsAccomplished);
            data += "&newRepsBicepsAccomplished=" + encodeURIComponent(this.newRepsTricepsAccomplished);
            fetch("http://localhost:8080/back_workout_data", {
                body: data,
                method: "POST",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((response) => {
                if (response.status == 201){
                    console.log("Added Back Workout Data");
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
                    this.loadBackWorkoutData();
                }

            });
        },
        loadBackWorkoutData: function (){
            fetch("http://localhost:8080/back_workout_data").then((response) => {
                if (response.status == 200){
                    response.json().then((maxShoulderFromServer) => {
                        console.log("recieved foods from API:", maxShoulderFromServer);
                        this.backWorkoutData = maxShoulderFromServer;
                    });
                }
            });
        },
        deleteBackWorkoutData: function(workoutID){
            fetch("http://localhost:8080/back_workout_data/" + workoutID, {
                method: "DELETE"
            }).then((response) => {
                if (response.status == 200){
                    this.loadBackWorkoutData();
                }

            });
        },

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
        },
        // users section YEET
        addUsers: function(){
            // if (!this.validateUser()){
            //     return;
            // }
            var data= "firstName=" + encodeURIComponent(this.newFirstName);
            data += "&lastName=" + encodeURIComponent(this.newLastName);
            data += "&email=" + encodeURIComponent(this.newEmail);
            data += "&plainPassword=" + encodeURIComponent(this.newPlainTextPassword);
            //can make the url the render or by doing public and deleting all the way to /foods
            fetch("http://localhost:8080/users", {
                body: data,
                method: "POST",
                credentials: "include",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((response) => {
                if (response.status == 201){
                    this.newFirstName= "";
                    this.newLastName= "";
                    this.newEmail= "";
                    this.newPlainTextPassword= "";
                    this.showPage = 'G';
                    this.logPage = 'E';
                    // this.loadChestWorkoutData();
                    // this.loadLegWorkoutData();
                    // this.loadBackWorkoutData();
                    // this.loadShoulderWorkoutData();
                }else if( response.status == 422){
                    return response.json(); // Parse JSON data from response
                }
            }).then(data => {
                // Handle the JSON data returned from the server
                console.log('Session data:', data);
                this.errorUserMessages.newEmail = "Email already in use."; 
              }).catch(error => {
                console.error('Error fetching session data:', error);
                // Handle error
              });
        },
        validateSession: function(){
            this.errorSessionMessages = {};

            if (this.newLoginEmail == ""){
                this.errorSessionMessages.newLoginEmail = "Please enter an email.";
            }
            if (this.newLoginPassword == ""){
                this.errorSessionMessages.newLoginPassword = "Please enter a password.";   
            }
            return this.sessionIsValid;
        },
         // session section
         addSession: function(){
            // if (!this.validateSession()){
            //     return;
            // }
            var data= "loginEmail=" + encodeURIComponent(this.newLoginEmail);
            data += "&loginPassword=" + encodeURIComponent(this.newLoginPassword);
            //can make the url the render or by doing public and deleting all the way to /foods
            fetch("http://localhost:8080/session", {
                body: data,
                method: "POST",
                credentials: "include",
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then((response) => {
                if (response.status == 201){
                    this.newLoginEmail= "";
                    this.newLoginPassword= "";
                    this.loadSession();
                    this.showPage = 'G';
                    this.logPage = 'E';
                }else if (response.status == 401){
                    this.errorSessionMessages.newLoginEmail = "Invalid Email.";
                    this.errorSessionMessages.newLoginPassword = "Invalid Password.";   
                }

            });
        },
        loadSession: function (){
            fetch("http://localhost:8080/session",{ 
                method: "GET",
                // credentials: "include"
            }).then((response) => {
                if (response.status != 401){
                this.loadChestWorkoutData();
                this.loadLegWorkoutData();
                this.loadBackWorkoutData();
                this.loadShoulderWorkoutData();
                this.showPage = 'G';
                this.logPage = 'E';
                console.log("Session is authenticated");
                return response.json(); // Parse JSON data from response
            }
            }).then(data => {
                // Handle the JSON data returned from the server
                console.log('Session data:', data);
                // Now you can use the 'data' object in your Vue component
                // For example, set it to a component data property
                this.sessionData = data;
                // this.jsonData = JSON.parse(this.sessionData);
              })
              .catch(error => {
                console.error('Error fetching session data:', error);
                // Handle error
              });
        },
        deleteSession: function(){
            fetch("http://localhost:8080/session", {
                method: "DELETE",
                credentials: "include"

            }).then((response) => {
                if (response.status == 200){
                    this.showPage = 'D'; 
                    this.logPage = 'B';
                }

            });
        },
        validateSession: function(){
            this.errorSessionMessages = {};

            if (this.newLoginEmail == ""){
                this.errorSessionMessages.newLoginEmail = "Please enter an email.";
            }
            if (this.newLoginPassword == ""){
                this.errorSessionMessages.newLoginPassword = "Please enter a password.";   
            }
            return this.sessionIsValid;
        },
        errorMessageForSession: function(field){
            return this.errorSessionMessages[field];
        },
        validateUser: function(){
            this.errorUserMessages = {};

            if (this.newFirstName == ""){
                this.errorUserMessages.newFirstName = "Please enter your first name.";
            }
            if (this.newLastName == ""){
                this.errorUserMessages.newLastName = "Please enter your last name.";   
            }
            if (this.newEmail == ""){
                this.errorUserMessages.newEmail = "Please enter your email."; 
            }
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
            const isValid = emailPattern.test(this.newEmail);
            if (!isValid){
                this.errorUserMessages.newEmail = "Invalid Email Format."; 
            }
            if (this.newPlainTextPassword == ""){
                this.errorUserMessages.newPlainTextPassword = "Please enter a password.";
            }else if ((this.newPlainTextPassword).length < 8 ){
                this.errorUserMessages.newPlainTextPassword = "Enter a password of at least 8 characters in length.";
            }

            return this.userIsValid;
        },
        errorMessageForUser: function(field){
            return this.errorMessageForUsers[field];
        },
        startSlideshow() {
            this.slideInterval = setInterval(this.nextSlide, 3000); // Change slide every 3 seconds
        },
        nextSlide() {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        },
        currentSlide(index) {
            this.currentSlideIndex = index;
            clearInterval(this.slideInterval); // Stop the automatic slideshow when a dot is clicked
        }

    },
    computed:{
        shoulderMaxIsValid: function(){
            return Object.keys(this.errorMessages).length == 0;
        },
        sessionIsValid: function(){
            return Object.keys(this.errorSessionMessages).length == 0;
        },
        userIsValid: function(){
            return Object.keys(this.errorUserMessages).length == 0;
        }
    },

    created: function(){
        this.loadSession();
        this.startSlideshow();
        //console.log("Hello Vue");
        
    },
    beforeUnmount() {
        clearInterval(this.slideInterval);
    }


}).mount("#app");