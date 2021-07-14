export type Color =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink';

export type ColorDensity =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

export type TextColor =
  | 'text-transparent'
  | 'text-current'
  | 'text-black	'
  | 'text-white'
  | `text-${Color}-${ColorDensity}`;

export type BackgroundColor =
  | 'bg-transparent'
  | 'bg-current'
  | 'bg-black'
  | 'bg-white'
  | `background-${Color}-${ColorDensity}`;
