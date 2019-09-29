import { AngularFirestore } from '@angular/fire/firestore';
import { EventDetails } from './../models/event-details.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDetailsService {

  cardData: EventDetails ;

  constructor( private firestore: AngularFirestore ) { }

  getEvents() {
    return this.firestore.collection('events').snapshotChanges();
  }

}