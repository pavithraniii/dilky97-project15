import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  constructor() {  }

  eventDate: Date ;
  today: Date ;

  tempToday = Date.now() ;

  eventDateTemp_1: unknown ;
  eventDateTemp_2: number ;

  todayTemp_1: unknown ;
  todayTemp_2: number ;

  rest: number ;
  days: number ;
  hours: number ;
  mins: number ;
  secs: number ;

  eventDone = 0 ;

  @Input( 'tempTitle' ) title: string ;
  @Input( 'tempImg' ) img: string ;
  @Input( 'tempClub' ) club: string ;
  @Input( 'tempDate' ) tempDate: any ;

  ngOnInit() {

    this.eventDate = this.tempDate.toDate() ;
    this.convertDatesToNumbers();

    this.tempToday = setInterval( () => {
      this.tempToday = Date.now();
      this.calculateTime();
    });

  }

  convertDatesToNumbers() {

    this.eventDateTemp_1 = this.eventDate as unknown ;
    this.eventDateTemp_2 = this.eventDateTemp_1 as number ;

    this.todayTemp_1 = this.today as unknown ;
    this.todayTemp_2 = this.todayTemp_1 as number ;

  }

  calculateTime() {

    this.today = new Date( this.tempToday );

    this.convertDatesToNumbers();

    this.rest = ( this.eventDateTemp_2 - this.todayTemp_2 ) / 1000 ;

    if ( this.rest > 0 ) {
      this.days = Math.floor(this.rest / 86400);
      this.hours = Math.floor(this.rest / 3600) % 24;
      this.mins = Math.floor(this.rest / 60) % 60;
      this.secs = this.rest % 60 ;
      this.secs = Math.round( this.secs ) ;
    } else {
      this.eventDone = 1 ;
    }

  }

}
