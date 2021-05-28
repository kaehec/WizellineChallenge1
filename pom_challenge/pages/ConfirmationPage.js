import { Selector} from 'testcafe'

class ConfirmationPage{
    constructor(){
       
        this.OverviewTitle  = Selector ('h2').withExactText('THANK YOU FOR YOUR ORDER')
       
    }
}

export  default new ConfirmationPage()





