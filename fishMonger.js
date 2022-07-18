/**
 * This module must import and invoke the function that is exported by the fishing boat module. 
 * This module should also define and export its own function that generates its own inventory that restaurants can use to purchase fish for their daily menus. The returned inventory should be an array of objects.
 * The exported function must be named mongerInventory.

1) Each day, the fishmonger buys exactly 10 of each inexpensive (see below) fish caught by the fishing boat. If any of the fishing boat's fish quantity is less than 10, the fish monger does not buy it.
2) The fishmonger does not buy any fish from the boat that is priced higher than $7.50 per fish.
3) The fishmonger lets the chef of a restaurant specify what their maximum budget is per fish. For example, a chef can tell the monger that she can only spend $5.00 per fish. The function should then return only fish that cost $5.00 or less.
4) Each fish object provided by the fish monger should have a quantity of 10 instead of the original quantity from the fishing boat.
 */
const { boatInventory } = require("./fishingBoat.js")

const boatInv = boatInventory()
const chefPrice = 5.00
const mongerPurchases = []
console.log(boatInv)
const mongerInventory = () => {
    for (const fish of boatInv) {
        if (fish.price < 7.50 && fish.price < chefPrice) {
            mongerPurchases.push(fish)
        }
    }
    for (const fish of mongerPurchases) {
        fish.amount = 10
    }
    return mongerPurchases
}
mongerInventory()
console.log(mongerPurchases)
module.exports = { mongerInventory }