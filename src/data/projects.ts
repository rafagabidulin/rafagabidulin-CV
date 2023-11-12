import IProjects from '../interfaces/IProjects';
import brainGames from './markdown/brainGames.md';
import differenceCalculator from './markdown/differenceCalculator.md';
import adminDashboard from './markdown/adminDashboard.md';
import foodOrderingService from './markdown/foodOrderingService.md';

const projects: IProjects[] = [
  {
    name: 'Игры разума',
    description: brainGames,
    link: 'https://github.com/rafagabidulin/frontend-project-lvl1'
  },
  {
    name: 'Вычислитель отличий',
    description: differenceCalculator,
    link: 'https://github.com/rafagabidulin/frontend-project-lvl2'
  },
  {
    name: 'Панель управления администратора',
    description: adminDashboard,
    link: 'https://github.com/rafagabidulin/project-shop-admin'
  },
  {
    name: 'Сервис для заказа еды',
    description: foodOrderingService,
    link: 'https://github.com/rafagabidulin/food-ordering-service'
  }
];

export default projects;
