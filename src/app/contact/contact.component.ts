import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public question={'text' : '<ng new xyz> permet de créer un projet Angular.','isCorrect':true};


  public styleCorrect={'background-color' : 'green'};



  public couleurs = [ 'rouge' , 'vert' , 'bleu' ];




  afficherNom=true;
  couleur="rouge";
}
