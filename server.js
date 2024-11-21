const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const app = express();

const PAYTM_MERCHANT_KEY = 'YOUR_PAYTM_MERCHANT_KEY';
const PAYTM_MERCHANT_ID = 'YOUR_PAYTM_MERCHANT_ID';

app.use(bodyParser.json());

app.post('/create_payment', (req, res) => {
    const { amount } = req.body;

    const order_id = 'ORDER_' + Date.now();
    const checksum = crypto.createHash('sha256').update(amount + order_id + PAYTM_MERCHANT_KEY).digest('hex');

    res.json({
        order_id,
        amount: amount, // Amount in paise
        checksum
    });
});

app.post('/callback', (req, res) => {
    // Handle Paytm payment response
    console.log(req.body);
    res.send('Payment Response Received');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
