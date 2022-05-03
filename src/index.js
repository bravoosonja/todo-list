import './style.css';
import UI from './ui';

document.addEventListener('DOMContentLoaded', UI.loadHomepage);

const filters = document.querySelectorAll('.tasks-filters span');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    document.querySelector('span.active').classList.remove('active');
    filter.classList.add('active');
    showTodo(filter.id);
  });
});
