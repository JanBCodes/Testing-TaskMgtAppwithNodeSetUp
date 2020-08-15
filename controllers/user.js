const express = require("express")
const router = express.Router();

router.get('/', (req, res)=> {
    
    res.render("user/userDashboard",{    
        title:`Task Dashboard`
    });
});

router.get('/addUser', (req, res)=> {
    
    res.render("admin/addUser",{    
        title:`Add User`
    });
});

router.get('/userProfile', (req, res)=> {
    
    res.render("admin/userProfile",{    
        title:`Add User`
    });
});
module.exports = router;