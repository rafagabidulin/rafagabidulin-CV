import IEducation from '../interfaces/IEducation';

const education: IEducation = {
  higher: {
    title: 'Высшее',
    degrees: [
      {
        title: 'Бакалавр',
        university:
          'Самарский государственный аэрокосмический университет им. академика С.П. Королева (национальный исследовательский университет)',
        faculty: 'Институт авиационной техники',
        specialization: 'Управление качеством',
        graduated: '2017'
      },
      {
        title: 'Магистр',
        university:
          'Самарский государственный аэрокосмический университет им. академика С.П. Королева (национальный исследовательский университет)',
        faculty: 'Институт авиационной техники',
        specialization: 'Проектирование, конструкция и CALS-технологии в авиационной технике',
        graduated: '2019'
      }
    ]
  },
  additional: {
    title: 'Дополнительное',
    schools: [
      {
        school: 'learn.javascript.ru',
        courses: [
          {
            id: 'JavaScriptDomInterfacesBasic',
            name: 'JavaScript/DOM/Интерфейсы для новичков',
            date: 'Сентябрь 2021 - Ноябрь 2021'
          },
          {
            id: 'JavaScriptDomInterfacesPro',
            name: 'JavaScript/DOM/Интерфейсы для программистов',
            date: 'Сентябрь 2022 - Октябрь 2022'
          },
          {
            id: 'ReactJSCourse',
            name: 'Курс по React',
            date: 'Октябрь 2022 - Декабрь 2022'
          }
        ]
      },
      {
        school: 'hexlet.io',
        courses: [
          {
            id: 'FrontendDeveloper',
            name: 'Профессия «Фронтенд-разработчик»',
            date: 'Февраль 2022 – Август 2022'
          }
        ]
      }
    ]
  }
};

export default education;
