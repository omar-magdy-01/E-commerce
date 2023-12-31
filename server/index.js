require('dotenv').config();
const express = require('express');
const connectToDb = require('./db')
const cors = require('cors');
const globalError = require('./middleware/globalError');
const ApiError = require('./Utility/AppError')

// Init App
const app = express();




// Middleware
app.use(express.json());
app.use(cors())




// mongoose connection
connectToDb()


// Routes

app.use('/api/category', require('./routes/categoryRoute'))
app.use('/api/product', require('./routes/productRoute'));
app.use('/api/user', require('./routes/userRoute'));
app.use('/api/order', require('./routes/orderRoute'));
app.use('/api/pay', require('./routes/payRoute'));

app.use('*', async (req, res, next) => {
    next(new ApiError(404, 'Sorry, can not pass throw this route -_-'));
})

// App error
app.use(globalError);











app.listen(process.env.PORT || 3001, () => console.log(`Server is running on port ${process.env.PORT || 300}...`));