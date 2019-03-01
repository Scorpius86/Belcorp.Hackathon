import { Injectable } from '@angular/core';
import { StorageService } from '../common/storage.service';
import { UserModel } from '../../models/security/user.model';

@Injectable()
export class LoginStorageService {

  readonly userKey = 'user';

  constructor(private storageService: StorageService) {
  }

  isUserLoggedIn(): boolean {
    return !!this.getCurrentUser();
  }

  isSuperAdmin(): boolean {
    return !!(this.getCurrentUser() && this.getCurrentUser().isSuperAdmin);
  }

  setLoggedInUser(userModel: UserModel) {
    return this.storageService.store(this.userKey, userModel);
  }

  getLoggedInUser(): UserModel {
    return this.getCurrentUser();
  }

  logOutUser() {
    this.storageService.remove(this.userKey);
  }

  private getCurrentUser() {
    return this.storageService.retrieve(this.userKey);
  }
}
