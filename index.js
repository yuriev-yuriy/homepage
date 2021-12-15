
const btnRef = document.querySelector('#theme');
const bodyRef = document.querySelector('.resume');
const avatarRef = document.querySelector('.contact-info__avatar');
const themeBtnRef = document.querySelector('.theme-btn');
const audio = document.getElementsByTagName("audio")[0];

const toggleTheme = () => {
    bodyRef.classList.toggle('dark');
    themeBtnRef.classList.toggle('dark');
   if (bodyRef.classList.contains('dark')) {
    avatarRef.src = './assets/bart-foto.jpeg';
   } else {
    avatarRef.src = './assets/my-foto.jpg'
   }

   localStorage.setItem('theme', JSON.stringify(bodyRef.classList.value));
}

const savedTheme = localStorage.getItem('theme');
const parsedTheme = JSON.parse(savedTheme);
if (parsedTheme === 'resume dark') {
  bodyRef.classList = parsedTheme;
  avatarRef.src = './assets/bart-foto.jpeg';
  themeBtnRef.classList.toggle('dark');
}

btnRef.addEventListener('click', toggleTheme)