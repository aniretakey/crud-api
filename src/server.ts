import 'dotenv/config';

const port = process.env.PORT;

export const startServer = () => {
  console.log(`Server started at ${port}`);
};