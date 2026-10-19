import dotenv from 'dotenv';
import path from 'path';
// Load before DB/auth imports, independent of the working directory.
dotenv.config({ path: path.resolve(__dirname, '../.env'), quiet: true });
