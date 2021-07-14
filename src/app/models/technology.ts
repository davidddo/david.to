import { Color, TextColor, BackgroundColor } from './color';

export type TechnologyType =
  | 'Angular'
  | 'React'
  | 'NestJS'
  | 'Flutter'
  | 'Unity'
  | 'Blender'
  | 'NGINX'
  | 'Redis'
  | 'MongoDB'
  | 'WebSocket'
  | 'GraphQL';

export interface Technology {
  name: TechnologyType;
  color: Color | { text: TextColor; background: BackgroundColor };
}
