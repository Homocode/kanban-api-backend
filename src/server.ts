import express from "express";
import cors from "cors";
import { router } from "./routes/index.routes";
import { dbConnect } from "./data-base/index.data-base";
import expressWinston from "express-winston";
import { errorHandler, notFoundHandler } from "./error-handling/handle-errors";
import { logger, requestLogger } from "./error-handling/loggers";

dbConnect();

const app = express();

app.use(cors());

app.use(express.json());

app.use(
  expressWinston.logger({
    winstonInstance: requestLogger,
    statusLevels: true,
  })
);

app.use(
  expressWinston.errorLogger({
    winstonInstance: logger,
  })
);

app.use("/api", router);

app.use(errorHandler);

app.use(notFoundHandler);

const ENV_PORT = process.env.PORT as any;

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const port = ENV_PORT || 3001;
app.listen(port, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  logger.info(`Server up and running listening on port ${port}`);
});
