import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

// Renders a main element with a child div element.
// Renders a main element with a child div element.
import { test } from '@playwright/experimental-ct-react';

test('renders the correct text', async ({ page, mount }) => {
  // Set up the page and render the Home component
  await mount(<Home />);

  // Check that the text "Hello sdd" is displayed
  const text = await page.innerText('#app > main > div');
  expect(text).toBe('Hello sdd');
});

test('applies the correct CSS class', async ({ page, mount }) => {
  // Set up the page and render the Home component
  await mount(<Home />);

  // Check that the "text-rose-500" CSS class is applied
  const style = await page.evaluate(() => {
    const element = document.querySelector('#app > main > div');
    return window.getComputedStyle(element!).color;
  });
  expect(style).toBe('rgb(239, 68, 68)');
});
