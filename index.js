const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/auth-routes');


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', (req, res) => {
  res.render('home');
});

app.use('/auth', authRoutes);

app.listen(port, ()=>{
  console.log(`Listening on ${port}`);
})
