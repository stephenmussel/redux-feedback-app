const express = require('express');
const router = express.Router();
const pg = require('pg');
const pool = require('../modules/pool');

// Add feedback
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

// GET feedback
router.get('/', (req, res) => {
    console.log('in feedback GET');

    let queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('error in GET request', error);
            res.sendStatus(500)
        }); 
});

// DELETE feedback
router.delete('/:id', (req, res) => {
    const feedbackId = req.params.id;
    console.log('feedbackId: ', feedbackId);
    let queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [feedbackId])
        .then(result => {
            console.log('deleted feedbacak with ID: ', feedbackId);
            res.sendStatus(200);
        }).catch(error => {
            console.log('error deleting feedback', error);
            res.sendStatus(500);
        });
});

// Flag feedback
router.put('/:id', (req, res) => {
    feedbackId = req.params.id;
    flaggedFeedback = req.body.flagged;
    console.log('this is id to flag: ', feedbackId);
    let queryText = `UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [flaggedFeedback, feedbackId])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error in PUT', error);
            res.sendStatus(500);  
        });  
})

module.exports = router;
