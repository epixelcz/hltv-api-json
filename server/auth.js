app.use((req, res, next) => {
	const auth = {
		login: 'api',
		password: 'apikey'
	};

	const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
	const [login, password] = new Buffer(b64auth, 'base64').toString().split(':');

	if (!login || !password || login !== auth.login || password !== auth.password) {
		res.set('WWW-Authenticate', 'Basic realm="401"');
		res.status(401).send('Authentication required.');
		return;
	}

	next();
});