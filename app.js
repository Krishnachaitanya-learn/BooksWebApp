/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
//chalk is for colouring terminal messages
const chalk = require('chalk');
//below packages are for debugging and debug managing
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const { title } = require('process');

const app = express();

//import port from package.json nodemon config
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

//alternate locations to search for css and js files
app.use(
	'/css',
	express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js'))
);
app.use(
	'/js',
	express.static(path.join(__dirname, '/node_modules/jquery/dist/'))
);

//templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index',
		{
			nav: [
				{ link: '/books', title: 'Books' },
				{ link: '/authors', title: 'Authors' }
			],
			title: 'Library'
		});
});

app.listen(port, () => {
	debug(`Listening on port  ${chalk.green(port)}`);
});
