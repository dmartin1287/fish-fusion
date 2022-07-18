const { mongerInventory } = require("./fishMonger.js")
    /*
    This module must import and invoke the function that is exported by the fish monger module. This module should also define a function that build an HTML version of their daily menu. The function should return the generated HTML string. The function must be named fishMenu.

    Each day, the chef visits the monger and specifies the maximum price she is able to spend per fish.
    If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory.
    The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be on the menu.

     * Tuna Soup
     * Tuna Sandwich
     * Grilled Tuna
     */
const fishOfTheDay = mongerInventory()
let fishString = ''
const fishMenu = () => {
    for (fish of fishOfTheDay) {
        fishString += `<h1> Menu </h1> \n <article class="Menu"> \n <h2> ${fish.species} </h2> \n <section class="menu_item" > ${fish.species} Soup </section> \n <section class="menu_item"> ${fish.species} Sandwich </section> \n <section class="menu_item"> Grilled ${fish.species} </section> \n </article>`
    }
    return fishString

}
fishMenu()

module.exports = { fishMenu }