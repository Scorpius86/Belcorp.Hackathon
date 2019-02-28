namespace Belcorp.Hackathon.Service.API.Infrastructure.Transport
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class BaseStateResponse
    {
        public bool HasError { get; set; }
        public int? CodigoError { get; set; }
        public string TipoError { get; set; }
        public string MensajeError { get; set; }
        public string MensajeDetalle { get; set; }
    }
}
