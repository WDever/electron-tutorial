// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: string, text: string): void => {
    const element = document.getElementById(selector);
    if (element) {
      element.innerText = text;
    }
  };

  const envType: string[] = ['chrome', 'node', 'electron'];

  envType.forEach((type) =>
    replaceText(`${type}-version`, (process.versions as any)[type]),
  );
});

const preload = true;

export { preload };
