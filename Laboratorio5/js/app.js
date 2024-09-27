const App = (() => {
    const htmlElements = {
      inputText: document.querySelector('#input-text'),
      colorSelect: document.querySelector('#color-select'),
      reversedSpan: document.querySelector('#reversed-span'),
    };

    const handlers = {
      onInputChange(e) {
        const inputValue = e.target.value;
        const reversedValue = inputValue.split('').reverse().join('');
        htmlElements.reversedSpan.textContent = reversedValue;
      },
      onColorChange(e) {
        const selectedClass = e.target.value;

        
        htmlElements.reversedSpan.classList.remove('texto-verde', 'texto-grisocuro', 'texto-azuloscuro');

        
        htmlElements.reversedSpan.classList.add(selectedClass);
      }
    };

    const bindEvents = () => {
      htmlElements.inputText.addEventListener('input', handlers.onInputChange);
      htmlElements.colorSelect.addEventListener('change', handlers.onColorChange);
    };

    return {
      init() {
        bindEvents();
      }
    };

  })();

  App.init();