const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Create screenshots directory
const screenshotsDir = '/tmp/playwright-screenshots';
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

async function runTests() {
  let browser;
  try {
    browser = await chromium.launch({ 
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--disable-features=VizDisplayCompositor'
      ]
    });
    const context = await browser.newContext({ 
      viewport: { width: 1366, height: 768 }
    });
    const page = await context.newPage();
    
    const results = {
      passed: [],
      failed: [],
      screenshots: []
    };

    console.log('=== TEST 1: Home Page (English Default) ===');
    await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(2000);
    
    const url = page.url();
    console.log('Current URL:', url);
    
    // Take screenshot
    const homeEnglishPath = path.join(screenshotsDir, '01-home-english.png');
    await page.screenshot({ path: homeEnglishPath });
    results.screenshots.push(homeEnglishPath);
    console.log('Screenshot saved:', homeEnglishPath);
    
    // Check for EN button (should NOT exist)
    const enButton = await page.locator('button:has-text("EN"), a:has-text("EN")').count();
    console.log('EN button count:', enButton);
    
    // Check for SV button (should exist)
    const svButton = await page.locator('button:has-text("SV"), a:has-text("SV")').first();
    const svButtonVisible = await svButton.isVisible().catch(() => false);
    console.log('SV button visible:', svButtonVisible);
    
    if (url === 'http://localhost:3002/' && enButton === 0 && svButtonVisible) {
      results.passed.push('Test 1: Home page loads in English, no EN button, SV button visible');
    } else {
      results.failed.push(`Test 1 FAILED: URL=${url}, EN buttons=${enButton}, SV visible=${svButtonVisible}`);
    }

    console.log('\n=== TEST 2: Language Switcher - Click SV ===');
    await svButton.click();
    await page.waitForTimeout(2000);
    
    const svUrl = page.url();
    console.log('Swedish URL:', svUrl);
    
    // Take screenshot of Swedish version
    const homeSwedishPath = path.join(screenshotsDir, '02-home-swedish.png');
    await page.screenshot({ path: homeSwedishPath });
    results.screenshots.push(homeSwedishPath);
    console.log('Screenshot saved:', homeSwedishPath);
    
    // Check for Swedish content
    const bodyText = await page.textContent('body');
    const hasSwedishContent = bodyText.includes('Välkommen') || bodyText.includes('Tjänster') || bodyText.includes('Kontakta');
    console.log('Has Swedish content:', hasSwedishContent);
    
    if (svUrl.includes('/sv') && hasSwedishContent) {
      results.passed.push('Test 2: Language switcher works - URL changes to /sv with Swedish content');
    } else {
      results.failed.push(`Test 2 FAILED: URL=${svUrl}, Swedish content=${hasSwedishContent}`);
    }

    console.log('\n=== TEST 3: Navigation Links (English) ===');
    // Go back to English home
    await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    // Test Services link
    const servicesLink = await page.locator('a[href="/services"], a:has-text("Services")').first();
    if (await servicesLink.isVisible().catch(() => false)) {
      await servicesLink.click();
      await page.waitForTimeout(2000);
      
      const servicesUrl = page.url();
      console.log('Services URL:', servicesUrl);
      
      const servicesScreenshot = path.join(screenshotsDir, '03-services-english.png');
      await page.screenshot({ path: servicesScreenshot });
      results.screenshots.push(servicesScreenshot);
      
      if (servicesUrl.includes('/services') && !servicesUrl.includes('404')) {
        results.passed.push('Test 3a: Services link works in English');
      } else {
        results.failed.push(`Test 3a FAILED: Services URL=${servicesUrl}`);
      }
    }
    
    // Test About link
    await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    const aboutLink = await page.locator('a[href="/about"], a:has-text("About")').first();
    if (await aboutLink.isVisible().catch(() => false)) {
      await aboutLink.click();
      await page.waitForTimeout(2000);
      
      const aboutUrl = page.url();
      console.log('About URL:', aboutUrl);
      
      const aboutScreenshot = path.join(screenshotsDir, '04-about-english.png');
      await page.screenshot({ path: aboutScreenshot });
      results.screenshots.push(aboutScreenshot);
      
      if (aboutUrl.includes('/about') && !aboutUrl.includes('404')) {
        results.passed.push('Test 3b: About link works in English');
      } else {
        results.failed.push(`Test 3b FAILED: About URL=${aboutUrl}`);
      }
    }
    
    // Test Contact link
    await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    const contactLink = await page.locator('a[href="/contact"], a:has-text("Contact")').first();
    if (await contactLink.isVisible().catch(() => false)) {
      await contactLink.click();
      await page.waitForTimeout(2000);
      
      const contactUrl = page.url();
      console.log('Contact URL:', contactUrl);
      
      const contactScreenshot = path.join(screenshotsDir, '05-contact-english.png');
      await page.screenshot({ path: contactScreenshot });
      results.screenshots.push(contactScreenshot);
      
      if (contactUrl.includes('/contact') && !contactUrl.includes('404')) {
        results.passed.push('Test 3c: Contact link works in English');
      } else {
        results.failed.push(`Test 3c FAILED: Contact URL=${contactUrl}`);
      }
    }

    console.log('\n=== TEST 4: Navigation Links (Swedish) ===');
    await page.goto('http://localhost:3002/sv', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    // Test Tjänster (Services) link
    const tjansterLink = await page.locator('a[href="/sv/tjanster"], a:has-text("Tjänster")').first();
    if (await tjansterLink.isVisible().catch(() => false)) {
      await tjansterLink.click();
      await page.waitForTimeout(2000);
      
      const tjansterUrl = page.url();
      console.log('Tjänster URL:', tjansterUrl);
      
      const tjansterScreenshot = path.join(screenshotsDir, '06-services-swedish.png');
      await page.screenshot({ path: tjansterScreenshot });
      results.screenshots.push(tjansterScreenshot);
      
      if (tjansterUrl.includes('/sv/tjanster') && !tjansterUrl.includes('404')) {
        results.passed.push('Test 4a: Tjänster link works in Swedish');
      } else {
        results.failed.push(`Test 4a FAILED: Tjänster URL=${tjansterUrl}`);
      }
    }
    
    // Test Om oss (About) link
    await page.goto('http://localhost:3002/sv', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    const omOssLink = await page.locator('a[href="/sv/om-oss"], a:has-text("Om oss")').first();
    if (await omOssLink.isVisible().catch(() => false)) {
      await omOssLink.click();
      await page.waitForTimeout(2000);
      
      const omOssUrl = page.url();
      console.log('Om oss URL:', omOssUrl);
      
      const omOssScreenshot = path.join(screenshotsDir, '07-about-swedish.png');
      await page.screenshot({ path: omOssScreenshot });
      results.screenshots.push(omOssScreenshot);
      
      if (omOssUrl.includes('/sv/om-oss') && !omOssUrl.includes('404')) {
        results.passed.push('Test 4b: Om oss link works in Swedish');
      } else {
        results.failed.push(`Test 4b FAILED: Om oss URL=${omOssUrl}`);
      }
    }
    
    // Test Kontakt (Contact) link
    await page.goto('http://localhost:3002/sv', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    const kontaktLink = await page.locator('a[href="/sv/kontakt"], a:has-text("Kontakt")').first();
    if (await kontaktLink.isVisible().catch(() => false)) {
      await kontaktLink.click();
      await page.waitForTimeout(2000);
      
      const kontaktUrl = page.url();
      console.log('Kontakt URL:', kontaktUrl);
      
      const kontaktScreenshot = path.join(screenshotsDir, '08-contact-swedish.png');
      await page.screenshot({ path: kontaktScreenshot });
      results.screenshots.push(kontaktScreenshot);
      
      if (kontaktUrl.includes('/sv/kontakt') && !kontaktUrl.includes('404')) {
        results.passed.push('Test 4c: Kontakt link works in Swedish');
      } else {
        results.failed.push(`Test 4c FAILED: Kontakt URL=${kontaktUrl}`);
      }
    }

    console.log('\n=== TEST 5: Direct URL Access ===');
    await page.goto('http://localhost:3002/about', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    const directAboutUrl = page.url();
    const directAboutScreenshot = path.join(screenshotsDir, '09-direct-about-english.png');
    await page.screenshot({ path: directAboutScreenshot });
    results.screenshots.push(directAboutScreenshot);
    
    if (directAboutUrl.includes('/about') && !directAboutUrl.includes('404')) {
      results.passed.push('Test 5a: Direct URL /about loads English');
    } else {
      results.failed.push(`Test 5a FAILED: Direct about URL=${directAboutUrl}`);
    }
    
    await page.goto('http://localhost:3002/sv/om-oss', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    const directOmOssUrl = page.url();
    const directOmOssScreenshot = path.join(screenshotsDir, '10-direct-omoss-swedish.png');
    await page.screenshot({ path: directOmOssScreenshot });
    results.screenshots.push(directOmOssScreenshot);
    
    if (directOmOssUrl.includes('/sv/om-oss') && !directOmOssUrl.includes('404')) {
      results.passed.push('Test 5b: Direct URL /sv/om-oss loads Swedish');
    } else {
      results.failed.push(`Test 5b FAILED: Direct om-oss URL=${directOmOssUrl}`);
    }

    console.log('\n=== TEST 6: Language Persistence ===');
    await page.goto('http://localhost:3002/sv', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(1500);
    
    // Navigate to multiple pages and check language persists
    const links = await page.locator('nav a').all();
    let persistenceCheck = true;
    
    for (let i = 0; i < Math.min(3, links.length); i++) {
      try {
        const href = await links[i].getAttribute('href');
        if (href && href.startsWith('/sv')) {
          await page.goto(`http://localhost:3002${href}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
          await page.waitForTimeout(1000);
          const currentUrl = page.url();
          if (!currentUrl.includes('/sv')) {
            persistenceCheck = false;
            console.log(`Persistence failed at: ${currentUrl}`);
            break;
          }
        }
      } catch (e) {
        console.log('Error checking link:', e.message);
      }
    }
    
    if (persistenceCheck) {
      results.passed.push('Test 6: Language persistence works across navigation');
    } else {
      results.failed.push('Test 6 FAILED: Language does not persist across navigation');
    }

    console.log('\n=== TEST 7: Check for 404 Errors ===');
    const testPages = [
      'http://localhost:3002/',
      'http://localhost:3002/services',
      'http://localhost:3002/about',
      'http://localhost:3002/contact',
      'http://localhost:3002/sv',
      'http://localhost:3002/sv/tjanster',
      'http://localhost:3002/sv/om-oss',
      'http://localhost:3002/sv/kontakt'
    ];
    
    let no404Errors = true;
    for (const testUrl of testPages) {
      await page.goto(testUrl, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await page.waitForTimeout(1000);
      const pageContent = await page.textContent('body');
      if (pageContent.includes('404') || pageContent.includes('Not Found')) {
        console.log(`404 Error found at: ${testUrl}`);
        no404Errors = false;
        results.failed.push(`Test 7 FAILED: 404 error at ${testUrl}`);
      }
    }
    
    if (no404Errors) {
      results.passed.push('Test 7: No 404 errors found on main pages');
    }

    // Print results
    console.log('\n' + '='.repeat(60));
    console.log('TEST RESULTS SUMMARY');
    console.log('='.repeat(60));
    console.log(`\nPASSED (${results.passed.length}):`);
    results.passed.forEach(p => console.log(`  ✓ ${p}`));
    
    console.log(`\nFAILED (${results.failed.length}):`);
    results.failed.forEach(f => console.log(`  ✗ ${f}`));
    
    console.log(`\nSCREENSHOTS (${results.screenshots.length}):`);
    results.screenshots.forEach(s => console.log(`  📸 ${s}`));
    
    console.log('\n' + '='.repeat(60));
    
    // Save results to JSON
    fs.writeFileSync('/tmp/test-results.json', JSON.stringify(results, null, 2));
    console.log('Results saved to: /tmp/test-results.json');
    
    // Close browser
    await browser.close();
    
    // Exit with appropriate code
    process.exit(results.failed.length > 0 ? 1 : 0);
    
  } catch (error) {
    console.error('Fatal test error:', error);
    if (browser) {
      await browser.close();
    }
    process.exit(1);
  }
}

runTests();
