import {Component, OnInit} from '@angular/core';
import {Contact} from "./models/contact.model";
import {ContactService} from "./services/contact.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  //listeContact: Array<{nom: string, prenom: string, numero: string, fav: boolean}> =
    //[{nom: 'PAULAIS', prenom: 'Jordan', numero: '0123456789', fav: false}];

  listeContact: Contact[];

  //listeContact: Observable<Contact[]>;



  constructor(private service: ContactService) { }

  ngOnInit(): void {
    /*
    this.service.getListContact().subscribe(
      item => {
        this.listeContact = item;
        console.log(this.listeContact[0].favoris)
        console.log(this.listeContact[0].isFavorite())
      },
      error => {
        console.log("Une erreur est survenue")
      },
      () => {

      }
    );
    */

    //this.listeContact = this.service.getListContact();

    this.initialize();
  }


  initialize() {
    this.service.getListContact().subscribe(
      item => {
        this.listeContact = item.slice().reverse();
      },
      error => {
        console.log("Une erreur est survenue")
      },
      () => {

      }
    )
  }
}
