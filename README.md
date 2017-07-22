# codemonkey800's ESlint Configs

My personal ESlint configs. Extension of AirBnb with additional plugins and rule
overrides.

## Emoji Index :heart_eyes:

I've recently started using Emojis in a lot of my commit messages, READMEs, and
wherever I can on GitHub. Here's what each emoji I use represents. It may be
subject to change:

- :tada: - Commits that include something so amazing that I have to celebrate :tada:
- :wrench: - Commits that are relatively small to medium in size
- :warning: - Commits that introduce configs or code that break things

## Setup

To use one of the configs, run:

```sh
$ yarn add -D eslint-config-codemonkey800
$ # yarn add -D eslint-config-codemonkey800-react
$ # yarn add -D eslint-config-codemonkey800-vue
```

Then in your `.eslintrc.js`:

```js
module.exports = {
  extends: 'codemonkey800',
  // extends: 'codemonkey800-react',
  // extends: 'codemonkey800-vue',
};
```

## License

MIT License

Copyright (c) 2017 Jeremy Asuncion

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
