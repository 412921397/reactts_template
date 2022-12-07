let BASE_URL = '';
const TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  BASE_URL = '/api';
} else {
  BASE_URL = 'http://localhost:8000';
}

export { BASE_URL, TIME_OUT };