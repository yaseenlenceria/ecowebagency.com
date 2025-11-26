import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const page = await context.newPage();

  // Collect console messages
  const consoleMessages = [];
  page.on('console', msg => {
    consoleMessages.push({ type: msg.type(), text: msg.text() });
  });

  // Collect page errors
  const pageErrors = [];
  page.on('pageerror', error => {
    pageErrors.push(error.message);
  });

  try {
    // Navigate to the page
    console.log('Navigating to http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    // Wait a bit for everything to load
    await page.waitForTimeout(2000);

    // Take full page screenshot
    console.log('Taking full page screenshot...');
    await page.screenshot({ 
      path: 'C:\Users\Seenu\Desktop\eco-web-agency\test-homepage-full.png',
      fullPage: true 
    });

    // Take viewport screenshot
    console.log('Taking viewport screenshot...');
    await page.screenshot({ 
      path: 'C:\Users\Seenu\Desktop\eco-web-agency\test-homepage-viewport.png',
      fullPage: false 
    });

    // Get page title
    const title = await page.title();
    console.log('Page title:', title);

    // Check if Tailwind is loaded by checking for custom eco colors
    const hasEcoColors = await page.evaluate(() => {
      const styles = window.getComputedStyle(document.documentElement);
      // Check if custom CSS variables are defined
      return {
        hasEcoPrimary: styles.getPropertyValue('--color-eco-primary') !== '',
        bodyClasses: document.body.className,
        htmlClasses: document.documentElement.className
      };
    });

    console.log('\n=== VERIFICATION RESULTS ===');
    console.log('Page Title:', title);
    console.log('Custom Eco Colors:', JSON.stringify(hasEcoColors, null, 2));
    console.log('\nConsole Messages:', consoleMessages.length);
    consoleMessages.forEach(msg => {
      console.log(`  [${msg.type}] ${msg.text}`);
    });
    console.log('\nPage Errors:', pageErrors.length);
    pageErrors.forEach(err => {
      console.log(`  ERROR: ${err}`);
    });

    console.log('\n=== TEST RESULTS ===');
    if (pageErrors.length === 0) {
      console.log('✅ No JavaScript errors detected');
    } else {
      console.log('❌ JavaScript errors found:', pageErrors.length);
    }
    
    console.log('✅ Screenshots captured successfully');
    console.log('✅ Page loaded successfully');

  } catch (error) {
    console.error('❌ TEST FAILED:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
