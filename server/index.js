import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

// import routes
import postRoutes from './routes/posts.js';

// first intialize this app
const app = express();

// Once routes are imported, we can use them in our app (NOTE: This is a middleware)
app.use('/posts', postRoutes); // This means that whenever someone visits localhost:5000/posts, it will use the postRoutes

// then we need to use the body parser
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// then we need to connect to the database
const CONNECTION_URL = 'mongodb+srv://SynaxReader:Crix13Mix01@cluster0.fwrdocv.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// then we need to connect to the database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }) //This return a promise
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))) //First we call the app.listen and then we console.log. Console.log will only run when the app.listen first argument is successful. 
    .catch((error) => console.log(error.message, 'Something went wrong, Error connecting to the database'));

mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})