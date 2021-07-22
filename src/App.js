import React from 'react'
import './App.css';
import Money from './Components/money.js'
import Header from './Components/header'
import Footer from './Components/footer'
import Awning from './Components/awning'


function App() {
    return (
        <div className="App">
            <Header />
            <Awning />    
            <Money />
            <Footer />
        </div>
    );
}

export default App;