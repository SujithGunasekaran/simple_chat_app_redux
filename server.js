const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const userRoute = require('./Router/userRoute');

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use('/api/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
})
