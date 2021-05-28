import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingPage from '../pages/ShoppingPage'
import InformationPage from '../pages/InformationPage'

fixture('Continue with checkout without adding mail')

    .page('https://www.saucedemo.com/')
    test('User continues with checkout without adding mail Test', async t => {
        await LoginPage.submitLogin("standard_user","secret_sauce")
        await ProductsPage.AddItems("Multiple")
        await t.click(ShoppingPage.CheckoutButton)
        await InformationPage.submitInvalidCheckout("Any", "Name")
        await t.expect(InformationPage.ErrorM.innerText).eql('Error: Postal Code is required')
    })