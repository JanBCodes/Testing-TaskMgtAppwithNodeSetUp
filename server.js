const express = require('express');
const exphbs  = require('express-handlebars');
    require('dotenv').config({ path:'config/keys.env'})
const bodyParser = require("body-parser")

const adminController = require("./controllers/admin.js")
const generalController = require("./controllers/general.js")
const taskController = require("./controllers/task.js")
const userController = require("./controllers/user.js")

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }))
    
app.use("/admin", adminController) 
app.use("/", generalController) //check all 
app.use("/task", taskController)
app.use("/user", userController)

//---------------------
/*
app.get('/', (req, res)=> {
    
    res.render("general/home",{    
        title:` Welcome`
    });
});

app.get('/home', (req, res)=> {
    
    res.render("general/home",{    
        title:` Home`
    });
});

app.get('/contactUs', (req, res)=> {
    
    res.render("general/home",{    
        title:`ContactUs`
    });
});

app.get('/register', (req, res)=> {
    
    res.render("admin/addUser",{    
        title:`Add User`
    });
});

app.get('/user', (req, res)=> {
    
    res.render("user/userDashboard",{    
        title:`User`
    });
});

app.get('/admin', (req, res)=> {
    
    res.render("admin/adminDashboard",{    
        title:`Admin`
    });
});

app.get('/task', (req, res)=> {
    
    res.render("task/taskDashboard",{    
        title:` Task`
    });
});

app.get('/change', (req, res)=> {
    
    res.render("task/changePassword",{    
        title:`Change Password`
    });
});

*/


//Web server Set Up
app.listen(process.env.PORT,()=>{

    console.log(`Jan - Web Server UP & Running`)

});