import { Selector, t} from 'testcafe'

class InfoPage{
    constructor(){
        this.FirstName = Selector ('input[id="first-name"]')
        this.LastName = Selector ('input[id="last-name"]') 
        this.ZIPCode = Selector ('input[id="postal-code"]') 
        this.ContinueButton = Selector ('input[id="continue"]') 
        this.ErrorM = Selector ('div[class="error-message-container error"]')
    }

    async submitInvalidCheckout(name,lastname){
        await t
        .typeText(this.FirstName, name, {paste:true})
        .typeText(this.LastName, lastname, {paste:true})
        .click(this.ContinueButton)
        }

     async submitValidCheckout(name,lastname, ZIP){
        await t
        .typeText(this.FirstName, name, {paste:true})
        .typeText(this.LastName, lastname, {paste:true})
        .typeText(this.ZIPCode, ZIP, {paste:true})
        .click(this.ContinueButton)
        }
}

export  default new InfoPage()





