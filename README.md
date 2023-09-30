This is a [Next.js] application and testing it with cypress testing framework.

## Getting Started

First, install the next.js application:

```bash
npx create-next-app@latest
```

After installing next.js, install the cypress framework in the next.js application folder.

```bash
npm install cypress --save-dev
```

Open the `package.json` and add a script `"cypress:open": "cypress open"` and save it.

Now try to run the application in one terminal and in second run cypress.

```bash
npm run dev
```

```bash
npm run cypress:open
```

Now, if you see this error

```bash
Unable to compile Typscript:
Option 'bundler' can be only be used when 'module' is set to 'es2015'
```

Then, open tsconfig.json and change `"moduleResolution": "bundler"` to `"moduleResolution": "node"` save it.

Run cypress again. It will work!!
