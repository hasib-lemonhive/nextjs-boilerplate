import Link from 'next/link';
import React from 'react';
import { IExampleHero } from './interface';

function ExampleHero({ title, description, testId }: IExampleHero) {
  return (
    <section
      className={`dark:bg-slate-800 bg-gray-50`}
      data-testid={testId || null}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className={`text-3xl font-extrabold sm:text-5xl`}>
            {title.regularPart}
            <strong className={`font-extrabold text-red-700 sm:block`}>
              {title.emphasizedPart}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">{description}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
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
