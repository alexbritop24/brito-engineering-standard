type LogContext = Record<string, unknown>;

export type Logger = {
  info: (message: string, context?: LogContext) => void;
  warn: (message: string, context?: LogContext) => void;
  error: (message: string, context?: LogContext) => void;
};

function writeLog(level: "info" | "warn" | "error", message: string, context?: LogContext) {
  const payload = {
    level,
    message,
    context,
    timestamp: new Date().toISOString(),
  };

  console[level](JSON.stringify(payload));
}

export const logger: Logger = {
  info: (message, context) => writeLog("info", message, context),
  warn: (message, context) => writeLog("warn", message, context),
  error: (message, context) => writeLog("error", message, context),
};
