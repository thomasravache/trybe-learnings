import type { NextFunction, Response, Request, ErrorRequestHandler } from "express";

const domainError: ErrorRequestHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
  if (err.domain) {
    return res.status(err.code).json({ message: err.message });
  }

  return next(err);
};

export default domainError;
