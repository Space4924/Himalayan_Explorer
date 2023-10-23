require('./config');
// require("dotenv").config();
const News = require('./Model');
const multer = require('multer')
const SignIn = require('./Model2');
const Otp = require('./Model3');

// const upload =require('./Multer');
const express = require('express');
const cors = require('cors');
const app = express();
const nodemailer = require('nodemailer');
const router = require('./routes/router');
// console.log(process.env.EMAIL);
app.use(router);
app.use(express.json());
app.use(cors(
    {
        origin: "https://himalayan-backend.onrender.com",
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
    }
));
const PORT = process.env.PORT || 5000;


app.post('/mail', (req, resp) => {
    const emailer = req.body.emailer;
    const subjecter = req.body.subjecter;
    const messager = req.body.messager;

    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'thakurbhoopendrasingh4422@gmail.com',
                pass: 'iaxr lmhi ipmv ebae'
            }

        });

        var mailOptions = {
            from: emailer,
            to: 'thakurbhoopendrasingh4422@gmail.com',
            subject: subjecter,
            text: messager
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                resp.status(201).json({ status: 201, info })
            }
        });

    } catch (err) { resp.status(401).json({ status: 401, err }) }
})

app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) { cb(null, 'public/uploads/') },
        filename: function (req, file, cd) {
            let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
            cd(null, file.fieldname + "-" + Date.now() + ext);
        }
    })
}).single('image');




///////// /////////////////////signup folder

app.use('/public/upload', express.static(__dirname + '/public/upload'));
const uploadItem = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) { cb(null, 'public/upload/') },
        filename: function (req, file, cd) {
            let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
            cd(null, file.fieldname + "-" + Date.now() + ext);
        }
    })
}).single('pic');

app.post('/login', async (req, resp) => {
    if (req.body.email && req.body.password) {
        // console.log(req.body);
        const data = await SignIn.findOne(req.body);
        // console.log(data, "data console by backend");
        if (data === null) {
            // console.log("No Email Found In Backend");
            return resp.status(400).send("NO Email Found in Backend")
        }
        resp.send(data);
    } else return resp.status(400).send("Fill the Columns");
})

app.post('/signup', uploadItem, async (req, resp) => {
    const clone = await SignIn.findOne({ "email": req.body.email });
    console.log(clone);
    console.log(clone, "this is clone");
    if (clone !== null) {
        console.log("email already in use from backend");
        return resp.status(400).send("Email already in use from the backend")
    }
    const file = req.file;
    if (!file) return resp.status(400).send('No image in the request');
    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/upload/`;
    let data = new SignIn({
        pic: `${basePath}${fileName}`,
        name: req.body.name,
        password: req.body.password,
        number: req.body.number,
        email: req.body.email
    });
    data = await data.save();
    console.log(data, "data");
    resp.send(data);


    // resp.send("Email Already in Use");
})




app.post('/otp', async (req, resp) => {
    // console.log(process.env.EMAIL,"email");
    const OTP = Math.floor(100000 + Math.random() * 900000);
    let clone = new Otp({
        email: req.body.email,
        otp: OTP
    })
    clone = await clone.save();
    console.log("second otp called with clone", clone);
    ///////////////////

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'thakurbhoopendrasingh4422@gmail.com',
            pass: 'iaxr lmhi ipmv ebae'
        }

    });
    try {
        var mailOptions = {
            from: 'thakurbhoopendrasingh4422@gmail.com',
            to: req.body.email,
            subject: "Sending Email For OTP validation",
            text: `OTP:-${OTP}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                resp.status(201).json({ status: 201, info })
            }
        });

    } catch (err) { resp.status(401).json({ status: 401, err }) }
})

app.post('/otpCheck', async (req, resp) => {
    console.log(req.body.otp);
    const clone = await Otp.findOne({ otp: req.body.otp });
    console.log(clone);
    resp.send(clone);

})


////////////////////////////////////////////////////////////////////////////blogs personal public and else blogs

app.post('/personalblogs', async (req, resp) => {
    console.log(req.body);
    const clone = await News.find(req.body);
    console.log(clone, "personal news get by backend");
    resp.send(clone);
})


app.post('/writeblog', upload, async (req, resp) => {
    // 
    const file = req.file;
    if (!file) return resp.status(400).send('No image in the request');
    const fileName = file.filename;
    const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    let data = new News({
        image: `${basePath}${fileName}`,
        title: req.body.title,
        des: req.body.des,
        newsArea: req.body.newsArea,
        userEmail: req.body.userEmail
    });
    data = await data.save();
    resp.send(data);
})


app.get('/showblogs', async (req, resp) => {
    let data = await News.find({});
    // console.log(data,"showblogs");
    // console.log(data);
    resp.send(data);
})
app.delete('/deleteblog/:id', async (req, resp) => {
    console.log(req.params);
    const clone = await News.deleteOne({ _id: req.params.id });
    console.log(clone.acknowledged, "clone from backend");
    console.log(clone);
    resp.send(clone);
})




app.put("/update/:email", async (req, resp) => {
    const data = await SignIn.updateOne({ email: req.params.email }, { $set: { pic: req.body.pic } });
    console.log(data);
    resp.send(data);
})




app.listen(PORT, (err) => {
    if (err) console.log(err);
    else console.log(`connected to ${PORT} port`);
})

