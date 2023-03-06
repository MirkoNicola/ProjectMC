import { Component } from '@angular/core';
import { User } from '@angular/fire/auth/firebase';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetFinal';


  items!: Observable<User[]>;
  db: any;

  constructor(private firestore: AngularFirestore) {
    
  }
}
