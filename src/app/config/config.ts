import {Contact} from "../models/contact.model";

export class Config {
  /*
  public static get FAKE_LIST_CONTACT(){
    return[ new Contact(
      {
        id: 1,
        nom: "Coulon",
        prenom: "Théophile",
        numero:'06000000',
        favoris: true
      }
    )]
  }
  */

  public static get SERVER_URL() {
    return 'https://dcode.design/generateView/api/';
  }
}
