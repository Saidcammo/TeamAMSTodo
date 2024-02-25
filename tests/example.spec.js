
const { test, expect } = require('@playwright/test');


test('Ad Task', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  let userInput = await page.locator('#text-input');

  await userInput.fill('Said');
  await page.keyboard.press('Enter');
  
  let taskList = await page.locator('#list li');
  await expect(taskList).toHaveText('Said');
});


test('Add Task(0items left)', async ({ page }) => {

  await page.goto('http://127.0.0.1:5500/');

  let userInput = await page.locator('#text-input');

  await userInput.fill('Abdul');
  await page.keyboard.press('Enter');

  let itemCounter = await page.locator('#number-of-items');
  await expect(itemCounter).toHaveText('1');

  let taskCheck = await page.locator('#list input');
  await taskCheck.click(); 
  await expect(itemCounter).toHaveText('0');
});


test('Add 3 task, check 1 item and show 2 items left', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  let userInput = await page.locator('#text-input');

  await userInput.fill('Said');
  await page.keyboard.press('Enter');

  await userInput.fill('Mustafa');
  await page.keyboard.press('Enter');

  let checkInput = await page.locator('#text-input');
  await checkInput.fill('Abdul');
  await page.keyboard.press('Enter');

  let itemCounter = await page.locator('#number-of-items');
  await expect(itemCounter).toHaveText('3');

  let taskCheck = await page.locator('#list input').first();
  await taskCheck.click();
  await expect(itemCounter).toHaveText('2');
});