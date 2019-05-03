String.prototype.removeMacrons = function () {
    let newString = this || ""
    let macrons = [
        ["ā", "a"],
        ["ē", "e"],
        ["ī", "i"],
        ["ō", "o"],
        ["ū", "u"],
        ["Ā", "A"],
        ["Ē", "E"],
        ["Ī", "I"],
        ["Ō", "O"],
        ["Ū", "U"],
    ]
    for (let x = 0; x < macrons.length; x += 1) {
        newString = newString.replace(macrons[x][0], macrons[x][1])
    }
    return newString
}
Element.prototype.applyStyle = function(name) {
    this.className = this.className + " " + name
    return this
}