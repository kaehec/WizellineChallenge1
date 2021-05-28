import { Selector } from 'testcafe'

class ShoppingPage{
    constructor(){
        this.ContinueShop = Selector ('button[id="continue-shopping"]')
        this.CheckoutButton = Selector ('button[id="checkout"]') 
        this.RemoveButton = Selector ('button[id="remove-sauce-labs-backpack"]') 
        this.BackpackItemCart = Selector ('.div').withExactText('Sauce Labs Backpack')
        this.BikeLightItemCart = Selector ('div').withExactText('Sauce Labs Bike Light')
        this.BoltTShirtItemCart = Selector ('.div').withExactText('Sauce Labs Bolt T-Shirt')
    }
}

export  default new ShoppingPage()





