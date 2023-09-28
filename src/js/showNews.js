const newsWrappers = document.querySelectorAll('.newsWrapper');

if(newsWrappers) {
  for(let i = 0; i < newsWrappers.length; i++) {
    newsWrappers[i].addEventListener('click', () => {
      for(let j = 0; j < newsWrappers.length; j++) {
        if(newsWrappers[j].classList.contains('newsActive')) {
          newsWrappers[j].classList.remove('newsActive');
        }
      }
      newsWrappers[i].classList.add('newsActive');
    })
  }
}