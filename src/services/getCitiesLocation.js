export const cityData = (async () => {
  const where = encodeURIComponent(JSON.stringify({
    "country": {
      "$exists": true
    },
    "location": {
      "$exists": true
    },
    "name": {
      "$exists": true
    }
  }));
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Pakistancities_City?limit=439&order=country,name,location&keys=name,country,location&where=${where}`,
    {
      headers: {
        'X-Parse-Application-Id': 'KTx9m5W9R5WK1ZJtAlsHEKA8HG6CEd13Q4KUrdoU', // This is your app's application id
        'X-Parse-REST-API-Key': 'atZjkHhHtCy6JX6LbaCzj2iIZmbTNfPwY6mG634i', // This is your app's REST API key
      }
    }
  );
  const data = await response.json(); // Here you have the data that you need
  return data;
})();