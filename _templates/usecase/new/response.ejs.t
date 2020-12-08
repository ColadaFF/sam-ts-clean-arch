---
to: src/<%=domain%>/domain/operations/<%=h.changeCase.param(name)%>-response.ts
sh: npx prettier --write <%= cwd %>/src/<%=domain%>/domain/operations/<%=h.changeCase.param(name)%>-response.ts
---
import { ApplicationResponse } from '@Operation';

import <%=h.changeCase.pascal(name)%>Request from './<%=h.changeCase.param(name)%>-request';

type ResponseProps = {
    request: <%=h.changeCase.pascal(name)%>Request
};

class <%=h.changeCase.pascal(name)%>Response extends ApplicationResponse {

    private constructor(props: ResponseProps) {
        super(props.request);
    }


    public static from(props: ResponseProps):<%=h.changeCase.pascal(name)%>Response  {
        return new <%=h.changeCase.pascal(name)%>Response(props);
    }
}

export default <%=h.changeCase.pascal(name)%>Response;


