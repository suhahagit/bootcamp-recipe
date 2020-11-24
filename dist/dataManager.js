class dataManager {
    constructor() {
        this.data
    }

    getRecipes(ingredient) {
        $.get(`recipes/${ingredient}`, (data) =>  {
            this.data = data
        })
    }
}