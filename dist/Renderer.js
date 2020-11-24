class Renderer{
    
    constructor(){
        this.source = $("#recipes-template").html()
        this.template = Handlebars.compile(this.source)
    }

    render(data){
        const recipes = {data}
        const recipeHTML = this.template(recipes)
        $('#recipes-container').empty().append(recipeHTML)
    }
}