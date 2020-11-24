
const manager = new dataManager()
const renderer = new Renderer()

const displayRecipes = function(){
    const ingredient = $('#input').val()
    $("#input").val("")
    manager.getRecipes(ingredient)
    setTimeout(function(){
        renderer.render(manager.data)}, 1000) //change to .then later
}

const defaultHref = function(link){
    link.href = 'https://www.youtube.com/'
}