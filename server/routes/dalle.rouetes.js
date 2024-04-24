import express from "express";
import * as dotenv from 'dotenv'
import { OpenAI} from 'openai'
import axios from 'axios'

const router = express.Router()


dotenv.config()

const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '1922e5fa1bmsh3d414cd5187d701p1b2a1ajsn3ec2eb9685f5',
    'X-RapidAPI-Host': 'ai-text-to-image-generator-api.p.rapidapi.com'
  },
  data: {
    inputs: 'Find serenity in the tranquil elegance of a solitary sailboat drifting on a glassy lake at sunset'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export default router