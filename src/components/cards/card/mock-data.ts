import { ICard } from './interface';

export const customPortableTextRaw = [
  {
    _key: '99b334a94800',
    _type: 'customBlock',
    children: [
      {
        _key: 'f0688e8be4e50',
        _type: 'span',
        marks: [],
        text: 'About the Breed',
      },
    ],
    markDefs: [],
    style: 'headingOne',
  },
  {
    _key: 'af61f6e66ed5',
    _type: 'customBlock',
    children: [
      {
        _key: 'd77faf4742ac0',
        _type: 'span',
        marks: [],
        text: 'The Alaskan Klee Kai is a small-sized companion dog that is alert, energetic, and curious, yet reserved with unfamiliar people and situations.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '363ef2e8e1ee',
    _type: 'customBlock',
    children: [
      {
        _key: 'd16017cdc8710',
        _type: 'span',
        marks: [],
        text: 'The Alaskan Klee Kai is a small sized companion dog with a smooth, agile, and well-balanced gait, a body that is well proportioned with a level topline and a length slightly longer than height. The wedge-shaped head, erect triangle shaped ears, well furred double coat in three symmetrical contrasting color varieties, and a loosely curled tail reflect its arctic heritage.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: '822d0f91ac4f',
    _type: 'customBlock',
    children: [
      {
        _key: '7f10ffe37bd50',
        _type: 'span',
        marks: [],
        text: '',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
];

/**
 * You should only use type assertion (as) in mock data.
 */
export const mockDog: Omit<ICard, 'link'> = {
  name: 'Test Name',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, cumque adipisci quis itaque ratione ipsa autem quibusdam numquam quo eaque reprehenderit at quae! Saepe ipsum sint odit maxime quis aliquam, sit quibusdam, officiis commodi, veniam nobis temporibus distinctio iure amet!',
  image: {
    src: 'https://assets.imgix.net/unsplash/jellyfish.jpg?w=800&h=400&fit=crop&crop=entropy',
    alt: 'Test Alt',
    lqip: 'https://assets.imgix.net/unsplash/jellyfish.jpg?w=800&h=400&fit=crop&crop=entropy&px=16&blur=200&fm=webp',
  },
  tags: ['Tag-1', 'Tag-2', 'Tag-3'],
};
