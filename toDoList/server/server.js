const express = require('express');
const app = express();
const api = require('./routes/index');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', api);

const port = process.env.PORT || 3001;

app.listen(port,()=>console.log(`Listening on port ${port}`));
const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT

app.get('/select', function(request, response) {
    getSelect(request, response)
})

async function getSelect(req, res) {
    let connection
    try {
        connection = await oracledb.getConnection({
            user          : "ADMIN",
            password      : "Dutajrjfk2!j",
            connectString : "SID"
        })

        const result = await connection.execute(
            `SELECT * 
            FROM todolist
            WHERE BOARD_NUM = :num`, // num의 값 전달
        )

        console.log(result)
        res.send(result.rows)
    } catch (error) {
        console.log(error)
    } finally {
        if (connection) {
            try {
                await connection.close()
            } catch (error) {
                console.log(error)
            }
        }
    }
}
app.get('/',function(req,res){
    res.send([
        // {
        // idx : 0,
        // title : 'test1',
        // contetnt : 'contetnt1'
    // }
])

    // res.send(11111111111111)
});