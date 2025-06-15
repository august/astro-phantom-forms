# 👻 Troubleshooting astro-phantom-forms

## Common Issues and Solutions

### Form Doesn't Appear

**Symptoms:** The form is completely missing from the page.

**Possible Solutions:**
1. **Check hydration mode:** Make sure you're using a valid mode (`load`, `idle`, or `visible`).
2. **Client component issues:** If using a framework component (React, Vue, etc.), ensure you've added the proper `client:` directive.
3. **JavaScript disabled:** PhantomForm requires client-side JavaScript to work.

Example fix:
```astro
<!-- If this isn't working -->
<PhantomForm>
  <MyReactForm />
</PhantomForm>

<!-- Try this instead -->
<PhantomForm mode="load">
  <MyReactForm client:only="react" />
</PhantomForm>
```

### Import Errors

**Symptoms:** You see errors like "Cannot find module 'astro-phantom-forms'" or similar.

**Possible Solutions:**
1. **Check installation:** Run `npm list astro-phantom-forms` to verify installation.
2. **Try direct import:** Import the component directly:
   ```astro
   import PhantomForm from 'astro-phantom-forms/components/PhantomForm.astro';
   ```
3. **Reinstall:** Try `npm uninstall astro-phantom-forms && npm install astro-phantom-forms`.
4. **Clear cache:** Try `rm -rf node_modules/.cache` and restart your dev server.

### TypeScript Errors

**Symptoms:** TypeScript complains about imports or types.

**Possible Solutions:**
1. **Update tsconfig.json:** Make sure your tsconfig includes:
   ```json
   {
     "compilerOptions": {
       "types": ["astro/client"]
     }
   }
   ```
2. **Add declare module:** If using direct import, add:
   ```typescript
   // src/env.d.ts
   declare module 'astro-phantom-forms/components/PhantomForm.astro' {
     const component: any;
     export default component;
   }
   ```

### Errors with `server` Mode

**Symptoms:** You see error about `mode="server"` not being supported.

**Solution:** PhantomForm intentionally blocks server mode as it defeats the purpose of the component. Use `load`, `idle`, or `visible` instead.

### Local Development Issues

**Symptoms:** When using npm link, changes aren't reflected.

**Solutions:**
1. **Rebuild after changes:** Run `npm run build` in the library directory after making changes.
2. **Check file paths:** Ensure paths in package.json and imports match.
3. **Clear cache:** Restart dev server and clear any caches.

Complete workflow:
```bash
# In library directory
npm run build
npm unlink
npm link

# In project directory
npm unlink astro-phantom-forms
npm link astro-phantom-forms
# Restart dev server
```

### Compatibility Issues

**Symptoms:** PhantomForm doesn't work with certain frameworks or components.

**Solutions:**
1. **Check client directive:** Make sure you're using the correct client directive:
   ```astro
   <PhantomForm mode="visible">
     <ReactComponent client:only="react" />
   </PhantomForm>
   ```
2. **Order matters:** Make sure PhantomForm is the outermost wrapper.

## Still Having Issues?

Open an issue on our GitHub repository with:
1. Your Astro version
2. Your astro-phantom-forms version
3. A minimal reproduction example
4. Error messages from the console

Remember: astro-phantom-forms intentionally hides your form in SSR output, so if you "View Source" on the page, the form won't be there. That's a feature, not a bug!