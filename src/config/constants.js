export function sortAllCountries(array) {
  const sortedObject = {};

  array.forEach((country) => {
    const firstLetter = country.name.common[0].toLowerCase();

    if (!sortedObject[firstLetter]) {
      sortedObject[firstLetter] = [];
    }
    const arrToPush = [country.name.common, country.cca3.toLowerCase()];

    sortedObject[firstLetter].push(arrToPush);
  });

  return Object.entries(sortedObject).sort();
}
export function sortByRegion(array, isRegion) {
  const sortedCountriesByRegion = {};

  array.forEach((country) => {
    const region = isRegion ? country.region : country.subregion;

    if (!sortedCountriesByRegion[region]) {
      sortedCountriesByRegion[region] = [];
    }
    const arrToPush = [country.name.common, country.cca3.toLowerCase()];
    sortedCountriesByRegion[region].push(arrToPush);
  });

  return Object.entries(sortedCountriesByRegion).sort();
}

export function sortByContinent(array) {
  const sortedCountriesByContinent = {};

  array.forEach((country) => {
    const continent = country.continents;
    continent?.forEach((element) => {
      if (!sortedCountriesByContinent[element]) {
        sortedCountriesByContinent[element] = [];
      }
      const arrToPush = [country.name.common, country.cca3.toLowerCase()];
      sortedCountriesByContinent[element].push(arrToPush);
    });
  });

  return Object.entries(sortedCountriesByContinent).sort();
}

export function sortByCurrency(array) {
  const sortedCountriesByCurrencies = {};

  array.forEach((country) => {
    let currencies;
    const allCurrencies = country.currencies;
    if (allCurrencies) {
      currencies = Object.keys(allCurrencies);
    }
    currencies?.forEach((element) => {
      if (!sortedCountriesByCurrencies[element]) {
        sortedCountriesByCurrencies[element] = [];
      }
      const arrToPush = [country.cca3.toLowerCase()];
      sortedCountriesByCurrencies[element].push(arrToPush);
    });
  });
  const sortedObject = {};
  const sortedArray = [...Object.entries(sortedCountriesByCurrencies)].sort();
  sortedArray.forEach((currency) => {
    const firstLetter = currency[0][0].toLowerCase();

    if (!sortedObject[firstLetter]) {
      sortedObject[firstLetter] = [];
    }

    sortedObject[firstLetter].push(currency);
  });
  return Object.entries(sortedObject).sort()
}

export const configArr = [
  {
    type: "country name",
    endpoint: (name) => {
      return `/name/${name}`;
    },
  },
  {
    type: "country full-name",
    endpoint: (name) => {
      return `/name/${name}?fullText=true`;
    },
  },
  {
    type: "country code",
    endpoint: (code) => {
      return `/alpha/${code}`;
    },
  },
  {
    type: "currency",
    endpoint: (currency) => {
      return `/currency/${currency}`;
    },
  },
  {
    type: "nationality",
    endpoint: (demonym) => {
      return `/demonym/${demonym}`;
    },
  },
  {
    type: "language",
    endpoint: (lang) => {
      return `/lang/${lang}`;
    },
  },
  {
    type: "capital",
    endpoint: (city) => {
      return `/capital/${city}`;
    },
  },
  {
    type: "region",
    endpoint: (region) => {
      return `/region/${region}`;
    },
  },
  {
    type: "subregion",
    endpoint: (subregion) => {
      return `/subregion/${subregion}`;
    },
  },
];

export const navbarLists = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Search",
    link: "/search",
  },
  {
    text: "Category",
    link: "/category",
  },
  {
    text: "About",
    link: "/about",
  },
];
