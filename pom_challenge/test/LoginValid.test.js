import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

fixture('Valid Login Test')

    .page('https://www.saucedemo.com/')
test('User logs in using valid credentials', async t => {
    await LoginPage.submitLogin("standard_user","secret_sauce")
   // await t.expect(ProductsPage.Title.exists).ok
   await t.expect(ProductsPage.Title.textContent).eql('Products')
})