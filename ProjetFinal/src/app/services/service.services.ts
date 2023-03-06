import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {
    userLoggedIn: boolean;
    private currentUser = new BehaviorSubject<string>('');
    UiD = this.currentUser.asObservable();
    constructor(private firebaseAuth: AngularFireAuth) {
        this.userLoggedIn = false;

        this.firebaseAuth.onAuthStateChanged(user => {
            if (user) {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        })
    }
}