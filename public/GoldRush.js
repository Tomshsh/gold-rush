class GoldRush extends Matrix{
    constructor(){
        super()
        this.p1 = {score: 0}
        this.p2 = {score: 0}
        this.matrix = []
        this.levelCoins = 0
        this.loadBoard()

    }
    loadBoard() {
        this.matrix = []
        for (let r = 0; r < 5; r++) {
            this.matrix.push([])
            for(let c = 0; c < 5; c++){
                this.matrix[r][c] = Math.random() * 4 >= Math.random() * 6 ? "w" : "c"
                if(this.matrix[r][c] == "c"){this.levelCoins++}
            }
        }
        this.loadPlayers()
    }
    loadPlayers(){
        Object.assign(this.p1,{row: Math.floor(Math.random() * 5),col: Math.floor(Math.random() * 5)})
        Object.assign(this.p2,{row: Math.floor(Math.random() * 5),col: Math.floor(Math.random() * 5)})
        if((this.p1.row == this.p2.row && this.p1.col == this.p2.col) || this.matrix[this.p1.row][this.p1.col] == "w" || this.matrix[this.p2.row][this.p2.col] == "w"){
            return this.loadBoard()
        }
        [this.p1,this.p2].forEach(p => this.matrix[p.row][p.col]=="c"? this.levelCoins-- : null)
        this.matrix[this.p1.row][this.p1.col] = 1
        this.matrix[this.p2.row][this.p2.col] = 2
    }   
    play = (r, c, player) =>{
        let {row, col} = {row: this["p"+player].row, col: this["p"+player].col}
        if(!this.matrix[row + r] || !this.matrix[row + r][col + c]){return}
        if(this.matrix[row+r][col+c] == "c" || this.matrix[row+r][col+c] == "."){
            this.matrix[row][col] = "."
            row += r; col += c;
            Object.assign(this["p"+player],{row, col})
            this.matrix[row][col] == "c" ? this["p"+player].score ++ : null
            this.matrix[row][col] = player
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

