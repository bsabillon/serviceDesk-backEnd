const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://tqmrreyfikeiku:9a7d729f6957dfcfa1870bc40b949fcada827da11c2490b90bd2ab129bc05d8b@ec2-54-235-100-99.compute-1.amazonaws.com:5432/d3mmpvvdh253ee?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',{
    host:'ec2-54-235-100-99.compute-1.amazonaws.com',
    dialect: 'postgres',
    pool: {
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});


// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`)
//   })

  module.exports  = sequelize;