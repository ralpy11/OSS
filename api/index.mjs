

import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import crypto from 'crypto';


const app = express();
const port = 8000;

app.use(bodyParser.json());


mongoose.connect('mongodb://duhig:duhig123@172.28.48.51:27017/inventory?authSource=inventory', {
    authMechanism: 'SCRAM-SHA-1',
})
    .then(() => {
        console.log("Connected to MongoDB");

        const pr_identifierSchema = new mongoose.Schema({
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            submmission_date: { type: Date, required: true },
            last_updated: { type: Date, default: Date.now },
            pr_id: { type: String, required: true },
            purpose: { type: String, required: true },
            bo_status: { type: String, required: true },
            bo_comment: { type: String, required: true },
            bo_approved_date: { type: Date, required: true },
            cd_status: { type: String, required: true },
            cd_comment: { type: String, required: true },
            cd_approved_date: { type: Date, required: true },
        }, { collection: 'accounts_pr_identifier' });

        const Pr_identifier = mongoose.model('Pr_identifier', pr_identifierSchema);

        const csvSchema = new mongoose.Schema({
            Category: { type: String, required: true },
            Item_name: { type: String, required: true },
            Item_Brand: { type: String, required: true },
            Unit: { type: String, required: true },
            Price: { type: Number, required: true },
            item_id: { type: String, required: true },
        }, { collection: 'accounts_csv' });

        const Csv = mongoose.model('Csv', csvSchema);

        // Define the Checkout schema
        const checkoutSchema = new mongoose.Schema({
            year: { type: Number, required: true },
            pr_id: { type: String, required: true },
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            submission_date: { type: Date, required: true },
            bac_status: { type: String },
            bo_status: { type: String },
            bo_comment: { type: String },
            bo_approved_date: { type: Date },
            cd_status: { type: String },
            cd_approved_date: { type: Date },
            cd_comment: { type: String },
            last_updated: { type: Date, default: Date.now },

            // Add the checkoutItems reference
            checkoutItems: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'CheckoutItems'  // Reference to the CheckoutItems model
            }]
        }, { collection: 'accounts_checkout' });

        // Register the Checkout model
        const Checkout = mongoose.model('Checkout', checkoutSchema);

        // Define the CheckoutItems schema
        const checkoutItemsSchema = new mongoose.Schema({
            checkout: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Checkout',  // Reference to the Checkout model
                required: true
            },
            item: { type: String, required: true },
            item_brand_description: { type: String, required: true },
            unit: { type: String, required: true },
            unit_cost: { type: String, required: true },
            jan: { type: Number, required: true },
            feb: { type: Number, required: true },
            mar: { type: Number, required: true },
            apr: { type: Number, required: true },
            may: { type: Number, required: true },
            jun: { type: Number, required: true },
            jul: { type: Number, required: true },
            aug: { type: Number, required: true },
            sep: { type: Number, required: true },
            oct: { type: Number, required: true },
            nov: { type: Number, required: true },
            dec: { type: Number, required: true },
            estimate_budget: { type: String, required: true },
            bo_status: { type: String, default: '' },
            cd_status: { type: String, default: '' }
        }, {
            collection: 'accounts_checkoutitems',
            timestamps: true
        });

        // Register the CheckoutItems model
        const CheckoutItems = mongoose.model('CheckoutItems', checkoutItemsSchema);

        const itemSchema = new mongoose.Schema({
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
            item: { type: String, required: true },
            item_brand_description: { type: String, required: true },
            unit: { type: String, required: true },
            item_cost: { type: Number, required: true },
            submission_date: { type: Date, required: true },
        }, { collection: 'accounts_item' });

        const Item = mongoose.model('Item', itemSchema);

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




        app.use(express.json());

        app.get('/accounts_item', async (req, res) => {
            console.log('GET /accounts_item called');
            try {
                const items = await Item.find();
                res.json(items);
            } catch (error) {
                console.error('Error fetching items:', error);
                res.status(500).json({ message: error.message });
            }
        });

        app.get('/accounts_checkoutitems', async (req, res) => {
            console.log('GET /accounts_checkoutitems called');
            try {
                const checkoutitems = await CheckoutItems.find();
                res.json(checkoutitems);
            } catch (error) {
                console.error('Error fetching checkoutitems:', error);
                res.status(500).json({ message: error.message });
            }
        });

        app.get('/accounts_checkout', async (req, res) => {
            console.log('GET /accounts_checkout called');
            try {
                const checkouts = await Checkout.find();
                res.json(checkouts);
            } catch (error) {
                console.error('Error fetching checkouts:', error);
                res.status(500).json({ message: error.message });
            }
        });

        app.get('/accounts_csv', async (req, res) => {
            console.log('GET /accounts_csv called');
            try {
                const csvs = await Csv.find();


                const groupedByCategory = csvs.reduce((acc, item) => {
                    const category = item.category
                    if (!acc[category]) {
                        acc[category] = [];
                    }
                    acc[category].push(item);
                    return acc;
                }, {});

                res.json(groupedByCategory);
            } catch (error) {
                console.error('Error fetching csvs:', error);
                res.status(500).json({ message: error.message });
            }
        });

        app.get('/accounts_pr_identifier', async (req, res) => {
            console.log('GET /accounts_pr_identifier called');
            try {
                const pr_identifiers = await Pr_identifier.find();
                res.json(pr_identifiers);
            } catch (error) {
                console.error('Error fetching pr_identifiers:', error);
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
            try {
                const { username, password } = req.body;
                const user = await User.findOne({ username });

                if (!user) {
                    return res.status(401).json({ success: false, message: 'Invalid username or password' });
                }

                // The password format in the database is `pbkdf2_sha256$iterations$salt$hash`
                const [algorithm, iterations, salt, storedHash] = user.password.split('$');

                if (algorithm !== 'pbkdf2_sha256') {
                    return res.status(500).json({ success: false, message: 'Unsupported hash algorithm' });
                }

                // Use crypto to hash the input password with the stored salt and iterations
                const hashBuffer = crypto.pbkdf2Sync(password, salt, parseInt(iterations), 32, 'sha256');
                const hash = hashBuffer.toString('base64'); // Convert the buffer to base64 to compare

                // Compare the generated hash with the stored hash
                if (hash !== storedHash) {
                    return res.status(401).json({ success: false, message: 'Invalid username or password' });
                }

                // If password matches, proceed with successful login response
                res.json({ success: true, message: 'Login successful', user });
            } catch (error) {
                console.error('Server Error:', error);
                res.status(500).json({ success: false, message: 'Server error. Please try again later.' });
            }
        });
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB", error);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
