const express = require("express")
const router = express.Router();

router.get('/', (req, res)=> {
    
    res.render("general/home",{    
        title:` Welcome`
    });
});

router.get('/home', (req, res)=> {
    
    res.render("general/home",{    
        title:`Home`
    });
});

router.get('/contactUs', (req, res)=> {
    
    res.render("general/home",{    
        title:` Welcome`
    });
});

router.get('/register', (req, res)=> {
    
    res.render("general/home",{    
        title:`Home`
    });
});


module.exports = router;