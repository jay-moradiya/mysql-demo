const connection = require("../config/conection");

const postUser = (req, res) => {
    let { id, userName, userAge, userJob, userCity } = req.body;
    connection.query(`INSERT INTO user_data (id, userName, userAge, userJob, userCity)
     values ('${id}', '${userName}', '${userAge}', '${userJob}', '${userCity}')`, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.status(201).send(result)
        }
    })
};

const getUser = (req, res) => {
    connection.query(`SELECT * FROM user_data`, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.status(200).send(result)
        }
    })
};

// const getUser = (req, res) => {
//     connection.query(`SELECT userName,userAge FROM user_data`, (err, result) => {
//         if (err) {
//             res.send(err)
//         } else {
//             res.status(200).send(result)
//             console.log(result);
//         }
//     })
// };

const getUserById = (req, res) => {
    let id = req.query.id
    connection.query(`SELECT * FROM user_data WHERE id=${id}`, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.status(200).send(result)
        }
    })
};

const updateUser = (req, res) => {
    let upid = req.body.id;
    let { id, userName, userAge, userJob, userCity } = req.body;
    let sql = `UPDATE user_data SET id=?,userName=?, userAge=?, userJob=?, userCity=? WHERE id=${upid}`;
    connection.query(sql, [id, userName, userAge, userJob, userCity], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.status(200).send(result)
        }
    })
};

const deleteUser = (req, res) => {
    let id = req.query.id;
    connection.query(`DELETE FROM user_data WHERE id=${id}`, (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
};

module.exports = { postUser, getUser, getUserById, updateUser, deleteUser }