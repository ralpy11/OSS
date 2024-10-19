const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// Middleware to parse JSON requests
app.use(bodyParser.json());

mongoose.connect('mongodb://duhig:duhig123@172.28.48.51:27017/inventory?authSource=inventory', {
    authMechanism: 'SCRAM-SHA-1',
})
    .then(() => {
        console.log("Connected to MongoDB");

        const userSchema = new mongoose.Schema({}, { collection: 'accounts_user' });
        const User = mongoose.model('User', userSchema);

        // GET endpoint to fetch users
        app.get('/accounts_user', async (req, res) => {
            try {
                const users = await User.find();
                res.json(users);
            } catch (error) {
                console.error("Error fetching data:", error);
                res.status(500).send("Error fetching data");
            }
        });


        app.post('/login', async (req, res) => {
            const { username, password } = req.body;
        
            try {
                const user = await User.findOne({ username, password });
                if (user) {
                    res.json({
                        success: true,
                        user: {
                            username: user.username,
                            first_name: user.first_name,
                            last_name: user.last_name,
                            budget: user.budget,
                            email: user.email,
                            contact1: user.contact1,
                            user_type: user.user_type,
                        }
                    });
                } else {
                    res.status(401).json({ success: false, message: 'Invalid credentials' });
                }
            } catch (error) {
                console.error("Error during login:", error);
                res.status(500).json({ success: false, message: 'Internal server error' });
            }
        });
        
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB", error);
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
