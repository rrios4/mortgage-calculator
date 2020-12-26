function validateForm(){
    let borrowersName = document.forms["myForm"]["borrowers-name"].value;
    let accountNumber = document.forms["myForm"]["account-number"].value;
    let loanAmount = document.forms["myForm"]["loan-amount"].value;
    let downPayment = document.forms["myForm"]["downPayment"].value;
    let term = document.forms["myForm"]["term"].value;
    let interestRate = document.forms["myForm"]["interestRate"].value;

    if(borrowersName == ""){
        alert("Borrower's name must be filled out!");
        return false;
    } else if(accountNumber == ""){
        alert("Account Number must be filled!");
        return false;
    } else if(loanAmount == ""){
        alert("Loan Number needs to be filled!");
        return false;
    } else if(downPayment == ""){
        alert("Down Payment needs to be filled!");
        return false;
    } else if(term == ""){
        alert("Term needs to be filled!");
        return false;
    } else if(interestRate == ""){
        alert("Interest Rate needs to be filled!");
        return false;
    }
}

function calculate(){
    let loanAmount = document.getElementById("loanAmount").value;
    let downPayment = document.getElementById("downPayment").value;
    let term = document.getElementById("term").value;
    let interestRate = (document.getElementById("interestRate").value/100);
    
    let downPaymentApplied = loanAmount - downPayment;
    let monthlyPayment = (downPaymentApplied*interestRate*((1+interestRate)**term))/(((1+interestRate)**term)-1);
    let totalCostOfHouse = (monthlyPayment + downPayment)*term;

    document.getElementById("displayAccount").innerHTML = document.getElementById("accountNumber").value;
    document.getElementById("displayBorrower").innerHTML = document.getElementById("borrowersName").value;
    document.getElementById("displayTotal").innerHTML = totalCostOfHouse.toFixed(2);
    document.getElementById("displayPayments").innerHTML= monthlyPayment.toFixed(2);
}
