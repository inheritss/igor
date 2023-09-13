const axios = require('axios');

const config = {
  method: 'get',
  url: 'https://api.cnpja.com/office/01813700000168',
  headers: { 
    'Authorization': '4f3d8f0b-3a6f-488d-a48d-02080ce79b03-782ce02c-461c-46dc-aa8a-bc4cb97b345a'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});