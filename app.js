var express = require('express');
var app = express();
app.set('port',( process.env.PORT || 5000 ));
app.use(express.static('./public'));
app.get('/',(req,res) => {
    res.render('app.ejs');
});
app.get("/photo_gallery",(req,res) => {
    res.render('photo.ejs');
});
app.get("/video_gallery",(req,res) => {
    res.render('video.ejs');
});

// app.listen(3000,console.log('Done'));
app.listen(app.get('port'),console.log('Done'));