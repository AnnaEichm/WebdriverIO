describe("checkbox", () => {
  it("tests checkbox", async () => {
    await browser.setWindowSize(562, 969)
    await browser.url("https://the-internet.herokuapp.com/")

   await browser.$("aria/Checkboxes").click()

  //await browser.$("//*[@id=\"checkboxes\"]/input[1]").click()
   await browser.pause(5000)
    await browser.$("//form[@id='checkboxes']/input[1]").click()
    await browser.pause(3000)

    await browser.$("//form[@id='checkboxes']/input[2]").click()
    await browser.pause(3000)

  });
});


