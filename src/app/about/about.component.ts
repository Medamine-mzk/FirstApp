import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  info = {
    nom : 'Med Amine',
    email : 'med.amine.mzk@hotizon-tech.com',
    telephone : 92000000
  };
  commentaires : any[] = [];
  nouveauCommentaire = {
    id: 0,
    message: ''
  };
  ajouterCommentaire(){
      this.commentaires.push({
        id: this.nouveauCommentaire.id,
        message: this.nouveauCommentaire.message
      });
      this.nouveauCommentaire = {
        id:0,
        message:''
      };
  }
  suppCommentaire() {
    this.commentaires.pop();
    }
}
