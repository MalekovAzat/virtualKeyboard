window.addEventListener("load", () => {
  const keyboardLayouts = [
    {
      language: "En",
      buttons: [
        {
          id: 1,
          value: "`",
          subValue: "~",
          code: "IntlBackslash",
        },
        {
          id: 2,
          value: "1",
          subValue: "!",
          code: "Digit1",
        },
        {
          id: 3,
          value: "2",
          subValue: "@",
          code: "Digit2",
        },
        {
          id: 4,
          value: "3",
          subValue: "#",
          code: "Digit3",
        },
        {
          id: 5,
          value: "4",
          subValue: "$",
          code: "Digit4",
        },
        {
          id: 6,
          value: "5",
          subValue: "%",
          code: "Digit5",
        },
        {
          id: 7,
          value: "6",
          subValue: ":",
          code: "Digit6",
        },
        {
          id: 8,
          value: "7",
          subValue: "?",
          code: "Digit7",
        },
        {
          id: 9,
          value: "8",
          subValue: "*",
          code: "Digit8",
        },
        {
          id: 10,
          value: "9",
          subValue: "(",
          code: "Digit9",
        },
        {
          id: 11,
          value: "0",
          subValue: ")",
          code: "Digit0",
        },
        {
          id: 12,
          value: "-",
          subValue: "_",
          code: "Minus",
        },
        {
          id: 12,
          value: "=",
          subValue: "-",
          code: "Equal",
        },
        {
          id: 13,
          value: "Backspace",
          subValue: "",
          size: "button-wide",
          code: "Backspace",
        },
        {
          id: 14,
          value: "Tab",
          subValue: "",
          size: "button-middle",
          code: "Tab",
          str: "\t",
        },
        {
          id: 15,
          value: "q",
          subValue: "",
          code: "KeyQ",
        },
        {
          id: 16,
          value: "w",
          subValue: "",
          code: "KeyW",
        },
        {
          id: 17,
          value: "e",
          subValue: "",
          code: "KeyE",
        },
        {
          id: 18,
          value: "r",
          subValue: "",
          code: "KeyR",
        },
        {
          id: 19,
          value: "t",
          subValue: "",
          code: "KeyT",
        },
        {
          id: 20,
          value: "y",
          subValue: "",
          code: "KeyY",
        },
        {
          id: 21,
          value: "u",
          subValue: "",
          code: "KeyU",
        },
        {
          id: 22,
          value: "i",
          subValue: "",
          code: "KeyI",
        },
        {
          id: 23,
          value: "o",
          subValue: "",
          code: "KeyO",
        },
        {
          id: 24,
          value: "p",
          subValue: "",
          code: "KeyP",
        },
        {
          id: 25,
          value: "[",
          subValue: "",
          code: "BracketLeft",
        },
        {
          id: 26,
          value: "]",
          subValue: "",
          code: "BracketRight",
        },
        {
          id: 27,
          value: "\\",
          subValue: "/",
          code: "Backslash",
        },
        {
          id: 28,
          value: "Del",
          subValue: "",
          code: "Delete",
        },
        {
          id: 29,
          value: "Caps Lock",
          subValue: "",
          size: "button-wide",
          code: "CapsLock",
        },
        {
          id: 30,
          value: "a",
          subValue: "",
          code: "KeyA",
        },
        {
          id: 31,
          value: "s",
          subValue: "",
          code: "KeyS",
        },
        {
          id: 32,
          value: "d",
          subValue: "",
          code: "KeyD",
        },
        {
          id: 33,
          value: "f",
          subValue: "",
          code: "KeyF",
        },
        {
          id: 34,
          value: "g",
          subValue: "",
          code: "KeyG",
        },
        {
          id: 35,
          value: "h",
          subValue: "",
          code: "KeyH",
        },
        {
          id: 36,
          value: "j",
          subValue: "",
          code: "KeyJ",
        },
        {
          id: 37,
          value: "k",
          subValue: "",
          code: "KeyK",
        },
        {
          id: 38,
          value: "l",
          subValue: "",
          code: "KeyL",
        },
        {
          id: 39,
          value: ";",
          subValue: "",
          code: "Semicolon",
        },
        {
          id: 40,
          value: "'",
          subValue: "",
          code: "Quote",
        },
        {
          id: 41,
          value: "Enter",
          subValue: "",
          size: "button-wide",
          code: "Enter",
          str: "\n",
        },
        {
          id: 42,
          value: "Shift",
          subValue: "",
          size: "button-wide",
          code: "ShiftLeft",
        },
        {
          id: 43,
          value: "\\",
          subValue: "",
          code: "Backquote",
        },
        {
          id: 44,
          value: "z",
          subValue: "",
          code: "KeyZ",
        },
        {
          id: 45,
          value: "x",
          subValue: "",
          code: "KeyX",
        },
        {
          id: 46,
          value: "c",
          subValue: "",
          code: "KeyC",
        },
        {
          id: 47,
          value: "v",
          subValue: "",
          code: "KeyV",
        },
        {
          id: 48,
          value: "b",
          subValue: "",
          code: "KeyB",
        },
        {
          id: 49,
          value: "n",
          subValue: "",
          code: "KeyN",
        },
        {
          id: 50,
          value: "m",
          subValue: "",
          code: "KeyM",
        },
        {
          id: 51,
          value: ".",
          subValue: "",
          code: "Comma",
        },
        {
          id: 52,
          value: ",",
          subValue: "",
          code: "Period",
        },
        {
          id: 53,
          value: "/",
          subValue: "",
          code: "Slash",
        },
        {
          id: 54,
          value: "&uarr;",
          subValue: "",
          code: "ArrowUp",
          str: "↑",
        },
        {
          id: 55,
          value: "Shift",
          subValue: "",
          size: "button-middle",
          code: "ShiftRight",
        },
        {
          id: 56,
          value: "Ctrl",
          subValue: "",
          size: "button-middle",
          code: "ControlLeft",
        },
        {
          id: 57,
          value: "Win",
          subValue: "",
          code: "MetaLeft",
        },
        {
          id: 58,
          value: "Alt",
          subValue: "",
          code: "AltLeft",
        },
        {
          id: 59,
          value: "",
          subValue: "",
          size: "button-widest",
          code: "Space",
        },
        {
          id: 60,
          value: "Alt",
          subValue: "",
          code: "AltRight",
        },
        {
          id: 61,
          value: "Ctrl",
          subValue: "",
          size: "button-middle",
          code: "CtrlRight",
        },
        {
          id: 62,
          value: "&larr;",
          subValue: "",
          code: "ArrowLeft",
          str: "←",
        },
        {
          id: 63,
          value: "&darr;",
          subValue: "",
          code: "ArrowDown",
          str: "↓",
        },
        {
          id: 64,
          value: "&rarr;",
          subValue: "",
          code: "ArrowRight",
          str: "→",
        },
      ],
    },
    {
      language: "Ru",
      buttons: [
        {
          id: 1,
          value: "`",
          subValue: "~",
          code: "IntlBackslash",
        },
        {
          id: 2,
          value: "1",
          subValue: "!",
          code: "Digit1",
        },
        {
          id: 3,
          value: "2",
          subValue: "@",
          code: "Digit2",
        },
        {
          id: 4,
          value: "3",
          subValue: "#",
          code: "Digit3",
        },
        {
          id: 5,
          value: "4",
          subValue: "$",
          code: "Digit4",
        },
        {
          id: 6,
          value: "5",
          subValue: "%",
          code: "Digit5",
        },
        {
          id: 7,
          value: "6",
          subValue: ":",
          code: "Digit6",
        },
        {
          id: 8,
          value: "7",
          subValue: "?",
          code: "Digit7",
        },
        {
          id: 9,
          value: "8",
          subValue: "*",
          code: "Digit8",
        },
        {
          id: 10,
          value: "9",
          subValue: "(",
          code: "Digit9",
        },
        {
          id: 11,
          value: "0",
          subValue: ")",
          code: "Digit0",
        },
        {
          id: 12,
          value: "-",
          subValue: "_",
          code: "Minus",
        },
        {
          id: 12,
          value: "=",
          subValue: "-",
          code: "Equal",
        },
        {
          id: 13,
          value: "Backspace",
          subValue: "",
          size: "button-wide",
          code: "Backspace",
        },
        {
          id: 14,
          value: "Tab",
          subValue: "",
          size: "button-middle",
          code: "Tab",
          str: "\t",
        },
        {
          id: 15,
          value: "й",
          subValue: "",
          code: "KeyQ",
        },
        {
          id: 16,
          value: "ц",
          subValue: "",
          code: "KeyW",
        },
        {
          id: 17,
          value: "у",
          subValue: "",
          code: "KeyE",
        },
        {
          id: 18,
          value: "к",
          subValue: "",
          code: "KeyR",
        },
        {
          id: 19,
          value: "е",
          subValue: "",
          code: "KeyT",
        },
        {
          id: 20,
          value: "н",
          subValue: "",
          code: "KeyY",
        },
        {
          id: 21,
          value: "г",
          subValue: "",
          code: "KeyU",
        },
        {
          id: 22,
          value: "ш",
          subValue: "",
          code: "KeyI",
        },
        {
          id: 23,
          value: "щ",
          subValue: "",
          code: "KeyO",
        },
        {
          id: 24,
          value: "з",
          subValue: "",
          code: "KeyP",
        },
        {
          id: 25,
          value: "х",
          subValue: "",
          code: "BracketLeft",
        },
        {
          id: 26,
          value: "ъ",
          subValue: "",
          code: "BracketRight",
        },
        {
          id: 27,
          value: "ё",
          subValue: "",
          code: "Backslash",
        },
        {
          id: 28,
          value: "Del",
          subValue: "",
          code: "Delete",
        },
        {
          id: 29,
          value: "Caps Lock",
          subValue: "",
          size: "button-wide",
          code: "CapsLock",
        },
        {
          id: 30,
          value: "ф",
          subValue: "",
          code: "KeyA",
        },
        {
          id: 31,
          value: "ы",
          subValue: "",
          code: "KeyS",
        },
        {
          id: 32,
          value: "в",
          subValue: "",
          code: "KeyD",
        },
        {
          id: 33,
          value: "а",
          subValue: "",
          code: "KeyF",
        },
        {
          id: 34,
          value: "п",
          subValue: "",
          code: "KeyG",
        },
        {
          id: 35,
          value: "р",
          subValue: "",
          code: "KeyH",
        },
        {
          id: 36,
          value: "о",
          subValue: "",
          code: "KeyJ",
        },
        {
          id: 37,
          value: "л",
          subValue: "",
          code: "KeyK",
        },
        {
          id: 38,
          value: "д",
          subValue: "",
          code: "KeyL",
        },
        {
          id: 39,
          value: "ж",
          subValue: "",
          code: "Semicolon",
        },
        {
          id: 40,
          value: "э",
          subValue: "",
          code: "Quote",
        },
        {
          id: 41,
          value: "Enter",
          subValue: "",
          size: "button-wide",
          code: "Enter",
          str: "\n",
        },
        {
          id: 42,
          value: "Shift",
          subValue: "",
          size: "button-wide",
          code: "ShiftLeft",
        },
        {
          id: 43,
          value: "\\",
          subValue: "",
          code: "Backquote",
        },
        {
          id: 44,
          value: "я",
          subValue: "",
          code: "KeyZ",
        },
        {
          id: 45,
          value: "ч",
          subValue: "",
          code: "KeyX",
        },
        {
          id: 46,
          value: "с",
          subValue: "",
          code: "KeyC",
        },
        {
          id: 47,
          value: "м",
          subValue: "",
          code: "KeyV",
        },
        {
          id: 48,
          value: "и",
          subValue: "",
          code: "KeyB",
        },
        {
          id: 49,
          value: "т",
          subValue: "",
          code: "KeyN",
        },
        {
          id: 50,
          value: "ь",
          subValue: "",
          code: "KeyM",
        },
        {
          id: 51,
          value: "б",
          subValue: "",
          code: "Comma",
        },
        {
          id: 52,
          value: "ю",
          subValue: "",
          code: "Period",
        },
        {
          id: 53,
          value: "/",
          subValue: "",
          code: "Slash",
        },
        {
          id: 54,
          value: "&uarr;",
          subValue: "",
          code: "ArrowUp",
          str: "↑",
        },
        {
          id: 55,
          value: "Shift",
          subValue: "",
          size: "button-middle",
          code: "ShiftRight",
        },
        {
          id: 56,
          value: "Ctrl",
          subValue: "",
          size: "button-middle",
          code: "ControlLeft",
        },
        {
          id: 57,
          value: "Win",
          subValue: "",
          code: "MetaLeft",
        },
        {
          id: 58,
          value: "Alt",
          subValue: "",
          code: "AltLeft",
        },
        {
          id: 59,
          value: "",
          subValue: "",
          size: "button-widest",
          code: "Space",
        },
        {
          id: 60,
          value: "Alt",
          subValue: "",
          code: "AltRight",
        },
        {
          id: 61,
          value: "Ctrl",
          subValue: "",
          size: "button-middle",
          code: "CtrlRight",
        },
        {
          id: 62,
          value: "&larr;",
          subValue: "",
          code: "ArrowLeft",
          str: "←",
        },
        {
          id: 63,
          value: "&darr;",
          subValue: "",
          code: "ArrowDown",
          str: "↓",
        },
        {
          id: 64,
          value: "&rarr;",
          subValue: "",
          code: "ArrowRight",
          str: "→",
        },
      ],
    },
  ];

  const buttonInRowCounts = [14, 15, 13, 14, 10];
  const functionalButtons = [
    // "Tab",
    "CapsLock",
    "ShiftLeft",
    "ControlLeft",
    "MetaLeft",
    "AltLeft",
    "AltRight",
    "CtrlRight",
    "ShiftRight",
    // "Enter",
    "Delete",
    "Backspace",
  ];

  class KeyboardButton {
    constructor(buttonData, localeIndex = 0) {
      this.localeIndex = localeIndex;
      this.buttonsData = buttonData;
      this.localesCount = buttonData.length;
      this.create(buttonData[localeIndex]);
      this.setLocale();
    }

    create({ value, subValue, size, code }) {
      const buttonElement = document.createElement("div");
      buttonElement.classList.add("button");
      buttonElement.classList.add(size || "button-tiny");

      const valueElement = document.createElement("p");
      valueElement.classList.add("button-text");
      valueElement.innerHTML = value;

      const subValueElement = document.createElement("p");
      subValueElement.classList.add("button-sub-text");
      subValueElement.innerHTML = subValue;

      const buttonSurface = document.createElement("div");
      buttonSurface.classList.add("button-surface");
      buttonSurface.setAttribute("code", code);

      buttonElement.appendChild(valueElement);
      buttonElement.appendChild(buttonSurface);
      buttonElement.appendChild(subValueElement);

      this.root = buttonElement;
    }

    nextLocale() {
      this.localeIndex = (this.localeIndex + 1) % this.localesCount;
      this.setLocale();
    }

    setLocale() {
      const { value, subValue } = this.buttonsData[this.localeIndex];
      this.root.firstChild.innerHTML = value;
      this.root.lastChild.innerHTML = subValue;
    }

    toUpperCase() {
      if (
        this.code.includes("Key") ||
        [
          "BracketLeft",
          "BracketRight",
          "Backslash",
          "Semicolon",
          "Quote",
          "Comma",
          "Period",
        ].indexOf(this.code) !== -1
      ) {
        this.root.firstChild.innerHTML =
          this.root.firstChild.innerHTML.toUpperCase();
      }
    }

    toLoverCase() {
      if (
        this.code.includes("Key") ||
        [
          "BracketLeft",
          "BracketRight",
          "Backslash",
          "Semicolon",
          "Quote",
          "Comma",
          "Period",
        ].indexOf(this.code) !== -1
      ) {
        this.root.firstChild.innerHTML =
          this.root.firstChild.innerHTML.toLowerCase();
      }
    }

    setPressed() {
      this.root.classList.add("button-pressed");
    }

    setUnPressed() {
      this.root.classList.remove("button-pressed");
    }

    get code() {
      return this.buttonsData[0].code;
    }

    get value() {
      return this.buttonsData[this.localeIndex].str
        ? this.buttonsData[this.localeIndex].str
        : this.buttonsData[this.localeIndex].value;
    }

    get subValue() {
      return this.buttonsData[this.localeIndex].subValue;
    }
  }

  class VirtualKeyboard {
    constructor(defaultLocaleIndex) {
      this.localeIndex = defaultLocaleIndex;
      this.localesCount = keyboardLayouts.length;
      this.winPressed = false;
      this.spacePressed = false;
      this.capsPressed = false;

      this.localesCount = keyboardLayouts.length;
      this.createKeyboardLayout();
    }

    createKeyboardLayout() {
      const root = document.createElement("div");

      const textArea = document.createElement("textarea");
      textArea.classList.add("keyboard-textarea");
      textArea.value = localStorage.getItem("text") || "";
      root.appendChild(textArea);

      const buttonsData = keyboardLayouts
        .map((locale) => locale.buttons)
        .reduce((arr1, arr2) =>
          arr1.map((element, index) => [element, arr2[index]])
        );

      const keyboardContainer = document.createElement("div");
      keyboardContainer.addEventListener("click", (event) => {
        if (event.target === keyboardContainer) {
          return;
        }

        textArea.dispatchEvent(
          new KeyboardEvent("keydown", {
            code: event.target.getAttribute("code"),
          })
        );

        setTimeout(() => {
          textArea.dispatchEvent(
            new KeyboardEvent("keyup", {
              code: event.target.getAttribute("code"),
            })
          );
        }, 150);
      });

      keyboardContainer.classList.add("keyboard");
      root.appendChild(keyboardContainer);

      const buttonsMap = new Map();
      const buttons = buttonsData.map((buttonData) => {
        const button = new KeyboardButton(
          buttonData,
          this.localeIndex,
          this.localesCount
        );
        buttonsMap.set(button.code, button);
        return button;
      });

      textArea.addEventListener("keydown", (event) => {
        const { code } = event;
        const button = buttonsMap.get(code);
        button.setPressed();

        if (functionalButtons.indexOf(code) === -1) {
          const prevPart = textArea.value.slice(0, textArea.selectionStart);
          const nextPart = textArea.value.slice(
            textArea.selectionStart,
            textArea.value.length
          );

          const prevSelectionIndex = textArea.selectionStart;

          textArea.value =
            prevPart +
            (event.shiftKey || this.capsPressed
              ? buttonsMap.get(code).subValue ||
                buttonsMap.get(code).value.toUpperCase()
              : buttonsMap.get(code).value) +
            nextPart;

          textArea.selectionEnd = textArea.selectionStart =
            prevSelectionIndex + 1;
        }

        if (code === "CapsLock") {
          this.capsPressed = true;
          buttons.forEach((btn) => btn.toUpperCase());
        }

        if (code === "Backspace") {
          const prevPart = textArea.value.slice(0, textArea.selectionStart - 1);
          const nextPart = textArea.value.slice(
            textArea.selectionStart,
            textArea.value.length
          );
          const prevSelectionIndex = textArea.selectionStart;

          textArea.value = prevPart + nextPart;

          textArea.selectionEnd = textArea.selectionStart =
            prevSelectionIndex - 1;
        }

        if (code === "Delete") {
          const prevPart = textArea.value.slice(0, textArea.selectionStart);
          const nextPart = textArea.value.slice(
            textArea.selectionStart + 1,
            textArea.value.length
          );
          const prevSelectionIndex = textArea.selectionStart;

          textArea.value = prevPart + nextPart;

          textArea.selectionEnd = textArea.selectionStart = prevSelectionIndex;
        }

        if (code === "MetaLeft") {
          this.winPressed = true;
        }
        if (code === "ControlLeft") {
          this.spacePressed = true;
        }
        if (this.spacePressed && this.winPressed) {
          buttons.forEach((btn) => btn.nextLocale());
          this.localeIndex = (this.localeIndex + 1) % this.localesCount;
          localStorage.setItem("locale", this.localeIndex);
        }

        event.preventDefault();

        localStorage.setItem("text", textArea.value);
      });

      textArea.addEventListener("keyup", (event) => {
        const { code } = event;
        const button = buttonsMap.get(code);
        button.setUnPressed();

        if (code === "CapsLock") {
          this.capsPressed = false;
          buttons.forEach((btn) => btn.toLoverCase());
        }

        if (code === "MetaLeft") {
          this.winPressed = false;
        }
        if (code === "ControlLeft") {
          this.spacePressed = false;
        }

        event.preventDefault();
      });

      let placedButtonsCount = 0;

      buttonInRowCounts.forEach((buttonCount) => {
        const row = document.createElement("div");
        row.classList.add("keyboard-row");
        keyboardContainer.appendChild(row);
        buttons
          .slice(placedButtonsCount, placedButtonsCount + buttonCount)
          .forEach((button) => row.appendChild(button.root));

        placedButtonsCount += buttonCount;
      });

      this.root = root;
      document.body.appendChild(root);

      this.root.firstChild.focus();

      const description = document.createElement("div");
      description.innerHTML =
        "The language might be changed by Win + LeftCtrl buttons";

      this.root.appendChild(description);
      this.root.firstChild.addEventListener("blur", () => {
        this.root.firstChild.focus();
      });
    }
  }

  new VirtualKeyboard(localStorage.getItem("locale") || 0);
});
