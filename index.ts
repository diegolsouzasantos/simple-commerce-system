import app from './src/config/express';

export default async (port: number) =>
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
