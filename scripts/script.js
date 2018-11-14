$(function(){

    // Create array of results

    const results = ["Result 1", "Result 2", "Result 3", "Result 4", "Result 5", "Result 6", "Result 7"];

    // Create array of questions

    const questions = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9"];

    // Empty array for answers - will determine which result the user gets

    let answers = [];

    // Counter for question #
    let questionCounter = 0;

    // Function to hide submit button, and how reset button
    function showReset() {
        $(".quiz__reset").show();
        $(".quiz__button").hide();
    }

    // Create if statement for each condition that will lead to each answer - to be included each time form is submitted

    function answerConditions() {
        if (answers[0] === "no") {
            showReset();
            return $(".quiz__content").html(`<p class="quiz__content">${results[0]}</p>`);
        }
        if (answers[1] === "yes" && answers[2] === "yes" ) {
            showReset();
            return $(".quiz__content").html(`<p class="quiz__content">${results[1]}</p>`);
        }
        if ((answers[1] === "yes" && answers[3] === "yes") || (answers[1] === "no" && answers[3] === "yes" && answers[4] === "yes")) {
            showReset();
            return $(".quiz__content").html(`<p class="quiz__content">${results[2]}</p>`);
        }
        if ((answers[1] === "yes" && answers[4] === "yes") || (answers[1] === "no" && answers[3] === "yes" && answer[5] === "yes")) {
            showReset();
            return $(".quiz__content").html(`<p class="quiz__content">${results[3]}</p>`);
        }
        if ((answers[1] === "yes" && answers[4] === "no") || (answers[1] === "no" && answers[3] === "yes" && answer[5] === "no")) {
            showReset();
            return $(".quiz__content").html(`<p class="quiz__content">${results[4]}</p>`);
        }
        if (answers[1] === "no" && answers[3] === "no" && answers[4] === "no") {
            showReset();
            return $(".quiz__content").html(`<p class="quiz__content">${results[5]}</p>`);
        }
        if (answers[1] === "no" && answers[3] === "no" && answers[4] === "yes") {
            showReset();
            return $(".quiz__content").html(`<p class="quiz__content">${results[6]}</p>`);
        }
    }


    // Make conditions for questions, for paths that split off.

    function questionConditions() {
        if (answers[1] === "no" && questionCounter === 3) {
            $(".quiz__content").html(`<p class="quiz__content">${questions[questionCounter + 2]}</p>`);
        } else if (answers[1] === "no" && answers[2] === "no" && questionCounter === 4) {
            $(".quiz__content").html(`<p class="quiz__content">${questions[questionCounter + 3]}</p>`);  
        } else if (answers[1] === "no" && answers[2] === "no" && answers[3] === "yes" && questionCounter === 5) {
            $(".quiz__content").html(`<p class="quiz__content">${questions[questionCounter - 2]}</p>`);
        } else if (answers[1] === "no" && answers[2] === "no" && answers[3] === "no" && questionCounter === 5) {
            $(".quiz__content").html(`<p class="quiz__content">${questions[questionCounter + 2]}</p>`);
        } else {
            $(".quiz__content").html(`<p class="quiz__content">${questions[questionCounter - 1]}</p>`);
        }
    }

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




});



