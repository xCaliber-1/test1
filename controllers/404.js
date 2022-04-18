//  here we are only creating function and calling these fun/routes where needed

exports.error404 =(req, res, next) => {                // This function will execute for every incoming request 
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));     // To send out the response instead of write we use send provided by express
    res.status(404).render('404',{pageTitle : 'Page Not Found', path:'/404'})
}