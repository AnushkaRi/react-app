import { arrayHelpers } from "../library-react/helpers";

export function RandomValue() {
  return <div>Random number is: {arrayHelpers.getRandomElement([1, 2, 3])}</div>;
}
