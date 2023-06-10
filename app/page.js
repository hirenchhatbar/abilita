'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faGear, faLaptopCode, faUser,  } from '@fortawesome/free-solid-svg-icons';
import { faBootstrap, faReact, faSass, faNode, faHtml5, faCss3, faPython, faWordpress, faJava, faNodeJs, faAndroid, faWolfPackBattalion, faPhp, faAws, faGithub, faDigitalOcean, faJsSquare, faGithubSquare, faGitAlt, faKorvue } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

const skills = [
  {
    'icon': faReact,
    'name': 'ReactJS'
  },
  {
    'icon': faBootstrap,
    'name': 'Bootstrap'
  },
  {
    'icon': faSass,
    'name': 'Sass'
  },
  {
    'icon': faNode,
    'name': 'NodeJS'
  },
  {
    'icon': faHtml5,
    'name': 'HTML5'
  },
  {
    'icon': faCss3,
    'name': 'CSS3'
  },
  {
    'icon': faPython,
    'name': 'Python'
  },
  {
    'icon': faWordpress,
    'name': 'Wordpress'
  },
  {
    'icon': faJava,
    'name': 'Java'
  },
  {
    'icon': faJsSquare,
    'name': 'JavaScript'
  },
  {
    'icon': faNodeJs,
    'name': 'ExpressJs'
  },
  {
    'icon': faAndroid,
    'name': 'Android'
  },
  {
    'icon': faPhp,
    'name': 'PHP'
  },
  {
    'icon': faAws,
    'name': 'AWS'
  },
  {
    'icon': faGithub,
    'name': 'GitHub'
  },
  {
    'icon': faDigitalOcean,
    'name': 'DigitalOcean'
  },
  {
    'icon': faGitAlt,
    'name': 'GitVCS'
  },
  {
    'icon': faKorvue,
    'name': 'Kotlin'
  },
];

export default function Home() {
  return (
    <section>
      <div className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h5 className='fw-bold fs-4 mb-0'>Hi, my name is</h5>
            <h2 className='fw-bolder fs-1 my-3' style={{ color: "#d6564d" }}>Hiren Chhatbar</h2>
            <h3 className="mb-3">I’m a <span>PHP/JavaScript</span> Technical Architect</h3>
            <p className="lh-4" style={{fontSize: "1rem"}}>I’m a software engineer specializing in building web apps and websites. Currently, I’m working as a PHP/JavaScript Technical Architect at <Link href="https://www.weignyte.com" target="_blank" style={{ color: "#d6564d", fontWeight: "bold" }}>Weignyte</Link>.</p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <img src="/avatar6.svg" className='img-fluid' alt="Hiren Chhatbar" />
          </div>
        </div>

        <div className="container d-flex justify-content-center flex-column">
          <h2 className='text-center fw-bold py-4 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faUser} width={25} height={25} className='me-2' />About Me</h2>
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="container mb-5 pt-5">
          <div className="row container justify-content-lg-center gap-5">
            <div className="col-lg-3 me-4">
              <div className="shadow-sm rounded">
                <div className="mt-2 d-flex justify-content-around align-items-center">
                  <div className='mb-2'>
                    <FontAwesomeIcon icon={faUser} className='fs-1' />
                  </div>
                  <div>
                    <h3 className='fw-bold' style={{ color: "#d6564d" }}>258k+</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 me-4">
              <div className="shadow-sm rounded">
                <div className="mt-2 d-flex justify-content-around align-items-center">
                  <div className='mb-2'>
                    <FontAwesomeIcon icon={faGear} className='fs-1' />
                  </div>
                  <div>
                    <h3 className='fw-bold' style={{ color: "#d6564d" }}>590+</h3>
                    <p>Project Complete</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 me-4">
              <div className="shadow-sm rounded">
                <div className="mt-2 d-flex justify-content-around align-items-center">
                  <div className='mb-2'>
                    <FontAwesomeIcon icon={faCalendar} className='fs-1' />
                  </div>
                  <div>
                    <h3 className='fw-bold' style={{ color: "#d6564d" }}>28+</h3>
                    <p>Years of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className='text-center fw-bold pt-4 text-decoration-underline mb-4' style={{color: "#d6564d"}}><FontAwesomeIcon icon={faLaptopCode} width={40} height={40} className='me-2' />Skills</h2>
          <div className="container">
            <div className="row mt-2">
              {skills.map((skill, index) => (
                <div data-index={index} className="col-sm-4 col-md-3 col-xs-3 col-lg-2 col-xl-2 pt-4">
                  <div className="card shadow d-flex justify-content-center flex-column align-items-center">
                    <FontAwesomeIcon icon={skill.icon} className='text-center mt-2' style={{width: "50px", height: "50px"}} />
                    <div className="card-body">
                      <h4 className="card-text fw-bold text-center">{skill.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
