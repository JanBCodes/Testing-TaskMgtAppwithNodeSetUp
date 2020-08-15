const express = require("express")
const router = express.Router();

router.get('/', (req, res)=> {
    
    res.render("task/taskDashboard",{    
        title:`Task Dashboard`
    });
});

module.exports = router;