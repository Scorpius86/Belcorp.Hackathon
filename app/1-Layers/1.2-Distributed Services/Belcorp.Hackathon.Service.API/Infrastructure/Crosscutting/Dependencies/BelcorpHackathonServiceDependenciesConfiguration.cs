namespace Belcorp.Hackathon.Service.API.Infrastructure.Crosscutting.Dependencies
{
    using Belcorp.Hackathon.Service.API.ApplicationServices;    
    using Belcorp.Hackathon.Service.API.Infrastructure.Data.Context;
    using Belcorp.Hackathon.Service.API.Infrastructure.Data.Query;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class BelcorpHackathonServiceDependenciesConfiguration
    {
        public IServiceCollection Configure(IServiceCollection services, IConfiguration configuration)
        {
            services
                .AddDbContext<BelcorpHackathonContext>(
                    options => options.UseSqlServer(configuration.GetConnectionString("BelcorpHackathonDatabase")))
                .AddUnitOfWork<BelcorpHackathonContext>();
                        
            services.AddTransient<SecurityApplicationService>();
            services.AddTransient<SecurityQuery>();
            return services;
        }
    }
}
