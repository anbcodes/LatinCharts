class Screen {
    constructor(router, justify, align) {
        this.container = this.createContainer()
        this.router = router
        this.justify = justify || ""
        this.align = align || ""
    }
    createContainer() {
        let container = document.createElement("div").applyStyle("screen")
        container.style.justifyContent = this.justify
        container.style.alignContent = this.align
        return container
    }
    show() {
        this.container.style.display = "block"
    }
    hide() {
        this.container.style.display = "none"
    }
}