## Genesysone

To install, first install:
* brew: follow in instructions at:  `https://brew.sh/`

Then copy and paste these commands in `terminal.app`:
* nodejs: `brew install node`
* yarn: `brew install yarn`



To run the website, first "pull" this code repository by running this command in `terminal.app`:
```bash
git pull https://github.com/haniehS369/genesysone
```

Which will create a folder `./genesysone` on your computer (in the directory `terminal.app` is currently in).

Then change directory into it by running:
```bash
cd ./genesysone
```

Then to run this website:
```bash
yarn start
```

Then paste the resulting `http://localhost` link in your browser.

To build a static HTML/CSS site, run:
```bash
npm run build
or
npm run generate
```
Which will compile/build the react site into a folder `dist` containing HTML, CSS, Javascript files.


This repository automatically deploys to netlify, which builds and deploys the site at `www.genesys.one`.

See `package.json` for additional commands in the `scripts` section.

 ---
