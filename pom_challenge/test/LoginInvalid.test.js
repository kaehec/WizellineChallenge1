import LoginPage from '../pages/LoginPage'

fixture('Invalid Login Test')

    .page('https://www.saucedemo.com/')

test('User logs in using invalid credentials', async t => {
    await LoginPage.submitLogin("user","password")
    await t.expect(LoginPage.ErrorMsg.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})