export default function LazyLoadedComponent() {
  throw Error('Simulated error');
  return <p>I'am lazy loaded component</p>;
}
