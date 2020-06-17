var credenrials = require('./credentials');

const {Client} = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL || credenrials.DATABASE_URI,
    ssl:{
        rejectUnauthorized: false
    }
});


module.exports = {
    getResultsHistory(userId, response) {
        client.connect();
        client.query("SELECT session_id, date, result_id FROM Results_History WHERE user_id = " + userId + " ORDER BY date DESC;",
            (err, res) => {
            if (err){
                console.log(err.message);
                throw err;
            }
            results = []
            for (let row of res.rows) {
                results.push({
                    session_id: row[0],
                    date: row[1],
                    result_id: row[2]
                });
            }
            client.end();
            if (results.length > 0){
                response.json(results);
            }
            else{
                response.json({
                    epmty: true
                });
            }
        });
    }
}