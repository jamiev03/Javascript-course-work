const annoyer = {
    phrases: ["Hey", "How", "Howdy", "Yo"],
    index:  Math.floor(Math.random() * this.phrases.length),
    pickPhrase() {
        const { phrases } = this;
        const index = Math.floor(Math.random() * phrases.length);
        return phrases[index];
    },
    startAnnoyer() {
        setInterval(() => {
            console.table(this.pickPhrase())
        }, 4000)
    },
    pickColor() {
            const h1 = document.querySelector('h1')
            const colors = ["red", "blue", "green", "pink"]
            const idx = Math.floor(Math.random() * colors.length)
            const newH1 = h1.style.color = colors[idx]
            return newH1
    },
    setFontColor() {
        setInterval(() => {
            this.pickColor()
        },2000)
    },
    show() {
        console.log();
    }
}

annoyer.startAnnoyer();
annoyer.setFontColor();
annoyer.show();