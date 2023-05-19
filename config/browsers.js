const commonProperties = {
	"acceptInsecureCerts": true,
	// If a HOST_NAME Env variable exists, use that.
	// If not, use "localhost" by default,
	// This is required for running tests via Docker
	"hostname": process.env.HOST_NAME || "localhost"
};

const chrome = {
	...commonProperties,
	"browserName": "chrome",
	"goog:chromeOptions": {
		"args": ["--incognito"]
	}
};

const firefox = {
	...commonProperties,
	"browserName": "firefox"
};

const ie11 = {
	// https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/IE/Options.html
	"browserName": "internet explorer",
	"se:ieOptions": {
		"ignoreProtectedModeSettings": true,
		"ensureCleanSession": true,
		"ignoreZoomSetting": true
	}

};

const safari = {
	"browserName": "safari"
};

// Headless Browsers:
// These are browsers that run "in the background", so to speak.
// An actual browser window won't popup, but screenshots/video reporting are still supported.
// https://en.wikipedia.org/wiki/Headless_browser

const chromeHeadless = {
	...commonProperties,
	"browserName": "chrome",
	"goog:chromeOptions": {
		//"binary": "./usr/bin/google-chrome-stable",
		"args": [
			"--no-sandbox",
			"--disable-dev-shm-usage",
			"--headless",
			"--window-size=1920,1080",
		]
	}
};

const firefoxHeadless = {
	...commonProperties,
	"browserName": "firefox",
	"moz:firefoxOptions": {
		"args": ["--headless"]
		// Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1
	}
};

// Mobile Emulation in Desktop Browsers:
const chromeMobile = {
	...commonProperties,
	"browserName": "chrome",
	"goog:chromeOptions": {
		"mobileEmulation": {
			"deviceName": "iPhone 8 Plus"
		},
		"args": ["--window-size=414,736"]
	}
};

const chromeMobileHeadless = {
	...commonProperties,
	"browserName": "chrome",
	"goog:chromeOptions": {
		"mobileEmulation": {
			"deviceName": "iPhone 8 Plus"
		},
		"args": [
			"--headless",
			"--disable-gpu",
			"--no-sandbox",
			"--disable-dev-shm-usage",
			"--window-size=414,736",
			"--user-agent=Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
		]
	}
};

const fireFoxMobile = {
	...commonProperties,
	"browserName": "firefox",
	"moz:firefoxOptions": {
		prefs: {
			"general.useragent.override": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
		},
		"args": ["-width=375", "-height=667"]
	}
};

const fireFoxMobileHeadless = {
	...commonProperties,
	"browserName": "firefox",
	"moz:firefoxOptions": {
		prefs: {
			"general.useragent.override": "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1",
		},
		"args": ["-width=375", "-height=667", "--headless"]
	}
};

module.exports = {
	chrome,
	firefox,
	ie11,
	safari,
	chromeHeadless,
	firefoxHeadless,
	chromeMobile,
	chromeMobileHeadless,
	fireFoxMobile,
	fireFoxMobileHeadless
};