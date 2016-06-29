
// Local development configuration
// ===============================
module.exports = {

  mongo: {
    uri:    'mongodb://' + process.env.DB_PORT_27017_TCP_ADDR     // docker-compose link
  },

  seedDB: true
}