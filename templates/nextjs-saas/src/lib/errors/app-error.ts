export type AppErrorCode =
  | "VALIDATION_ERROR"
  | "AUTHENTICATION_ERROR"
  | "AUTHORIZATION_ERROR"
  | "NOT_FOUND"
  | "CONFLICT"
  | "INTERNAL_ERROR";

export class AppError extends Error {
  public readonly code: AppErrorCode;

  constructor(message: string, code: AppErrorCode = "INTERNAL_ERROR", options?: ErrorOptions) {
    super(message, options);
    this.name = "AppError";
    this.code = code;
  }
}
