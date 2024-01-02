import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Bismillaah</h1>
        <h2>Learning ContextApi in ReactJs</h2>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
