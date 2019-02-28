using Belcorp.Hackathon.Service.API.Data.Entities.Infrastructure.Data.Entities;
using Belcorp.Hackathon.Service.API.Infrastructure.Data.Context;
using Belcorp.Hackathon.Service.API.Infrastructure.Data.Query.Security.Parameters;
using Belcorp.Hackathon.Service.API.Infrastructure.Data.Query.Security.Results;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Belcorp.Hackathon.Service.API.Infrastructure.Data.Query
{    
    public class SecurityQuery
    {
        private readonly IUnitOfWork<BelcorpHackathonContext> _unitOfWork;
        public SecurityQuery(IUnitOfWork<BelcorpHackathonContext> unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
                
        public GetUserByUserNameResult GetUserByUserName(GetUserByUserNameParameter parameter)
        {
            var query = from u in _unitOfWork.DbContext.Usuarios
                        where u.NombreUsuario == parameter.UserName
                        select new GetUserByUserNameResult
                        {
                            UserId = u.UsuarioId,
                            UserName = u.NombreUsuario,
                            Password = u.Clave,
                            Name = u.Nombre,
                            LastName = u.ApellidoPaterno,
                            SurName = u.ApellidoMaterno
                        };
            var result = query.FirstOrDefault();

            return result;
        }
        public ListUsersResult ListUsers(ListUsersParameter parameter)
        {
            var query = from u in _unitOfWork.DbContext.Usuarios                        
                        select new ListUsersItemResult
                        {
                            UserId = u.UsuarioId,
                            UserName = u.NombreUsuario,
                            Password = u.Clave,
                            Name = u.Nombre,
                            LastName = u.ApellidoPaterno,
                            SurName = u.ApellidoMaterno
                        };
            var result = query.ToList();

            return new ListUsersResult
            {
                Items = result
            };
        }
    }
}
