import { arrayHelpers } from "../library-react/helpers";

export function RandomValue() {
  const value = arrayHelpers.getRandomElement([1, 2, 3]);
  const isOdd = value % 2 === 1;
  const element = isOdd ? <span>is odd</span> : <span>is even</span>;

  return (
    <div>
      Random number is: {value} {element}
    </div>
  );
}
