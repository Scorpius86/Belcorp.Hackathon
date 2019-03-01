export class UserModel {
  public username: string;
  public Token: string;
  public isSuperAdmin: boolean;

  constructor() {
    this.isSuperAdmin = false;
  }
}
