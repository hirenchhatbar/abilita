import Image from 'next/image';
import Link from 'next/link';

import Aos from '@/components/Aos';

export default function NotFound() {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">400 - Not Found</h1>
          </div>
          <div className="col-md-6 col-12 col-lg-6" data-aos="fade-left" data-aos-duration="3000">
            <Image
              src="/error-500.jpg"
              width={500}
              height={500}
              className="img-fluid mx-lg-5"
              alt={process.env.NEXT_PUBLIC_LOGO_TEXT}
            />
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container d-flex flex-column">
          <p>
            Oops! It seems that there was a problem with your request. The
            server received an invalid or malformed request, resulting in a 400
            error. This could be due to a typo in the URL, a missing or
            incorrect parameter, or an issue with the data you submitted.
          </p>
          <p>
            Please double-check the URL you entered and ensure that it is
            spelled correctly. If you were trying to access a specific page,
            make sure the page still exists and hasn't been moved or removed.
          </p>
          <p className="text-center mb-5 mt-2">
            <Link href="/" className="btn btn-secondary">
              Click here to view homepage.
            </Link>
          </p>
        </div>
      </section>
      <Aos />
    </main>
  );
}
