import { Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.UserField = Selector ('#login_button_container input[id="user-name"]')
        this.PasswordField = Selector ('#login_button_container input[id="password"') 
        this.LoginButton = Selector ('#login_button_container input[id="login-button"]')
        this.ErrorMsg = Selector ('h3') 
    }
    
    async submitLogin(user,password){
    await t
    .typeText(this.UserField, user, {paste:true})
    .typeText(this.PasswordField, password, {paste:true})
    .click(this.LoginButton)
    }

}

export  default new LoginPage()