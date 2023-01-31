// Mission 4 assignment masfrod2
// Creator: Mason Frodsham

// calculator function
$(document).ready(function () {
    $("#btnSend").click(function () {
        // assign variables to entered grade
        var assignmentPct = $("#txtAssignments").val();
        var groupProPct = $("#txtGroup").val();
        var quizzesPct = $("#txtQuiz").val();
        var midtermPct = $("#txtMidterm").val();
        var finalPct = $("#txtFinal").val();
        var intexPct = $("#txtIntex").val();

        // assign weight
        var assignmentWeight = .50;
        var groupProWeight = .10;
        var quizzesWeight = .10;
        var midtermWeight = .10;
        var finalWeight = .10;
        var intexWeight = .10;

        // calculate final grade using weight and entered grade declare letter grade variable
        var finalPercentage = ((assignmentWeight * assignmentPct) + (groupProWeight * groupProPct) + (quizzesWeight * quizzesPct) + (midtermWeight * midtermPct) + (finalWeight * finalPct) + (intexWeight * intexPct));
        var letterGrade;

        // determine letter grade from final grade
        if (finalPercentage >= 94) {
            letterGrade = "A";
        } else if (finalPercentage >= 90) {
            letterGrade = "A-";
        } else if (finalPercentage >= 87) {
            letterGrade = "B+";
        } else if (finalPercentage >= 84) {
            letterGrade = "B";
        } else if (finalPercentage >= 80) {
            letterGrade = "B-";
        } else if (finalPercentage >= 77) {
            letterGrade = "C+";
        } else if (finalPercentage >= 74) {
            letterGrade = "C";
        } else if (finalPercentage >= 70) {
            letterGrade = "C-";
        } else if (finalPercentage >= 67) {
            letterGrade = "D+";
        } else if (finalPercentage >= 64) {
            letterGrade = "D";
        } else if (finalPercentage >= 60) {
            letterGrade = "D-";
        } else {
            letterGrade = "E";
        }
        // write final grade and letter grade to document
        $("#grade").val(finalPercentage.toFixed(2));
        $("#letterGrade").val(letterGrade);
    })
})

