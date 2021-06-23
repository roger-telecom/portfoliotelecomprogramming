const express = require('express');
const path = require('path');
const app = express();

//Render files

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/views')));

//Routes

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {

res.render("portifolio");
    
});

