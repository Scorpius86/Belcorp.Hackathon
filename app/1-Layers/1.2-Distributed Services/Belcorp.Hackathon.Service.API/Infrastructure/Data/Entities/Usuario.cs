using System;
using System.Collections.Generic;

namespace Belcorp.Hackathon.Service.API.Data.Entities.Infrastructure.Data.Entities
{
    public partial class Usuario
    {
        public int UsuarioId { get; set; }
        public string NombreUsuario { get; set; }
        public string Clave { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
    }
}