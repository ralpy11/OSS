const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Add other fields as necessary
}, { collection: 'accounts_user' });
