namespace Belcorp.Hackathon.Service.API.Controllers.Infrastructure.Security
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Belcorp.Hackathon.Service.API.Controllers.Infrastructure.Security.Transport.Request;
    using Belcorp.Hackathon.Service.API.Controllers.Infrastructure.Security.Transport.Response;
    using Microsoft.AspNetCore.Http;
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