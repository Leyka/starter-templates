import * as dotenv from 'dotenv';

// Loads .env file content in memory
dotenv.config();

export const PORT = process.env.PORT || 5000;
