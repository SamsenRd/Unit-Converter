/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


let unitNum = document.getElementById("unit-num")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")


const meterToFeet = 3.281
const feetToMeter = 0.304
const litreToGallon = 0.264
const gallonToLitre = 4.546
const kiloToPound = 2.204
const poundToKilo = 0.453


convertBtn.addEventListener("click", function () {
    let baseText = unitNum.value
    
    lengthEl.textContent = `${baseText} meters = ${baseText * meterToFeet.toFixed(3)} feet | 
    ${baseText} feet = ${baseText * feetToMeter.toFixed(3)} meters`
    
    volumeEl.textContent = `${baseText} litres = ${baseText * litreToGallon.toFixed(3)} gallons | 
    ${baseText} gallons = ${baseText * gallonToLitre.toFixed(3)} litres`
    
    massEl.textContent = `${baseText} kilos = ${baseText * kiloToPound.toFixed(3)} pounds | 
    ${baseText} pounds = ${baseText * poundToKilo.toFixed(3)} kilos`
})
