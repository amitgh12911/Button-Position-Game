let toggleThemeBtnElement = document.getElementById("toggle-theme");
let score = 0;
let scorePreviewInfo = document.getElementById("score-preview-info");
toggleThemeBtnElement.style.display = "none";
setTimeout(() => {
    scorePreviewInfo.style.display = "none";
    toggleThemeBtnElement.style.display = "inline-block";
}, 5000);
toggleThemeBtnElement.addEventListener("click", function () {
    score += 1;
    if (getComputedStyle(document.body).getPropertyValue("background-color") == "rgba(0, 0, 0, 0)") {
        let leftPosition = 1273 * Math.random();
        let topPosition = 602 * Math.random();
        document.body.setAttribute("bgcolor", "black");
        this.innerText = "Light";
        this.style.left = `${leftPosition}px`;
        this.style.top = `${topPosition}px`;
        addingNewButtonOnPreviousPosition(leftPosition, topPosition);
    } else {
        let leftPosition = 1273 * Math.random();
        let topPosition = 602 * Math.random();
        document.body.removeAttribute("bgcolor");
        this.innerText = "Dark";
        this.style.left = `${leftPosition}px`;
        this.style.top = `${topPosition}px`;
        addingNewButtonOnPreviousPosition(leftPosition, topPosition);
    }
});

function addingNewButtonOnPreviousPosition(leftPosition, topPosition) {
    let newBtn = document.createElement("button");
    document.body.appendChild(newBtn);
    newBtn.classList.add("btn");
    newBtn.innerHTML = toggleThemeBtnElement.innerHTML;
    newBtn.style.left = `${leftPosition}px`;
    newBtn.style.top = `${topPosition}px`;
}

window.addEventListener("keydown", function(e) {
    if(e.key == "s") {
        document.body.innerHTML = "";
        let scorePreview = document.createElement("h1");
        this.document.body.appendChild(scorePreview);
        this.document.body.removeAttribute("bgcolor");
        scorePreview.innerText = "Your Score is: "+score;
    }
})
