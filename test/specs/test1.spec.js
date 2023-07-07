describe('Demo tests', function(){
it('My fisrt test', async ()=> {

    await browser.url('https://www.google.com')
   
    await $('[class="tHlp8d"]').click();
    await browser.pause(1000)

    await  $('[name="q"]').setValue("WebdriverIO")
    await browser.keys("Enter")

    await browser.pause(5000)





})

})