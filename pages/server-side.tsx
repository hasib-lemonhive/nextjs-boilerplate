import Head from 'next/head';
import type { NextPage, GetServerSideProps } from 'next';
import client from 'src/backend/client';
import { DogsQuery } from 'src/backend/queries/dogs';
import { ISanityDog } from 'src/backend/types';
import Card from 'src/components/card';
import Link from 'next/link';
import { PortableTextBlock } from '@portabletext/types';
import { generateImageUrl } from 'src/backend/generate-image';
import { CardImageDimensions } from '@components/card/interfaces';

interface Props {
  dogs: ISanityDog[];
}

const Home: NextPage<Props> = ({ dogs }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col justify-center items-center min-h-screen pt-16 bg-slate-100 dark:bg-slate-800">
        <h1 className="text-6xl">
          Welcome to{' '}
          <a
            href="https://nextjs.org"
            className="text-primary hover:underline focus:underline"
          >
            Next.js!
          </a>{' '}
          Template
        </h1>

        <h1 className="text-3xl font-bold mt-10">
          Here are some country cards with puppy images!
        </h1>

        <Link
          className="dark:bg-white dark:text-red-600 dark:active:text-red-500 bg-primary text-black hover:text-slate-800 block w-full rounded px-4 py-2 mt-5 text-sm font-medium shadow dark:hover:text-red-700 focus:outline-none focus:ring  sm:w-auto"
          href="/"
        >
          Go Back Home
        </Link>

        <div className="grid items-center justify-center flex-wrap max-w-3xl grid-cols-2">
          {dogs.map((dog: ISanityDog, index: number) => {
            const image = generateImageUrl(
              dog.customImageSchema?.imageFile!,
              CardImageDimensions.width,
              CardImageDimensions.height
            );

            return (
              <Card
                key={index}
                dog={{
                  breed: dog.breed!,
                  description:
                    dog.customPortableTextRaw! as PortableTextBlock[],
                  name: dog.name!,
                  image: {
                    url: image.src,
                    alt: dog.customImageSchema?.altDescription!,
                    lqip: image.lqip,
                  },
                }}
              />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: DogsQuery,
  });

  return {
    props: {
      dogs: data.allDog,
    },
  };
};
