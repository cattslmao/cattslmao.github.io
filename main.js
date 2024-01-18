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

    paw_offset = {
        x: -10,
        y: -110,
    };

    paw = null;
    paw_active = false;

    createPaw() {
        let paw = document.createElement("img");
        paw.id = "paw";
        paw.src = "assets/paw.png";
        paw.alt = "A cat paw."
        paw.style.display = "none";

        return paw;
    }

    initalizePaw() {
        this.paw = this.createPaw();
        document.body.append(this.paw);

        addEventListener("mousedown", (event) => {
            this.paw.style.left = (event.pageX + this.paw_offset.x) + "px";
            this.paw.style.top = (event.pageY + this.paw_offset.y) + "px";

            paw.style.display = "block";
            this.paw.style.animationName = "none";

            this.paw_active = true;
        });

        addEventListener("mousemove", (event) => {
            if (!this.paw_active) {
                return;
            }

            this.paw.style.left = (event.pageX + this.paw_offset.x) + "px";
            this.paw.style.top = (event.pageY + this.paw_offset.y) + "px";
        });


        addEventListener("mouseup", (event) => {
            this.paw.style.animationName = "paw";

            this.paw_active = false;
        });
    }
}