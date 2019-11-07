const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // should really get the user data here and then fetch it thru, but let's try this asynchronously
    console.log('at the main route');

    let query = "SELECT ID, Title, Image, Description, Link, Role FROM tbl_things";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        console.log(result); // should see objects wrapped in an array

        // render the home view with dynamic data
        res.render('home', { thing: result });
    })
})

// router.get('/:id', (req, res) => {
//     // should really get the user data here and then fetch it thru, but let's try this asynchronously
//     console.log('at the user route');
//     console.log(req.params.id); //1, 2, 3, or whatever comes after the slash

//     let query = `SELECT * FROM tbl_bio WHERE profID="${req.params.id}"`;

//     sql.query(query, (err, result) => {
//         if (err) { throw err; console.log(err); }

//         console.log(result); // should see objects wrapped in an array

//         // Convert social property into an array before we send it through
//         //map is an array method that lets you map one value to another (convert it)
//         result[0].social = result[0].social.split(",").map(function(item) {
//             // item.trim() removes any empty white space from text
//             item = item.trim();
//             return item;
//         })

//         console.log("After trim / conversion: ", result[0]);

//         // render the home view with dynamic data
//         res.json(result[0]);
//     })
// })

module.exports = router;