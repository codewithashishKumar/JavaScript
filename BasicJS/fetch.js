const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");
// Populate currency dropdowns
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = true;
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}
// Update exchange rate
const updateExchangeRate = async () => {
    try {
        let amount = document.querySelector(".amount input");
        let amtVal = parseFloat(amount.value);
        // Validate amount
        if (isNaN(amtVal) || amtVal < 1) {
            amtVal = 1;
            amount.value = "1";
        }
        const from = fromCurr.value.toLowerCase();
        const to = toCurr.value.toLowerCase();
        // New API URL
        const URL = `${BASE_URL}/${from}.json`;
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error("Unable to fetch exchange rates");
        }
        const data = await response.json();
        // Get exchange rate
        const rate = data[from][to];
        if (!rate) {
            throw new Error("Exchange rate not available");
        }
        const finalAmount = (amtVal * rate).toFixed(2);
        msg.innerText =
            `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    } catch (error) {
        console.error("Currency API Error:", error);
        msg.innerText = "Unable to get exchange rate.";
    }
};
// Update country flag
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};
// Button click
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
});
// Load default exchange rate
window.addEventListener("load", () => {
    updateExchangeRate();
});