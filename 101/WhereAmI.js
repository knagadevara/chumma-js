'use strict';

function makePathReverseGeocodeURL(lttd, lgtd, output="json"){
  const url = 'https://geocode.xyz';
  const format = {
    "xml": "geoit=xml",
    "json": "geoit=json"
  };
  return `${url}/${lttd}/${lgtd}?${format[output]}`;
};

function makeCountryDetailsURL(type){
  const url = {
  "name" : "https://restcountries.com/v2/alpha" ,
  "code" : "https://restcountries.com/v2/name"
};
  return `${url[type]}`;
};

function returnFetchedJson(myURL) {
  return fetch(myURL)
  .then((response) => {
    if(response.status == 200) return response.json();
    else if (response.status == 403) throw new Error(`Too many requests to API URL: ${resource}`);
    else throw new Error(`Could not process any request with the given URL: ${resource}`);
  })
};

returnFetchedJson(`${makePathReverseGeocodeURL(52.508, 13.381)}`)
.then(jsonObject => returnFetchedJson(`${makeCountryDetailsURL("code")}/${jsonObject['standard']['prov']}`))
.then((data) => {console.log(data)})
.catch((err) => {console.log(`${err.name}: ${err.message}`);});
