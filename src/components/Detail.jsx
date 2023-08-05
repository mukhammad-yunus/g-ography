import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectSearchResult } from "../config/searchSlice";
import Loader from "./Loader";
import GetElementFromObj from "./helpers/GetElementFromObj";

function Detail() {
  const [current, setCurrent] = useState(false);
  const result = useSelector(selectSearchResult);
  const { countryName } = useParams();
  const getCountry = (array) => {
    const country = array.find(
      (data) => data.cca3.toLowerCase() === countryName
    );
    setCurrent(country);
  };
  useEffect(() => {
    if (result.length) {
      getCountry(result);
    } else {
      const fetchCurrentCountry = async () => {
        const url = `https://restcountries.com/v3.1/alpha/${countryName}`;
        const res = await axios.get(url);
        const data = res.data;
        getCountry(data);
      };
      fetchCurrentCountry();
    }
  }, [result, countryName]);

  if (!current) return <Loader />;
  return (
    <div className="flex flex-col p-4 justify-center items-start">
      <h1 className="font-black text-3xl pb-4">{current.name.common}</h1>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        <img
          className="block"
          src={current.flags.svg}
          alt={current.flags.alt}
        />
        <div className="text-lg">
          <p>
            Official: <span className="font-bold">{current.name.official}</span>
          </p>
          <p>
            Capital: <span className="font-bold">{current.capital}</span>
          </p>
          <p>
            Population:{" "}
            <span className="font-bold">
              {current.population.toLocaleString()}
            </span>{" "}
            people
          </p>
          <p>
            Area:{" "}
            <span className="font-bold">{current.area.toLocaleString()}</span>{" "}
            km²
          </p>
          <p>
            Region: <span className="font-bold">{current.region}</span>
          </p>
          <p>
            Subregion: <span className="font-bold">{current.subregion}</span>
          </p>
        </div>
      </div>
      <GetElementFromObj obj={current.currencies} name={"currency"}/>
    </div>
  );
}

export default Detail;
const obj = {
  name: {
    common: "Uzbekistan",
    official: "Republic of Uzbekistan",
    nativeName: {
      rus: {
        official: "Республика Узбекистан",
        common: "Узбекистан",
      },
      uzb: {
        official: "O'zbekiston Respublikasi",
        common: "O‘zbekiston",
      },
    },
  },
  tld: [".uz"],
  cca2: "UZ",
  ccn3: "860",
  cca3: "UZB",
  cioc: "UZB",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    UZS: {
      name: "Uzbekistani soʻm",
      symbol: "so'm",
    },
  },
  idd: {
    root: "+9",
    suffixes: ["98"],
  },
  capital: ["Tashkent"],
  altSpellings: [
    "UZ",
    "Republic of Uzbekistan",
    "O‘zbekiston Respublikasi",
    "Ўзбекистон Республикаси",
  ],
  region: "Asia",
  subregion: "Central Asia",
  languages: {
    rus: "Russian",
    uzb: "Uzbek",
  },
  translations: {
    ara: {
      official: "جمهورية أوزباكستان",
      common: "أوزباكستان",
    },
    bre: {
      official: "Republik Ouzbekistan",
      common: "Ouzbekistan",
    },
    ces: {
      official: "Republika Uzbekistán",
      common: "Uzbekistán",
    },
    cym: {
      official: "Republic of Uzbekistan",
      common: "Uzbekistan",
    },
    deu: {
      official: "Republik Usbekistan",
      common: "Usbekistan",
    },
    est: {
      official: "Usbekistani Vabariik",
      common: "Usbekistan",
    },
    fin: {
      official: "Uzbekistanin tasavalta",
      common: "Uzbekistan",
    },
    fra: {
      official: "République d'Ouzbékistan",
      common: "Ouzbékistan",
    },
    hrv: {
      official: "Republika Uzbekistan",
      common: "Uzbekistan",
    },
    hun: {
      official: "Üzbég Köztársaság",
      common: "Üzbegisztán",
    },
    ita: {
      official: "Repubblica di Uzbekistan",
      common: "Uzbekistan",
    },
    jpn: {
      official: "ウズベキスタン共和国",
      common: "ウズベキスタン",
    },
    kor: {
      official: "우즈베키스탄 공화국",
      common: "우즈베키스탄",
    },
    nld: {
      official: "Republiek Oezbekistan",
      common: "Oezbekistan",
    },
    per: {
      official: "جمهوری ازبکستان",
      common: "ازبکستان",
    },
    pol: {
      official: "Republika Uzbekistanu",
      common: "Uzbekistan",
    },
    por: {
      official: "República do Usbequistão",
      common: "Uzbequistão",
    },
    rus: {
      official: "Республика Узбекистан",
      common: "Узбекистан",
    },
    slk: {
      official: "Uzbecká republika",
      common: "Uzbekistan",
    },
    spa: {
      official: "República de Uzbekistán",
      common: "Uzbekistán",
    },
    srp: {
      official: "Република Узбекистан",
      common: "Узбекистан",
    },
    swe: {
      official: "Republiken Uzbekistan",
      common: "Uzbekistan",
    },
    tur: {
      official: "Özbekistan Cumhuriyeti",
      common: "Özbekistan",
    },
    urd: {
      official: "جمہوریہ ازبکستان",
      common: "ازبکستان",
    },
    zho: {
      official: "乌兹别克斯坦共和国",
      common: "乌兹别克斯坦",
    },
  },
  latlng: [41, 64],
  landlocked: true,
  borders: ["AFG", "KAZ", "KGZ", "TJK", "TKM"],
  area: 447400,
  demonyms: {
    eng: {
      f: "Uzbekistani",
      m: "Uzbekistani",
    },
    fra: {
      f: "Ouzbèke",
      m: "Ouzbèke",
    },
  },
  flag: "🇺🇿",
  maps: {
    googleMaps: "https://goo.gl/maps/AJpo6MjMx23qSWCz8",
    openStreetMaps: "https://www.openstreetmap.org/relation/196240",
  },
  population: 34232050,
  gini: {
    2003: 35.3,
  },
  fifa: "UZB",
  car: {
    signs: ["UZ"],
    side: "right",
  },
  timezones: ["UTC+05:00"],
  continents: ["Asia"],
  flags: {
    png: "https://flagcdn.com/w320/uz.png",
    svg: "https://flagcdn.com/uz.svg",
    alt: "The flag of Uzbekistan is composed of three equal horizontal bands of turquoise, white with red top and bottom edges, and green. On the hoist side of the turquoise band is a fly-side facing white crescent and twelve five-pointed white stars arranged just outside the crescent opening in three rows comprising three, four and five stars.",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/uz.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/uz.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [41.32, 69.25],
  },
  postalCode: {
    format: "######",
    regex: "^(\\d{6})$",
  },
};
