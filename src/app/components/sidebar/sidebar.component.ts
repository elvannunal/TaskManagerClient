import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog, MAT_DIALOG_DATA,MatDialogTitle, MatDialogContent
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TeamsModalComponent } from '../teams-modal/teams-modal.component';
import { TeamService } from '../../services/team.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  colorCodes = ['#7AC555', '#FFA500', '#E4CCFD', '#76A5EA', '#8BC48A', '#FFA500', '#5030E5', '#800080']

  teams: any;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private teamService: TeamService
  ) { }
  ngOnInit(): void { 
    this.getTeams();
  }

  openDialog() {
    this.dialog.open(TeamsModalComponent);
  }

  getTeams(): void {
    this.teamService.getTeams().subscribe((response: any) => {
      this.teams = response.result;
      console.log(this.teams);
    });
  }
  
}
