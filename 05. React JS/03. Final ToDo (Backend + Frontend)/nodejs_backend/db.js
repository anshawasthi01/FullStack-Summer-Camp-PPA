const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    'lpu_2023', // db
    'root', // username
    'password', // password
    {
        host: "localhost", // host
        dialect: "mysql", // type
        pool: {
            max: 5,
            min: 0
        }
    }
)


const User = sequelize.define("users", {
    name: {
        type: DataTypes.STRING
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    college: {
        type: DataTypes.STRING
    }
});


sequelize.sync().then(() => {
    console.log("User synced")
})

sequelize.authenticate().then(() => {
    console.log("Connection established")
})

module.exports = {
    sequelize,
    User
}

