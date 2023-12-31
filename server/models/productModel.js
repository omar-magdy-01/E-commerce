const { Schema, model } = require('mongoose');



const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: Object,
        default: {
            url: 'avatar.jng',
            publicId: null,
        }
    },
    category: {
        type: Schema.Types.ObjectId,  // reference to the Category model
        ref: 'Category',
    },
    gallery: {
        type:  Array,
        default: [ {
            url: "cloud.jpg",
            publicId: "product-default"
        }],
    }

},
    {timestamps:true}
);

const Product = model('Product', productSchema);
module.exports  = Product