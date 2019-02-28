using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Belcorp.Hackathon.Client.Web.Controllers
{
    public class ConfigurationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}