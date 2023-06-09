import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGraduationCap, faHeartCircleCheck, faUser, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-brands-svg-icons';


export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <p className='fw-bold fs-4 mb-0'>Debugging is like </p>
            <h4 className='fw-bolder fs-1 my-3' style={{ color: "#d6564d" }}>Solving a puzzle, </h4>
            <h2 className="mb-3">But with one crucial difference: </h2>
            <h2 className="mb-3">All the pieces are in your <span style={{ color: "#d6564d" }}>Head</span>.</h2>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <img src="/about6.svg" className='img-fluid' alt="Hiren Chhatbar" />
          </div>
        </div>
      </section >
      <section className='Container-fluid'>
        <div className="container d-flex justify-content-center flex-column">
          <h2 className='text-center fw-bold py-4 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faUser} width={25} height={25} className='me-2' />About Me</h2>
          <p className="mb-5 text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </section>
      <section className='Container-fluid'>
        <div className="container d-flex justify-content-center flex-column">
          <h2 className='text-center fw-bold py-4 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faUserCheck} width={35} height={25} className='me-2' />Testimonials</h2>
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="p-3 text-center px-4">
                <div>
                  <h6 className="lh-base">"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."</h6>
                </div>
                <div className='mt-4'>
                  <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" width={80} />
                  <h5 className="mb-0" style={{ color: "gray" }}>Person Name</h5>
                  <span style={{ color: "gray" }}>Co-founder, Company</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 text-center px-4">
                <div>
                  <h6 className="lh-base">"Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. "</h6>
                </div>
                <div className='mt-4'>
                  <img src="https://i.imgur.com/w2CKRB9.jpg" className="rounded-circle" width={80} />
                  <h5 className="mb-0" style={{ color: "gray" }}> Person Name</h5>
                  <span style={{ color: "gray" }}>Co-founder, Company</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 text-center px-4">
                <div>
                  <h6 className="lh-base">"A small river named Duden flows by their place and supplies it with the necessary regelialia."</h6>
                </div>
                <div className='mt-4'>
                  <img src="https://i.imgur.com/ACeArwY.jpg" className="rounded-circle" width={80} />
                  <h5 className="mb-0" style={{ color: "gray" }}>Person Name</h5>
                  <span style={{ color: "gray" }}>Co-founder, Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h2 className='text-center fw-bold py-4 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faCode} width={35} height={25} className='me-2' />Languages</h2>
            <h4 className='mb-3'>English</h4>
            <div className="progress mb-4 rounded-pill" style={{ width: "90%" }}>
              <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className='mb-3'>Hindi</h4>
            <div className="progress mb-4 rounded-pill" style={{ width: "90%" }}>
              <div className="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <h4 className='mb-3'>Gujarati</h4>
            <div className="progress mb-4 rounded-pill" style={{ width: "90%" }}>
              <div className="progress-bar" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <h2 className='text-center fw-bold py-4 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faHeartCircleCheck} width={35} height={25} className='me-2' />Hobbies</h2>
            <div className="mx-lg-5 mx-xl-5 d-flex flex-column flex-wrap">
              <div className='d-flex justify-content-around mb-4'>
                <span className="fs-5 p-2 badge rounded-pill text-bg-primary">Cycling</span>
                <span className="fs-5 p-2 badge rounded-pill text-bg-secondary">Dancing</span>
              </div>
              <div className='d-flex justify-content-between mb-4'>
                <span className="fs-5 p-2 badge rounded-pill text-bg-success">Journaling</span>
                <span className="fs-5 p-2 badge rounded-pill text-bg-light">Reading</span>
                <span className="fs-5 p-2 badge rounded-pill text-bg-warning">Gardening</span>
              </div>
              <div className='d-flex justify-content-around mb-4'>
                <span className="fs-5 p-2 badge rounded-pill text-bg-danger">Blogging</span>
                <span className="fs-5 p-2 badge rounded-pill text-bg-info">Dancing</span>
              </div>
              <div className='d-flex justify-content-between mb-4'>
                <span className="fs-5 p-2 badge rounded-pill text-bg-warning">Journaling</span>
                <span className="fs-5 p-2 badge rounded-pill text-bg-secondary">Reading</span>
                <span className="fs-5 p-2 badge rounded-pill text-bg-success">Gardening</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid'>
        <div className="container d-flex justify-content-center flex-column">
          <h2 className='text-center fw-bold py-4 text-decoration-underline' style={{ color: "#d6564d" }}><FontAwesomeIcon icon={faGraduationCap} width={35} height={25} className='me-2' />Education</h2>
          <div className="container shadow-sm border rounded d-flex">
            <div className='me-4 my-3'>
              <img src="./GTU.png" alt="" style={{ width: "100px", height: "100px" }} />
            </div>
            <div>
              <h3>GTU University</h3>
              <h5>Master of science in Computer science</h5>
              <span>September 2017 - April 2019</span>
              <br />
              <span>Participated in the research of XXX and published 3 papers.</span>
              <ul className='mt-1' style={{ color: "gray" }}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
