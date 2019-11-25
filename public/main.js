const board = new GoldRush()
const r1 = new Render()

r1.renderBoard(board)

$("body").keyup(e => {
    let {p1,p2,play} = board
    let player = "2"
    e.key == "w" || e.key == "a" || e.key == "s" || e.key == "d" ? player = "1" : null
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
    r1.renderBoard(board)
})

