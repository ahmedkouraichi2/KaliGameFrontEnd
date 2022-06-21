import { Injectable } from '@angular/core';
let n:number=0;
@Injectable({
  providedIn: 'root'
})
export class ChoisirMenuService {

  setVar(na:number){
    n=na;
  }
 getVar():number{
    return n;
  }
  constructor() { }
}
