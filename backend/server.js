const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Bind the authentication middleware
server.db = router.db; // Required for json-server-auth
server.use(middlewares);
server.use(auth);
server.use(router);

const PORT = 3001;

// Start the server
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
