import { v4 as uuidV4 } from 'uuid';

export class ApplicationRequest {
  readonly requestId: string;

  readonly createdAt: Date;

  constructor() {
    this.requestId = uuidV4();
    this.createdAt = new Date();
  }
}

export default ApplicationRequest;
