const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(require("./db-container.js")());
const middlewares = jsonServer.defaults();
const routes = require("./routes.json");
server.use(middlewares);
//"COACHING_END","COACHING","WAITING_VIDEO","PLAY_VIDEO","RATING","BATTLE","BATTLE_SUMMARY","COACHING_SUMMARY","OUT_OF_TIME"
// "COACHING_RESULT_HAS_OLD_LO","COACH_END_CONTINUTES","LEARNING_OBJECT_OLD_PAGE","LIVE_ZOOM_RUNNING","LIVESTREAM_START"
// "LIVESTREAM_END","BATTLE_START","GET_CLASS","TEST_PREP_12_SUMMARY"
server.get("/lms/daily-scheduled-classes/current-stage**", (req, res) => {
  res.jsonp("COACHING");
});
server.get("/echo", (req, res) => {
  res.jsonp(req.query);
});
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST" || req.method === "PUT") {
    req.body.createdAt = Date.now();
    req.method = "GET";
    req.query = req.body;
    res.status(200);
  }
  next();
});
server.use(jsonServer.rewriter(routes));
// Use default router
server.use(router);
server.listen(3333, () => {
  console.log("JSON Server is running");
});
