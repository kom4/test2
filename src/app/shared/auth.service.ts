export class AuthService {

  private loggedIn = false;

  loginToggle() {
    this.loggedIn = !this.loggedIn;
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

}
