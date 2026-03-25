const axios = require('axios');
/**
 * This is a sample code to demonstrate how to make a POST request using Axios in Node.js.
 * The code sends a JSON payload containing an array of resources to a specified URL.
 * The response from the server is logged to the console. If there is an error during the request, it is also logged.
 */
let data = JSON.stringify({
  "objResource": [
    "https://doi.org/10.1353/arq.1997.0020",
    "https://www.assignmenthelp.net/data_structure_assignment_help",
    "0596156715",
    "10.1353/arq.1997.0020"
  ]
});


/**
 * Still under active development, the URL and other parameters need to be updated before making the actual request.
 */


// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: '',
//   headers: { 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });
