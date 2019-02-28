export class AppConstants {
  static Routes = class {
    static readonly LOGIN = '/login';
    static readonly HOME = '/Hackathon';
  };

  static IdentityValidation = class {
    static readonly INVALID_USERNAME_OR_PASSWORD = 'invalid_username_or_password';
    static readonly INVALID_CLIENT = 'invalid_client';
  };

  static PageSize = class {
    static readonly pageSizeOptions: number[] = [10, 15, 30, 50, 100];
    static readonly pageSizeDefault: number = 10;
  };

  static Messages = class {
    static readonly NO_POSIBLE_VERIFICAR_CREDENCIALES_CONTACTE_ADMINISTRADOR_SISTEMAS = 'No ha sido posible verificar las credenciales, por favor contacte al administrador de sistemas.';
    static readonly USUARIO_PASSWORD_INCORRECTOS = 'Usuario y/o password incorrectos.';
    static readonly CONFIGURACION_INCORRECTA_IDENTITY_SERVER = 'La configuración con el servidor de identidad es incorrecta.';
    static readonly DEBE_SELECCIONAR_AUNQUE_SEA_UNA_FILA = 'Debe seleccionar aunque sea una fila';
    static readonly DEBE_SELECCIONAR_AUNQUE_SOLO_UNA_FILA = 'Debe seleccionar solo una fila';
    static readonly COMPLETE_DATOS_REQUERIDOS = 'Debe completar los datos requeridos.';
    static readonly DATOS_GUARDADOS_SATISFACTORIAMENTE = 'Los datos han sido guardados satisfactoriamente!.';
    static readonly DESEA_ELIMINAR_REGISTROS_SELECCIONADOS = '¿Está seguro que desea eliminar los registros seleccionados?';
    static readonly DESEA_ELIMINAR_REGISTROS_SELECCIONADO = '¿Está seguro que desea eliminar el registros seleccionado?';
    static readonly REGISTROS_ELIMINADOS_SATISFACTORIAMENTE = 'Los registros fueron eliminados satisfactoriamente!.';
    static readonly REGISTRO_ELIMINADO_EXITOSAMENTE = 'Se ha eliminado el registro satisfactoriamente!.';
    static readonly DEBE_SELECCIONAR_UN_CRITERIO = 'Debe seleccionar un criterio';
  };
}
