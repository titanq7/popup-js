  // Modal

  function modalWindow(button, close, modal) { 
    let more = document.querySelector(button), // Получаем аргументы.
      closeWindow = document.querySelector(close), // Получаем аргументы.
      overlay = document.querySelector(modal), // Получаем аргументы, 
      documentPath = document.documentElement; // Для удобства, что бы потом использовать.

    more.addEventListener("click", function() { // При клике на кнопку.
      let widthDocument = documentPath.clientWidth; // Для удобства можно и document.documentElement.clientWidthж
      overlay.style.display = "block"; // Меняем стиль попапа на блок.
      this.classList.add("more-splash"); // Добавляем кнопке эффект через класс more-splash.
      document.body.style.overflow = "hidden"; // Добавляем overflow hidden, что бы не было прокрутки когда активный попап.
      let widthOverlay = overlay.clientWidth; // Оverlay - берем значение из переменной.
      document.body.style.paddingRight = (widthOverlay - widthDocument) + 'px' ; // Добавляем паддинг = скроллу страницы.
    });

    closeWindow.addEventListener("click", function() { // при клике на closeWindow.
      overlay.style.display = "none"; // Закрываем modal.
      more.classList.remove("more-splash"); // И убираем у кнопки класс с анимацией.
      document.body.style.overflow = ""; // Убираем overflow.
      document.body.style.paddingRight = 0; // Убираем падинг у body.

    });
  }

  modalWindow(".menu__second-button", ".popup-close", ".overlay");
  modalWindow(".column__button-reg", ".popup-close", ".overlay");
