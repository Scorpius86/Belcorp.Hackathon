namespace Belcorp.Hackathon.Service.API.Infrastructure.Transport.Security.Response
{
    using Belcorp.Hackathon.Service.API.Infrastructure.Data.Query.Security.Results;
    using Belcorp.Hackathon.Service.API.Infrastructure.Transport;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    public class ListUsersResponse: BaseResponse
    {
        public ListUsersResult Result { get; set; }
    }
}
