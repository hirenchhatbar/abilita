import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faPaperclip,
  faPepperHot,
} from '@fortawesome/free-solid-svg-icons'
import {
  faAirbnb,
  faAmazon,
  faFacebook,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons'

import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 mt-5 mb-3">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">Portfolio</h1>
            <p>
              Building websites isn't just about coding - it's about creating
              seamless digital experiences that connect people to information
              and inspire them to take action.
            </p>
          </div>
          <div className="col-md-6 col-12 col-lg-6">
            <Image
              src="/portfolio.jpg"
              className="img-fluid mx-lg-5"
              alt="Hiren Chhatbar"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container d-flex justify-content-center flex-column">
          <div className="row mb-5">
            <div className="container d-flex justify-content-center mt-50 mb-50">
              <div className="row">
                <div className="col-md-4 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPepperHot} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Red-Chilli</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel dolorum earum accusamus aspernatur vitae
                        consequuntur facere soluta odit quis voluptate fugiat
                        debitis recusandae pariatur est, itaque porro.
                      </p>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">PHP</span>
                        <span className="p-1 badge bg-secondary me-3">
                          React js
                        </span>
                        <span className="p-1 badge bg-secondary me-3">
                          Node js
                        </span>
                      </div>
                      <Link href="/">
                        visit project
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          size="1x"
                          className="mx-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faBuilding} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Real-Estate</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel dolorum earum accusamus aspernatur vitae
                        consequuntur facere soluta odit quis voluptate fugiat
                        debitis recusandae pariatur est, itaque porro.
                      </p>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">
                          React js
                        </span>
                        <span className="p-1 badge bg-secondary me-3">
                          Javascript
                        </span>
                        <span className="p-1 badge bg-secondary me-3">
                          Laravel
                        </span>
                      </div>
                      <Link href="/">
                        visit project
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          size="1x"
                          className="mx-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faAirbnb} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Airbnb</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel dolorum earum accusamus aspernatur vitae
                        consequuntur facere soluta odit quis voluptate fugiat
                        debitis recusandae pariatur est, itaque porro.
                      </p>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">
                          Python
                        </span>
                        <span className="p-1 badge bg-secondary me-3">
                          HTML
                        </span>
                        <span className="p-1 badge bg-secondary me-3">CSS</span>
                      </div>
                      <Link href="/">
                        visit project
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          size="1x"
                          className="mx-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faAmazon} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Amazon</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque voluptatibus cum repellendus quidem sed
                        autem similique necessitatibus? Repellat repellendus
                        consequatur, voluptatem iste esse excepturi.
                      </p>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">
                          Java
                        </span>
                        <span className="p-1 badge bg-secondary me-3">c++</span>
                        <span className="p-1 badge bg-secondary me-3">
                          Node js
                        </span>
                      </div>
                      <Link href="/">
                        visit project
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          size="1x"
                          className="mx-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mt-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPaypal} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Paypal</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque voluptatibus cum repellendus quidem sed
                        autem similique necessitatibus? Repellat repellendus
                        consequatur, voluptatem iste esse excepturi.
                      </p>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">PHP</span>
                        <span className="p-1 badge bg-secondary me-3">
                          Vue js
                        </span>
                        <span className="p-1 badge bg-secondary me-3">
                          SASS
                        </span>
                      </div>
                      <Link href="/">
                        visit project
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          size="1x"
                          className="mx-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faFacebook} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Facebook</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque voluptatibus cum repellendus quidem sed
                        autem similique necessitatibus? Repellat repellendus
                        consequatur, voluptatem iste esse excepturi.
                      </p>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">
                          Angular
                        </span>
                        <span className="p-1 badge bg-secondary me-3">
                          Tailwind
                        </span>
                        <span className="p-1 badge bg-secondary me-3">
                          Node js
                        </span>
                      </div>
                      <Link href="/">
                        visit project
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          size="1x"
                          className="mx-1"
                        />
                      </Link>
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
