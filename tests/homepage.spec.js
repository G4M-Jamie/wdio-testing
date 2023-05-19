describe("WDIO Test", function () {
    before(async function () {
        await browser.pause(8000);
        await browser.url('https://webdriver.io');
    });
    it("displays the WDIO Logo", async function () {
        const wdioLogo = await $(".themedImage_ToTc");
        await expect(wdioLogo).toBeDisplayed();
    });
});