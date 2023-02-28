import React from 'react';
import { IExampleBody } from './interface';
import Container from '@components/container';

function ExampleBody({ content }: IExampleBody) {
  return (
    <section
      role="example-body-section"
      className="flex items-center justify-center h-screen section-padding-primary dark:bg-black-light bg-gray-light"
    >
      <Container>
        <h3 className="pb-3 text-6xl text-center">{content}</h3>
      </Container>
    </section>
  );
}

export default ExampleBody;
