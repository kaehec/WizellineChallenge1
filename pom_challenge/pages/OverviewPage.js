import { Selector} from 'testcafe'

class OverviewPage{
    constructor(){
        this.CancelButton = Selector ('button[id="cancel"]')
        this.FinishButton = Selector ('button[id="finish"]') 
        this.OverviewTitle  = Selector ('title').withExactText('Checkout: Overview')
        this.BackpackItemOver = Selector ('.div').withExactText('Sauce Labs Backpack')
        this.BikeLightItemOver = Selector ('div').withExactText('Sauce Labs Bike Light')
        this.BoltTShirtItemOver = Selector ('.div').withExactText('Sauce Labs Bolt T-Shirt')
    }
}

export  default new OverviewPage()





