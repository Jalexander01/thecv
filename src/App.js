import React from 'react';
import Skill from './components/skills.component';
import './components/CSS/styles.css';
import Intro from './components/intro.component';
import Header from './components/header.component';
import Avatar from './components/avatar.component';
import Footer from './components/footer.component';
import Conclusion from './components/conclusion.component';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Avatar />
        <Intro />
        <Skill />
        <Conclusion />
        <Footer />
      </div>
    )
  }
}

export default App;
