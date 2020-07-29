import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

import { AuthData } from '../models/auth-data.model';
import { UIService } from '../services/ui.service';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isUserLoggedIn = false;

    constructor(
        private router: Router,
        private angularFireAuth: AngularFireAuth,
        private uiService: UIService
    ) { }

    initAuthListener(): void {
        this.angularFireAuth.authState.subscribe((user) => {
            if (user) {
                this.isUserLoggedIn = true;
                this.authChange.next(true);
            } else {
                this.authChange.next(false);
                this.router.navigate(['/login']);
                this.isUserLoggedIn = false;
            }
        });
    }

    login(authData: AuthData): void {
        this.uiService.loadingStateChanged.next(true);
        this.angularFireAuth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then((result) => {
                this.uiService.loadingStateChanged.next(false);
            })
            .catch((error) => {
                this.uiService.loadingStateChanged.next(false);
                this.uiService.showSnackBar(error.message, null, {
                    duration: 3000,
                });
            });
    }

    logout(): void {
        this.angularFireAuth.signOut();
    }

    isAuthenticated(): boolean {
        return this.isUserLoggedIn;
    }
}
