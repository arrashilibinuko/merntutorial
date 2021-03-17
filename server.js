const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();
app.use(cors());

// Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: true }));

app.get('/', (req, res) => res.send('api running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
