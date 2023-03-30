import { test, expect } from '@playwright/test';

test('homepage test', async ({ page }) => {

  await page.goto('https://pizza-cmmerce.netlify.app/');
  await expect(page).toHaveTitle('Vite + React + TS')

  // Categories test
  const categories = page.locator('.categories');
  await expect(categories.locator('ul > li')).toContainText(['همه', 'گوشت', 'سبزیجات', 'گریل', 'مخلوط', 'آمریکایی'])
  await expect(categories.getByText("همه")).toHaveClass("active")

  const activated = page.locator('.categories');
  await activated.getByText('گوشت').click();
  await expect(activated.getByText("گوشت")).toHaveClass("active")
  await activated.getByText('سبزیجات').click();
  await expect(activated.getByText("سبزیجات")).toHaveClass("active")


  // Sort test
  const Sort = page.locator('.sort__label');
  await Sort.getByText('پرطرفدار (High);').click();

  const Sorts = page.locator('.sort__popup');
  await expect(Sorts.locator('ul > li')).toContainText(['پرطرفدار (High);', 'پرطرفدار (Low)', 'цене (High)', 'цене (Low)', 'алфавиту (High)', 'алфавиту (Low)']);
  await Sorts.getByText('پرطرفدار (Low)').click();
  await Sort.getByText('پرطرفدار (Low)')


});



test('Cart page test', async ({ page }) => {

  await page.goto('https://pizza-cmmerce.netlify.app/');
  await page.locator('.button--cart').click()
  await expect(page).toHaveURL("https://pizza-cmmerce.netlify.app/cart");

  const HaveaText = page.locator('.cart--empty');
  await expect(HaveaText.locator('h2')).toHaveText("سبد خالی است😕")
  await expect(HaveaText.locator('p')).toHaveText("به احتمال زیاد هنوز پیتزا سفارش نداده اید .برای سفارش پیتزا به صفحه اصلی بروید")
  await expect(HaveaText.locator('a > span > span')).toHaveText("صفحه اصلی")
  await HaveaText.getByText("صفحه اصلی").click()
  await expect(page).toHaveURL("https://pizza-cmmerce.netlify.app/");

});
