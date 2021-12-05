// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {
  try {
    return axios.get(process.env.WEATHER_API_URL).then((response) => {
      res.status(200);
      res.json(response.data);
      res.end();
    });
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
