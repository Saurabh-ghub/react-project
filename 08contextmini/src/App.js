import './App.css';
import Login from './components/login/Login';
import Profile from './components/user/Profile';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
