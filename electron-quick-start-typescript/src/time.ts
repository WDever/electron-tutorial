const rootElement: HTMLElement = document.getElementById('root');

const createTimeEl = (): HTMLElement => {
  const timeEl = document.createElement('h1');
  timeEl.setAttribute('id', 'time');

  rootElement.appendChild(timeEl);

  return timeEl;
};

const getTime = (timeEl: HTMLElement): void => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  timeEl.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const timeInit = (): void => {
  const timeEl = createTimeEl();

  getTime(timeEl);
  setInterval(() => getTime(timeEl), 1000);
};

export { timeInit };
