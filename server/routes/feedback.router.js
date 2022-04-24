const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// POST feedback
router.post('/', (req, res) => {
    // console.log('in feedback POST: ', req.body);
    const feedbackToAdd = req.body;
    console.log('this is feedbackToAdd: ', feedbackToAdd);
    let queryText = `INSERT INTO "feedback" (
        "feeling",
        "understanding",
        "support",
        "comments"
    ) VALUES (
        $1,
        $2,
        $3,
        $4
    );`;
    pool.query(queryText, [
        feedbackToAdd.feeling,
        feedbackToAdd.understanding,
        feedbackToAdd.support,
        feedbackToAdd.comments,
    ]).then(result => {
        res.sendStatus(201);
    }).catch(error => {
        console.log('error adding feedback: ', error);
        res.sendStatus(501);
    })
})

module.exports = router;
