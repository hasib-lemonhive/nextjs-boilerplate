import React from 'react';
import { IExampleBody } from './interface';

function ExampleBody({ content, testId }: IExampleBody) {
  return (
    <section
      className="dark:bg-slate-600 bg-gray-200 h-screen flex items-center justify-center"
      data-testid={testId || null}
    >
      <div className="container text-center">
        <h3 className="text-6xl pb-3">{content}</h3>
      </div>
    </section>
  );
}

export default ExampleBody;
