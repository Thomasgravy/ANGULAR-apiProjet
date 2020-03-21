import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Contact} from "../models/contact.model";
import { ContactService } from "../services/contact.service";

@Component({
  selector: 'app-card-form-contact',
  templateUrl: './card-form-contact.component.html',
  styleUrls: ['./card-form-contact.component.scss']
})
export class CardFormContactComponent implements OnInit {

  @Output()
  refreshDatas = new EventEmitter();

  constructor(private service: ContactService) { }

  ngOnInit() {
  }

  addContact(nom: string, prenom: string, numero: string) {
    this.service.createContact(nom, prenom, numero).subscribe(
      result => {this.refreshDatas.emit();},
      error => {},
      () => {}
    );
  }

}
