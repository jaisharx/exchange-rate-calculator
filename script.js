(function populateSelectWithOptions() {
    // prettier-ignore
    const currencyArr = ['AED', 'ARS', 'AUD', 'BGN', 'BRL', 'BSD', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CZK',
            'DKK', 'DOP', 'EGP', 'EUR', 'FJD', 'GBP', 'GTQ', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS',
            'INR', 'ISK', 'JPY', 'KRW', 'KZT', 'MXN', 'MYR', 'NOK', 'NZD', 'PAB', 'PEN', 'PHP', 
            'PKR', 'PLN', 'PYG', 'RON', 'RUB', 'SAR', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'UAH',
            'USD', 'UYU', 'VND', 'ZAR'
        ];

    currencyArr.forEach((currency) => {
        const selectEl = document.createElement('option');
        selectEl.setAttribute('value', currency);
        selectEl.innerText = currency;

        if (currency === 'USD') selectEl.setAttribute('selected', true);

        document.getElementById('currency-one').append(selectEl);
    });

    currencyArr.forEach((currency) => {
        const selectEl = document.createElement('option');
        selectEl.setAttribute('value', currency);
        selectEl.innerText = currency;

        if (currency === 'EUR') selectEl.setAttribute('selected', true);

        document.getElementById('currency-two').append(selectEl);
    });
})();


