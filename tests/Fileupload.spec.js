const {test,expect}=require('@playwright/test')

test('File upload',async({page})=>
{
    await page.goto("https://demoqa.com/upload-download", {
        waitUntil:'domcontentloaded'
    });
    await page.locator("//input[@id='uploadFile']").setInputFiles('C:/Users/mohan/Downloads/Remya_Resume.pdf')
})