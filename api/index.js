const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

mongoose.connect('mongodb://duhig:duhig123@172.28.48.51:27017/inventory?authSource=inventory', {
    authMechanism: 'SCRAM-SHA-1',
})
    .then(() => {
        console.log("Connected to MongoDB");

        const userSchema = new mongoose.Schema({
            username: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            first_name: { type: String },
            last_name: { type: String },
            budget: { type: Number },
            email: { type: String },
            contact1: { type: String },
            user_type: { type: String }
        }, { collection: 'accounts_user' });

        const User = mongoose.model('User', userSchema);


        const checkoutSchema = new mongoose.Schema({
            year: { type: Number, required: true },
            pr_id: { type: String, required: true },
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            submission_date: { type: Date, required: true },
            bac_status: { type: String },
            bo_status: { type: String },
            cd_status: { type: String },
            cd_approved_date: { type: Date }
        }, { collection: 'accounts_checkout' });

        const Checkout = mongoose.model('Checkout', checkoutSchema);


        app.use(express.json());



        app.get('/accounts_checkout', async (req, res) => {
            console.log('GET /accounts_checkout called');
            try {
                const checkouts = await Checkout.find().populate('userId');
                res.json(checkouts);
            } catch (error) {
                console.error('Error fetching checkouts:', error);
                res.status(500).json({ message: error.message });
            }
        });



        app.get('/accounts_user', async (req, res) => {
            try {
                const users = await User.find({});
                res.json(users);
            } catch (error) {
                res.status(500).json({ message: error.message });
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

        app.get('/dashboard/:username', async (req, res) => {
            const { username } = req.params;

            try {
                // Find the user by username
                const user = await User.findOne({ username });
                if (!user) {
                    return res.status(404).json({ success: false, message: 'User not found' });
                }

                console.log("User found:", user); // Log user details

                // Find all checkouts with approved cd_status and bo_status for the user
                const approvedCheckouts = await Checkout.find({
                    userId: user._id,
                    cd_status: 'approved',
                    bo_status: 'approved'
                }).sort({ year: -1 }); // Sort by year descending

                console.log("Approved Checkouts found:", approvedCheckouts); // Log the approved checkouts

                // Check if any approved checkouts were found
                if (approvedCheckouts.length === 0) {
                    return res.status(404).json({ success: false, message: 'No approved checkouts found' });
                }

                // Log the response data
                const responseData = {
                    success: true,
                    user: {
                        username: user.username,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        budget: user.budget,
                        email: user.email,
                        contact1: user.contact1,
                        user_type: user.user_type,
                    },
                    approvedCheckouts: approvedCheckouts // Include all approved checkouts
                };
                console.log("Response Data:", responseData); // Log response data

                res.json(responseData);

            } catch (error) {
                console.error("Error fetching user data:", error);
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
