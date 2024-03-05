import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { TeamService } from 'src/app/services/team.service';
import { CreateTeam } from '../models/creatTeam';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-teams-modal',
  templateUrl: './teams-modal.component.html',
  styleUrls: ['./teams-modal.component.css']
})
export class TeamsModalComponent {
  dialogRef!: MatDialogRef<TeamsModalComponent>;
  teamForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private teamService: TeamService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      teamId: ['', Validators.required],
      teamName: ['', Validators.required],
    })


  }

  get controls() {
    return this.teamForm.controls;
  }

  addTeam() {

    if (this.teamForm.valid) {
      const createTeam: CreateTeam = {
        teamId: this.controls.teamId.value,
        teamName: this.controls.teamName.value,
      };
  
      this.teamService.createTeam(createTeam).subscribe(
        (response) => {
          console.log('Ekibiniz başarıyla eklendi:', response);  
          this.dialogRef.close(); 
        },
        (error) => {
          console.error('Ekibinizi eklerken bir hata oluştu:', error);
        }
      );
    }

  }
  
}
