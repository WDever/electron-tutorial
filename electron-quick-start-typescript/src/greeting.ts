const rootElement: HTMLElement = document.getElementById('root');

const formStyle = `
  
`;

const handleKeyPress = (e: KeyboardEvent): void => {
  if (e.keyCode === 13) {
    document.getElementById('input').blur();
  }
};

const setForm = (formEl: HTMLElement, inputEl: HTMLElement): void => {
  inputEl.innerText = 'User';

  inputEl.setAttribute('contentEditable', 'true');
  inputEl.setAttribute('id', 'input');

  inputEl.addEventListener('keypress', handleKeyPress);
};

const createFormEl = (): { formEl: HTMLElement; inputEl: HTMLElement } => {
  const formEl = document.createElement('form');
  const greetingEl = document.createElement('span');
  const inputEl = document.createElement('span');

  greetingEl.innerHTML = 'Hello, ';

  setForm(formEl, inputEl);

  formEl.appendChild(greetingEl);
  formEl.appendChild(inputEl);
  rootElement.appendChild(formEl);

  return { formEl, inputEl };
};

const greetingInit = (): void => {
  createFormEl();
};

export { greetingInit };
