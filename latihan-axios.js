const axios = require('axios');



// Make a request for a user with a given ID
return axios.get('https://free-nba.p.rapidapi.com/players')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });