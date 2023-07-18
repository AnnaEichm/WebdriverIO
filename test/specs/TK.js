describe("TK", () => {
  it("tests TK", async () => {
    await browser.setWindowSize(1125, 969)
    await browser.url("https://www.tk.de/techniker/jetzt-zur-tk/mitglied-werden-tk-2017032?tkmcg=42443333940_650353306268&tkkwg=e_42443333940_techniker%20krankenkasse&wt_cc1=k[techniker%20krankenkasse]m[e]n[g]c[650353306268]p[]d[c]a[42443333940]t[kwd-296385596362]&gclid=CjwKCAjw-7OlBhB8EiwAnoOEkwV2zDEe6VgnTz4OcqvHiM337P4TjLQ556AsuJY7A9E4Zzjjn92j6RoC-VYQAvD_BwE")
    await expect(browser).toHaveUrl("https://www.tk.de/techniker/jetzt-zur-tk/mitglied-werden-tk-2017032?tkmcg=42443333940_650353306268&tkkwg=e_42443333940_techniker%20krankenkasse&wt_cc1=k[techniker%20krankenkasse]m[e]n[g]c[650353306268]p[]d[c]a[42443333940]t[kwd-296385596362]&gclid=CjwKCAjw-7OlBhB8EiwAnoOEkwV2zDEe6VgnTz4OcqvHiM337P4TjLQ556AsuJY7A9E4Zzjjn92j6RoC-VYQAvD_BwE")
    await browser.$("//*[@id=\"tkde-footer\"]/div[5]/div/div/div[3]/div[2]/div[1]/label").click()
    await browser.$("//*[@id=\"tkde-footer\"]/div[5]/div/div/div[3]/div[3]/div[1]/label").click()
    await browser.$("//*[@id=\"tkde-footer\"]/div[5]/div/div/div[3]/div[4]/div[1]/label").click()
    await browser.$("aria/Auswahl bestätigen ").click()
  });
});
