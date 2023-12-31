const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
    },
    zipCode: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true }
);


//  generate token 
userSchema.methods.generateJWT = function () {
    return jwt.sign({ id: this._id, isAdmin:this.isAdmin }, process.env.SECRET_KEY )
}


//  if password is valid
userSchema.methods.isPasswordValid = async function (password , hashedPassword) {
    try {
        return await bcrypt.compare(password, hashedPassword)
    } catch (error) {
        console.log("something went wrong ", error)
    }
};


//  dynamic hashing password pre register 
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); 
    const salt = await bcrypt.genSalt(); 
    
    this.password = await bcrypt.hash(this.password, salt); 
});
    





const User = model('User', userSchema);
module.exports = User;