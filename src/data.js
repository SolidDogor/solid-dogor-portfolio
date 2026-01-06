//Presentation
import githubImage from './assets/Presentation/github.svg';
import instagramImage from './assets/Presentation/instagram.svg';
import linkedinImage from './assets/Presentation/linkedin.svg';

//Projects
import amoresDulcesImage from './assets/Projects/logo-amores-dulces.webp';

//Technologies
import canvaImage from './assets/Technologies/canva.svg';
import cppImage from './assets/Technologies/cpp.svg';
import cssImage from './assets/Technologies/css.svg';
import figmaImage from './assets/Technologies/figma.svg';
import gimpImage from './assets/Technologies/gimp.svg';
import golangImage from './assets/Technologies/golang.svg';
import htmlImage from './assets/Technologies/html.svg';
import javaImage from './assets/Technologies/java.svg';
import javascriptImage from './assets/Technologies/javascript.svg';
import mongoImage from './assets/Technologies/mongodb.svg';
import mysqlImage from './assets/Technologies/mysql.svg';
import odooImage from './assets/Technologies/odoo.svg';
import pythonImage from './assets/Technologies/python.svg';
import reactImage from './assets/Technologies/react.svg';

export const SOCIAL_DATA = [
  {
    url: 'https://github.com/SolidDogor',
    imagePath: githubImage,
    social: 'github',
  },
  {
    url: 'https://www.instagram.com/alejandr0lirod',
    imagePath: instagramImage,
    social: 'instagram',
  },
  {
    url: 'https://linkedin.com/in/alejandro-matias-olivos-rodriguez-95201b107',
    imagePath: linkedinImage,
    social: 'linkedin',
  },
];

export const PROJECTS_DATA = [
  {
    imagePath: amoresDulcesImage,
    title: 'Amores Dulces',
    description: 'Página web de venta de postres caseros.',
    url: 'https://www.instagram.com/amores.dulces.postres',
  },
];

export const TECHNOLOGIES_DATA = [
  {
    title: 'Core Programming',
    images: [
      {
        imagePath: cppImage,
        technologieName: 'C++',
      },
      {
        imagePath: javaImage,
        technologieName: 'Java',
      },
      {
        imagePath: golangImage,
        technologieName: 'GO',
      },
      {
        imagePath: pythonImage,
        technologieName: 'Python',
      }
    ]
  },
  {
    title: 'Desarrollo Full-Stack',
    images: [
      {
        imagePath: htmlImage,
        technologieName: 'HTML',
      },
      {
        imagePath: cssImage,
        technologieName: 'CSS',
      },
      {
        imagePath: javascriptImage,
        technologieName: 'Javascript',
      },
      {
        imagePath: reactImage,
        technologieName: 'React',
      },
      {
        imagePath: mongoImage,
        technologieName: 'MongoDB',
      },
      {
        imagePath: mysqlImage,
        technologieName: 'MySql',
      },
    ]
  },
  {
    title: 'Soluciones Empresariales',
    images: [
      {
        imagePath: odooImage,
        technologieName: 'ODOO',
      },
    ]
  },
  {
    title: 'Creatividad y Diseño',
    images: [
      {
        imagePath: canvaImage,
        technologieName: 'Canva',
      },
      {
        imagePath: figmaImage,
        technologieName: 'Figma',
      },
      {
        imagePath: gimpImage,
        technologieName: 'Gimp',
      },
    ]
  },
];
