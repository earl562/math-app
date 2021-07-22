import React from 'react'
import './App.css';
import Money from './Components/money.js'
import Header from './Components/header'
import Footer from './Components/footer'


function App() {
    return (
        <div className="App">
            <Header />    
            <Money />
            <Footer />
        </div>
    );
}

export default App;