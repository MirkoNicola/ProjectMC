import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  firestore: any;
  insert(Uid: string, dbName: string, username: string, email: string) {
    this.fStore.collection(dbName).doc(Uid).set({
      username: username,
      email:email
    })
  }
  constructor(private fStore: AngularFirestore) { }
}
