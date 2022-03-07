import StatusCodes from './types/enums/statusCodes';
import domainError from './types/types/domainError';

const generatedError = (message: string, statusCode: StatusCodes): domainError => {
  const error: any = new Error();
  error.domain = true;
  error.message = message;
  error.code = statusCode;

  return error;
};

export {
  generatedError,
};
