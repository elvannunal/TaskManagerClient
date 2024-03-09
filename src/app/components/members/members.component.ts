import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxTreeListModule } from 'devextreme-angular';
import { RoleBaseAuthorize } from 'src/app/services/roleBasedAuthorize/roleBaseAuthorize.service';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})

export class MembersComponent implements OnInit {

  authorizeList:any[]=[];

  tasksData: any;

  employeesData: any;

  constructor(private roleBasedAuthorization : RoleBaseAuthorize) {}
  ngOnInit(): void {
   this.getAuthorizeDefination();
  }

  getAuthorizeDefination(){

    this.roleBasedAuthorization.getAuthorizeDefinationEndPoint().subscribe((res:any)=>{

      this.authorizeList=res;

      console.log("this.authorizeList******",this.authorizeList);
    });

  }
}



