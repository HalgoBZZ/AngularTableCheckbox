import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import "rxjs/add/operator/map";
import { Releveur } from "../../releveurs/releveur";
import { ReleveurService } from "../../releveurs/releveur.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { clone } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ReleveurService]
})
export class AppComponent implements OnInit{
  releveurs:Releveur[];
  selectedReleveur:Releveur;
  newRel:Releveur;
  isNewForm:boolean;
  releveurForm:boolean;
  editForm:boolean=false;
  editRel:Releveur;
  checkedList:Releveur[];
  allChecked:boolean;
  constructor(public releveurService: ReleveurService) { }

  ngOnInit() { //when component loading get all users and set the users[]
    //this.releveurService.gets().then(releveurs => this.releveurs =releveurs);
    this.releveurs=new Array<Releveur>();
    this.releveurs.push(new Releveur(1,"hafedh","baazouz",21455555,"hahah@hahah.cc","ggagagag","gagagag"));
    this.releveurs.push(new Releveur(2,"hafedh","baazouz",21455555,"hahah@hahah.cc","ggagagag","gagagag"));
    this.releveurs.push(new Releveur(3,"hafedh","baazouz",21455555,"hahah@hahah.cc","ggagagag","gagagag"));
    this.releveurs.push(new Releveur(4,"hafedh","baazouz",21455555,"hahah@hahah.cc","ggagagag","gagagag"));
    this.releveurs.push(new Releveur(5,"hafedh","baazouz",21455555,"hahah@hahah.cc","ggagagag","gagagag"));
    this.releveurs.push(new Releveur(6,"hafedh","baazouz",21455555,"hahah@hahah.cc","ggagagag","gagagag"));
    this.releveurs.push(new Releveur(7,"hafedh","baazouz",21455555,"hahah@hahah.cc","ggagagag","gagagag"));
    this.checkedList=new Array<Releveur>();
  }
 

  updateCheckedList(checked:boolean,releveur:Releveur){
    if(checked){
      this.checkedList.push(releveur);
    }else{
      this.checkedList.splice(this.checkedList.indexOf(releveur),1)
    }
  } 

  updateSelected(checked:boolean){
    if(checked){
      this.allChecked=true;
      this.checkedList=this.releveurs;
    }else{
      this.allChecked=false; 
      this.checkedList=[];
    }
  }

  getReleveurs() {
    this.releveurService.getReleveurs().subscribe(
      data => {
        this.releveurs = data;
      },
      err => {
        console.log(err);
      }
 
    );
  }
  add(newRel: Releveur): void {
    this.releveurService.saveReleveur(newRel)
      .then(releveur => {
        this.releveurs.push(newRel);
        this.selectedReleveur = null;
      });
  }
  deleteReleveur(reldel: Releveur): void {
    this.releveurService.deleteReleveur(reldel.id)
      .then(() => {
        this.releveurs = this.releveurs.filter(h => h !== reldel);
        if (this.selectedReleveur === reldel) { this.selectedReleveur = null; }
      });
  }
  updateReleveur(relup:Releveur){
    this.releveurService.updateReleveur(relup);
    this.editForm=false;
    this.editRel=null;
  }
  showEditForm(relev:Releveur){
    
    
    this.editForm=true;
    this.isNewForm=false;
    this.newRel=relev;
    this.releveurForm=true;
      return;
  }
  showAddForm(){
    if(this.releveurs.length){
      this.newRel=null;
    }
    this.releveurForm=true;
    this.isNewForm=true;
  }
  saveReleveur(Rel:Releveur){
    if(this.isNewForm){
       this.add(Rel);
    }else if(this.editForm){
      this.updateReleveur(Rel);
    }
      this.releveurForm=false;
  }
  
}
