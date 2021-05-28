import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingPage from '../pages/ShoppingPage'

fixture('Add single item to Shopping Cart Test')

    .page('https://www.saucedemo.com/')
    test('User add single item to Shopping Cart Test', async t => {
        await LoginPage.submitLogin("standard_user","secret_sauce")
        await ProductsPage.AddItems("Single")
        await t.expect(ShoppingPage.BackpackItemCart.exists).ok
    
    })