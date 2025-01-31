const mongoose = require('mongoose')
const connectDB = (DATABASE) =>{
mongoose.connect(DATABASE).then(()=>console.log('MongoDB connected')
).catch((error)=>console.log(error))}
module.exports = connectDB