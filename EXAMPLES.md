# 👻 astro-phantom-forms Examples

Here are practical examples of how to use `PhantomForm` in your Astro project.

## Basic Example

```astro
---
// src/pages/index.astro
import { PhantomForm } from 'astro-phantom-forms';
---

<html>
  <head>
    <title>Protected Form Example</title>
  </head>
  <body>
    <h1>Welcome to my site</h1>
    
    <PhantomForm mode="visible">
      <form action="/api/submit" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
    </PhantomForm>
  </body>
</html>
```

## With React Component

```astro
---
// src/pages/contact.astro
import { PhantomForm } from 'astro-phantom-forms';
import ContactForm from '../components/ContactForm.jsx';
---

<html>
  <head>
    <title>Contact Us</title>
  </head>
  <body>
    <h1>Contact Us</h1>
    <p>Fill out the form below, and we'll get back to you.</p>
    
    <PhantomForm mode="idle">
      <ContactForm client:only="react" />
    </PhantomForm>
  </body>
</html>
```

## Different Hydration Modes

### Load Mode (Fastest)

```astro
<PhantomForm mode="load">
  <form><!-- Important forms that need to be available immediately --></form>
</PhantomForm>
```

### Idle Mode (Background)

```astro
<PhantomForm mode="idle">
  <form><!-- Forms that can wait until the browser is idle --></form>
</PhantomForm>
```

### Visible Mode (On-Demand)

```astro
<PhantomForm mode="visible">
  <form><!-- Forms that only hydrate when scrolled into view --></form>
</PhantomForm>
```

## With Third-Party Components

### With Vue Form Component

```astro
---
import { PhantomForm } from 'astro-phantom-forms';
import VueForm from '../components/VueForm.vue';
---

<PhantomForm mode="visible">
  <VueForm client:only="vue" />
</PhantomForm>
```

### With Svelte Form Component

```astro
---
import { PhantomForm } from 'astro-phantom-forms';
import SvelteForm from '../components/SvelteForm.svelte';
---

<PhantomForm mode="visible">
  <SvelteForm client:only="svelte" />
</PhantomForm>
```

## Advanced: Wrapping Multiple Forms

```astro
---
import { PhantomForm } from 'astro-phantom-forms';
---

<div class="form-container">
  <h2>Contact Form</h2>
  <PhantomForm mode="visible">
    <form id="contact"><!-- Contact form fields --></form>
  </PhantomForm>
  
  <h2>Newsletter Signup</h2>
  <PhantomForm mode="idle">
    <form id="newsletter"><!-- Newsletter form fields --></form>
  </PhantomForm>
</div>
```

## Debugging Tip

If your form isn't appearing, check the browser console. There should be no errors. If you see any, make sure:

1. You're using a valid hydration mode (`load`, `idle`, or `visible`)
2. You're not trying to use `server` mode (which will throw an error)
3. The form component you're wrapping is client-renderable