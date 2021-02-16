import styles from './App.module.scss';
import Logo from './components/Logo';
import Chat from './containers/Chat';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Logo />
      <Chat />
    </div>
  );
}

export default App;
