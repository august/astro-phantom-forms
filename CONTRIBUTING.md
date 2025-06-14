# 👻 Contributing to astro-phantom-forms

Hey there, ghostbuster! First off, **thank you** — whether you’re here to fork the code, open a bug, suggest a weird feature, or just kick the tires and copy-paste into your own Astro site:

### You’re awesome. We see you. We appreciate you.

---

## 📦 What is This?

**astro-phantom-forms** is a micro-library for Astro that makes your forms:
- Invisible to bots 🤖
- Friendly to humans 🫶
- Hydrated on the client only 💧

You wrap a form in a `<PhantomForm>` component, and it doesn’t exist until the browser says so. It's like a cloaking device for login pages. No CAPTCHA. No spam. No “enhance your SEO now!” emails.

---

## 🧠 What Makes This Project... Weird?

- ✅ It works by skipping SSR entirely
- ✅ It hydrates forms only on the client
- ✅ It *ghosts* bots completely

We chose **simplicity + stealth** over complicated SSR testing and hydration gymnastics.

---

## 🧪 About the Tests

You might notice that we don’t render components in our tests.

That’s **on purpose**.

### Our tests:
- Read the raw `.astro` file
- Check that it uses a `client:*` directive
- Confirm that `mode="server"` throws an error

### Why so basic?

Because SSR component testing in Astro requires experimental containers, jsdom patches, and a dozen Band-Aids.

We’d rather test what matters and skip the misery.

If you want to add full rendering tests in a PR, go for it — but **please don’t remove the simple ones.** They run fast, never flake, and test exactly what needs testing.

---

## 🧰 For Contributors

1. Fork the repo
2. Create a new branch (e.g. `fix/ghost-glitch`)
3. Write clean, focused code with helpful comments
4. Keep the sass — but not at the cost of clarity
5. Open a PR with a clear title and description
6. Add or update tests when it makes sense

---

## 🪄 For Non-Contributors

Even if you’re not contributing code, you’re still part of this ghost-hunting team:

- Open an issue if something breaks
- Suggest a new hydration mode
- Tell us if the README confused you
- Share the project if it helped you
- Yell into the void if you hate CAPTCHAs too

You’re already contributing just by showing up. Thank you.

---

## 🔥 Style Guide (because chaos is only fun when it’s intentional)

- Prefer minimal code over clever code
- Don’t use a framework if a slot and a comment will do
- Comment like the next dev is sleep-deprived (because they are)
- Make the README entertaining — nobody reads dry ones

---

## 🙅 Code of Conduct

Be cool. No jerks.
All identities and skill levels welcome.
If you're here to help, learn, or laugh — you're in the right place.

---

## 🧪 Test Command

```bash
npm install
npx vitest run


## 📣 Final Thanks

To every dev who builds honest tools.
To every user who refuses to give bots an inch.
To everyone who’s ever screamed at a reCAPTCHA crosswalk.

We see you. We built this for you.

Let’s make the web a little more human — and a lot less bot-infested.

🖤

— Team Phantom