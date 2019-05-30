const express = require ('express');
const proxy = require('http-proxy-middleware');
const cors = require('cors');
const path = require('path');
const PORT = 4000;

const app = express();

app.use(cors());
app.use('/', express.static(path.resolve(__dirname, '../public')));

app.use('/restaurants', proxy ({
  target:'http://localhost:4000',
  router: {
    '/time_sponsored': 'https://time-sponsored.herokuapp.com',
    '/menu_cart': 'https://menu-cart.herokuapp.com',
    '/reviews_footer': 'https://reviews-footer.herokuapp.com',
    '/nav_intro': 'https://nav-about.herokuapp.com'
  },
  changeOrigin: true
 }))

app.listen(PORT, () => console.log('App is listening on PORT ', PORT));
