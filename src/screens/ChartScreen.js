class ChartScreen extends Screen {
    constructor(router) {
        super(router, "center", "flex-start")
        this.menu = this.createMenu()
    }
    createMenu() {
        let div = document.createElement("div").applyStyle("chartMenu")
        this.container.appendChild(div)
        return div
    }
    start(info) {
        this.way = info[0]
        this.chart = info[1]
        this.createChart()
        this.createCheckButton()
    }
    checkChart(e) {
        let correct = 0
        let wrong = []
        for(let row = 0; row < this.entrys.length; row += 1) {
            console.log(1, this.entrys[row][1].value.removeMacrons().toLowerCase(), this.chart[row][1].removeMacrons().toLowerCase())
            console.log(0, this.entrys[row][0].value.removeMacrons().toLowerCase(), this.chart[row][0].removeMacrons().toLowerCase())
            let latinToEnglish = this.entrys[row][1].value.removeMacrons().toLowerCase() === this.chart[row][1].removeMacrons().toLowerCase()
            let englishToLatin = this.entrys[row][0].value.removeMacrons().toLowerCase() === this.chart[row][0].removeMacrons().toLowerCase()
            console.log("lte", latinToEnglish, "etl", englishToLatin)
            if (latinToEnglish && englishToLatin) {
                correct += 1
            } else {
                wrong.push(row)
            }
        }
        if (correct === this.entrys.length) {
            this.router.switchTo("end")
        } else {
            for(let row = 0; row < this.entrys.length; row += 1) {
                this.entrys[row][0].style.backgroundColor = ""
                this.entrys[row][1].style.backgroundColor = ""
            }
            for (let x = 0; x < wrong.length; x += 1) {
                this.entrys[wrong[x]][0].style.backgroundColor = "#cc1111ee"
                this.entrys[wrong[x]][1].style.backgroundColor = "#cc1111ee"
            }
        }
    }
    createCheckButton() {
        let checkButton = document.createElement("button")
        checkButton.applyStyle("chartCheckButton")
        checkButton.onclick = (e) => this.checkChart(e)
        checkButton.innerText = "Sumit"
        this.menu.appendChild(checkButton)
        let space = document.createElement("div")
        space.style.width = "100%"
        space.style.height = "7vh"
        this.menu.appendChild(space)
    }
    createChart() {
        this.entrys = []
        for(let row = 0; row < this.chart.length; row += 1) {
            let currentRow = document.createElement("div").applyStyle("chartRow")
            let currentEntryRow = []
            for(let column = 0; column < 2; column += 1) {
                let entry = document.createElement("input").applyStyle("chartEntry")
                entry.type = "text"
                if (column === 0 && this.way === "English to Latin") {
                    entry.value = this.chart[row][0]
                    entry.disabled = true
                }
                if (column === 1 && this.way === "Latin to English") {
                    entry.value = this.chart[row][1]
                    entry.disabled = true
                }
                currentEntryRow.push(entry)
                currentRow.appendChild(entry)
            }
            this.entrys.push(currentEntryRow)
            this.menu.appendChild(currentRow)
        }
    }
}