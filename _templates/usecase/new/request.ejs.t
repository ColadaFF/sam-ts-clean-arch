---
to: src/<%=domain%>/domain/operations/<%=h.changeCase.param(name)%>-request.ts
sh: npx prettier --write <%= cwd %>/src/<%=domain%>/domain/operations/<%=h.changeCase.param(name)%>-request.ts
---
import { ApplicationRequest } from '@Operation';

type RequestProps = {};

class <%=h.changeCase.pascal(name)%>Request extends ApplicationRequest {

    private constructor(props: RequestProps) {
        super();
    }


    public static from(props: RequestProps):<%=h.changeCase.pascal(name)%>Request  {
        return new <%=h.changeCase.pascal(name)%>Request(props);
    }
}

export default <%=h.changeCase.pascal(name)%>Request;


