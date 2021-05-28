import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingPage from '../pages/ShoppingPage'

fixture('Add multiple items to Shopping Cart Test')

    .page('https://www.saucedemo.com/')
    test('User add multiple items to Shopping Cart Test', async t => {
        await LoginPage.submitLogin("standard_user","secret_sauce")
        await ProductsPage.AddItems("Multiple")
        t.expect(ShoppingPage.BackpackItemCart.exists).ok
        t.expect(ShoppingPage.BikeLightItemCart.exists).ok
        t.expect(ShoppingPage.BackpackItemCart.exists).ok
    })