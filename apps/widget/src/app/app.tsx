// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  return (
    <div className={`${styles.WidgetWrapper}`}>
      <h1 onClick={}>
        This is a micro frontend loaded using module federation
      </h1>
    </div>
  );
}

export default App;
