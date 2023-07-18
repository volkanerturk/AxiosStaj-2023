const axios = require("axios")

axios.post("https://dummy.restapiexample.com/api/v1/create", {name: 'Caesar Vance', salary: '106450', age: '21'}).then((response => {
    console.log(response.data.message)
}))