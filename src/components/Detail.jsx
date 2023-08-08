import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { selectSearchResult } from "../config/searchSlice";
import Loader from "./Loader";
import MainDetails from "./helpers/MainDetails";
import Geography from "./helpers/Geography";
import GetElementFromObj from "./helpers/GetElementFromObj";

function Detail() {
  const [current, setCurrent] = useState(false);
  const [neighbors, setNeighbors] = useState([]);
  const result = useSelector(selectSearchResult);
  const { countryName } = useParams();
  const allCountries = JSON.parse(localStorage.getItem("allCountries"));
  const oddClassName = "grid grid-cols-2 items-center";
  const evenClassName = "grid grid-cols-2 items-center bg-neutral-950";
  useEffect(() => {
    const getCountry = (array) => {
      const country = array.find(
        (data) => data.cca3.toLowerCase() === countryName
      );
      setCurrent(country);
    };
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
  useEffect(() => {
    if (current && allCountries) {
      const borderCodes = current.borders;
      const bordersArr = borderCodes?.map((code) => {
        return allCountries.filter((country) => country.cca3 === code);
      });
      const borders = bordersArr?.map((border) => {
        const name = border[0].name.common;
        const link = `/country/${border[0].cca3.toLowerCase()}`;
        return { name, link };
      });
      setNeighbors(borders);
    }
  }, [current]);

  if (!current)
    return (
      <div className="min-h-screen">
        <Loader />
      </div>
    );
  return (
    <div className="min-h-screen text-white md:px-20 sm:px-8 px-6 pt-14">
      <MainDetails
        current={current}
        oddClassName={oddClassName}
        evenClassName={evenClassName}
      />
      <Geography
        current={current}
        oddClassName={oddClassName}
        evenClassName={evenClassName}
        neighbors={neighbors}
      />
      <div className="mt-10">
        <h2 className="font-bold text-2xl pb-4">Additional Information</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="grid gap-2">
            <GetElementFromObj obj={current.demonyms} context={"Demonym for "} />
          </div>
          <div className="grid gap-2">
            <GetElementFromObj obj={current.currencies} context={'Currency '} />
          </div>
          <div className="grid gap-2 col-span-1 md:col-span-2">
            <p>International Direct Dialing</p>
            <div className={oddClassName}>
              <p>Root</p>
              <p>{current.idd.root}</p>
            </div>
            <div className={evenClassName}>
            <p>{current.idd.suffixes.length > 1 ? "Suffixes" : "Suffix"}</p>
              <span className="flex gap-3 flex-wrap">
                {current.idd.suffixes?.map((continent, index) => (
                  <span key={index}>{continent}{current.idd.suffixes.length == (index + 1) ? "" : current.idd.suffixes.length > 1 ? ", " : ""}</span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
const obj = {
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
  maps: {
    googleMaps: "https://goo.gl/maps/AJpo6MjMx23qSWCz8",
    openStreetMaps: "https://www.openstreetmap.org/relation/196240",
  },

  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/uz.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/uz.svg",
  },
  capitalInfo: {
    latlng: [41.32, 69.25],
  },
};
