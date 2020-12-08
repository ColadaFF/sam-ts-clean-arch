import { ResultAsync } from 'neverthrow';

import { ApplicationRequest } from './application-requests';
import { ApplicationResponse } from './application-response';
import { ApplicationError } from './application-error';
import { ApplicationCredentials } from './application-credentials';

export interface UseCase<
  INPUT extends ApplicationRequest,
  OUTPUT extends ApplicationResponse
> {
  process(
    request: INPUT,
    credentials: ApplicationCredentials
  ): ResultAsync<OUTPUT, ApplicationError>;

  hasValidCredentials(
    credentials: ApplicationCredentials
  ): ResultAsync<ApplicationCredentials, ApplicationError>;
}
