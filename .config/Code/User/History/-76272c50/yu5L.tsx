import GridBackgroundDemo from "./aaa";

export default function hi() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <GridBackgroundDemo>
        <Comp />
      </GridBackgroundDemo>
    </div>
  );
}

export function Comp() {
  return <p>Hello there</p>;
}
