import React from 'react'
import './App.css';
import Money from './Components/money.js'
import Header from './Components/header'
import Footer from './Components/footer'


function App() {
    return (
        <div>
            <Header />    
            <Money />
            <Footer />
        </div>
    );
}

export default App;