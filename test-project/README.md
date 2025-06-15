# Astro Phantom Forms Test Project

This is a minimal Astro project that demonstrates how to use the `astro-phantom-forms` package.

## Setup

1. First, build the phantom forms package:

```bash
# In the parent directory (astro-phantom-forms)
npm run build
```

2. Link the package to this test project:

```bash
# In the parent directory (astro-phantom-forms)
npm link

# In this directory (test-project)
npm link astro-phantom-forms
```

3. Start the development server:

```bash
npm run dev
```

4. Visit http://localhost:3000 to see the test pages

## What to Test

1. Verify that forms are not present in the HTML source (View Page Source)
2. Verify that forms appear in the browser after hydration
3. Check the browser console to see when forms appear
4. Try all three different hydration modes
5. Test both import methods

## Pages

- `/` - Home page with links to test pages
- `/standard-import` - Tests the standard named import
- `/direct-import` - Tests the direct component import
- `/hydration-modes` - Tests all three hydration modes

## Notes

- This project is designed to be simple and focused on testing
- No server endpoints are implemented (form submissions will 404)
- Check the browser console for debugging information