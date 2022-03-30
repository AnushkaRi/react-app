import { arrayHelpers } from "../library-react/helpers";

export function RandomValue() {
  return <div>{arrayHelpers.getRandomElement([1, 2, 3])}</div>;
}
