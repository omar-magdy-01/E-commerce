const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    
    user: {
        type: Schema.Types.ObjectId,  // reference to the Category model
        ref: 'User',
        required: true,
    },
    products: [ {
        product: {
            type: Schema.Types.ObjectId,
            ref: "Product",
        },
        qty: {
            type: Number,
            required: true,
        }
    } ],
    totalPrice: {
        type: Number,
        required: true,
    },
    address: {
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: true,
        }
    },
    isDelivered: {
        type: Boolean,
        default:false
    }
},
{timestamps:true}
)

const Order = model('Order', orderSchema);
module.exports = Order;