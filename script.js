document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".question");
    let currentQuestionIndex = 0;
    let hasAnsweredYesOrNo = [false, false]; 

    function showQuestion(index) {
        questions.forEach((question, i) => {
            if (i === index) {
                question.style.display = "block";
            } else {
                question.style.display = "none";
            }
        });
    }

    function showNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            // Perform an action when all questions are displayed
            console.log("All questions have been displayed.");

            // Show the GIF and text after all questions are answered
            document.getElementById("gifImage").style.display = "block";
            document.getElementById("biliyordumText").style.display = "block";
        }
    }

    showQuestion(currentQuestionIndex);

    questions.forEach((question, index) => {
        const inputs = question.querySelectorAll("input[type='radio']");
        inputs.forEach(input => {
            input.addEventListener("change", function() {
                if (index === currentQuestionIndex) {
                    if ((currentQuestionIndex === 1 || currentQuestionIndex === 2) && hasAnsweredYesOrNo[currentQuestionIndex - 1]) {
                        this.checked = false;
                        return;
                    }

                    if (this.value === "evet" || this.value === "hayır") {
                        hasAnsweredYesOrNo[currentQuestionIndex - 1] = true;
                    }

                    showNextQuestion();
                }
            });
        });
    });
});
