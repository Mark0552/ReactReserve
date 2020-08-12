const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://marks-showcase-app.now.sh'
    : 'http://localhost:3000';

    export default baseUrl;