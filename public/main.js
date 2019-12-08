let board = new GoldRush()
const r1 = new Render()

r1.renderBoard(board)
$("body").click("#start-button",()=>{
    let rows = $("#rows-input").val()
    let cols = $("#cols-input").val()
    board = new GoldRush(rows,cols)
    r1.renderBoard(board)
    
})
$("body").keydown("#board",e => {
    let {p1,p2,play} = board
    let player
    e.key == "w" || e.key == "a" || e.key == "s" || e.key == "d" ? player = "1" : 
    e.key == "i" || e.key == "j" || e.key == "k" || e.key == "l" ? player = "2" : null
    
    switch (e.key) {
        case "w":
        case "i":
            play(-1, 0, player)
            break;
        case "a":
        case "j":
            play(0, -1, player)
            break;
        case "s":
        case "k":
            play(1, 0, player)
            break;
        case "d":
        case "l":
            play(0, 1, player)
    }
    player ? r1.renderBoard(board): null
})

