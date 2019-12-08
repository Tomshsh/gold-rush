



class Render {
    renderBoard(shoobert) {
        const source = $("#board-template").html()
        Handlebars.registerHelper('ifCond', function (v1, v2, options) {
            if (v1 === v2) {
                return options.fn(this);
            }
            return options.inverse(this);
        });
        const template = Handlebars.compile(source)
        let newHtml = template(shoobert)
        $("#container").empty().append(newHtml)
        $(".row").css("grid-template-columns",`repeat(${shoobert.cols || 5}, 1fr)`)
        $("#board").css("grid-template-rows",`repeat(${shoobert.rows || 5}, 1fr)`)
    }
}
