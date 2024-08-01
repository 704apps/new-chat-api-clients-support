import {v4} from 'uuid'
export function uuidGeneration() {
  const uuid = v4();
  return uuid;
}
