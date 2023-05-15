const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const userSchema = new Schema({ //config object
    name: {
        type: String,  
        required: true,     
    },
    email: {
        type: String, 
        unique: true,
        lowercase: true,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true,
    }
}, {
    timestamps: true, //settings object
    toJSON: {
        transform: function(doc, ret) {
        delete ret.password;
        return ret;
        }
    }
});

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();//don't hash password again
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS); //hash and salt password
    return next(); //return modified version of document with hashed and salted password

})

module.exports = mongoose.model('User', userSchema);
