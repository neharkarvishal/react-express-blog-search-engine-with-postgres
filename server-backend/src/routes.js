const express = require('express');
const router = express.Router();
const pool = require('./db');

/**
 * Routes for POSTS
 */

router.get('api/get/allposts', ( req, res, next ) => {
  pool.query(
    `SELECT * FROM posts ORDER BY date_created DESC`,
    ( q_err, q_res ) => {
      res.json(q_res.rows);
    });
});

module.export = router;
