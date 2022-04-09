import express from 'express';
import bodyParser from 'body-parser';

import { AdminRoute, VandorRoute } from './routes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);

app.listen(8000, () => {
    console.clear();
    console.log('App is listening to the port 8000');
})

