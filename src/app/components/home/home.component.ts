import { EventDetails } from './../../models/event-details.model';
import { EventDetailsService } from '../../services/event-details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  eventList: EventDetails[];

  constructor( private eventDetails: EventDetailsService ) { }

  ngOnInit() {

    this.eventDetails.getEvents().subscribe(actionArray => {
      this.eventList = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
        } as EventDetails ;
      });
    });

  }

}