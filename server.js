import express from 'express';

const app = express();
const PORT = 4044;

// app.get('/', (req, res) => {
//   res.send('This is a new server');
// });
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`));
