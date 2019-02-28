using Belcorp.Hackathon.Service.API.Infrastructure.Data.BaseType;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Belcorp.Hackathon.Service.API.Infrastructure.Data.Query.Security.Results
{
    public class ListUsersResult: BaseResult<ListUsersItemResult>
    {
        public List<ListUsersItemResult> Items { get; set; }
    }
}
