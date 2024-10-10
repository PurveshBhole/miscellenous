// Save real estate data to localStorage
function saveRealEstate(event) {
    event.preventDefault();
    const squareFeet = document.getElementById("realEstateSqFt").value;
    const pricePerSqFt = document.getElementById("realEstatePrice").value;

    const total = squareFeet * pricePerSqFt;

    const realEstateData = {
        squareFeet: squareFeet,
        pricePerSqFt: pricePerSqFt,
        total: total
    };

    localStorage.setItem('realEstateData', JSON.stringify(realEstateData));

    alert(`Real Estate Investment of $${total.toFixed(2)} saved successfully!`);
}

// Save gold investment data to localStorage
function saveGoldInvestment(event) {
    event.preventDefault();
    const grams = document.getElementById("goldGrams").value;
    const pricePerGram = document.getElementById("goldPrice").value;

    const total = grams * pricePerGram;

    const goldData = {
        grams: grams,
        pricePerGram: pricePerGram,
        total: total
    };

    localStorage.setItem('goldData', JSON.stringify(goldData));

    alert(`Gold Investment of $${total.toFixed(2)} saved successfully!`);
}

// Save bond data to localStorage
function calculateBonds(event) {
    event.preventDefault();
    const bondAmount = document.getElementById("bondAmount").value;
    const interestRate = document.getElementById("interestRate").value;
    const years = document.getElementById("yearsInvested").value;

    const totalValue = bondAmount * Math.pow(1 + interestRate / 100, years);

    const bondData = {
        bondAmount: bondAmount,
        interestRate: interestRate,
        years: years,
        total: totalValue
    };

    localStorage.setItem('bondData', JSON.stringify(bondData));

    document.getElementById("bondResult").innerHTML = `Your total bond value after ${years} years will be: $${totalValue.toFixed(2)}`;
}
