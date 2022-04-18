//TODO: Import expressJS here
// 1 -- Create app which funnel 2 req middleware fun and logs to console something and return one response  
// 2 -- Handle req for '/' and '/users' 

const server = require('express');
const app = server();

app.use('/users',(request, response, next) => {
    console.log('For Users Page');                                  // 1
    response.send('<h1>Hello this is users page </h1>');            // 2
})

app.use('/',(req, res, next) => {
    console.log('For starter page');
    res.send('<h1>Hello this is start page </h1>');
})
app.listen(3000);