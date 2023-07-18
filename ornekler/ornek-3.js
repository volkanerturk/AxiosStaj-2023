const axios = require("axios")
var token = ''


describe('Auth test', function () {
    it('Api Login', async () => {
        await axios.post('https://dummyjson.com/auth/login', { username: 'kminchelle', password: '0lelplR' }).then((response) => {
            var token = response.data.token
            if (response.status === 200 || token.length > 1) {
                console.log('Login başarılı')
            } else {
                console.log('Login başarısız')
            }
        })
    });
});




/*

}))
*/