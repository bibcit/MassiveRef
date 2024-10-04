const axios = require('axios');
let data = JSON.stringify({
  "objResource": [
    "https://doi.org/10.1353/arq.1997.0020",
    "https://www.assignmenthelp.net/data_structure_assignment_help",
    "0596156715",
    "10.1353/arq.1997.0020"
  ]
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://www.bibcit.com/api/citation/document',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
