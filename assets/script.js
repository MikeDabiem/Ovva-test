document.addEventListener("DOMContentLoaded", function() {
  // get all articles buttons
  const artBtns = document.querySelectorAll('.blog-list__item-button');

  // if there are articles buttons, add click event listeners for each button
  if (artBtns.length) {
    artBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        showArticle(e, btn);
      });

      // if the key pressed is Enter or Space, show the article
      btn.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          showArticle(e, btn);
        }
      });

      function showArticle(event, button) {
        // if the clicked button is not already active and not the link, change the active article
        if (!button.classList.contains('active') && !event.target.closest('.blog-list__item-arrow')) {
          const activeSel = document.querySelector('.blog-list__item-button.active');
          const articleId = button.dataset.art;
          const showArticle = document.querySelector(`.article[data-art="${articleId}"]`);
          const activeArticle = document.querySelector('.article.active');
          const articleWrapper = document.querySelector('.blog-article');

          articleWrapper.style.opacity = '0';
          activeSel.classList.remove('active');

          setTimeout(() => {
            activeArticle.classList.remove('active');
            button.classList.add('active');
            showArticle.classList.add('active');
            articleWrapper.style.opacity = '1';
            articleWrapper.style.removeProperty('opacity');
          }, 200);

          // scroll to the active article on mobile screens
          if (window.innerWidth < 769) {
            window.scrollTo({
              top: articleWrapper.offsetTop,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  }
});