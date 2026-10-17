require("dotenv").config();
require("dns").setServers(["8.8.8.8", "8.8.4.4"]);

const connecttoDb = require("./src/config/database");
const app = require("./src/app");

async function startServer() {
  try {
    await connecttoDb();
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exitCode = 1;
  }
}

startServer();
