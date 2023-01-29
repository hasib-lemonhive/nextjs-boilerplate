import React from 'react';
import { IExampleFooter } from './interface';

function ExampleFooter({ testId }: IExampleFooter) {
  return (
    <section
      data-testid={testId || null}
      className="dark:bg-slate-900 bg-gray-400 flex items-center justify-center py-6"
    >
      <p>Footer</p>
    </section>
  );
}

export default ExampleFooter;
