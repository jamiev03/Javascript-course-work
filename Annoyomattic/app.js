const annoyer = {
    phrases: ["litterally", "cray cray", "I can't even..", "Totes!", "YOLO!", "Can't stop, won't stop"],
    pickPhrase() {
        const {phrases} = this;
        const index = Math.floor(Math.random() * phrases.length)
    },
    start() {

    }
}



annoyer.start()
annoyer.stop()

setInterval(func, 3000) 