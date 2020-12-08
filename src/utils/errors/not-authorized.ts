import { ApplicationCredentials, ApplicationError } from '@Operation';
import { checkNotNil } from '@Preconditions';

export class NotAuthorizedError extends ApplicationError {
  operationName: string;

  credentials: ApplicationCredentials;

  constructor(operationName: string, credentials: ApplicationCredentials) {
    super(`${credentials} is not allowed to use ${operationName}`);
    this.operationName = checkNotNil(operationName);
    this.credentials = checkNotNil(credentials);
  }
}
