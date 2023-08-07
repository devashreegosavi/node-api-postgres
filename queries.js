const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ngdrs_final_db_ar',
  password: 'postgres',
  port: 5433,
})


const getUsers = (request, response) => {
    pool.query('SELECT user_id,username FROM ngdrstab_mst_user', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT user_id,username FROM ngdrstab_mst_user WHERE user_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }


  module.exports = {
    getUsers,
    getUserById
  }