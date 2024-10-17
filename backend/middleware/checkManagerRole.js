// const { User } = require('../models');
const db = require('../models');
const User = db.User;

async function checkManagerRole(req,res,next) {
    const user_id = req.body.user_id;
    console.log(user_id);
    
    try{
        const user = await User.findOne({
            where: {
              id: user_id,
            },
        });
        
        if(user.role !== 'MANAGER')
            return res.status(403).json({ error: 'This user is not authenticated to add comic book' });
                
        next();
    } catch(err) {
        console.error("Error checking user role:",err);
        return res.status(500).json({ err: 'Server error' });
    }
}

module.exports = checkManagerRole;