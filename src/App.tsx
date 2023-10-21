import { useState } from "react";
import "./styles/style.css";

import { Router } from "./store/context";

//pages
import { Landing, Dashboard } from './views/index';

const App = () => {

  const [isComponentSelected, setIsComponentSelected] = useState(false);

  onmessage = async (event: MessageEvent) => {
    const pluginMessage = event.data.pluginMessage;
    if (pluginMessage.type === "selection-change") {
      setIsComponentSelected(pluginMessage.isComponentSelected);
    }
  };

  const [path, setPath] = useState('/');

  const renderPage = () => {
    switch (path) {
      case '/':
        return <Landing />
        break;
      case 'dashboard':
        return <Dashboard />
        break;
      default:
        break;
    }
  }


  return (
    <Router.Provider value={{path, setPath}}>
      {renderPage()}
    </Router.Provider>
  );
};


export default App;