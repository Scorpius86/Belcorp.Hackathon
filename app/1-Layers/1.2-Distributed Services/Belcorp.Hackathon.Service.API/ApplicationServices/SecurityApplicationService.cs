using Belcorp.Hackathon.Service.API.Infrastructure.Data.Query;
using Belcorp.Hackathon.Service.API.Infrastructure.Transport.Security.Request;
using Belcorp.Hackathon.Service.API.Infrastructure.Transport.Security.Response;

namespace Belcorp.Hackathon.Service.API.ApplicationServices
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
