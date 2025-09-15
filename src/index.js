import express from "express";

const app = express();
const port = process.env.PORT || 5500;

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})