import React from 'react';
import { IExampleBody } from './interface';

function ExampleBody({ content }: IExampleBody) {
  return (
    <section
      role="example-body-section"
      className="flex items-center justify-center h-screen section-padding-primary dark:bg-black-light bg-gray-light"
    >
      <div className="container text-center">
        <h3 className="pb-3 text-6xl">{content}</h3>
      </div>
    </section>
  );
}

export default ExampleBody;
