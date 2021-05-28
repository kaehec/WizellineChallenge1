import { Selector, t } from 'testcafe'

class ProductsPage{
    constructor(){
        this.OptionsButton = Selector ('button[id=react-burger-menu-btn]')
        this.LogOut = Selector ('a[id=logout_sidebar_link]') 
        this.ShopCart = Selector ('a[class=shopping_cart_link]') 
        this.Title = Selector ('span[class="title"]')
        this.BackpackItem = Selector('button[id="add-to-cart-sauce-labs-backpack"]')
        this.BikeLightItem = Selector('button[id="add-to-cart-sauce-labs-bike-light"]')
        this.BoltTShirtItem = Selector('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }

    async AddItems(number){
        
        if(number == "Single"){
            await t.click(this.BackpackItem)
            await t.click(this.ShopCart)
        }else{
            await t.click(this.BackpackItem)
            await t.click(this.BikeLightItem)
            await t.click(this.BoltTShirtItem)
            await t.click(this.ShopCart)
        }
     }
}

export  default new ProductsPage()
