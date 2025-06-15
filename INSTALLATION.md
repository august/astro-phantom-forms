# Installation Guide for astro-phantom-forms

This guide covers different installation methods and troubleshooting tips.

## Standard NPM Installation

```bash
npm install astro-phantom-forms
```

Then use it in your Astro project:

```astro
---
import { PhantomForm } from 'astro-phantom-forms';
import MyForm from '../components/MyForm';
---

<PhantomForm mode="visible">
  <MyForm />
</PhantomForm>
```

## Local Development (npm link)

If you're developing both this library and an Astro project that uses it, you can use npm link:

### Step 1: Link the Library

```bash
# In the astro-phantom-forms directory
npm run build  # Important! Build first
npm link
```

### Step 2: Link to Your Project

```bash
# In your Astro project directory
npm link astro-phantom-forms
```

### Step 3: Use It

```astro
---
import { PhantomForm } from 'astro-phantom-forms';
---

<PhantomForm mode="visible">
  <form><!-- Your form here --></form>
</PhantomForm>
```

## Troubleshooting

### "Cannot find module" Errors

If you're getting "Cannot find module" errors:

1. Make sure you've built the package (`npm run build`)
2. Check that you're importing correctly (note the path):
   ```astro
   // Correct
   import { PhantomForm } from 'astro-phantom-forms';
   
   // Or direct import
   import PhantomForm from 'astro-phantom-forms/components/PhantomForm.astro';
   ```

3. If using npm link, ensure:
   - You ran `npm run build` in the library first
   - You ran `npm link` in the library directory
   - You ran `npm link astro-phantom-forms` in your project
   - You restart the Astro dev server after linking

### TypeScript Path Resolution Issues

If TypeScript is having trouble resolving paths:

1. Add this to your tsconfig.json:
   ```json
   {
     "compilerOptions": {
       "baseUrl": ".",
       "paths": {
         "astro-phantom-forms": ["node_modules/astro-phantom-forms/dist"]
       }
     }
   }
   ```

2. Restart your TypeScript server.

### Debugging npm link Issues

If npm link isn't working:

```bash
# In the astro-phantom-forms directory
npm run build
npm unlink
npm link

# In your Astro project
npm unlink astro-phantom-forms
rm -rf node_modules/.bin/astro-phantom-forms  # Clean up any stale links
npm link astro-phantom-forms
```

Then restart your dev server.

## Direct Import vs Named Import

Both of these work:

```astro
// Named import (recommended)
import { PhantomForm } from 'astro-phantom-forms';

// Direct import (alternative)
import PhantomForm from 'astro-phantom-forms/components/PhantomForm.astro';
```

Use the direct import if you're having path resolution issues or if you want to be explicit about the component path.