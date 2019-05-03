class PickChallengeScreen extends Screen {
    constructor(router) {
        super(router, "center", "center")
        this.toReview = {}
        this.menu = this.createMenu()
        this.buttons = this.createButtons()
    }
    start(chartKind) {
        this.chartKind = chartKind
    }
    createMenu() {
        let div = document.createElement("div").applyStyle("pickChallengeButtonsMenu")
        this.container.appendChild(div)
        return div
    }
    challengeButtonOnClick(e) {
        if (e.target.attr_selected === "false") {
            e.target.style.backgroundColor = "rgb(0, 0, 100)"
            e.target.attr_selected = "true"
            this.toReview[e.target.innerText] = true
        } else {
            delete this.toReview[e.target.innerText]
            e.target.style.backgroundColor = ""
            e.target.attr_selected = "false"
        }
    }
    createChallengeButtons() {
        let challenges = ["A", "B", "1", "2", "3", "4"]
        for (let row = 0; row < 2; row += 1) {
            let currentRow = document.createElement("div").applyStyle("pickChallengeRow")
            for (let column = 0; column < challenges.length/2; column += 1) {
                let button = document.createElement("button").applyStyle("ChallengePickerButton")
                button.innerText = "Challenge " + challenges[row*3+column]
                button.attr_selected = "false"
                if (row*3+column > 0) {
                    button.disabled = true
                }
                button.onclick = (e) => this.challengeButtonOnClick(e)
                currentRow.appendChild(button)
            }
            this.menu.appendChild(currentRow)
        }
    }
    latinEnglishButtonOnClick(e) {
        let chart = this.getCharts()
        if (chart.length !== 0) {
            this.router.switchTo("chart", [e.target.innerText, chart])
        }
    }
    createLatinEnglishButtons() {
        let buttonText = ["Latin to English", "English to Latin"]
        let row = document.createElement("div").applyStyle("pickChallengeRow")
        for(let x = 0; x < buttonText.length; x += 1) {
            let button = document.createElement("button").applyStyle("ChallengePickerButtonGreen")
            button.innerText = buttonText[x]
            button.onclick = (e) => this.latinEnglishButtonOnClick(e)
            row.appendChild(button)
        }
        this.menu.appendChild(row)
    }
    createButtons() {
        this.createChallengeButtons()
        this.createLatinEnglishButtons()
    }
    getCharts() {
        let chart = []
        let challenges = Object.keys(this.toReview)
        for(let x=0; x < challenges.length; x += 1) {
            chart.push(DATA_charts[this.chartKind][challenges[x]])
        }
        chart = chart.flat(1)
        return chart
    }
}