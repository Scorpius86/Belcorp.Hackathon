using Belcorp.Hackathon.Service.API.Controllers.Infrastructure.Security.Transport.Request;
using Belcorp.Hackathon.Service.API.Controllers.Infrastructure.Security.Transport.Response;
using Belcorp.Hackathon.Service.API.Infrastructure.Data.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Belcorp.Hackathon.Service.API.Controllers.Infrastructure.Security
{
    public class SecurityApplicationService
    {
        private readonly SecurityQuery _securityQuery;

        public SecurityApplicationService(SecurityQuery securityQuery)
        {
            _securityQuery = securityQuery;
        }
        public GetUserByUserNameResponse GetUserByUserName(GetUserByUserNameRequest request)
        {
            return new GetUserByUserNameResponse
            {
                Result = _securityQuery.GetUserByUserName(request.Parameters)
            };
        }        
        public ListUsersResponse ListUsers(ListUsersRequest request)
        {
            return new ListUsersResponse
            {
                Result = _securityQuery.ListUsers(request.Parameters)
            };
        }
    }
}
