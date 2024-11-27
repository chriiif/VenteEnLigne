import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Membre } from 'src/app/classes/membre';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-membread',
  templateUrl: './membread.component.html',
  styleUrls: ['./membread.component.css']
})
export class MembreadComponent {
  lesmembres: Membre[] = [];
  memform!: FormGroup;
  visible: boolean = false;
  Id: any;

  constructor(private membreservice: MembreService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.membreservice.getmembre().subscribe(
      data => {
        this.lesmembres = data;
      }
    );

    this.memform = this.fb.group({
      id: [0],
      nom: ['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      role: ['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@gmail.com$')]],
      phone: ['', [Validators.pattern('^[0-9]{9}$')]],
      image: [''],
    });
  }
  
  
  deleteMembre(id: number): void {
    this.membreservice.deletemembre(id).subscribe(
      () => {
        this.lesmembres = this.lesmembres.filter(lesmembre => lesmembre.id !== id);
      }
    );
  }


  modifierEvent(member: Membre): void {
    this.memform.patchValue({
      id: member.id,
      nom: member.nom,
      role: member.role,
      email: member.email,
      phone: member.phone,
      image: member.image,
     
    });

    this.visible = true;
  }
  updateEvent(): void {
    const memberDataToUpdate = { ...this.memform.value };
    const memberId = this.memform.get('id')?.value;
      this.membreservice.updateEvent(memberId, memberDataToUpdate).subscribe(
        (updatedData: any) => {
          const index = this.lesmembres.findIndex((event: any) => event.id === memberId);
          
          if (index !== -1) {
            this.lesmembres[index] = updatedData;
          } else {
            console.error('member not found in the members array.');
          }
        },
        (error: any) => {
          console.error('Error updating member: ', error);
        }
      );
      this.memform.reset();
  }
  toggleFormVisibility(): void {
    this.visible = !this.visible;
    if (!this.visible) {
      this.memform.reset();
    }
  }
}
