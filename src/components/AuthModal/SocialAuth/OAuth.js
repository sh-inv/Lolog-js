const GOOGLE_CLIENT_ID = '791472266211-1ccnb673c6ba9ckr5ut65h3crpuk4gda.apps.googleusercontent.com';
const URL = 'http://localhost:5173/auth/google/callback';
export const GOOGLE_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${URL}&scope=email profile&response_type=code`;
