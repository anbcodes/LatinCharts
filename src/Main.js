class Main {
    constructor() {
        this.router = new Router()
        this.welcomeScreen = new WelcomeScreen(this.router)
        this.pickScreen = new PickTypeScreen(this.router)
        this.pickChallengeScreen = new PickChallengeScreen(this.router)
        this.chartScreen = new ChartScreen(this.router)
        this.endScreen = new EndScreen(this.router)
        this.router.addRoute("end", this.endScreen)
        this.router.addRoute("chart", this.chartScreen)
        this.router.addRoute("pickChallenge", this.pickChallengeScreen)
        this.router.addRoute("pickType", this.pickScreen)
        this.router.addRoute("welcome", this.welcomeScreen)
        this.router.switchTo("welcome")
    }
}
let main = new Main()