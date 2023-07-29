import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faCreditCard,
  faGear,
  faInfinity,
  faLaptopCode,
  faUser,
  faN,
  faDatabase,
  faFlaskVial,
  faServer,
  faCircleNodes,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import {
  faSymfony,
  faBootstrap,
  faReact,
  faNode,
  faNodeJs,
  faPhp,
  faAws,
  faJsSquare,
  faDocker,
  faJenkins,
  faGitlab,
  faBitbucket,
  faGit,
  faNpm,
  faJira,
  faTrello,
  faLinux,
  faJs,
  faWordpress,
  faLaravel,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import Image from 'next/image';

import heroImage from '../public/hero.webp';

import Typed from '@/components/Typed';
import Aos from '@/components/Aos';

const skills = [
  {
    icon: faSymfony,
    name: 'Symfony',
  },
  {
    icon: faNode,
    name: 'NodeJS',
  },
  {
    icon: faPhp,
    name: 'PHP',
  },
  {
    icon: faJsSquare,
    name: 'JavaScript',
  },
  {
    icon: faNodeJs,
    name: 'Express',
  },
  {
    icon: faReact,
    name: 'React.js',
  },
  {
    icon: faLinux,
    name: 'Linux',
  },
  {
    icon: faN,
    name: 'Nginx',
  },
  {
    icon: faDatabase,
    name: 'MySQL',
  },
  {
    icon: faDocker,
    name: 'Docker',
  },
  {
    icon: faInfinity,
    name: 'CI/CD',
  },
  {
    icon: faJenkins,
    name: 'Jenkins',
  },
  {
    icon: faFlaskVial,
    name: 'Selenium IDE',
  },
  {
    icon: faFileLines,
    name: 'Twig',
  },
  {
    icon: faDatabase,
    name: 'Doctrine',
  },
  {
    icon: faCircleNodes,
    name: 'RESTful API',
  },
  {
    icon: faServer,
    name: 'Elasticsearch',
  },
  {
    icon: faServer,
    name: 'Solr',
  },
  {
    icon: faDatabase,
    name: 'Redis',
  },
  {
    icon: faAws,
    name: 'AWS',
  },
  {
    icon: faGit,
    name: 'Git',
  },
  {
    icon: faNpm,
    name: 'NPM',
  },
  {
    icon: faJs,
    name: 'jQuery',
  },
  {
    icon: faBootstrap,
    name: 'Bootstrap',
  },
  {
    icon: faServer,
    name: 'RabbitMQ',
  },
  {
    icon: faCreditCard,
    name: 'Payment gateways',
  },
  {
    icon: faJira,
    name: 'Agile/Scrum',
  },
  {
    icon: faJira,
    name: 'Jira',
  },
  {
    icon: faTrello,
    name: 'Trello',
  },
  {
    icon: faTrello,
    name: 'Postman',
  },
  {
    icon: faWordpress,
    name: 'WordPress',
  },
  {
    icon: faPhp,
    name: 'Composer',
  },
  {
    icon: faLaravel,
    name: 'Packagist',
  },
];

export const metadata = {
  title: process.env.NEXT_PUBLIC_LOGO_TEXT,
  description: 'Senior JavaScript/PHP Developer (Technical Lead)',
};

export default function Home() {
  return (
    <>
      <section>
        <div className="container-fluid px-lg-0 px-xl-0 my-5">
          <div className="row container mx-auto">
            <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
              <h5 className="mb-0">Hi, my name is</h5>
              <h1 className="my-3">{process.env.NEXT_PUBLIC_LOGO_TEXT}</h1>
              <h2 className="mb-3">
                I’m a{' '}
                <span id="heading2">Senior JavaScript/PHP Developer.</span>
              </h2>
              <p>
                I’m a software engineer specializing in building web apps and
                websites. Currently, I’m working as a PHP/JavaScript Technical
                Architect at{' '}
                <Link href="https://www.weignyte.com" target="_blank">
                  Weignyte
                </Link>
                .
              </p>
            </div>
            <div className="col-md-6 col-12 col-lg-6" id="heroimage" data-aos="fade-left" data-aos-duration="2000">
              <Image
                src={heroImage}
                className="img-fluid"
                alt={process.env.NEXT_PUBLIC_LOGO_TEXT}
                priority={true}
              />
            </div>
          </div>

          <div className="container d-flex justify-content-center flex-column">
            <p className="mb-4">
              Greetings! I am Hiren, a Senior Developer specialized in PHP and
              JavaScript. My approach is to keep things simple, straightforward,
              and efficient. I have a particular fondness for Linux and strive
              to enhance my problem-solving skills every day.
            </p>
            <p className="mb-4">
              My career began as a junior PHP developer, and I still recall my
              excitement on integrating phpmailer/phpmailer to send successful
              contact form submissions. Since then, I have grown into a
              passionate and tech-savvy senior web developer. Presently, I focus
              on developing web applications, portals, and REST APIs for various
              clients at Weignyte.
            </p>
            <p>
              Learning is an integral part of my professional journey, and I
              strive to learn, unlearn and relearn every day to stay updated
              with the latest trends and technologies. Apart from my
              professional life, I am an avid nature enthusiast and find peace
              in practicing yoga. I also have a keen interest in music, movies,
              cricket, reading, history, and psychology.
            </p>
          </div>

          <div className="container mb-5 pt-5">
            <div className="row container justify-content-lg-center gap-5">
              <div className="col-lg-3 me-4">
                <div className="shadow-sm rounded">
                  <div className="mt-2 d-flex justify-content-around align-items-center">
                    <div className="mb-2">
                      <FontAwesomeIcon icon={faUser} size="3x" />
                    </div>
                    <div>
                      <h3>50+</h3>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 me-4">
                <div className="shadow-sm rounded">
                  <div className="mt-2 d-flex justify-content-around align-items-center">
                    <div className="mb-2">
                      <FontAwesomeIcon icon={faGear} size="3x" />
                    </div>
                    <div>
                      <h3>100+</h3>
                      <p>Projects Complete</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 me-4">
                <div className="shadow-sm rounded">
                  <div className="mt-2 d-flex justify-content-around align-items-center">
                    <div className="mb-2">
                      <FontAwesomeIcon icon={faCalendar} size="3x" />
                    </div>
                    <div>
                      <h3>14+</h3>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <h2 className="pt-4 mb-4 text-center">
              <FontAwesomeIcon icon={faLaptopCode} size="1x" className="me-2" />
              Skills
            </h2>
            <div className="container">
              <div className="row mt-2">
                {skills.map((skill, index) => (
                  <div
                    data-index={index}
                    className="col-sm-4 col-md-3 col-xs-3 col-lg-2 col-xl-2 pt-4"
                    key={skill.name}
                  >
                    <div className="card shadow d-flex justify-content-center flex-column align-items-center h-100" data-aos="fade-up">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="mt-2"
                        size="3x"
                      />
                      <div className="card-body">
                        <p className="card-text">{skill.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Aos />

      <Typed
        containerId="heading2"
        strings={[
          'Senior JavaScript Developer.',
          'Senior PHP Developer.',
          'Senior Fullstack Developer.',
          'Technical Lead (JavaScript/PHP).',
          'Senior JavaScript/PHP Developer.',
        ]}
      />
    </>
  );
}