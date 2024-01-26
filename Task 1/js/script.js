// Get the current URL
// const currentURL = window.location.href;
const currentURL = 'https://www.columbiathreadneedle.ie/en/intm/our-products/funds-and-prices/';

// Define a function to extract values from the URL
const extractValuesFromURL = (url) => {
    const matchResult = url.match(/\/([a-z]+)\/([a-z]+)\/our-products\/funds-and-prices\/?/i);

    if (!matchResult) {
        console.error('URL does not match expected format');
        return null;
    }

    const dataCulture = matchResult[1];
    const dataLanguage = matchResult[2];
    const dataFundList = dataCulture.includes('intm') ? 'gb_intm_classes' : 'gb_inst_classes';
    const dataCountry = dataCulture.includes('ie') ? 'IE' : 'GB';
    const dataAudience = dataCulture.includes('retl') ? 'retl' : 'inst';

    return {
        dataCulture,
        dataLanguage,
        dataFundList,
        dataCountry,
        dataAudience,
    };
};

// Update the div element with the extracted values
const updateDivElement = (values) => {
    const divElement = document.getElementById('fundCenter');
    if (!divElement) {
        console.error('Div element with id "fundCenter" not found');
        return;
    }

    // Update dataset attributes
    divElement.dataset.culture = values.dataCulture;
    divElement.dataset.language = values.dataLanguage;
    divElement.dataset.fundlist = values.dataFundList;
    divElement.dataset.country = values.dataCountry;
    divElement.dataset.audience = values.dataAudience;

    // Update spans with extracted values
    document.getElementById('dataCulture').innerText = values.dataCulture;
    document.getElementById('dataLanguage').innerText = values.dataLanguage;
    document.getElementById('dataFundList').innerText = values.dataFundList;
    document.getElementById('dataCountry').innerText = values.dataCountry;
    document.getElementById('dataAudience').innerText = values.dataAudience;
};

// Extract values from the current URL
const extractedValues = extractValuesFromURL(currentURL);

// Update the div element if values are successfully extracted
if (extractedValues) {
    updateDivElement(extractedValues);
}

