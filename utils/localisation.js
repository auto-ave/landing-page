const LOCALISATION_DATA = {
    "en-US": {
        address: "No-42 ,4th Main, NGEF Layout, Postal Colony, Sanjaynagar,  Bangalore, Karnataka-560094",
        email: "care@autoave.in",
        domain: "https://www.autoave.in",
        country: "India",
        service_location_text: "Proudly serving in Bangalore"
    },
    "en-ie": {
        address: "200 Rosan Glas, Rahoon Galway H91 A8XT",
        email: "care@autoave.ie",
        domain: "https://www.autoave.ie",
        country: "Ireland",
        service_location_text: "Soon starting services in Galway"
    },
}

export const COUNTRY_TO_LOCALE = (country) => {
    switch(country){
        case 'Ireland':
            return 'en-ie';
        default:
            return 'en-US';
    }
}

export default LOCALISATION_DATA