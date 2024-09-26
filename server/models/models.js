const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    email: {type:DataTypes.STRING, unique:true},
    password: {type:DataTypes.STRING},
    role: {type:DataTypes.STRING,defaultValue:"USER"},
})

const Training = sequelize.define('training',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    date: {type:DataTypes.DATEONLY},
    training_name: {type:DataTypes.STRING},
})

const Exercise = sequelize.define('exercise',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    title: {type:DataTypes.STRING},
    text: {type:DataTypes.STRING},
    trainingId:{type:DataTypes.INTEGER}
})

const Nutrition = sequelize.define('nutrition',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    date: {type:DataTypes.DATEONLY},
    name_nutrition: {type:DataTypes.STRING},
    calories: {type:DataTypes.FLOAT},
})

const Weight = sequelize.define('weight',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    date: {type:DataTypes.DATEONLY},
    weight: {type:DataTypes.FLOAT},
})

const Record = sequelize.define('record',{
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    date: {type:DataTypes.DATEONLY},
    exercise_name: {type:DataTypes.STRING},
    weight: {type:DataTypes.FLOAT},
    num: {type:DataTypes.INTEGER},
})

User.hasMany(Training)
Training.belongsTo(User)

User.hasMany(Nutrition)
Nutrition.belongsTo(User)

User.hasMany(Weight)
Weight.belongsTo(User)

User.hasMany(Record)
Record.belongsTo(User)

Training.hasMany(Exercise, {as: "exercise_names"})
Exercise.belongsTo(Training)

Training.hasMany(Exercise)
Exercise.belongsTo(User)

module.exports = {
    User,
    Training,
    Nutrition,
    Weight,
    Record,
    Exercise
}