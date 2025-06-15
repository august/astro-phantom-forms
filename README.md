![](./phantom.webp)

# 👻 astro-phantom-forms

Hide your forms from bots. Hydrate for humans.  
No CAPTCHAs. No reCAPTCHAs. No "click all the fire hydrants."  
Just pure, static stealth.

![MIT License](https://img.shields.io/badge/license-MIT-green.svg)
![Built for Astro](https://img.shields.io/badge/astro-forms-orange)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)

---

## ⚡ Quick Install

```bash
# From npm registry
npm install astro-phantom-forms

# Or directly from GitHub
npm install github:username/astro-phantom-forms
```

---

## 🧪 Quick Use

### Standard Import

```astro
---
// src/pages/login.astro
import { PhantomForm } from 'astro-phantom-forms';
import LoginForm from '../components/LoginForm.jsx';
---

<PhantomForm mode="visible">
  <LoginForm />
</PhantomForm>
```

### Direct Component Import

You can also import the component directly:

```astro
---
// src/pages/login.astro
import PhantomForm from 'astro-phantom-forms/components/PhantomForm.astro';
import LoginForm from '../components/LoginForm.jsx';
---

<PhantomForm mode="visible">
  <LoginForm />
</PhantomForm>
```

### Development Using Local Link

For local development across projects:

```bash
# In the astro-phantom-forms directory
npm run build
npm link

# In your Astro project directory
npm link astro-phantom-forms
```

This wraps your form in a **client-only hydration island** — the form doesn't exist in the SSR HTML.  
Bots scraping the page get *nothing*. Humans? They get the goods.

---

## 💡 What It Does

- 💀 **No SSR output** — Form markup is hidden from scrapers.
- 🔥 **Client-only hydration** — Renders when the browser says so.
- 🛡️ **Invisible to bots** — No honeypots. No JavaScript traps. No begging.
- 🧠 **Astro-native** — Plays nice with React, Vue, Svelte, Solid, and your weird custom setup.

---

## 🧃 Supported Hydration Modes

| Mode        | When It Hydrates                   | Best Use Case                        |
|-------------|-------------------------------------|---------------------------------------|
| `load`      | Immediately on page load            | Fast interactivity                   |
| `idle`      | When the browser is chillin'        | Background or non-urgent forms       |
| `visible`   | When it scrolls into the viewport   | Signup/login tucked in page footer   |

---

## 🧪 Testing (Because We Like Green Checkmarks)

```bash
npx vitest run
```

We don't SSR-render `.astro` components in tests — that's a war crime.  
Instead, we test hydration behavior directly from the source.  
It's fast. It's stable. It works.

See `CONTRIBUTING.md` for the full nerd-rationale.

---

## 🙅‍♂️ Not For Devs Who Say:

> "Let me kiss your boots, mistress. Please take me to your Spambot Red Room."

If you love CAPTCHAs, honeypot fields, and regex spaghetti... this ain't for you.  
We believe in **stealth over struggle**. Forms should be invisible until they matter — not a minefield of JS gymnastics.

---

## 🙏 Thanks

To every developer who's ever screamed:

> "I JUST WANT A FORM THAT DOESN'T GET ABUSED!"

This one's for you.

---

## 🧠 Bonus Ideas?

Want:
- A CLI?
- A demo site?
- Animated ghosts?

Open an issue. Make a pull request. Or whisper to us through a data island.

🖤  
— The Phantom Team