import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Evenement } from 'src/app/classes/evenement';
import { EvenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-eventsad',
  templateUrl: './eventsad.component.html',
  styleUrls: ['./eventsad.component.css']
})
export class EventsadComponent {
  events: Evenement[] = [];
  eventForm!: FormGroup;
  visible: boolean = false;

  constructor(private evenementService: EvenementService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.evenementService.getevent().subscribe(
      data => {
        this.events = data;
      }
    );

    this.eventForm = this.fb.group({ 
      id: [0],
      jour: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z]+$')]],
      date: ['', Validators.required],
      destination: ['', Validators.required],
      image: ['', Validators.required],
      cn: ['', [Validators.required, Validators.max(50)]],
      test: [false],
      intervention: this.fb.array([])
    });
  }
  public get jour(){
    return this.eventForm.get('jour');
  }
  public get cn(){
    return this.eventForm.get('cn');
  }

  get lesinterventions(): FormArray {
    return this.eventForm.get('intervention') as FormArray;
  }

  onajouter(): void {
    this.lesinterventions.push(this.fb.group({ 
      nom: [''],
      role: ['']
    }));
  }

  addEvent(): void {
    if (this.eventForm.valid) {
      this.visible = true;
      const eventData = this.eventForm.value;

      this.evenementService.addEvent(eventData).subscribe(
        (data: any) => { 
          this.events.push(data); 
        },
        (error: any) => {
          console.error('Error adding event: ', error);
        }
      );
      this.eventForm.reset();
    }
  }

  toggleFormVisibility(): void {
    this.visible = !this.visible;
    if (!this.visible) {
      this.eventForm.reset(); 
    }
  }

  deleteEvent(id: number): void {
    this.evenementService.deleteEvent(id).subscribe(
      () => {
        this.events = this.events.filter(event => event.id !== id);
      },
      (error: any) => {
        console.error('Error deleting event: ', error);
      }
    );
  }

  modifierEvent(event: Evenement): void {
    this.eventForm.patchValue({
      id: event.id,
      jour: event.jour,
      date: event.date,
      destination: event.destination,
      image: event.image,
      cn: event.cn,
      test: event.test,
      intervention: event.intervention
    });

    this.visible = true;
  }
  updateEvent(): void {
    const eventDataToUpdate = { ...this.eventForm.value };
    const eventId = this.eventForm.get('id')?.value;
      this.evenementService.updateEvent(eventId, eventDataToUpdate).subscribe(
        (updatedData: any) => {
          const index = this.events.findIndex((event: any) => event.id === eventId);
          
          if (index !== -1) {
            this.events[index] = updatedData;
          } else {
            console.error('Event not found in the events array.');
          }
        },
        (error: any) => {
          console.error('Error updating event: ', error);
        }
      );
      this.eventForm.reset();
  }

  performSearch(searchValue: string): void {
    const searchTrimmed = searchValue.trim();
  
    if (searchTrimmed === '') {
      this.evenementService.getevent().subscribe(
        data => {
          this.events = data;
        },
        error => {
          console.error('Error fetching events: ', error);
        }
      );
    } else {
      const searchNumber = parseInt(searchTrimmed, 10);
    
      if (!isNaN(searchNumber)) {
        this.events = this.events.filter(event => event.id === searchNumber);
      } else {
        this.events = this.events.filter(event =>
          event.jour.toLowerCase().includes(searchTrimmed.toLowerCase())
        );
      }
    }
  
  
  }
  
  
  
}

  
  

