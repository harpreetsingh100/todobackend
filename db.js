const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString:
    "postgresql://todo_hqr8_user:LkjPjQZyDCRqsQsfiFSfhVWiyvnnOTbr@dpg-ctgh04ilqhvc739kdaq0-a.oregon-postgres.render.com/todo_hqr8",
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = pool;
