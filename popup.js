  // Modal

  function modalWindow(button, close, modal) { 
    let more = document.querySelector(button), // Получаем аргументы.
      closeWindow = document.querySelector(close), // Получаем аргументы.
      overlay = document.querySelector(modal); // Получаем аргументы.

    more.addEventListener("click", function() { // При клике на кнопку.
      overlay.style.display = "block"; // Меняем стиль попапа на блок.
      this.classList.add("more-splash"); // Добавляем кнопке эффект через класс more-splash.
      document.body.style.overflow = "hidden"; // Добавляем overflow hidden, что бы не было прокрутки когда активный попап.
    });

    closeWindow.addEventListener("click", function() { // при клике на closeWindow.
      overlay.style.display = "none"; // Закрываем modal.
      more.classList.remove("more-splash"); // И убираем у кнопки класс с анимацией.
      document.body.style.overflow = ""; // Убираем overflow.
    });
  }

  modalWindow(".more", ".popup-close", ".overlay"); // 1 - кнопка, 2 - класс на который закрываем попап, 3 - класс с попапом
  modalWindow(".description-btn", ".popup-close", ".overlay");
