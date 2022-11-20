// This 
import mongoose from "mongoose";

// first we have to crate a mongoose schema
// What is a mongoose schema? It is a blueprint for the data that we want to store in our database. It is a way to define the structure of our documents, default values, validators, etc.
// We can also add timestamps to our schema. This will automatically add the createdAt and updatedAt fields to our schema.
// In layman's terms, a schema is specifying what the data will look like. I.E. each post will have a title, message, creator, tags, selectedFile, likeCount, and createdAt.
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String], // This is an array of strings
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    }, // This is an object because we have to add additional properties to it (default value)
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Now that we have a schema, we have to turn it into a model. A model is a collection of documents. In this case, the model is a collection of posts.

const Postmessage = mongoose.model('Postmessage', postSchema);

// Now we need to export this model so that we can use it in other files.
export default Postmessage;

// FYI, we are exporting a mongoose.model and on that model we are going to be able to use all the methods that mongoose provides us with. I.E. find, create, update, delete, etc.

// Also, now that out model is done, we can start adding more routes. 
