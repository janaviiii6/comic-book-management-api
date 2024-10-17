// const { User } = require('../models');
const db = require('../models');
const User = db.User;

async function checkManagerRole(req,res,next) {
    const user_id = req.body.user_id || req.query.user_id;
    console.log(user_id);

    if(!user_id)
        return res.status(400).json({ error: 'User id is required to perform this action.' });
    
    try{
        const user = await User.findByPk(user_id);
        
        if(user.role !== 'MANAGER')
            return res.status(403).json({ error: 'Only managers are authorized to perform this action' });
                
        next();
    } catch(err) {
        console.error("Error checking user role:",err);
        return res.status(500).json({ err: 'Server error' });
    }
}

module.exports = checkManagerRole;