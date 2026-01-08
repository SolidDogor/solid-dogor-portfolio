//Presentation
import githubImage from './assets/Presentation/github.svg';
import instagramImage from './assets/Presentation/instagram.svg';
import linkedinImage from './assets/Presentation/linkedin.svg';

//Projects
import amoresDulcesImage from './assets/Projects/logo-amores-dulces.webp';
import forenseekImage from './assets/Projects/forenseek.svg';

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

//Certifications
import abiturImage from './assets/About/logo-amores-dulces.webp';
import dsdiiImage from './assets/About/dsd2.webp';
import fceImage from './assets/About/fce1.webp';

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
    modal: {
      image: amoresDulcesImage,
      content: `
        Proyecto de e-commerce para emprendimiento familiar.
        Incluye catálogo, pedidos por WhatsApp y diseño responsive.
      `,
      link: 'https://www.instagram.com/amores.dulces.postres',
    },
  },
  {
    title: 'Motor de Indexación B+ Tree',
    description: 'Estructura de datos en C++ capaz de manejar más de 33 millones de registros sin usar una base de datos',
    modal: {
      content:
      `
      Proyecto universitario desarrollado para el curso de Estructuras de Datos Avanzadas. El objetivo del proyecto fue diseñar una 
      estructura de datos capaz de almacenar y consultar información de millones de ciudadanos simulando una base de datos nacional, 
      sin utilizar un sistema gestor de bases de datos.
      
      Como solución, se implementó un B+ Tree en C++ capaz de manejar más de 33 millones de registros generados de manera aleatoria, 
      permitiendo realizar inserciones y búsquedas eficientes por clave. La estructura incluye persistencia en disco, de modo que la 
      información almacenada puede ser recuperada en memoria cada vez que el programa se inicia.
  
      Mi rol en el proyecto fue la implementación completa del sistema, así como el testeo de rendimiento y el análisis de complejidad 
      tanto temporal como espacial. El principal reto afrontado fue el manejo de memoria a gran escala y el balance entre rendimiento y 
      almacenamiento al trabajar con volúmenes de datos elevados.
      `,
    },
  },
  {
    imagePath: forenseekImage,
    title: 'Analizador de Secuencias de ADN',
    description: 'Sistema web que identifica coincidencias de ADN usando algoritmos de búsqueda eficiente',
    modal: {
      image: forenseekImage,
      content:
      `
      Proyecto universitario desarrollado para el curso de Programación Competitiva, basado en un caso simulado de criminalística. El objetivo fue desarrollar un sistema capaz de identificar posibles sospechosos a partir de la comparación de una muestra de ADN con una base de datos de secuencias genéticas proporcionadas en formato CSV.
      
      El sistema permite a los usuarios registrarse, cargar archivos CSV con las cadenas de ADN de los sospechosos e ingresar un patrón de búsqueda. El backend procesa esta información y ejecuta un programa nativo en C++ que implementa el algoritmo KMP para realizar búsquedas eficientes de subcadenas. Los resultados obtenidos son devueltos al frontend en formato JSON, indicando si existen coincidencias y los nombres de los sospechosos identificados.
      
      Mi rol principal fue el desarrollo del backend y la integración con el ejecutable en C++, además de la implementación del algoritmo de búsqueda. Uno de los principales retos fue la comunicación entre el backend y el programa nativo, así como las limitaciones de despliegue, por lo que el sistema quedó funcionando en un entorno local.
      `,
    },
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

export const CERTIFICATIONS_DATA = [
  {
    title: 'Abitur',
    description: 'Educación secundaria alemana',
    modal: {
      image: abiturImage,
      content: `
        Educación secundaria alemana con énfasis en matemáticas,
        ciencias y formación académica integral.
      `,
    },
  },
  {
    title: 'Alemán - C1 (DSD II)',
    description: 'Certificación oficial de competencia avanzada en alemán.',
    modal: {
      image: dsdiiImage,
      content: `
        Deutsches Sprachdiplom Stufe II (DSD II), certificación oficial otorgada por la Conferencia Permanente de Ministros de Educación de Alemania (KMK).
        Acredita un nivel C1 del MCER en comprensión lectora, auditiva, expresión oral y escrita.
      `,
    },
  },
  {
    title: 'B2 First (FCE)',
    description: 'Nivel intermedio-alto de inglés',
    modal: {
      image: fceImage,
      content: `
        Certificación oficial de Cambridge que acredita un nivel
        B2 en comprensión, expresión oral y escrita.
      `,
    },
  },
];