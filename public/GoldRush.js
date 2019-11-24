const Matrix = require ('./Matrix')
class GoldRush extends Matrix{
    constructor(){
        super()
        this.p1 = {score: 0}
        this.p2 = {score: 0}
        this.matrix = []
        this.loadBoard()
        this.levelCoins = 0

    }
    loadBoard() {
        this.matrix = []
        for (let r = 0; r < 5; r++) {
            this.matrix.push([])
            for(let c = 0; c < 5; c++){
                this.matrix[r][c] = Math.random() * 4 >= Math.random() * 6 ? "w" : "c"
                this.matrix[r][c] == "c" ? this.levelCoins++ : null
            }
        }
        this.loadPlayers()
    }
    loadPlayers(){
        this.p1 = {row: Math.floor(Math.random() * 5),col: Math.floor(Math.random() * 5)}
        this.p2 = {row: Math.floor(Math.random() * 5),col: Math.floor(Math.random() * 5)}
        if((this.p1.row == this.p2.row && this.p1.col == this.p2.col) || this.matrix[this.p1.row][this.p1.col] == "w" || this.matrix[this.p2.row][this.p2.col] == "w"){
            return this.loadBoard()
        }
        this.matrix[this.p1.row][this.p1.col] = 1
        this.matrix[this.p2.row][this.p2.col] = 2
    }
    play(row, col, player){
        if(this.matrix[row][col] != "w"){
            this.matrix[this["p"+player].row][this["p"+player].col] = "."
            this["p"+player] = {row,col}
            this.matrix[row][col] = player
            this.matrix[row][col] == "c" ? this["p"+player].score ++ : null
            this.checkWin()
        }
    }
    checkWin(){
        if(this.p1.score+this.p2.score == this.levelCoins){
            this.levelCoins = 0
            this.loadBoard()
        }
    }    
}

const game = new GoldRush()
game.print()
console.log(game.p1)
game.play(1,1,1)
console.log("..................")
game.print()
console.log(game.p1)