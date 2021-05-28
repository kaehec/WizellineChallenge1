import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingPage from '../pages/ShoppingPage'

fixture('Navigate from Products to Shopping Page Test')

    .page('https://www.saucedemo.com/')
    test('User navigates to shopping page from products page', async t => {
        await LoginPage.submitLogin("standard_user","secret_sauce")
        await t.click(ProductsPage.ShopCart)
        await t.expect(ShoppingPage.CheckoutButton.exists).ok
        
    })