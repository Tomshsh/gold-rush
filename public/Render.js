
class Render{
    renderBoard(){
        const source = $("boardTemplate").html()
        const template = Handlebars.compile(source)
        let newHtml = template({matrix})
    }
}