import { Component } from '@angular/core';
import { YugiohArchetypeService } from '../service/yugioh-archetype.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchArchetype:string = "Fluffal";
  cards = [];
  constructor(
   private obterarchetype: YugiohArchetypeService
  ) {}

  searchCard(){
    this.obterarchetype.getAll(this.searchArchetype)
      .then((json: any)=>{
        // this.cards = JSON.stringify(json);
        for (var i = 0; i < json.data.length; i++) {
          var card = json.data[i];
          this.cards.push(card);
        }
        console.log(this.cards);
      }).catch((erro)=>{
        console.log(erro)
      }
      )
  }
}
