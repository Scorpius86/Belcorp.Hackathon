using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Belcorp.Hackathon.Client.Web.Infrastructure.Transport.Configuration.Response;
using Belcorp.Hackathon.Service.API.Controllers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Belcorp.Hackathon.Client.Web.Controllers
{
    public class ConfigurationController : BaseController
    {
        private readonly IOptions<GetConfigurationServicesResponse> _configurationServicesOptions;        
        public ConfigurationController(IOptions<GetConfigurationServicesResponse> configurationServicesOptions)
        {
            _configurationServicesOptions = configurationServicesOptions;            
        }

        [HttpPost]
        [AllowAnonymous]
        public GetConfigurationServicesResponse GetConfigurationServices()
        {
            return _configurationServicesOptions.Value;
        }

    }
}