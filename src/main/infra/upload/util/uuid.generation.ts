import {v4} from 'uuid'
 function uuidGeneration() {
  const uuid = v4();
  return uuid;
}
export {uuidGeneration}