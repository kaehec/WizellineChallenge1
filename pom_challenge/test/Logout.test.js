import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

fixture('Logout from Products Page Test')

    .page('https://www.saucedemo.com/')
    test('User logout from products page', async t => {
        await LoginPage.submitLogin("standard_user","secret_sauce")
        await t.click(ProductsPage.OptionsButton)
        await t.click(ProductsPage.LogOut)
        await t.expect(LoginPage.LoginButton.exists).ok
    })