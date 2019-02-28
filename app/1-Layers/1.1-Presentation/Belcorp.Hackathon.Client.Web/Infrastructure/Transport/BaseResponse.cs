namespace Belcorp.Hackathon.Client.Web.Infrastructure.Transport
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class BaseResponse
    {
        public BaseStateResponse State { get; set; }

        public BaseResponse()
        {
            State = new BaseStateResponse();
        }
    }
}
