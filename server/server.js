
const express = require('express');
const  mongoose  = require('mongoose');
const cookieParser = require('cookie-parser')
const cors= require('cors');
const authRouter = require('./routes/auth/auth-routes')
const adminProductsRouter = require('./routes/admin/products-routes')
const shopProductsRouter = require('./routes/shop/products-routes')
const shopCartRouter = require('./routes/shop/cart-routes')
const connectDB = require('./db/conn')
const dotenv = require('dotenv'); 
dotenv.config({path: './.env'})

// mongoose.connect(DATABASE).then(()=>console.log('MongoDB connected')
// ).catch((error)=>console.log(error))
 const app = express();
 const PORT = process.env.PORT || 5000;
 app.use(
    cors({
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST", 'DELETE','PUT'],
        allowedHeaders: [
            "Content-Type", 
            "Authorization",
            "Cache-Control",
            "Pragma",
            "Expires"
        ],
        credentials: true,
    })
 )
 app.use(
    express.urlencoded({ extended: true })
);
 app.use(cookieParser());
 app.use(express.json());
 app.use("/api/auth", authRouter)
 app.use('/api/admin/products', adminProductsRouter)
 app.use("/api/shop/products", shopProductsRouter)
 app.use("/api/shop/cart", shopCartRouter)
//  /api/auth/register => registerUser
//  /api/auth/login => loginUser
const start = async ()=>{
    try{
        connectDB(process.env.DATABASE);
app.listen(PORT,()=> console.log(`server is running on port ${PORT}`)
    );
}
    
    catch(error){
        console.log(error);
    }
}
start();
