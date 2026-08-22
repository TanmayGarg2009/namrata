const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\TANMAY GARG\\.gemini\\antigravity\\brain\\d996dc81-ea20-4df7-9a29-5b5b52bf4ac3';

async function runVerification() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 }
  });

  console.log('Navigating to http://localhost:4173...');
  await page.goto('http://localhost:4173');
  await page.waitForTimeout(1000);

  // 1. Screenshot Intro
  console.log('Capturing Intro screenshot...');
  await page.screenshot({ path: path.join(artifactDir, 'intro_screen.png') });

  // 2. Wait for Enter button and click it
  console.log('Waiting for Enter button...');
  await page.waitForSelector('text=Enter the Celebration', { timeout: 6000 });
  await page.click('text=Enter the Celebration');
  await page.waitForTimeout(1500);

  // 3. Capture Hero Section
  console.log('Capturing Hero Section...');
  await page.screenshot({ path: path.join(artifactDir, 'hero_desktop.png') });

  // Check horizontal overflow
  const isOverflowingDesktop = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('Desktop Horizontal Overflow:', isOverflowingDesktop ? 'FAIL (overflowing)' : 'PASS (no overflow)');

  // 4. Test Candle Interactions
  console.log('Testing Candle blowing...');
  const blowBtn = await page.$('text=Blow Candles');
  if (blowBtn) {
    await blowBtn.click();
    await page.waitForTimeout(600);
    console.log('Candles blown out successfully');
  }

  // 5. Scroll to Make a Wish & Test
  console.log('Testing Make a Wish...');
  await page.evaluate(() => {
    const el = document.getElementById('wish');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(800);
  await page.click('#wish button');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(artifactDir, 'wish_section.png') });

  // 6. Scroll to Wishes Grid
  console.log('Capturing Wishes Grid...');
  await page.evaluate(() => {
    const el = document.getElementById('wishes-grid');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(artifactDir, 'wishes_grid.png') });

  // 7. Scroll to Surprise Envelope & Open
  console.log('Testing Envelope unboxing...');
  await page.evaluate(() => {
    const el = document.getElementById('surprise');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(800);
  await page.click('#surprise .group');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(artifactDir, 'envelope_opened.png') });

  // 8. Scroll to Final Section
  console.log('Capturing Final Section...');
  await page.evaluate(() => {
    const el = document.getElementById('final');
    if (el) el.scrollIntoView();
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(artifactDir, 'final_celebration.png') });

  // 9. Mobile Responsive Tests (iPhone 375px & Small 320px)
  console.log('Testing Mobile Viewport 375x667...');
  await page.setViewportSize({ width: 375, height: 667 });
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(artifactDir, 'mobile_hero_375.png') });

  const isOverflowingMobile = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('Mobile 375px Horizontal Overflow:', isOverflowingMobile ? 'FAIL (overflowing)' : 'PASS (no overflow)');

  console.log('Testing Small Mobile Viewport 320x568...');
  await page.setViewportSize({ width: 320, height: 568 });
  await page.waitForTimeout(500);
  const isOverflowingSmall = await page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
  console.log('Mobile 320px Horizontal Overflow:', isOverflowingSmall ? 'FAIL (overflowing)' : 'PASS (no overflow)');

  console.log('Full Page Snapshot...');
  await page.setViewportSize({ width: 1200, height: 800 });
  await page.screenshot({ path: path.join(artifactDir, 'full_page.png'), fullPage: true });

  await browser.close();
  console.log('Verification finished successfully!');
}

runVerification().catch((err) => {
  console.error('Verification error:', err);
  process.exit(1);
});
