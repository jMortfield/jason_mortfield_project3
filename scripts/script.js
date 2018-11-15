$(function(){

    // Create array of results

    const results = ["Result 1", "Result 2", "Result 3", "Result 4", "Result 5", "Result 6", "Result 7"];

    // Create array of questions

    const questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9"];

    // Empty array for answers - will determine which result the user gets

    let answers = [];

    // Counter for question #

    let questionCounter = 0;

    // String for initial header

    const introHeader = "Testing test"

    // String for initial introduction

    const intro = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis at dolore id vel ad excepturi voluptates animi facere. Est obcaecati dignissimos debitis laudantium atque minus veniam dolorem veritatis, tempora quaerat!"

    // Function to hide submit button, and how reset button
    function showReset() {
        $(".quiz__reset").show();
        $(".quiz__button").hide();
    }

    // Create if statement for each condition that will lead to each answer - to be included each time form is submitted

    function answerConditions() {
        if (answers[0] === "no") {
            showReset();
            return $(".quiz__content").html(results[0]);
        }
        if (answers[1] === "yes" && answers[2] === "yes" ) {
            showReset();
            return $(".quiz__content").html(results[1]);
        }
        if ((answers[1] === "yes" && answers[3] === "yes") || (answers[1] === "no" && answers[3] === "yes" && answers[4] === "yes")) {
            showReset();
            return $(".quiz__content").html(results[2]);
        }
        if ((answers[1] === "yes" && answers[4] === "yes") || (answers[1] === "no" && answers[3] === "yes" && answers[5] === "yes")) {
            showReset();
            return $(".quiz__content").html(results[3]);
        }
        if ((answers[1] === "yes" && answers[4] === "no") || (answers[1] === "no" && answers[3] === "yes" && answers[5] === "no")) {
            showReset();
            return $(".quiz__content").html(results[4]);
        }
        if (answers[1] === "no" && answers[3] === "no" && answers[4] === "no") {
            showReset();
            return $(".quiz__content").html(results[5]);
        }
        if (answers[1] === "no" && answers[3] === "no" && answers[4] === "yes") {
            showReset();
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
        // Brings question 6 to 8, and question 8 to 9
        } else if (answers[1] === "no" && answers[2] === "yes" && (questionCounter === 4 || questionCounter === 5)) {
            $(".quiz__content").html(questions[questionCounter + 3]);
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
        $(".quiz__button").show();
        $(".quiz__header").html(introHeader);
        $(".quiz__content").html(intro);
        $(".quiz__choices").hide();
        answers = [];
    });

});



