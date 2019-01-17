const { HLTV } = require('hltv');
const express = require('express');

const app = express();
//console.log(HLTV.getTeamRanking({year: '2018'}));

/* LOGIN */
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

	/*
	¨* MATCH STATS
	*/

app.get('/match', (req, res) => {
	HLTV.getMatches().then((out) => {
		res.send(out);
	});
});

app.get('/match/stats/:from(*)/:to(*)', (req, res) => {

	const { from, to } = req.params;

	HLTV.getMatchesStats({startDate: from, endDate: to}).then((out) => {
		res.send(out);
	});
});

app.get('/match/:matchID(*)/stats', (req, res) => {
	const { matchID } = req.params;

	var id = parseInt(matchID);
	console.log(id + " " + (typeof id));

	if((typeof id) === "number") {
		HLTV.getMatchStats({id: id}).then(out => {
				res.send(out);
		});
	}else{
		res.send("Error");
	}
});

app.get('/match/:matchID(*)', (req, res) => {
	const { matchID } = req.params;

	var id = parseInt(matchID);
	console.log(id + " " + (typeof id));

	if((typeof id) === "number") {
		HLTV.getMatch({id: id}).then(out => {
				res.send(out);
		});
	}else{
		res.send("Error");
	}
});

	/*
	 * Team stats
	*/

app.get('/team/:teamID(*)/stats', (req, res) => {
	const { teamID } = req.params;

	var id = parseInt(teamID);
	console.log(id + " " + (typeof id));

	if((typeof id) === "number") {
		HLTV.getTeamStats({id: id}).then(out => {
				res.send(out);
		});
	}else{
		res.send("Error");
	}
});

app.get('/team/:teamID(*)', (req, res) => {
	const { teamID } = req.params;

	var id = parseInt(teamID);
	console.log(id + " " + (typeof id));

	if((typeof id) === "number") {
		HLTV.getTeam({id: id}).then(out => {
				res.send(out);
		});
	}else{
		res.send("Error");
	}
});

	/*
	 * Player stats
	*/
	
app.get('/player/:playerID(*)/stats', (req, res) => {
	const { playerID } = req.params;

	var id = parseInt(playerID);
	console.log(id + " " + (typeof id));

	if((typeof id) === "number") {
		HLTV.getPlayerStats({id: id}).then(out => {
				res.send(out);
		});
	}else{
		res.send("Error");
	}
});

app.get('/player/:playerID(*)', (req, res) => {
	const { playerID } = req.params;

	var id = parseInt(playerID);
	console.log(id + " " + (typeof id));

	if((typeof id) === "number") {
		HLTV.getPlayer({id: id}).then(out => {
				res.send(out);
		});
	}else{
		res.send("Error");
	}
});

app.get('/player/stats/:from(*)/:to(*)', (req, res) => {

	const { from, to } = req.params;

	HLTV.getPlayerRanking({startDate: from, endDate: to}).then((out) => {
		res.send(out);
	});
});

	/*
	 * Event
	*/

app.get('/event/:event(*)', (req, res) => {
	const { event } = req.params;

	var id = parseInt(event);
	console.log(id + " " + (typeof id));

	if((typeof id) === "number") {
		HLTV.getEvent({id: id}).then(out => {
				res.send(out);
		});
	}else{
		res.send("Error");
	}
});

app.listen(3331, () => console.log('running suss...'))
