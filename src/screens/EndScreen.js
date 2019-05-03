class EndScreen extends Screen {
    constructor(router) {
        super(router, "center", "flex-start")
        this.menu = this.createMenu()
        this.returnButton = this.createButton()
        this.text = this.createText()
    }
    createMenu() {
        let div = document.createElement("div").applyStyle("endMenu")
        this.container.appendChild(div)
        return div
    }
    createText() {
        let text = document.createElement("p")
        text.innerText = "You Finished"
        text.applyStyle("endText")
        this.menu.appendChild(text)
    }
    createButton() {
        let button = document.createElement("button")
        button.applyStyle("endButton")
        button.innerText = "Restart"
        button.onclick = () => window.location.reload()
        this.menu.appendChild(button)
        return button
    }
}