import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URI = process.env.MONGODB_URI;
const REDIS_URL = process.env.REDIS_URL;

export { MONGODB_URI, PORT, REDIS_URL };
//manish chaurasia
//this file is used to load environment variables from a .env file and export them
//   for use in other parts of the application. The dotenv package is used to read the .env file and set the environment variables accordingly. The PORT, MONGODB_URI, and REDIS_URL variables are then exported for use in other modules.