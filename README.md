# Hydration error using Braid inside of Next.js

Hydration error:

![nextjs-braid-demo--braid-hydration-issue](https://github.com/DylanLester/nextjs-braid-integration-issue/assets/12122777/70f95620-b11b-45b6-b8c1-9479a990a179)

Editing dependency files to simulate a fix:

1. ensure you have a clean slate: 
  - run `git reset HEAD --hard && rm -rf .next node_modules && npm i`
  - run `git reset HEAD --hard` -- revert the tsconfig.json that Braid updates 
3. comment out the error throw in:
  - update `node_modules/braid-design-system/dist/side-effects/lib/css/reset/resetTracker.mjs`
4. update the `setFileScope` call:
  - update `node_modules/braid-design-system/dist/styles/lib/css/atoms/sprinkles.css.mjs` to be `setFileScope("node_modules/braid-design-system/dist/styles/lib/css/atoms/sprinkles.css.mjs");`
5. observe error is no longer present for this file:
  - run `npm run dev`
  - other files which have not had their `fileScope` updated will still error

Fixed hydration error:

![nextjs-braid-demo--braid-hydration-issue-fixed](https://github.com/DylanLester/nextjs-braid-integration-issue/assets/12122777/80eccea6-2016-4043-85eb-e35644a0dd92)
