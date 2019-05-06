const express = require('express');
const cors = require('cors')
const forwardRequest = require('./auth/forwardRequests')

const app = express();

app.use(express.urlencoded());

app.use(express.json()); 
app.use(cors())

const port = 3001;

const router = express.Router();

router.all('/', (req, res) =>{
  forwardRequest(req.body, (response) => {
    // console.log('response.data', response.data)
    res.send(response.data)
    // console.log('response sent')
  })
});

// router.get('/', (req, res) =>{
//     retrieveAccessToken(req.get('state'), req.get('code'), (response) => {
//       console.log(response.data)
//       res.send(response.data)
//       //res.send(res.json(response))
//     })
// });

app.use('/forward', router);

app.listen(port);
