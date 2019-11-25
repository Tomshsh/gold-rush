const source = $("#board-template").html()
const template = Handlebars.compile(source)

class Render{
    renderBoard(board){
        let newHtml = template(board)
        $("#container").empty().append(newHtml)
    }
}