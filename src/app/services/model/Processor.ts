import {Commentaire} from "./Commentaire";
import {Planification} from "./Planification";
import {Propriete} from "./Propriete";
import {Reglage} from "./Reglage";
import {Type} from "./Type";

export class Processor {

  id:number ;
  type: string;
  status: string;
  dateCreation: string;
  name:string;
  planification:Planification;
  commentaire:Commentaire;
  propriete:Propriete;
  reglage:Reglage;
}
