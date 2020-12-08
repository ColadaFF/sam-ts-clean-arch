---
to: src/<%=domain%>/domain/use-cases/<%=h.changeCase.param(name)%>-use-case.ts
sh: npx prettier --write <%= cwd %>/src/<%=domain%>/domain/use-cases/<%=h.changeCase.param(name)%>-use-case.ts
---
import { ResultAsync, errAsync } from 'neverthrow';
import { NotImplementedError } from '@Errors';
import { checkNotNil } from '@Preconditions';
import { UseCase, ApplicationError, ApplicationCredentials } from '@Operation';

import <%=h.changeCase.pascal(name)%>Request from '../operations/<%=h.changeCase.param(name)%>-request';
import <%=h.changeCase.pascal(name)%>Response from '../operations/<%=h.changeCase.param(name)%>-response';

class <%=h.changeCase.pascal(name)%>UseCase implements UseCase<<%=h.changeCase.pascal(name)%>Request, <%=h.changeCase.pascal(name)%>Response> {

    process(request: <%=h.changeCase.pascal(name)%>Request, credentials: ApplicationCredentials): ResultAsync<<%=h.changeCase.pascal(name)%>Response, ApplicationError> {
        checkNotNil(request, "<%=h.changeCase.pascal(name)%>Request can not be nil.");
        checkNotNil(credentials, "Credentials in <%=h.changeCase.pascal(name)%>UseCase can not be nil.");

        return this.hasValidCredentials(
            credentials
        ).andThen(_unused => errAsync(new NotImplementedError()));
    }


    hasValidCredentials(
        credentials: ApplicationCredentials
    ): ResultAsync<ApplicationCredentials, ApplicationError> {
        checkNotNil(credentials, "Credentials in <%=h.changeCase.pascal(name)%>UseCase can not be nil.");
        
        const ALLOWED_AUTHORITIES: string[] = [];

        return credentials.validateAuthorities(
            ALLOWED_AUTHORITIES,
            '<%=h.changeCase.pascal(name)%>UseCase'
        );
    }
}

export default <%=h.changeCase.pascal(name)%>UseCase;


