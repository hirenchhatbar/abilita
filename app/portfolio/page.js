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
              width={500}
              height={500}
              className="img-fluid mx-lg-5 animate__animated animate__headShake animate__delay-2s"
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
                <div className="col-md-6 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPepperHot} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Clearly Interiors</h3>
                      <p>A SaaS based job management web app</p>
                      <p>Role: Senior Symfony/PHP Developer cum Technical Architect</p>
                      <p>Status: Fully released and stable for Clearly Interiors. SaaS in MVP phase.</p>
                      <ul>
                        <li>Develop a job listing page that includes a search dialog with various fields, data listing, and pagination functionality.</li>
                        <li>Create a job detail page with multiple UI sections for job details, stages, tasks, logs, notes, and appointments.Provide users with the ability to add, edit, and delete job details and export reports in Excel format.</li>
                        <li>Develop a custom Symfony command for sending appointment reminders to users at different intervals and integrate it with the Linux Crontab.Build an appointment calendar page with fullcalendar JS library to manage client appointments, allowing for the addition, editing, and deletion of appointments.</li>
                        <li>Develop a user permissions system (ACL) that includes authentication and authorization in the resource and user role matrix using the symfony/security component by creating a custom Voter</li>
                        <li>Build various detail and summary reports, allowing users to export them in Excel format by integrating the phpoffice/phpspreadsheet library.</li>
                        <li>Develop a dedicated HR section with schedules and leave management for employees. Enable superiors to approve or decline leave requests and connect this with client appointments.</li>
                        <li>Build an HR calendar using the fullcalendar JS library, which displays the schedule/occupancy of all employees in a colour-friendly manner using the mexitek/phpcolors library</li>
                        <li>Create user dashboards and WIP (Work In Progress) pages for various user types. Develop a dynamic notification system based on user roles to alert users of any events in the system via email and popup notifications.</li>
                        <li>Integrate the cropperjs JS library on the UI side and the intervention/image library on the backend side to develop an image editor with features such as moving, zooming, cropping, and rotating images. Provide images of various dimensions and sizes on-the-fly using the intervention/image library to meet design requirements. </li>
                        <li>Build a file and directory uploader by integrating the dropzone JS library on the UI side and the  league/flysystem-bundle library on the backend side. Incorporate the maennchen/zipstream-php library  to enable users to download the ZIP of the entire directory.  </li>
                        <li>Implement a full-fledged SaaS by tweaking Nginx, Symfony bundle ecosystem, Doctrine query execution, and Linux bash scripting. This allows the same code base to run for many SME and enterprise customers with a single web root. Provide technical documentation and flow charts for system understanding. </li>
                        <li>Integrate the fzaninotto/faker library to generate sample GDPR compliant data for test and demo environments. </li>
                        <li>Coordinate with the project manager to plan version releases and prepare for release deployment on staging (UAT) and production servers upon approval.</li>
                        <li>Prioritise tasks, fix urgent bugs, and deploy them on production to maintain customer service and meet value commitments.</li>
                        <li>Keep Symfony, PHP libraries, and NPM packages up-to-date by updating and upgrading them at periodic intervals</li>
                      </ul>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">Symfony 5</span>
                        <span className="p-1 badge bg-secondary me-3">Doctrine(ORM)</span>
                        <span className="p-1 badge bg-secondary me-3">Nginx</span>
                        <span className="p-1 badge bg-secondary me-3">Php-fpm</span>
                        <span className="p-1 badge bg-secondary me-3">MariaDB</span>
                        <span className="p-1 badge bg-secondary me-3">API-first</span>
                        <span className="p-1 badge bg-secondary me-3">Bootstrap 5</span>
                        <span className="p-1 badge bg-secondary me-3">jQuery</span>
                        <span className="p-1 badge bg-secondary me-3">Webpack</span>
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

                <div className="col-md-6 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faBuilding} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Yellow Meducation</h3>
                      <p>
                      An online platform by NHS UK which allows medical students to prepare for FRCEM exams by purchasing a subscription and then performing revision sessions and mock exams. The system provides statistics which allows students to gain insights about their progress and preparation.
                      </p>
                      <p>Role: Senior Symfony/PHP Developer cum Technical Architect</p>
                      <p>Status: MVP</p>
                      <ul>
                        <li>Develop landing pages of revision sessions and mock exams in Twig. Develop UI/UX of question detail page with answers in option. Apply lazy loading with certain UI elements to load the question page faster when the user switches next and previous question.</li>
                        <li>Integrate full-fledged user journey of registration, course selection, third-party payment integration and mailing.</li>
                        <li>Integrate Stripe payment gateway (PCI compliant).</li>
                        <li>Integrate Elasticsearch for faster / performant loading of question details consisting index handling, document creation, updates, removal and performing search with different criteria.</li>
                        <li>Use mobiledetect/mobiledetectlib library to integrate different types of UI / UX rendering and complex responsiveness across multiple devices.</li>
                        <li>Create a new custom Symfony constraint / validator by plugging google/recaptcha library for spam control.</li>
                        <li>Create a custom Symfony command to import question data provided as Excel sheets by integrating phpoffice/phpspreadsheet. The command persists data in the database which includes downloading, optimising and storing images as well. Prepare raw SQL(s) to check data integrity and find out issues / bugs post import.</li>
                        <li>Discover and implement a solution of syncing users between two systems - WordPress and Symfony App. Write technical documentation in Confluence.</li>
                        <li>Use nesbot/carbon library to handle dates and its manipulation in the system.</li>
                        <li>Prepare deployment for UAT and production release.</li>
                        <li>Maintain DTAP environments, perform OS and PHP updates / upgrades at periodic intervals to keep them up-to-date.</li>
                        <li>Update / upgrade Symfony, PHP libraries and NPM packages at periodic intervals to keep them up-to-date.</li>
                        <li>Setup SSH and SFTP servers using public key authentication (.pem file)</li>
                      </ul>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">Symfony 6</span>
                        <span className="p-1 badge bg-secondary me-3">Doctrine(ORM)</span>
                        <span className="p-1 badge bg-secondary me-3">Nginx</span>
                        <span className="p-1 badge bg-secondary me-3">Php-fpm</span>
                        <span className="p-1 badge bg-secondary me-3">MariaDB</span>
                        <span className="p-1 badge bg-secondary me-3">Elasticsearch</span>
                        <span className="p-1 badge bg-secondary me-3">API-first</span>
                        <span className="p-1 badge bg-secondary me-3">Twig</span>
                        <span className="p-1 badge bg-secondary me-3">Bootstrap 5</span>
                        <span className="p-1 badge bg-secondary me-3">jQuery</span>
                        <span className="p-1 badge bg-secondary me-3">Webpack</span>
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

                <div className="col-md-6 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faAirbnb} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Nettivuokraus</h3>
                      <p>Rental solution operating in Finland</p>
                      <p>Role: Senior Symfony/PHP Developer</p>
                      <p>Status: Live (Production - Stable)</p>
                      <ul>
                        <li> Develop a database schema and Elasticsearch index mappings to efficiently store the availability of rental items based on their different rental models (such as daily, weekly, overnight, etc.).</li>
                        <li>Build a Symfony command that generates availability in real-time during user actions on the website. This command will run in the background and sync database entries with Elasticsearch.</li>
                        <li>Create a JavaScript solution that displays availability on a calendar using different colours and designs. Integrate AJAX requests to ensure the calendar accurately reflects the state of the database during navigation.</li>
                        <li>Construct a join query in Elasticsearch to enable search options that display only available items.</li>
                        <li> Import advertisements from various formats, such as JSON, XML, CSV, etc., provided by sister websites and third-party providers, along with their corresponding mapping information and business rules. This was achieved by creating Symfony commands and setting them to run daily using Jenkins.</li>
                      </ul>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">Symfony 3</span>
                        <span className="p-1 badge bg-secondary me-3">Doctrine(ORM)</span>
                        <span className="p-1 badge bg-secondary me-3">Nginx</span>
                        <span className="p-1 badge bg-secondary me-3">Php-fpm</span>
                        <span className="p-1 badge bg-secondary me-3">MariaDB</span>
                        <span className="p-1 badge bg-secondary me-3">Elasticsearch</span>
                        <span className="p-1 badge bg-secondary me-3">Redis</span>
                        <span className="p-1 badge bg-secondary me-3">AWS S3</span>
                        <span className="p-1 badge bg-secondary me-3">Jenkins</span>
                        <span className="p-1 badge bg-secondary me-3">Docker</span>
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

                <div className="col-md-6 mt-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faAmazon} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Care Preference(v1)</h3>
                      <p>
                      An online platform for the UK's care provider in the healthcare domain to manage employees, their training, rotas, performance. The system allows managing service users and their incidents as well.
                      </p>
                      <p>Role: Senior Symfony/PHP Developer</p>
                      <p>Status: Live (Production - Stable)</p>
                      <ul>
                        <li>Configured GitLab repositories by creating branches, set up DTAP environments, and resolved issues encountered during the App setup in PHP 7.2. This was done while ensuring that all steps in the Software Development Life Cycle (SDLC) were streamlined and adhered to as per the maintenance contract.</li>
                        <li>Demonstrated expertise in code comprehension, debugging, and implementation of business logic as per the App owner's latest requirements. Completed partial implementation of features and resolved code-related issues.</li>
                        <li>Developed new functionality for service user liaison, including a review system, competencies management, and policies and procedures that function as a file manager.</li>
                        <li>Prepared the release and updated the staging (User Acceptance Testing) server. After approval, deployed the release to the production environment.</li>
                      </ul>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">Symfony 2.8</span>
                        <span className="p-1 badge bg-secondary me-3">Doctrine(ORM)</span>
                        <span className="p-1 badge bg-secondary me-3">Nginx</span>
                        <span className="p-1 badge bg-secondary me-3">Php-fpm</span>
                        <span className="p-1 badge bg-secondary me-3">MariaDB</span>
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

                <div className="col-md-6 mt-4">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPaypal} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Purooz</h3>
                      <p>
                      SaaS based Real estate portal which facilitates property dealers to manage / post their properties. Buyers can search properties of their interest and submit contact requests
                      </p>
                      <p>Role: Senior Symfony/PHP Developer cum Technical Architect</p>
                      <p>Status: Under development (Inhouse)</p>
                      <ul>
                        <li>Conduct market research in the real estate industry and design a comprehensive database schema and Elasticsearch index mappings.</li>
                        <li>Create a search interface with various fields to allow users to find properties of interest and their nearest locations. Display search results in a listing format from the Elasticsearch index. Additionally, develop a detailed property page with a contact form to submit inquiries.</li>
                        <li>Build a blog section with listings of articles and a detailed article page. Provide administrative tools to allow easy editing and modification of the blog content.</li>
                        <li>Develop an administrative section that enables users to search and manage all properties within the system. Provide tools to modify almost every aspect of the public website.</li>
                        <li>Integrate SaaS for real estate dealers, providing an administrative interface for configuring logos, company names, and other business identities.</li>
                        <li>Create technical documentation to assist new dealers in onboarding to the system.</li>
                      </ul>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">Symfony</span>
                        <span className="p-1 badge bg-secondary me-3">Doctrine(ORM)</span>
                        <span className="p-1 badge bg-secondary me-3">Nginx</span>
                        <span className="p-1 badge bg-secondary me-3">Php-fpm</span>
                        <span className="p-1 badge bg-secondary me-3">MariaDB</span>
                        <span className="p-1 badge bg-secondary me-3">Elasticsearch</span>
                        <span className="p-1 badge bg-secondary me-3">API-first</span>
                        <span className="p-1 badge bg-secondary me-3">Bootstrap 5</span>
                        <span className="p-1 badge bg-secondary me-3">jQuery</span>
                        <span className="p-1 badge bg-secondary me-3">Webpack</span>
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

                <div className="col-md-6 mt-3">
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="card-img-actions text-center">
                        <FontAwesomeIcon icon={faPepperHot} size="7x" />
                      </div>
                    </div>
                    <div className="card-body">
                      <h3>Care Preference (v2)</h3>
                      <p>An online platform for the UK's care provider in the healthcare domain to manage employees, their training, rotas, performance. The system allows managing service users and their incidents as well.</p>
                      <p>Role: JavaScript Technical Architect</p>
                      <p>Status: Under development</p>
                      <ul>
                        <li>To be updated soon</li>
                        <li>To be updated soon</li>
                        <li>To be updated soon</li>
                        <li>To be updated soon</li>
                        <li>To be updated soon</li>
                      </ul>
                      <div className="mb-3">
                        <span className="p-1 badge bg-secondary me-3">React</span>
                        <span className="p-1 badge bg-secondary me-3">Bootstrap</span>
                        <span className="p-1 badge bg-secondary me-3">SASS</span>
                        <span className="p-1 badge bg-secondary me-3">Dropzone</span>
                        <span className="p-1 badge bg-secondary me-3">Axios</span>
                        <span className="p-1 badge bg-secondary me-3">Node.js</span>
                        <span className="p-1 badge bg-secondary me-3">Express</span>
                        <span className="p-1 badge bg-secondary me-3">Vite.js</span>
                        <span className="p-1 badge bg-secondary me-3">MariaDB</span>
                        <span className="p-1 badge bg-secondary me-3">Nginx</span>
                        <span className="p-1 badge bg-secondary me-3">Linux</span>
                        <span className="p-1 badge bg-secondary me-3">MySQL</span>
                        <span className="p-1 badge bg-secondary me-3">Workbench</span>
                        <span className="p-1 badge bg-secondary me-3">Postman</span>
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
