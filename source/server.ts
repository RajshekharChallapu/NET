
import express from 'express';
import { ReqPayloadV1, ReqPayloadV2 } from '../source/userdata'

let app = express();
app.use(express.json());

// const ReqPayloadV1 = {
//   data:
//   {
//     firstName: "JOHN0000",
//     lastName: "MICHAEL000",
//     clientId: "9994567"
//   },
// };

// const ReqPayloadV2 = {
//   data:
//   {
//     firstName: "JOHN",
//     lastName: "MICHAEL",
//     clientId: "999-4567"
//   },
// };

// API's
app.post('/api/v1/parse', (req, res) => {
  if (!req.body.data || req.body.data.length < 0) {
    res.status(400).send(Error);
    return;
  }
  res.status(200).send(ReqPayloadV1);
})

app.post('/api/v2/parse', (req, res) => {
  if (!req.body.data || req.body.data.length < 0) {
    res.status(400).send(Error);
    return;
  }
  res.status(200).send(ReqPayloadV2);
})



//PORT 
const port = process.env.PORT || 1111;
app.listen(port, () => console.log(`listening on port ${port}`));