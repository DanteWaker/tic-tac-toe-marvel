import { Component, OnInit } from '@angular/core';
import { Gamelogic } from '../gamelogic';

@Component({
  selector: '.app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [Gamelogic]
})
export class GameComponent implements OnInit {

  constructor(public game: Gamelogic) { }

  ngOnInit(): void {
  }

  startGame(): void {
    this.game.gameStart();
    const currentPlayer = 'Turno do Jogador ' + this.game.currentTurn;
    const information= document.querySelector('.current-status');
    information.innerHTML = currentPlayer;
  }

  async clickSubField( subfield: any): Promise<void> {
    if (this.game.gameStatus === 1) {
      const position = subfield.currentTarget.getAttribute('position');
      console.log(position);
      this.game.setField(position, this.game.currentTurn);
    }

    await this.game.checkGameEndWinner().then((end: boolean) => {
      if (this.game.gameStatus === 0 && end) {
        const information = document.querySelector('.current-status');
        information.innerHTML = "O jogador " + this.game.currentTurn + " ganhou!";
      }
    });

    await this.game.checkGameEndFull().then((end: boolean) => {
      if (this.game.gameStatus === 0 && end) {
        const information = document.querySelector('.current-status');
        information.innerHTML = "Deu velha. Joguem de novo!";
      }
    });

    this.game.changePlayer();

    if (this.game.gameStatus === 1) {
      const currentPlayer = 'Turno do Jogador ' + this.game.currentTurn;
      const information = document.querySelector('.current-status');
      information.innerHTML = currentPlayer;
    }

  }

}
