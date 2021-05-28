import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingPage from '../pages/ShoppingPage'
import InformationPage from '../pages/InformationPage'
import OverviewPage from '../pages/OverviewPage'

fixture('Fill information page')

    .page('https://www.saucedemo.com/')
    test('User fills the personal information page Test', async t => {
        await LoginPage.submitLogin("standard_user","secret_sauce")
        await ProductsPage.AddItems("Multiple")
        await t.click(ShoppingPage.CheckoutButton)
        await InformationPage.submitValidCheckout("Any", "Name", "12323")
        t.expect(OverviewPage.OverviewTitle.exists).ok
    })