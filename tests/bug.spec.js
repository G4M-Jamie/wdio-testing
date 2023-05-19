describe("Scroll Bug", function () {
	before(async function () {
		await browser.url("/");
		await $(".g4m-footer").scrollIntoView();
	});
	it("displays the Company Number", async function () {
		const companyInfo = await $(".footer-info-items");
		await expect(companyInfo).toHaveTextContaining("03113256");
	});
});