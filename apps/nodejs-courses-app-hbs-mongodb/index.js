// Source: https://www.udemy.com/course/nodejs-full-guide/

// node 12.0.0
// https://materializecss.com/
// https://handlebarsjs.com/guide/
// https://www.mongodb.com/



const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');
const cartRoutes = require('./routes/cart');
const app = express();



const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');



app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/cart', cartRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server was started on port', PORT);
});
