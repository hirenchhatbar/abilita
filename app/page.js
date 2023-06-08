'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

const skills = [
  {
    'icon': faBootstrap,
    'name': 'Bootstrap'
  },
  {
    'icon': faBootstrap,
    'name': 'Bootstrap'
  },
  {
    'icon': faBootstrap,
    'name': 'Bootstrap'
  },
  {
    'icon': faBootstrap,
    'name': 'Bootstrap'
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
            <p className="lh-4" style={{ fontSize: "1rem" }}>I’m a software engineer specializing in building web apps and websites. Currently, I’m working as a PHP/JavaScript Technical Architect at <Link href="https://www.weignyte.com" target="_blank" style={{ color: "#d6564d", fontWeight: "bold" }}>Weignyte</Link>.</p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <img src="/avatar6.svg" className='img-fluid' alt="Hiren Chhatbar" />
          </div>
        </div>

        <div className="container d-flex justify-content-center flex-column">
          <h2 className='text-center fw-bold py-4 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faUser} width={25} height={25} className='me-2' />About Me</h2>
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className="container">
          <h2 className='text-center fw-bold py-4 text-decoration-underline mb-4' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faLaptopCode} width={40} height={40} className='me-2' />Skills</h2>

          <div className="container">
            <div className="row mt-2">
              {skills.map((skill, index) => (
                <div className="col-2" data-index={index}>
                  <div className="card shadow-sm d-flex justify-content-center flex-column align-items-center">
                    <FontAwesomeIcon icon={skill.icon} className='text-center mt-2' style={{ width: "50px", height: "50px" }} />
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
