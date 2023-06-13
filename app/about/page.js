import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faHeartCircleCheck,
  faUser,
  faUserCheck,
  faUserGraduate,
  faBook,
  faTrophy,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { faApple, faGoogle, faPaypal } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className='fw-bold mb-4' style={{ color: "#d6564d" }}>About</h1>
            <p className='fs-4'>Debugging is like solving a puzzle, but with one crucial difference: all the pieces are in your head.</p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <img src="/about6.svg" className="img-fluid mx-lg-5" alt="Hiren Chhatbar" style={{ width: "350px", height: "350px" }} />
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container d-flex justify-content-center flex-column">
          <h2
            className="text-center fw-bold py-5 text-decoration-underline"
          >
            <FontAwesomeIcon
              icon={faUser}
              width={25}
              height={25}
              className="me-2"
            />
            About Me
          </h2>
          <p className="mb-5 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container d-flex justify-content-center flex-column">
          <h2
            className="text-center fw-bold py-5 text-decoration-underline">
            <FontAwesomeIcon
              icon={faBook}
              width={35}
              height={25}
              className="me-2"
            />
            Education
          </h2>
          <div className="container rounded d-flex">
            <div className="me-4 mt-3">
              <FontAwesomeIcon
                icon={faUserGraduate}
                width={120}
                height={120}
                style={{ color: "#d6564d" }}
              />
            </div>
            <div className="mx-4">
              <h3>Gujarat Technological University</h3>
              <h5>Master of science in Computer science</h5>
              <span>September 2017 - April 2019</span>
              <br />
              <span>
                Participated in the research of XXX and published 3 papers.
              </span>
              <ul className="mt-1" style={{ color: "gray" }}>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and a type specimen book.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and a type specimen book.
                </li>
              </ul>
            </div>
          </div>
          <hr className="hr" />
          <div className="container rounded d-flex my-3">
            <div className="me-4 mt-3">
              <FontAwesomeIcon
                icon={faUserGraduate}
                width={120}
                height={120}
                style={{ color: "#d6564d" }}
              />
            </div>
            <div className="mx-4">
              <h3>Gujarat Technological University</h3>
              <h5>Master of science in Computer science</h5>
              <span>September 2017 - April 2019</span>
              <br />
              <span>
                Participated in the research of XXX and published 3 papers.
              </span>
              <ul className="mt-1" style={{ color: "gray" }}>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and a type specimen book.
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and a type specimen book.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container d-flex justify-content-center flex-column">
          <h2
            className="text-center fw-bold py-5 text-decoration-underline">
            <FontAwesomeIcon
              icon={faTrophy}
              width={35}
              height={30}
              className="me-2 mb-1"
            />
            Achievements & Certifications
          </h2>
          <div className="row mb-5">
            <div className="container d-flex justify-content-center mt-50 mb-50">
              <div className="row">
                <div className="col-md-4 mt-2">
                  <div className="card bg-primary shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faGoogle} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <h2>Google Code-In Finalist</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum earum accusamus aspernatur vitae consequuntur facere soluta odit quis voluptate fugiat debitis recusandae pariatur est, itaque porro.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-2">
                  <div className="card bg-primary shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faApple} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <h2>Apple IOS App Developer</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus minus commodi iste similique ex enim iure odit, inventore sequi hic quibusdam temporibus at eligendi amet fugiat incidunt omnis quis.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-2">
                  <div className="card bg-primary shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPaypal} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body text-center">
                      <h2>Paypal Web App Developer</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus cum repellendus quidem sed autem similique necessitatibus? Repellat repellendus consequatur, voluptatem iste esse excepturi.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h2
              className="text-center fw-bold py-5 text-decoration-underline"
            >
              <FontAwesomeIcon
                icon={faCode}
                width={35}
                height={25}
                className="me-2"
              />
              Languages
            </h2>
            <h4 className="mb-3">English</h4>
            <div
              className="progress mb-4 rounded-pill"
              style={{ width: "90%", height: "13px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="mb-3">Hindi</h4>
            <div
              className="progress mb-4 rounded-pill"
              style={{ width: "90%", height: "13px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "50%" }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h4 className="mb-3">Gujarati</h4>
            <div
              className="progress mb-4 rounded-pill"
              style={{ width: "90%", height: "13px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <h2
              className="text-center fw-bold py-5 text-decoration-underline"
              
            >
              <FontAwesomeIcon
                icon={faHeartCircleCheck}
                width={35}
                height={25}
                className="me-2"
              />
              Hobbies
            </h2>
            <div className="">
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-primary">Primary</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-secondary">Secondary</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-success">Success</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-danger">Danger</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-warning">Warning</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-info">Info</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-light">Light</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-dark">Dark</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-primary">Primary</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-secondary">Secondary</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-success">Success</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-danger">Danger</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-warning">Warning</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-info">Info</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-light">Light</span>
              <span class="fs-5 p-2 mx-2 mb-3 badge text-bg-dark">Dark</span>
              <span class="fs-5 p-2 mx-2 badge text-bg-primary">Primary</span>
              <span class="fs-5 p-2 mx-2 badge text-bg-secondary">Secondary</span>
              <span class="fs-5 p-2 mx-2 badge text-bg-success">Success</span>
              <span class="fs-5 p-2 mx-2 badge text-bg-danger">Danger</span>              
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container d-flex justify-content-center flex-column">
          <h2
            className="text-center fw-bold py-5 text-decoration-underline"
          >
            <FontAwesomeIcon
              icon={faUserCheck}
              width={35}
              height={25}
              className="me-2"
            />
            Testimonials
          </h2>
          <div className="row mb-3">
            <div className="col-md-4">
              <div className="p-3 text-center px-4">
                <div>
                  <h6 className="lh-base">
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia."
                  </h6>
                </div>
                <div className="mt-4">
                  <img
                    src="https://i.imgur.com/PKHvlRS.jpg"
                    className="rounded-circle"
                    width={80}
                  />
                  <h5 className="mb-0">
                    Person Name
                  </h5>
                  <span>Co-founder, Company</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 text-center px-4">
                <div>
                  <h6 className="lh-base">
                    "Separated they live in right at the coast of
                    the Semantics, a large language ocean."
                  </h6>
                </div>
                <div className="mt-4">
                  <img
                    src="https://i.imgur.com/w2CKRB9.jpg"
                    className="rounded-circle"
                    width={80}
                  />
                  <h5 className="mb-0">
                    {" "}
                    Person Name
                  </h5>
                  <span>Co-founder, Company</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-3 text-center px-4">
                <div>
                  <h6 className="lh-base">
                    "A small river named Duden flows by their place and supplies
                    it with the necessary regelialia."
                  </h6>
                </div>
                <div className="mt-4">
                  <img
                    src="https://i.imgur.com/ACeArwY.jpg"
                    className="rounded-circle"
                    width={80}
                  />
                  <h5 className="mb-0">
                    Person Name
                  </h5>
                  <span>Co-founder, Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
