const app = require("../app");
const dotenv = require("dotenv");

dotenv.config();

const port = 8000;
const start = () => {
  try {
    //     dbConnect(process.env.DB_URL);
    //     console.log("Database is connected...");
    app.listen(port, () => {
      console.log(`Server is running on : http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
