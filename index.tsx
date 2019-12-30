import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import { SkillMatrixForm } from './components/skill-matrix/skill-matrix-form';
import { NavHeader } from './components/navbar-header/nav-header';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  

  render() {
    return (
      <div>
        <NavHeader />
        <SkillMatrixForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
