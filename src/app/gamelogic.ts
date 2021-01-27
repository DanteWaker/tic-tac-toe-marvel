import { Status } from './gamestatus';

export class Gamelogic {

    gameField: Array<number> = [];

    currentTurn: number;

    gameStatus: Status;

    public constructor() {

        this.gameStatus = Status.STOP;
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    gameStart(): void {
        this.gameField = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.currentTurn = this.randomPlayerStart();
        console.log(this.currentTurn);
        this.gameStatus = Status.START;
    }
    randomPlayerStart(): number {
        const startPlayer = Math.floor(Math.random() * 2) + 1;
        return startPlayer;
    }

    setField(position: number, value: number): void {
        this.gameField[position] = value;
        console.log(this.gameField);
    }

    getPlayerColorClass(): string {
        const colorClass = (this.currentTurn === 2) ? 'player-two' : 'player-one';
        return colorClass;
    }

    changePlayer(): void {
        this.currentTurn = (this.currentTurn === 2) ? 1 : 2;
    }

    async checkGameEndWinner(): Promise<boolean> {
        let isFull = true;

        if (this.gameField.includes(0)) {
            isFull = false;
        }

        if (isFull ) {
            this.gameEnd();
            return true;
        } else {
            return false;
        }
    }

    gameEnd(): void {
        this.gameStatus = Status.STOP;
    }

    async checkGameEndFull(): Promise<boolean> {
        let isFull = true;

        if (this.gameField.includes(0)) {
            isFull = false;
        }

        if (isFull ) {
            this.gameEnd();
            return true;
        } else {
            return false;
        }
    }

    gameEnd(): void {
        this.gameStatus = Status.STOP;
    }

    
}
