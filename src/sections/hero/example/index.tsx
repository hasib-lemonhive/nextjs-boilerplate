import Link from 'next/link';
import React from 'react';
import { IExampleHero } from './interface';

function ExampleHero({ title, description }: IExampleHero) {
  return (
    <section
      role="hero"
      className={`dark:bg-black bg-gray section-padding-primary min-h-screen flex items-center`}
    >
      <div className="container">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className={`text-3xl font-extrabold sm:text-5xl dark:text-white`}>
            {title.regularPart}
            <strong className={`font-extrabold text-red-700 sm:block`}>
              {title.emphasizedPart}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed dark:text-white">
            {description}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              className="inline-block px-4 py-2 mt-5 text-sm font-medium text-white transition-colors ease-in-out rounded shadow dark:bg-white dark:text-danger-light dark:active:text-danger bg-primary hover:bg-danger duration-350 focus:outline-none focus:shadow-none sm:w-auto dark:hover:bg-primary dark:hover:text-white"
              href="/server-side"
            >
              Server Side Example
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleHero;
