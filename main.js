const wordmark = document.querySelector("span.wordmark");
const fonts = ["Poppins", "Comic Sans MS", "Arial", "Helvetica"]
const sub = [".dev", " world", " zone", " universe", " cat", " :3"];

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

function randomizeLogo() {
    let str = "kity" + sub.random();
    wordmark.innerHTML = "";

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        
        let el = document.createElement("div");
        el.textContent = char;

        el.style.fontFamily = fonts.random();
        el.style.transform = "translate(0, " + (-.1 + (Math.random() * .2)) + "em) rotate(" + (-15 + (Math.random() * 30)) + "deg)";
        // el.style.textShadow = "0 0 " + (Math.random() * 10) + "px rgba(255,255,255," + (Math.random() * .5) + ")";
    
        wordmark.appendChild(el);
    }
}

randomizeLogo();