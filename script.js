(function populateSelectWithOptions() {
    // prettier-ignore
    const currencyArr = [ 
                        'CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'GBP', 'RON',
                        'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'EUR',
                        'MYR', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD', 'MXN',
                        'SGD', 'AUD', 'ILS', 'KRW', 'PLN',
    ];

    currencyArr.forEach((currency) => {
        const selectEl = document.createElement('option');
        selectEl.setAttribute('value', currency);
        selectEl.innerText = currency;

        if (currency === 'INR') selectEl.setAttribute('selected', true);

        document.getElementById('currency-one').append(selectEl);
    });

    currencyArr.forEach((currency) => {
        const selectEl = document.createElement('option');
        selectEl.setAttribute('value', currency);
        selectEl.innerText = currency;

        if (currency === 'USD') selectEl.setAttribute('selected', true);

        document.getElementById('currency-two').append(selectEl);
    });
})();

const currencyElOne = document.getElementById('currency-one');
const amountElOne = document.getElementById('amount-one');
const currencyElTwo = document.getElementById('currency-two');
const amountElTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swapBtn = document.getElementById('swap');

const calculate = () => {
    const currency_one = currencyElOne.value;
    const currency_two = currencyElTwo.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${currency_one}`)
        .then((res) => res.json())
        .then((data) => {
            const rates = data.rates[currency_two];

            rateEl.innerText = `1 ${currency_one} = ${rates} ${currency_two}`;

            amountElTwo.value = (amountElOne.value * rates).toFixed(2);
        });
};

calculate();

currencyElOne.addEventListener('change', calculate);
amountElOne.addEventListener('input', calculate);
currencyElTwo.addEventListener('change', calculate);
amountElTwo.addEventListener('input', calculate);

swapBtn.addEventListener('click', () => {
    const temp = currencyElOne.value;
    currencyElOne.value = currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate();
});