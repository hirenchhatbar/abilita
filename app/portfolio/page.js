import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faPaperclip,
  faPepperHot,
} from "@fortawesome/free-solid-svg-icons";
import { faAirbnb, faAmazon, faFacebook, faPaypal } from "@fortawesome/free-brands-svg-icons";

import Link from 'next/link';

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 mt-5 mb-3">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className='fw-bold mb-4' style={{ color: "#d6564d" }}>Portfolio</h1>
            <p className='fs-4'>Building websites isn't just about coding - it's about creating seamless digital experiences that connect people to information and inspire them to take action.</p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <img src="/portfolio2.svg" className='img-fluid mx-lg-5' alt="Hiren Chhatbar" style={{ width: "350px", height: "350px" }} />
          </div>
        </div>
      </section>

      <section>
        <div className="container d-flex justify-content-center flex-column">
          <h2
            className="text-center fw-bold py-4 text-decoration-underline"
            style={{ color: "#d6564d" }}
          >
            <FontAwesomeIcon
              icon={faPaperclip}
              width={35}
              height={30}
              className="me-2 mb-1"
            />
            Projects
          </h2>
          <div className="row mb-5">
            <div className="container d-flex justify-content-center mt-50 mb-50">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPepperHot} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Red-Chilli Restaurant</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dolorum earum accusamus aspernatur vitae consequuntur facere soluta odit quis voluptate fugiat debitis recusandae pariatur est, itaque porro.</p>
                      <div>
                        <span class="fs-5 p-1 badge bg-secondary me-3">PHP</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">React js</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Node js</span>
                      </div>
                      <h5 className="mt-3"><Link href="/" className="text-reset text-decoration-underline">Visit Project<FontAwesomeIcon icon={faArrowUpRightFromSquare} width={25} height={19} className="mx-1"/></Link></h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faBuilding} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Real-Estate</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ducimus minus commodi iste similique ex enim iure odit, inventore sequi hic quibusdam temporibus at eligendi amet fugiat incidunt omnis quis.</p>
                      <div>
                        <span class="fs-5 p-1 badge bg-secondary me-3">React js</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Javascript</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Laravel</span>
                      </div>
                      <h5 className="mt-3"><Link href="/" className="text-reset text-decoration-underline">Visit Project<FontAwesomeIcon icon={faArrowUpRightFromSquare} width={25} height={19} className="mx-1"/></Link></h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faAirbnb} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Airbnb</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus cum repellendus quidem sed autem similique necessitatibus? Repellat repellendus consequatur, voluptatem iste esse excepturi.</p>
                      <div>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Python</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">HTML</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">CSS</span>
                      </div>
                      <h5 className="mt-3"><Link href="/" className="text-reset text-decoration-underline">Visit Project<FontAwesomeIcon icon={faArrowUpRightFromSquare} width={25} height={19} className="mx-1"/></Link></h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faAmazon} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Amazon</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus cum repellendus quidem sed autem similique necessitatibus? Repellat repellendus consequatur, voluptatem iste esse excepturi.</p>
                      <div>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Java</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">c++</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Node js</span>
                      </div>
                      <h5 className="mt-3"><Link href="/" className="text-reset text-decoration-underline">Visit Project<FontAwesomeIcon icon={faArrowUpRightFromSquare} width={25} height={19} className="mx-1"/></Link></h5>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPaypal} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Paypal</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus cum repellendus quidem sed autem similique necessitatibus? Repellat repellendus consequatur, voluptatem iste esse excepturi.</p>
                      <div>
                        <span class="fs-5 p-1 badge bg-secondary me-3">PHP</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Vue js</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">SASS</span>
                      </div>
                      <h5 className="mt-3"><Link href="/" className="text-reset text-decoration-underline">Visit Project<FontAwesomeIcon icon={faArrowUpRightFromSquare} width={25} height={19} className="mx-1"/></Link></h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faFacebook} width={100} height={100} />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Facebook</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque voluptatibus cum repellendus quidem sed autem similique necessitatibus? Repellat repellendus consequatur, voluptatem iste esse excepturi.</p>
                      <div>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Angular</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Tailwind</span>
                        <span class="fs-5 p-1 badge bg-secondary me-3">Node js</span>
                      </div>
                      <h5 className="mt-3"><Link href="/" className="text-reset text-decoration-underline">Visit Project<FontAwesomeIcon icon={faArrowUpRightFromSquare} width={25} height={19} className="mx-1"/></Link></h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  )
}
