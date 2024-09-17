import express from 'express';
import appRoutes from './routes';

const app = express();
const PORT = 1245;

appRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

export default app;
