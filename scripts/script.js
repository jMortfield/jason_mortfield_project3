$(function(){

    // Create array of results

    const results = ["Result 1", "Result 2", "Result 3", "Result 4", "Result 5", "Result 6", "Result 7"]

    // Create array of questions

    const questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9"]

    // Empty array for answers - will determine which result the user gets

    const answers = [];

    // Create if statement for each condition that will lead to each answer - to be included each time form is submitted

    function answerConditions() {
        if (answers[0] === "no") {
            $(".quiz__reset").show();
            return results[0];
        }
        if (answers[1] === "yes" && answers[2] === "yes" ) {
            return results[1];
        }
        if ((answers[1] === "yes" && answers[3] === "yes") || (answers[1] === "no" && answers[3] === "yes" && answers[4] === "yes")) {
            return results[2];
        }
        if ((answers[1] === "yes" && answers[4] === "yes") || (answers[1] === "no" && answers[3] === "yes" && answer[5] === "yes")) {
            return results[3];
        }
        if ((answers[1] === "yes" && answers[4] === "no") || (answers[1] === "no" && answers[3] === "yes" && answer[5] === "no")) {
            return results[4];
        }
        if (answers[1] === "no" && answers[3] === "no" && answers[4] === "no") {
            return results[5];
        }
        if (answers[1] === "no" && answers[3] === "no" && answers[4] === "yes") {
            return results[6];
        }
    }

    // Function for question progression on main path
    function questionProgression()

    // Make conditions for questions, for paths that split off

    function questionConditions() {
        if (answers[1] === "no")
    }

    // Counter for question #
    let questionCounter = 0;

    // Upon button press, display h2 

    $(".quiz__button").on("click", function(event) {
        event.preventDefault();
        if(questionCounter === 0) {
            // Add radio buttons
            $(".quiz__choices").show();
        };

        // Increase question counter
        questionCounter += 1;

        // Change quiz header to next question
        $(".quiz__header").html(`Question ${questionCounter}`)

         // Change content text to next question
        $(".quiz__content").html(`<p class="quiz__content">${questions[questionCounter - 1]}</p>`);
    });

    // After form is submitted each time, have if statements to check against "answer" conditions

});

