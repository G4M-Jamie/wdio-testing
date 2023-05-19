describe("WDIO Test", function () {
    before(async function () {
        await browser.url('https://webdriver.io');
    });
    it("displays the WDIO Logo", async function () {
        const wdioLogo = await $(".themedImage_ToTc");
        await expect(wdioLogo).not.toBeDisplayed();
    });
});