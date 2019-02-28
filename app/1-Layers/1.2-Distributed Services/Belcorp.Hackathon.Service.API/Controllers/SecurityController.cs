namespace Belcorp.Hackathon.Service.API.Controllers
{
    using Belcorp.Hackathon.Service.API.ApplicationServices;
    using Belcorp.Hackathon.Service.API.Infrastructure.Transport.Security.Request;
    using Belcorp.Hackathon.Service.API.Infrastructure.Transport.Security.Response;
    using Microsoft.AspNetCore.Mvc;        

    public class SecurityController : BaseController
    {
        private readonly SecurityApplicationService _securityApplicationService;

        public SecurityController(SecurityApplicationService securityApplicationService)
        {
            _securityApplicationService = securityApplicationService;
        }

        [HttpPost]
        public GetUserByUserNameResponse GetUserByUserName(GetUserByUserNameRequest request)
        {
            return _securityApplicationService.GetUserByUserName(request);            
        }

        [HttpPost]
        public ListUsersResponse ListUsers(ListUsersRequest request)
        {
            return _securityApplicationService.ListUsers(request);
        }
    }
}