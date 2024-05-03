import Papa from "papaparse";

function getData(url){
  return new Promise((resolve, reject) => {
  Papa.parse(url, {
    download: true,
    skipEmptyLines: true,
    complete(results) {
      let d  = results.data;
      d.shift()
      resolve(d);
    },
    error(error) {
      reject(error);
    }
  });
});
}

// Get Event details
export function getLegacyTimes() {
  const url = "https://docs.google.com/spreadsheets/d/"
              + "1IMf9voJnfnPTLPTFISaz5b6NXf9Iq3jj"
              + "/gviz/tq?tqx=out:csv&sheet=s1&tq=" 
              + encodeURIComponent("select *");
  return getData(url)
}
