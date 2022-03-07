import StatusCodes from '../enums/statusCodes';

type domainError = {
  domain: boolean;
  message: string;
  code: StatusCodes;
}

export default domainError;
