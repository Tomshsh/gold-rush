class Matrix{
    constructor(row,col){
        this.matrix=[]  
        this.row=row
        this.col=col
        this.generateMatrix()
    }
    generateMatrix(){
        let num = 1
        for (let r=0;r<this.row;r++){
            this.matrix.push([])
            for(let c=0;c<this.col;c++){
                this.matrix[r].push(num++)
            }
        }
    }
    print(){
        for(let r of this.matrix){
            let line=""
            for(let c of r){
                line += (c + "\t")
            }
            console.log(line)
        }
    }
    findCoordinate(val){  
        let col=0
        for(let row in this.matrix){
            col=this.matrix[row].findIndex(c=>c==val)
            if(col!=-1){return {row,col}}
        }
    }
    alter(row,col,num){
        this.matrix[row][col]=num
    }

}

// export default Matrix