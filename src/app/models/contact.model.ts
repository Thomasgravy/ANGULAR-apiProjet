import {DeserializabeModel} from "./deserializabe.model";

export class Contact implements DeserializabeModel{
  id: number;
  nom: string;
  prenom: string;
  numero: string;
  favoris: boolean;

  /*
  constructor(datas: any) {
    this.id = datas.id;
    this.nom = datas.nom;
    this.prenom = datas.prenom;
    this.numero = datas.numero;
    this.favoris = datas.favoris;
  }
  */

  constructor() {
  }


  deserialize(input: any): this {
    return Object.assign(this, input);
  }


  isFavorite(){
    return this.favoris.toString() === '0' ? false : true;
  }

}
