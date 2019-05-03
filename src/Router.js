class Router {
    constructor() {
        this.containter = this.createContainer()
        this.topBar = this.createBar("rgb(14, 14, 202)")
        this.setUpTopBar()
        this.display = this.createDisplay()
        this.bottomBar = this.createBar("rgb(14, 14, 202)").applyStyle("bottom")
        this.lastroutes = [];
        this.currentRoute;
        this.routes = {}
    }
    back() {
        if (this.currentRoute !== "welcome") {
            window.location.reload()
        } else {
            window.location = "https://anbcodes.github.io"
        }
    }
    setUpTopBar() {
        let website = document.createElement("a").applyStyle("webLink")
        website.innerText = "Back"
        website.onclick = () => this.back()
        this.topBar.appendChild(website)
    }
    createDisplay() {
        let display = document.createElement("div").applyStyle("display")
        this.containter.appendChild(display)
        return display
    }
    createContainer() {
        let display = document.createElement("div").applyStyle("screenContainer")
        document.body.appendChild(display)
        return display
    }
    createBar(color) {
        let bar = document.createElement("div").applyStyle("bar")
        bar.style.backgroundColor = color
        this.containter.appendChild(bar)
        return bar
    }
    switchTo(routeName, arg, ifBack) {
            if (arg) {
                try {
                    this.routes[routeName].start(arg)
                }
                catch (error) {
                    console.log(error.message)
                    throw new Error("Error in router: route " + routeName + " has no start function")
                }
            }
            console.log("b ", this.lastroutes)
            if (this.currentRoute && !ifBack) {
                this.lastroutes.push(this.currentRoute) 
            }
        try {
            console.log(this.lastroutes)
            this.currentRoute = routeName
            this.display.innerHTML = ""
            this.display.appendChild(this.routes[routeName].container)
        } catch (error) {
            throw new Error("ROUTER ERROR: No route named " + routeName)
        }
    }
    addRoute(routeName, screen) {
        this.routes[routeName] = screen
    }
}