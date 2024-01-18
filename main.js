Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
}

class Kity {
    name = "kity";
    wordmark = document.querySelector("span.wordmark");

    container = document.querySelector(".container");

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

    copyToClipboard(str) {
        let el = document.createElement("input");

        el.value = str;

        el.select();
        el.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(el.value);

        el.remove();
    }

    showNotice(str) {
        document.querySelectorAll("span.notice").forEach((el) => { el.remove(); });

        let el = document.createElement("span");
        el.classList.add("notice");

        el.textContent = str;

        this.container.appendChild(el);

        el.addEventListener("animationend", (event) => { event.target.remove(); });
    }
}