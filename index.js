const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const pug = require('pug');
const methodOverride = require('method-override');
const session = require('express-session');
const MYSQLStore = require('express-mysql-session')(session);
const config = require('./config.json');
const port = 80;


console.log(config);

app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.use(cors());
app.use(session({
    secret: "askdfhwehifubsd23fsdkj23",
    resave: false,
    saveUninitialized: false,
    store: new MYSQLStore({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database
    })
}));

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(bodyParser.json({ extended: true, limit: '30mb' }));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method
        delete req.body._method
        return method
    }
}));

app.use((req,res,next) => {
    res.locals.session = req.session;
    next();
});


const main = require('./routes/main');
const redirect = require('./routes/redirect');
const login = require('./routes/login');
const test1 = require('./routes/test1');
const test2 = require('./routes/test2');
const scoring1 = require('./routes/scoring1');
const finishtest1 = require('./routes/finishtest1');
const deletion = require('./routes/delete');
app.use(test2);
app.use(deletion)
app.use(finishtest1);
app.use(scoring1);
app.use(test1);
app.use(login);
app.use(redirect);
app.use(main);


app.get('*', (req, res, next) => {
    res.status(404).send('404 Error');
});
app.get('*', (err, req, res, next) => {
    res.status(500).send('500 Error');
});

app.listen(port, () => {
    console.log("Node server start!");
})
