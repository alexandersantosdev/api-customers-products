const app = require('express')();
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

app.use(routes);
app.listen(PORT, console.log(`Running at http://localhost:${PORT}`));