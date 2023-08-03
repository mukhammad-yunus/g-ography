export const configArr = [
    {
        type: 'country name',
        endpoint: (name)=>{
            return `/name/${name}`
        } 
    },
    {
        type: 'country full-name',
        endpoint: (name)=>{
            return `/name/${name}?fullText=true`
        } 
    },
    {
        type: 'country code',
        endpoint: (code)=>{
            return `/alpha/${code}`
        } 
    },
    {
        type: 'currency',
        endpoint: (currency)=>{
            return `/currency/${currency}`
        } 
    },
    {
        type: 'nationality',
        endpoint: (demonym)=>{
            return `/demonym/${demonym}`
        } 
    },
    {
        type: 'language',
        endpoint: (lang)=>{
            return `/lang/${lang}`
        } 
    },
    {
        type: 'capital',
        endpoint: (city)=>{
            return `/capital/${city}`
        } 
    },
    {
        type: 'region',
        endpoint: (region)=>{
            return `/region/${region}`
        } 
    },
    {
        type: 'subregion',
        endpoint: (subregion)=>{
            return `/subregion/${subregion}`
        } 
    }
]