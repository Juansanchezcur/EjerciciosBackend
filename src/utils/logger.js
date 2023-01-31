//LOGS
import winston from "winston";
const { createLogger, format, transports } = winston;
const { combine, printf, timestamp, colorize } = format;

const logConfiguration = {
  format: combine(
    timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    colorize(),
    printf((info) => `${info.level} | ${[info.timestamp]} | ${info.message}`)
  ),
  transports: [
    new transports.Console({ level: "info" }),
    ,
    new transports.File({
      filename: "./logs/warn.log",
      level: "warn",
    }),
    new transports.File({ filename: "./logs/error.log", level: "error" }),
  ],
};

const logger = createLogger(logConfiguration);

module.exports = logger;
