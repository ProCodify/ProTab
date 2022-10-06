import axios from 'axios';
import apiConfig from '../config/api';
const PRODUCTION_API_URL = 'https://protab-backend.lazytanzil.repl.co';
const DEVELOPMENT_API_URL = 'http://localhost:8000';

const baseUrl =
  apiConfig.apiMode === 'development'
    ? DEVELOPMENT_API_URL
    : PRODUCTION_API_URL;

const TIMEOUT_SECOND = 10;
export default axios.create({
  baseURL: baseUrl,
  timeout: TIMEOUT_SECOND * 1000,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
});
