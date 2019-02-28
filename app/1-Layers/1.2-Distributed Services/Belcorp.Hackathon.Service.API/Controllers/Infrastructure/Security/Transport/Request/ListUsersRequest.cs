namespace Belcorp.Hackathon.Service.API.Controllers.Infrastructure.Security.Transport.Request
{
    using Belcorp.Hackathon.Service.API.Infrastructure.Data.Query.Security.Parameters;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public class ListUsersRequest
    {
        public ListUsersParameter Parameters { get; set; }
    }
}
