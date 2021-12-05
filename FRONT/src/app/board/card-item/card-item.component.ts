import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Card } from "src/app/model/card.model";
import { KanbanService } from "src/app/service/kanban.service";

@Component({
  selector: "app-card-item",
  templateUrl: "./card-item.component.html",
  styleUrls: ["./card-item.component.css"],
})
export class CardItemComponent implements OnInit {
  @Input() cards!: Card;
  onViewMode: boolean = true;

  editCard: FormGroup = new FormGroup({
    titulo: new FormControl(null),
    conteudo: new FormControl(null),
  });

  constructor(private kanbanService: KanbanService) {}

  ngOnInit(): void {}

  deleteCard() {
    this.kanbanService.deleteCards(this.cards.id).subscribe((data) => {
      this.kanbanService.cardsChange.next(data);
    });
  }

  moveToRight() {
    this.kanbanService
      .changeCards(
        this.cards.id,
        this.cards.titulo,
        this.cards.conteudo,
        this.cards.lista === "todo" ? "doing" : "done"
      )
      .subscribe((data) => {
        this.kanbanService.cardsChange.next(data);
      });
  }
  moveToLeft() {
    this.kanbanService
      .changeCards(
        this.cards.id,
        this.cards.titulo,
        this.cards.conteudo,
        this.cards.lista === "done" ? "doing" : "todo"
      )
      .subscribe((data) => {
        this.kanbanService.cardsChange.next(data);
      });
  }
  openEditMode() {
    this.onViewMode = false;
  }
  cancelEditMode() {
    this.onViewMode = true;
  }

  onEditCard() {
    this.kanbanService
      .changeCards(
        this.cards.id,
        (this.cards.titulo = this.editCard.value.titulo
          ? this.editCard.value.titulo
          : this.cards.titulo),
        (this.cards.conteudo = this.editCard.value.conteudo
          ? this.editCard.value.conteudo
          : this.cards.conteudo),
        this.cards.lista
      )
      .subscribe((data) => {
        this.kanbanService.cardsChange.next(data);
        this.editCard.reset();
      });
  }
}
