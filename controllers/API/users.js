const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken
};

async function login(req, res) {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).json({error: 'Invalid email or password'});
        
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch) return res.status(400).json({error: 'Invalid email or password'});
        
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
}

async function create(req, res) {
    try {
        console.log(req.body)
        const user = await User.create(req.body);
        const token = createJWT(user);
        res.json(token);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Internal server error'});
    }
}

function createJWT(user) {
    if (!process.env.SECRET) {
        throw new Error('Missing secret key for JWT');
    }
    return jwt.sign({ user }, process.env.SECRET, {expiresIn: '24h'});
}

function checkToken(req, res) {
    if (!req.user || !req.user.exp) {
        return res.status(400).json({error: 'Invalid token'});
    }
    console.log('req.user ', req.user);
    res.json(req.user.exp);
}