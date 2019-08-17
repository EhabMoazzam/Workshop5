module.exports = function(app){
    app.post('/api/auth', function(req, res){

        var userData = [
            {
                username : "alex",
                birthday : "1980-03-07",
                age : 39,
                email : "alex@gmail.com",
                password : "123",
                valid : true
            },
            {
                username : "roland",
                birthday : "1990-08-17",
                age : 19,
                email : "roland@gmail.com",
                password : "123",
                valid : true
            },
            {
                username : "peter",
                birthday : "1995-02-25",
                age : 24,
                email : "peter@gmail.com",
                password : "123",
                valid : true
            },
        ]
        var result = false

        for (var i = 0; i < userData.length; i++){
            var person = userData[i]

            if (person.username === req.body.username && person.password === req.body.password){
                result = person
            }
        }

        var resMsg 

        if (result == false){
            resMsg = {
                "ok" : false,
                "errors" : {}
            }
        }else{
            resMsg = {
                "ok" : true,
                "data" : result
            }
        }
        
        res.status(201).send(resMsg)
    })
}