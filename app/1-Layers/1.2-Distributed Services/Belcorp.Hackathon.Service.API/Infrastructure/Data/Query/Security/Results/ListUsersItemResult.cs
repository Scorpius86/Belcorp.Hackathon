using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Belcorp.Hackathon.Service.API.Infrastructure.Data.Query.Security.Results
{
    public class ListUsersItemResult
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string SurName { get; set; }
        public string Password { get; set; }
    }
}
