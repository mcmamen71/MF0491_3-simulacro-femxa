// ¡Buena suerte!
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const calculateBtn = document.querySelector("#calculate");
const totalAmount = document.querySelector("#total");

calculateBtn.addEventListener("click", function() {
 const bill = +billInput.value;
    const tip = +tipInput.value;
    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount; 
    totalAmount.textContent = total.toFixed(2);  
});