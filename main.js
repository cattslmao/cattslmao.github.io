Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

class Kity {
    name = "kity";
    wordmark = document.querySelector("span.wordmark");

    logo_fonts = ["Poppins", "Shantell Sans", "Arial"];
    logo_sub = [".dev", " world", " zone", " universe", " galaxy", " cat", " :3"];

    randomizeLogo() {
        let str = this.name + this.logo_sub.random();
        this.wordmark.innerHTML = "";

        for (let i = 0; i < str.length; i++) {
            let char = str.charAt(i);
            
            let el = document.createElement("div");
            el.textContent = char;
    
            el.style.fontFamily = this.logo_fonts.random();
            el.style.transform = "translate(0, " + (-.1 + (Math.random() * .2)) + "em) rotate(" + (-15 + (Math.random() * 30)) + "deg)";
        
            this.wordmark.appendChild(el);
        }    
    }
}