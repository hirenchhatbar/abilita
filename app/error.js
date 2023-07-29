'use client';

import Image from 'next/image';
import Link from 'next/link';

import Aos from '@/components/Aos';

export default function Error({ error, reset }) {
  return (
    <main>
      <section className="container-fluid px-lg-0 px-xl-0 my-5">
        <div className="row container mx-auto">
          <div className="col-md-6 col-12 col-lg-6 d-flex justify-content-center flex-column">
            <h1 className="mb-4">500 - Error</h1>
          </div>
          <div className="col-md-6 col-12 col-lg-6" data-aos="fade-left" data-aos-duration="2000">
            <Image
              src="/error-500.webp"
              width={500}
              height={500}
              className="img-fluid mx-lg-5"
              alt={process.env.NEXT_PUBLIC_LOGO_TEXT}
              priority={true}
            />
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container text-center">
          <p>
            Oh dear! It seems like our website is experiencing some technical
            difficulties, resulting in a 500 error. We sincerely apologize for
            any inconvenience this may have caused you.
          </p>
          <p>
            Rest assured, our dedicated team is already hard at work,
            investigating the issue and working towards a resolution. We
            understand the frustration that comes with encountering such errors,
            and we want to assure you that we're doing everything we can to fix
            it promptly.
          </p>
          <p>
            While we work on resolving the problem, there are a couple of things
            you can try to help overcome this issue. First, you can try
            refreshing the page to see if it was just a temporary glitch. If
            that doesn't work, we recommend waiting a few minutes and attempting
            to access the website again.
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
