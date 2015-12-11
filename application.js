$(document).ready(function() {
    //quiz question array
    var questions = [{
        question: "1. What is the most used microphone?",
        choices: ["Neumann U87", "Sure SM57", "MXL V63M", "Cascade Fathead"],
        qNum : 0,
        correct : 1,
        fact: "The Shure SM57 has been the staple of both stage and studio for longer than most of us have been alive."
        },
        {
        question: "2. Who was the engineer who was made famous by the Beatles",
        choices: ["Joe Meek", "Tom Dowd", "Teo Macero", "Geoff Emerick"],
        qNum : 1,
        correct : 3,
        fact: "Geoff Emerick fell by chance into working with the Beatles."
        },
        {
        question: "3. What is the name of the studio where Thriller was recorded?",
        choices: ["Abbey Road Studios", "Ocean Way Studio ", "RCA Studio B", "EMI Studios"],
        qNum : 2,
        correct : 1,
        fact: "Thriller was recorded at Ocean Way Studios on Music Row in Nashville, TN."
        },
        {
        question: "4. What is an artist who makes sound effects called?",
        choices: ["Foley Artist", "Sound Guy", "Effectronomist", "Effect Engineer"],
        qNum : 3,
        correct : 2,
        fact: "A person who makes sound effects for a living is called a Foley Artist. They usually freelance and carry suitcases with all sorts of things inside."
        },
        {
        question: "5. Where was “Sittin’ on the Dock of the Bay” recorded?",
        choices: ["Motown", "Quonset Hut", " Staxx Records", "Studio 54"],
        qNum : 4,
        correct : 2,
        fact: "Otis Redding recorded this at Staxx Records in Memphis, TN. Rumor has it that he made it big on accident. His brother was there to audition for Staxx and Otis was singing in the hallway while waiting. They liked it so much that they invited him inside to record on a song they were working on."
    }]
    
    //global variables
    var numberCorrect = 0;
    var currentQuestion = 0;
    
    $("#question_wrapper").on("click", "#submit", function () {
        updateCup();
        currentQuestion++;
        nextQuestion();
    });
    
    $("#question_wrapper").on("click", "#retry_button", function () {
        numberCorrect = 0;
        currentQuestion = 0;
        $(".score_cup").css("display", "none");
        $("#score_cup0").css("display", "inline");
        var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
        $("#question_wrapper").html(newQuestion);
        $("#last_question_fact").html("");
    });

    function updateCup() {
        var answer = $("input[type='radio']:checked").val();
        if (answer == questions[currentQuestion].correct) {
            numberCorrect++;    
        }
        if (numberCorrect == 1) {
            $(".score_cup").css("display", "none")
            $("#score_cup1").fadeIn();
        }
        else if (numberCorrect == 2) {
            $(".score_cup").css("display", "none")
            $("#score_cup2").fadeIn();
        }
        else if (numberCorrect == 3) {
            $(".score_cup").css("display", "none")
            $("#score_cup3").fadeIn();
        }
        else if (numberCorrect == 4) {
            $(".score_cup").css("display", "none")
            $("#score_cup4").fadeIn();
        }
        else if (numberCorrect == 5) {
            $(".score_cup").css("display", "none")
            $("#score_cup5").fadeIn();
        }
    }

    function nextQuestion() {
        if (currentQuestion < 5) {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").hide();
            var newQuestion = '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><input type="radio" name="option" class="option" value="0"><span class="answer">'+questions[currentQuestion].choices[0]+'</span><br><input type="radio" name="option" class="option" value="1"><span class="answer">'+questions[currentQuestion].choices[1]+'</span><br><input type="radio" name="option" class="option" value="2"><span class="answer">'+questions[currentQuestion].choices[2]+'</span><br><input type="radio" name="option" class="option" value="3"><span class="answer">'+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
            $("#question_wrapper").html(newQuestion);
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact).fadeIn();
        }
        else {
            $(".question").remove();
            $("#answer_holder input").remove();
            $("#answer_holder span").remove();
			$("#last_question_fact").fadeOut();
            $("#submit").css("display", "none");
            $("#retry_button").css("display", "inline");
            var lastFact= questions[currentQuestion-1].fact;
            $("#last_question_fact").html(lastFact);
            if (numberCorrect == 1) {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
                $("#answer_holder").html(finalScore);
            }
            else {
                var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' questions.'
                $("#answer_holder").html(finalScore);
            }
        }
    }
});
