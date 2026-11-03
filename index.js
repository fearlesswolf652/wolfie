const express = require('express');
const Unblocker = require('unblocker');
const path = require('path');
const app = express();

const unblocker = new Unblocker({ prefix: '/proxy/' });

app.use(unblocker);
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Wolfie is running on port ${port}`);
});
