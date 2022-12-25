import { url } from '../../lib/config';
import * as data from '../data/contact.organism.data';

export async function sendContactUserInfo(info: typeof data.INITIAL_VALUES_STATE) {
  const resp = await fetch(`${url}contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(info),
  });
  const data = await resp.json();
  console.log(data);
  alert(data);
}
