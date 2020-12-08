import { checkNotNil } from '@Preconditions';
import { ApplicationRequest } from './application-requests';

export class ApplicationResponse {
  readonly request: ApplicationRequest;

  constructor(request: ApplicationRequest) {
    this.request = checkNotNil(request, 'Application request can not be nil');
  }
}

export default ApplicationResponse;
