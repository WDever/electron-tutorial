// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import { timeInit } from './time';
import { greetingInit } from './greeting';

const fullWidtHeight = `
  width: 100%;
  height: 100%;
`;

const rootStyle = `
  ${fullWidtHeight}

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const setStyle = (): void => {
  document
    .getElementsByTagName('html')[0]
    .setAttribute('style', fullWidtHeight);
  document
    .getElementsByTagName('body')[0]
    .setAttribute(
      'style',
      `font-family: Noto Sans KR; margin: 0; ${fullWidtHeight}`,
    );

  document.querySelector('#root').setAttribute('style', rootStyle);
};

const init = (): void => {
  setStyle();
  timeInit();
  greetingInit();
};

init();
