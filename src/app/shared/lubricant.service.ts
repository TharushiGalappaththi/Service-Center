import { Injectable } from '@angular/core';
import { Lubricant } from './lubricant.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LubricantService {
 
  formData : Lubricant ;
  constructor(private firestore:AngularFirestore) {}

  getLubricants(){
    return this.firestore.collection('lubricants').snapshotChanges();

  }
}  
