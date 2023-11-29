const mongoose = require('mongoose')

const EmployeesSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    
})


const EmployeesModel = mongoose.model("employee", EmployeesSchema)
module.exports = EmployeesModel