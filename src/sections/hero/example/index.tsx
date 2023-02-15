import React from 'react';
import { IExampleHero } from './interface';
import Button from '@components/button';
import { redirectButtonProps } from '@components/button/mock-data';

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
            <Button.Redirect
              {...redirectButtonProps}
              label={'Server Side Example'}
              href="/server-side"
              isOpenNewTab={false}
              size="sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExampleHero;
