import { Component, OnInit } from '@angular/core';
import { Releveur } from "./releveur";
import { ReleveurService } from "./releveur.service";
 
@Component({
  selector: 'app-user-list',
  templateUrl: './list.releveur.html',
  providers: [ReleveurService]
})
export class ReleveursComponent implements OnInit {
 
  private releveurs:any;
 
  constructor(private releveurService: ReleveurService) { }
 
  ngOnInit() { //when component loading get all users and set the users[]
    this.getReleveurs();
  }
 
  getReleveurs() {
    this.releveurService.getReleveurs().subscribe(
      releveurs => {
        this.releveurs = releveurs;
      },
      err => {
        console.log(err);
      }
 
    );
  }
 
}