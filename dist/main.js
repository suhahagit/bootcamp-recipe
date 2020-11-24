
const renderer = new Renderer()

const displayRecipes = function(){
    const ingredient = $('#input').val()
    $.get(`recipes/${ingredient}`, (data) =>  {
        console.log(data)
    })
}