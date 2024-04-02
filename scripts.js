function calculate() {
    const principalAmount = parseFloat(document.getElementById('principalAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const duration = parseInt(document.getElementById('duration').value, 10);
    const managementFee = parseFloat(document.getElementById('managementFee').value) / 100;

    // Compounding using A=P(1+r)^t assuming compounding once per year
    // We can add a field for more frequent compounding if needed

    // Calculate total amount without fees
    const totalWithoutFees = principalAmount * Math.pow(1 + interestRate, duration);
    
    // Calculate total amount with fees
    const effectiveRate = interestRate - managementFee;
    const totalWithFees = principalAmount * Math.pow(1 + effectiveRate, duration);
    
    // Calculate difference
    const difference = totalWithoutFees - totalWithFees;

    // Display the results 
    document.getElementById('resultWithoutFees').textContent = `Total Amount at Maturity (No Fees): $${totalWithoutFees.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('resultWithFees').textContent = `Total Amount at Maturity (With Fees): $${totalWithFees.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
    document.getElementById('difference').textContent = `Difference Due to Fees: $${difference.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

}

// Initial calculation on page load
window.onload = calculate;
