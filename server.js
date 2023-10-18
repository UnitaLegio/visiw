import express from 'express';

const visiwApp = express();
const port = 8000;

visiwApp.get('/api', (req, res) => {
    res.send("Hello from Visiw!");
});
visiwApp.listen(port, () => {
    console.log(`Visiw is running on port ${port}`);
});