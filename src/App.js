// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [navback, setnavback] = useState('light');
  const [text_color, settext_color] = useState('dark');
  const [mode, setmode] = useState('Enable dark mode');
  const [textid, settextid] = useState('');
  const [alert, setalert] = useState(null);
  const toggledark = () => {
    if (navback === 'light') {
      setnavback("black");
      settext_color('light');
      setmode('Enable light mode');
      showalert('Dark mode Enabled', 'success');
      settextid('exampleFormControlTextarea12');
      document.body.style.backgroundColor = "rgb(40 40 70)";
      document.body.style.color = 'white';
      document.title = 'TextUtils-Darkmode';
    }
    else {
      setnavback("light")
      settext_color('dark');
      setmode('Enable dark mode');
      showalert('Light mode Enabled', 'success');
      settextid('');
      document.body.style.backgroundColor = "white";
      document.body.style.color = 'black';
      document.title = 'TextUtils';
    }
  }

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000)

  }


  // text-area background color = #0c0c1d;
  return (
    <>
      <Router>
        <Navbar title='TextUtils' link='About' toogledark={toggledark} bg_color={navback} modetype={mode} text_color={text_color} />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Textarea textid={textid} showalert={showalert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
