// We also need blueprints in the models folder
import PostMessage from "../models/postMessage.js";

// This folder controller is to make the project more scalable. Instead of having routers logic in the routers themselves, we can have them in the controllers. This is useful when we have a lot of routes and we want to make the project more scalable.

// This is the controller for the post routes
// This is also just a CBF that was or would be located in the routers folder
export const getPost = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find(); // This is a mongoose method that finds all the posts in the database
        res.status(200).json(postMessages); // This is the response that we send back to the client in the form of json
    } catch (error) {
        res.status(404).json({ message: error.message, });
    }
}

export const createPost = (req, res) => {
    try {
        const post = req.body;
        const newPost = new PostMessage(post);
        newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}