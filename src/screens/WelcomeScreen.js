class WelcomeScreen extends Screen {
    constructor(router) {
        super(router, "center", "flex-start")
        this.menu = this.createButtonsDiv()
        this.text = this.createText()
        this.startButton = this.createStartButton()
    }
    createButtonsDiv() {
        let div = document.createElement("div").applyStyle("startingMenu")
        this.container.appendChild(div)
        return div
    }
    createText() {
        let text = document.createElement("p").applyStyle("startingText")
        text.innerText = "Latin Charts"
        this.menu.appendChild(text)
        return text
    }
    createStartButton() {
        let button = document.createElement("button").applyStyle("startingButton")
        button.innerText = "Start"
        button.onclick = () => this.router.switchTo("pickType")
        this.menu.appendChild(button)
        return button
    }
}