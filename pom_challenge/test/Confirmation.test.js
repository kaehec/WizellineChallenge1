import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingPage from '../pages/ShoppingPage'
import InformationPage from '../pages/InformationPage'
import OverviewPage from '../pages/OverviewPage'
import ConfirmationPage from '../pages/ConfirmationPage'

fixture('Fill information page')

    .page('https://www.saucedemo.com/')
    test('User fills the personal information page Test', async t => {
        await LoginPage.submitLogin("standard_user","secret_sauce")
        await ProductsPage.AddItems("Multiple")
        await t.click(ShoppingPage.CheckoutButton)
        await InformationPage.submitValidCheckout("Any", "Name", "12323")
        await t.expect(OverviewPage.OverviewTitle.exists).ok
        await t.expect(OverviewPage.BackpackItemOver.exists).ok
        await t.expect(OverviewPage.BikeLightItemOver.exists).ok
        await t.expect(OverviewPage.BoltTShirtItemOver.exists).ok
        await t.click(OverviewPage.FinishButton)
        await t.expect(ConfirmationPage.OverviewTitle.exists).ok
    })