import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/classes/evenement';
import { EvenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  events: Evenement[] = [];
  filteredEvents: Evenement[] = []; 
  constructor(private evementservice:EvenementService){}
  ngOnInit(): void {
    this.evementservice.getevent().subscribe(
      data=>{
        this.events=data;
        this.filteredEvents = [...this.events]; 
      }
    )
  }

  performSearch(searchValue: string): void {
    if (!searchValue.trim()) {
      this.filteredEvents = [...this.events];
    } else {
      this.filteredEvents = this.events.filter(event =>
        event.jour.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  }
  
  filterEventsByDay(day: string): void {
    this.filteredEvents = this.events.filter(event => event.jour.toLowerCase() === day.toLowerCase());
  }
}
