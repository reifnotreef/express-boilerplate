import { listen } from './app';
const { PORT } = require('./config');

listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
