# Badger

## Development

- `yarn dev` watches for changes.

### Chrome Dev

you will have to go to chrome://extensions/ and enable Developer mode.
click `Load unpacked` and select the `badger/dist` directory.
Click the badger icon in the toolbar

### Firefox Dev

go to `about:debugging#/runtime/this-firefox`
then click `Load Temporary Add-on`
point to either the `dist/manifest.json` or the zip file from running the build command.

## Build

- `yarn build` will run everything through webpack and create a .zip

## Installation

- Firefox and Chrome: Download the most recent release from https://badger.bitcoin.com
- Brave: Install from chrome store

## API Documentation

https://developer.bitcoin.com/badger/docs/getting-started

## Intro

Badger is a secure identity vault for Bitcoin Cash. It allows you to hold BCH & tokens, and serves as your bridge to decentralized applications (dapps).

Bitcoin Cash and tokens enable an entirely new dimension to the web with micro-payments, smart-assets, decentralized exchanges, distributed autonomous organizations and much more.

Badger is your identity on this new web. You can pay for premium content, run smart contracts and experience dapps seemlessly and trust free.

Powered by BITBOX, Badger is 100% non-custodial. Your private keys never leave your computer.

## Badger Button

Badger Button is a library of open source UI components which content creators and entrepreneurs can drop in to their site to enable micro payments, premium content, tipping, e-commerce and much more.

- Usage: https://old.reddit.com/r/btc/comments/9l9j1t/how_to_create_your_own_custom_badger_button/
- Example buttons visible on articles at https://coinspice.io/

## CashID

- Allows dapps to authenticate an account and provide previously purchased content
- CashID react component and example usage by paOol: https://github.com/paOol/react-cashid

## Credits

- [SpendBCH](https://twitter.com/SpendBCH_io)
- [Gabriel Cardona](https://twitter.com/cgcardona)
- [paOol](https://twitter.com/paoolcoin)
- [SLP](https://twitter.com/simpleledger)
- [bitcoin.com](https://developer.bitcoin.com)
