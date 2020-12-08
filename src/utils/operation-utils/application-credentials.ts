/* eslint max-classes-per-file: ["error", 4] */

import { okAsync, errAsync, ResultAsync } from 'neverthrow';
import { checkNotNil } from '@Preconditions';
import { NotAuthorizedError } from '@Errors';
import { ApplicationError } from './application-error';

export type Permission = string;

enum CredentialsType {
  ANONYMOUS,
  AUTHENTICATED,
  API_KEY,
}

export abstract class ApplicationCredentials {
  abstract credentialsId: string;

  abstract credentialsType: CredentialsType;

  abstract validateAuthorities(
    _requiredAuthorities: string[],
    _operationName: string
  ): ResultAsync<ApplicationCredentials, ApplicationError>;

  abstract toJSON(): string;
}

type AuthenticatedUserProps = {
  username: string;
};
export class AuthenticatedUser implements ApplicationCredentials {
  readonly credentialsType = CredentialsType.AUTHENTICATED;

  readonly credentialsId: string;

  readonly username: string;

  constructor(props: AuthenticatedUserProps) {
    this.username = checkNotNil(props.username);
    this.credentialsId = props.username;
  }

  validateAuthorities(
    _requiredAuthorities: string[],
    _operationName: string
  ): ResultAsync<ApplicationCredentials, NotAuthorizedError> {
    return okAsync(this);
  }

  toJSON(): string {
    return `User{username=${this.username}}`;
  }
}

export class AnonymousUser implements ApplicationCredentials {
  readonly credentialsId: string = 'ANONYMOUS_USER';

  readonly credentialsType = CredentialsType.AUTHENTICATED;

  validateAuthorities(
    requiredAuthorities: string[],
    operationName: string
  ): ResultAsync<ApplicationCredentials, NotAuthorizedError> {
    if (requiredAuthorities.length > 0) {
      return errAsync(new NotAuthorizedError(operationName, this));
    }
    return okAsync(this);
  }

  toJSON(): string {
    return 'AnonymousUser';
  }
}

export class ApiKeyUser implements ApplicationCredentials {
  readonly credentialsId: string = 'API_KEY';

  readonly credentialsType = CredentialsType.API_KEY;

  validateAuthorities(
    _requiredAuthorities: string[],
    operationName: string
  ): ResultAsync<ApplicationCredentials, NotAuthorizedError> {
    if (process.env.NODE_ENV === 'production') {
      return errAsync(new NotAuthorizedError(operationName, this));
    }
    return okAsync(this);
  }

  toJSON(): string {
    return `API_KEY=${this.credentialsId}`;
  }
}
