class PickTypeScreen extends Screen {
    constructor(router) {
        super(router, "center", "flex-start")
        this.menu = this.createMenu()
        this.buttons = this.createButtons()
    }
    createMenu() {
        let div = document.createElement("div").applyStyle("pickButtonsMenu")
        this.container.appendChild(div)
        return div
    }
    createButtons() {
        let chartNames = Object.keys(DATA_charts)
        for(let row = 0; row < chartNames.length/4; row += 1) {
            let currentRow = document.createElement("div").applyStyle("pickRow")
            for(let column = 0; column < 4; column += 1) {
                if (chartNames[row*4+column]) {
                    let button = document.createElement("button")
                    button.applyStyle("pickButton")
                    button.innerText = chartNames[row*4+column]
                    if (DATA_charts[chartNames[row*4+column]]["Challenge A"].length === 1) {
                        button.disabled = true
                    }
                    button.onclick = () => {
                        this.router.switchTo("pickChallenge", button.innerText)
                    }
                    currentRow.appendChild(button)
                }
            }
            this.menu.appendChild(currentRow)
        }
    }
}