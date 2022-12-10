import { router } from '../app';
import { readData } from './data';
import { sendSMSMessage } from './sms';

export function createRoutes() {
  // GET Method routes (FILES):
  ['defaults', 'projects', 'hackerrank', 'skills'].forEach((route) => {
    router.get(`/${route}`, readData(route));
  });

  // POST Method route (SMS):
  router.post('/contact', (req, res) => {
    const { useroperation, ...userInfo } = req.body;
    try {
      sendSMSMessage(userInfo);
      res.setHeader('Content-Type', 'application/json').end(JSON.stringify('SMS sended successfully!'));
    } catch (error) {
      res.statusCode = 500;
      res.end('There was something wrong sending SMS message');
    }
  });
}
