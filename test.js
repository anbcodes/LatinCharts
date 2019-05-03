String.prototype.removeMacrons = function () {
    let newString = this[0]
    newString = newString.replace("ā", "a")
    newString = newString.replace("ē", "e")
    newString = newString.replace("ī", "i")
    newString = newString.replace("ū", "u")
    return newString
}
if ("Thē sāme strīng with mācrons".toLowerCase() == "THe Same strinG WiTh mAcrons".toLowerCase()) {
    console.log("true")
}
// console.log("string")
// console.log(10)
console.log("ā".removeMacrons())