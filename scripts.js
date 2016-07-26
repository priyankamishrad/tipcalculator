//Custom Function

function calculateTip() {
	//store the data of the inputs like billAmount, serviceQuality and noOfPeople.
	var billAmount = document.getElementById("bill-amount").value;
	var serviceQuality = document.getElementById("service-quality").value;
	var noOfPeople = document.getElementById("total-people").value;

	//Validations

	if(billAmount === "" || serviceQuality == 0) {
		window.alert("One of the important field(s) is missing");
		return;
	}//validation 1

	//removal and addition of each depending on the number of people

	if(noOfPeople === "" || noOfPeople <= 1) {
		noOfPeople = 1;
		document.getElementById("each").style.display = "none";
	} else {
		document.getElementById("each").style.display = "block"
	}//validation 2

	//math

	var total = (billAmount * serviceQuality) / noOfPeople;
	total = Math.round(total * 100) / 100;
	total = total.toFixed(2);

	//Display the tip 
	document.getElementById("total-tip").style.display = "block"	
	document.getElementById("tip").innerHTML = total;






}//function





//Hide the tip amount on load
document.getElementById("total-tip").style.display = "none";
document.getElementById("each").style.display = "none";

//Create a call to function by clicking button
document.getElementById("calculate").onclick = function() { calculateTip(); };
