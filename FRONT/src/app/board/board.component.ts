import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Card } from "../model/card.model";
import { KanbanService } from "../service/kanban.service";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.css"],
})
export class BoardComponent implements OnInit {
  newCardForm: FormGroup = new FormGroup({
    titulo: new FormControl(null),
    conteudo: new FormControl(null),
  });

  cardsTodo!: Card[] | undefined;
  cardsDoing!: Card[] | undefined;
  cardsDone!: Card[] | undefined;

  constructor(private kanbanService: KanbanService) {}
  showAddButton: boolean = true;

  ngOnInit(): void {
    this.getAllCards();
    this.kanbanService.cardsChange.subscribe(() => {
      this.getAllCards();
    }
    
    );
  }

  // getAllCards() {
  //   this.kanbanService.getCards().subscribe((cards) => {
  //     this.allCards = cards;
  //   });
  // }
  getAllCards() {
    this.kanbanService.getCards().subscribe((cards) => {
     this.cardsTodo = this.kanbanService.getCardsTodo(cards)
     this.cardsDoing = this.kanbanService.getCardsDoing(cards)
     this.cardsDone = this.kanbanService.getCardsDone(cards)
    });
  }

  addNewCard() {
    this.kanbanService
      .postCards(this.newCardForm.value.titulo, this.newCardForm.value.conteudo)
      .subscribe((data) => {
        this.kanbanService.getCards().subscribe((data) => {
          this.newCardForm.reset();
          this.kanbanService.cardsChange.next(data);
        });
      });
  }

  allowAddCard() {
    this.showAddButton = false;
  }
  cancelAddCard() {
    this.showAddButton = true;
  }
}
