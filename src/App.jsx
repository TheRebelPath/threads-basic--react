import Nav from "./componets/Nav";
import Header from "./componets/Header";
import Feed from "./componets/Feed";
import PopUp from "./componets/PopUp";

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Feed />
      <PopUp />
    </div>
  );
};

export default App;
