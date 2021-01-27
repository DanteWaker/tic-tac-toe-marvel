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

    arrayEquals(a: Array<any>, b: Array<any>): boolean {
        return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((value, index) => value ===b [index]);
    }

    async checkGameEndWinner(): Promise<boolean> {   

        if((this.gameField[0] !== 0 && this.gameField[1] !== 0 && this.gameField[2] !== 0) &&
        (this.gameField[0] === this.gameField[1] && this.gameField[1] === this.gameField[2])) {
            this.gameEnd();
            return true
        } else if ((this.gameField[3] !== 0 && this.gameField[4] !== 0 && this.gameField[5] !== 0) &&
        (this.gameField[3] === this.gameField[4] && this.gameField[4] === this.gameField[5])) {
            this.gameEnd();
            return true
        } else if ((this.gameField[6] !== 0 && this.gameField[7] !== 0 && this.gameField[8] !== 0) &&
        (this.gameField[6] === this.gameField[7] && this.gameField[7] === this.gameField[8])) {
            this.gameEnd();
            return true
        } else if ((this.gameField[0] !== 0 && this.gameField[3] !== 0 && this.gameField[6] !== 0) &&
        (this.gameField[0] === this.gameField[3] && this.gameField[3] === this.gameField[6])) {
            this.gameEnd();
            return true
        } else if ((this.gameField[1] !== 0 && this.gameField[4] !== 0 && this.gameField[7] !== 0) &&
        (this.gameField[1] === this.gameField[4] && this.gameField[4] === this.gameField[7])) {
            this.gameEnd();
            return true
        } else if ((this.gameField[2] !== 0 && this.gameField[5] !== 0 && this.gameField[8] !== 0) &&
        (this.gameField[2] === this.gameField[5] && this.gameField[5] === this.gameField[8])) {
            this.gameEnd();
            return true
        } else if ((this.gameField[0] !== 0 && this.gameField[4] !== 0 && this.gameField[8] !== 0) &&
        (this.gameField[0] === this.gameField[4] && this.gameField[4] === this.gameField[8])) {
            this.gameEnd();
            return true
        } else if ((this.gameField[2] !== 0 && this.gameField[4] !== 0 && this.gameField[6] !== 0) &&
        (this.gameField[2] === this.gameField[4] && this.gameField[4] === this.gameField[6])) {
            this.gameEnd();
            return true
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
}
