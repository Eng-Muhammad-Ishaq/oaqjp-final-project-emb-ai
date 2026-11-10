let RunSentimentAnalysis = () => {
    let textToAnalyze = document.getElementById("textToAnalyze").value.trim();
    let systemResponse = document.getElementById("system_response");

    if (textToAnalyze === "") {
        systemResponse.innerHTML = "Invalid text! Please try again!";
        return;
    }

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            systemResponse.innerHTML = this.responseText;
        }
    };

    xhttp.open(
        "GET",
        "/emotionDetector?textToAnalyze=" + encodeURIComponent(textToAnalyze),
        true
    );

    xhttp.send();
};
