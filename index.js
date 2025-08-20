import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('restaurant/dist/restaurant'));
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

