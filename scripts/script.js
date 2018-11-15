$(function(){

    // Create array of results

    const results = [
        "*Sigh* There's always one of you, isn't there? I bet you want me to tell you not to eat it, don't you? I bet you're thinking \" Surely nobody is irreponsible enough to tell me to eat this random, non-food, inanimate object, right!?\" Well, y'know what? You do you. Go eat it. C'mon, do it! I can wait... ", 

        "I'm no doctor, but generally speaking, when the side effects of doing something include certain death, its likely detrimental to your health. Perhaps you should put down that food and go read a book or something", 

        "Well then, this decision is completely out of my hands. You made a stupid bet, and now you must suffer the stupid consequences. Enjoy spending the night by the toilet!", 

        "Well then go for it! How can you say no to the deliciousness that its before you!? Don't let your dreams be dream! No pain, no gain! Whatever doesn't kill you makes you stronger! Etc etc.", 

        "Alright, I'm a a loss here. What is so appealing about this food that you would consider putting yourself through this torture? I mean... sorry. I'm being judgmental. Do what you gotta do. You eat that food, and perhaps while you're stuck by the side of the toilet, you'll have some time to reconsider some of youre life decisions.", 

        "What am I, the food police? If you really want to steal someone else's food, I highly doubt some faceless webite is going to stop you. Besides, what if you were in the middle of a zombie apocalypse and needed that food to survive. Surely you wouldn't be having a moral dilemma in that situation, so why have one now? Go eat that food!", 

        "Well then what on earth are you doing on this website, answering ridiculous questions, when you can be feasting on that delicious... food item! YOU GO EAT THAT FOOD ITEM! EAT IT AND ENJOY IT!"
    ];

    // Create array of questions

    const questions = [
        "Is your object classified as food?", 

        "Great! Off to a good start. Now, are you allergic to this food?",

        "Like... deathly allergic? Will eating this actually kill you?", 

        "Did you lose some sort of stupid bet, and the punishment is that you must eat this food?", 

        "Is this food just so delicious, that it's fully worth all the unpleasant symptoms that are sure to follow?", 

        "Excellent! We're on a roll! Now look carefully... is there an expiry date label somewhere for your food product, and if so, is it expired?", 

        "Alright. Now, are there any obvious signs of mold* or signs that it's gone bad? <span class=\"quiz__disclaimer\">*Any foods that are supposed to have mold, (ie. blue cheese) are excluded</span>", 

        "Final question: Does this food belong to you?",

        "Hmmmmm. Well, using your own judgment*, has it been expired long enough that it's likely to make you sick if you eat it? <span class=\"quiz__disclaimer\">*Some people's judgments are not to be trusted. If you happen to be one of those people, please conult someone with better judgment... or Google</span>" 
    ];

    // Empty array for answers - will determine which result the user gets

    let answers = [];

    // Counter for question #

    let questionCounter = 0;

    // String for initial header

    const introHeader = "I don't know... CAN you?"

    // String for initial introduction

    const intro = "It's the age old dilemma. You're hungry, and the nearest McDonalds is somewhere that's not in your living room. You look around the room for something nearby. You finally find something in your fridge... or elsewhere, and you stand there asking yourself \"Can I eat this ?\""

    // Function to hide submit button, and how reset button
    function showReset() {
        $(".quiz__reset").show();
        $(".quiz__button").hide();
    }

    // Create if statement for each condition that will lead to each answer - to be included each time form is submitted

    function answerConditions() {
        if (answers[0] === "no") {
            showReset();
            $(".quiz__choices").hide();
            $(".quiz__header").html(`Results`);
            return $(".quiz__content").html(results[0]);
        }
        if (answers[1] === "yes" && answers[2] === "yes" ) {
            showReset();
            $(".quiz__choices").hide();
            $(".quiz__header").html(`Results`);            
            return $(".quiz__content").html(results[1]);
        }
        if ((answers[1] === "yes" && answers[3] === "yes") || (answers[1] === "no" && answers[3] === "yes" && answers[4] === "yes")) {
            showReset();
            $(".quiz__choices").hide();
            $(".quiz__header").html(`Results`);
            return $(".quiz__content").html(results[2]);
        }
        if ((answers[1] === "yes" && answers[4] === "yes") || (answers[1] === "no" && answers[3] === "yes" && answers[5] === "yes")) {
            showReset();
            $(".quiz__choices").hide();
            $(".quiz__header").html(`Results`);
            return $(".quiz__content").html(results[3]);
        }
        if ((answers[1] === "yes" && answers[4] === "no") || (answers[1] === "no" && answers[3] === "yes" && answers[5] === "no")) {
            showReset();
            $(".quiz__choices").hide();
            $(".quiz__header").html(`Results`);
            return $(".quiz__content").html(results[4]);
        }
        if (answers[1] === "no" && answers[3] === "no" && answers[4] === "no") {
            showReset();
            $(".quiz__choices").hide();
            $(".quiz__header").html(`Results`);
            return $(".quiz__content").html(results[5]);
        }
        if (answers[1] === "no" && answers[3] === "no" && answers[4] === "yes") {
            showReset();
            $(".quiz__choices").hide();
            $(".quiz__header").html(`Results`);
            return $(".quiz__content").html(results[6]);
        }
    }


    // Make conditions for questions, for paths that split off.

    function questionConditions() {
        // brings question 2 to question 6
        if (answers[1] === "no" && questionCounter === 3) {
            $(".quiz__content").html(questions[questionCounter + 2]);
        // Brings question 7 to question 4, and question 4 to question 5
        } else if (answers[1] === "no" && answers[2] === "no" && questionCounter === 4) {
            $(".quiz__content").html(questions[questionCounter + 2]);
        } else if (answers[1] === "no" && answers[2] === "no" && answers[3] === "yes" && (questionCounter === 5 || questionCounter === 6)) {
            $(".quiz__content").html(questions[questionCounter - 2]);
        // Bring question 7 to question 9
        } else if (answers[1] === "no" && answers[2] === "no" && answers[3] === "no" && questionCounter === 5) {
            $(".quiz__content").html(questions[questionCounter + 2]);
        // Brings question 6 to 8
        } else if (answers[1] === "no" && answers[2] === "yes" && (questionCounter === 4)) {
            $(".quiz__content").html(questions[questionCounter + 4]);
        } else if (answers[1] === "no" && answers[2] === "yes" && answers[3] === "no" && (questionCounter === 5)) {
            $(".quiz__content").html(questions[questionCounter + 2]);
        } else if (answers[1] === "no" && answers[2] === "yes" && answers[3] === "yes" && (questionCounter === 5 || questionCounter === 6)) {
            $(".quiz__content").html(questions[questionCounter - 2]);
        }  else {
            $(".quiz__content").html(questions[questionCounter - 1])
        };
    }


    // else if (answers[1] === "no" && answers[2] === "yes" && answers[3] === "no" && questionCounter === 5) {
    //     $(".quiz__content").html(questions[questionCounter + 4]);
    // }

    // Function to run for each "form submit"

    $(".quiz__button").on("click", function(event) {
        event.preventDefault();
        // Upon button press, display h2 
        if(questionCounter === 0) {
            // Add radio buttons
            $(".quiz__choices").show();
            $(".quiz__button").val("Next!");
        };

        // Push input into answers array
        if (questionCounter > 0) {
            answers.push($('.quiz__input:checked').val());
        }
    
        // Increase question counter
        questionCounter += 1;

        // Change quiz header to next question
        $(".quiz__header").html(`Question ${questionCounter}`)

        // Change question
        questionConditions();

        // Check answer conditions to see if results show
        answerConditions();

        console.log(`Question counter: ${questionCounter}`);
        console.log(answers);

    });

    // Make the Reset Button functional
    $(".quiz__reset").on("click", function(event){
        event.preventDefault();
        questionCounter = 0;
        $(".quiz__reset").hide();
        $(".quiz__button").val("Let's do this again...");
        $(".quiz__button").show();
        $(".quiz__header").html(introHeader);
        $(".quiz__content").html(intro);
        $(".quiz__choices").hide();
        answers = [];
    });

});



