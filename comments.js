// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Use cors
app.use(cors());
// Use morgan
app.use(morgan('combined'));
// Use body parser
app.use(bodyParser.json());
// Create route
app.get('/posts/:id/comments', (req, res) => {
  res.send([
    {
      id: 1,
      content: 'Comment 1',
      postId: 1
    },
    {
      id: 2,
      content: 'Comment 2',
      postId: 1
    },
    {
      id: 3,
      content: 'Comment 3',
      postId: 2
    }
  ]);
});
// Listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});