import app from "./app.js";

app.listen(app.get("port"), () => {
  console.log(`App listening on http://localhost:${app.get("port")}`);
});
