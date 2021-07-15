import { EntityState } from '@ngrx/entity';

export interface DefaultEntityState<T> extends EntityState<T> {
  loading: boolean;
  loaded: boolean;
}
