namespace Belcorp.Hackathon.Service.API.Controllers
{
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    [Route("api/v1/[controller]/[action]")]
    [ApiController]
    [EnableCors("AllowAllCORS")]
    public class BaseController : ControllerBase
    {
    }
}
