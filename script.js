function grade() {
  var testWeight = parseInt(document.getElementById("testWeight").value);
  var testGrade = document.getElementById("testGrade").value;
  var sumTest = 0;
  var testGrade = testGrade.split(",");
  for (var i = 0; i < testGrade.length; i++) {
    sumTest += parseInt(testGrade[i]);
  }
  testGrade = sumTest / testGrade.length;

  var hwWeight = parseInt(document.getElementById("hwWeight").value);
  var hwGrade = document.getElementById("hwGrade").value;
  var sumHw = 0;
  var hwGrade = hwGrade.split(",");
  for (var i = 0; i < hwGrade.length; i++) {
    sumHw += parseInt(hwGrade[i]);
  }
  hwGrade = sumHw / hwGrade.length;

  var quizWeight = parseInt(document.getElementById("quizWeight").value);
  var quizGrade = document.getElementById("quizGrade").value;
  var sumQuiz = 0;
  var quizGrade = quizGrade.split(",");
  for (var i = 0; i < quizGrade.length; i++) {
    sumQuiz += parseInt(quizGrade[i]);
  }
  quizGrade = sumQuiz / quizGrade.length;

  var partWeight = parseInt(document.getElementById("partWeight").value);
  var partGrade = document.getElementById("partGrade").value;
  var sumPart = 0;
  var partGrade = partGrade.split(",");
  for (var i = 0; i < partGrade.length; i++) {
    sumPart += parseInt(partGrade[i]);
  }
  partGrade = sumPart / partGrade.length;

  var ecGrade = document.getElementById("ecGrade").value;
  var sumEc = 0;
  var ecGrade = ecGrade.split(",");
  for (var i = 0; i < ecGrade.length; i++) {
    sumEc += parseInt(ecGrade[i]);
  }
  ecGrade = sumEc / ecGrade.length;

  var finalWeight = parseInt(document.getElementById("finalWeight").value);
  var wanted = parseInt(document.getElementById("wanted").value);

  total = testWeight + hwWeight + quizWeight + partWeight + finalWeight;

  if (total != 100) {
    window.alert("Error!\nTotal weight does not add up to 100!");
    text = "Error! Please make sure the weights add up to 100."
  } else {
    var testPer = testWeight * testGrade / 100;
    var hwPer = hwWeight * hwGrade / 100;
    var quizPer = quizGrade * quizWeight / 100;
    var partPer = partGrade * partWeight / 100;

    var finalGrade = (wanted - testPer - hwPer -
      quizPer - partPer - ecGrade) / (finalWeight / 100);

    text = "You need a " + Number(finalGrade.toFixed(3)) + "% on the final.";
  }

  document.getElementById("myOutput").innerHTML = text;
  return finalGrade;
}
var final = document.getElementById("gradeDisplay");
