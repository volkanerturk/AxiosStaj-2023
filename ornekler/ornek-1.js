const axios = require("axios")


axios.get('	https://dummy.restapiexample.com/api/v1/employees').then((response ) => {
    console.log(response.data)
})