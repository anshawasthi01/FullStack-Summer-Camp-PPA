/*

ORM(Object Relation Mapping): define some object makeke to mapping of them with table

we would not directly interact with db but we we'll fill in the object and then say get added to db
Similarly if you want to delete something we'll say delete all those objects that have partiocular field right

ORM Tool : Sequelize

It saves from SQL Injection
*/ 

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    'lpu_2023', // db
    'root',  // username
    'password',  // password
    {
        host: "localhost",   // host
        dialect: "mysql",  // type
        pool: {
            max: 5,
            min:0
        }
    }
)

sequelize.define("users", {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});

// // FOR ANOTHER TABLE 
// user_id: {
//     type: Sequelize.DataTypes.INTEGER,
//     references: {model: "users", key: "id"}
// }

// UserActivation.hasMany(Todo);


// sync: table nahi hogi to bna dega agr hai to usi m value fill ho jaayegi
sequelize.sync().then(() => {
    console.log("User sync")
})

sequelize.authenticate().then(() => {
    console.log("Connection has been established")
})

module.exports = {
    sequelize,
    User,
    ToDo
}