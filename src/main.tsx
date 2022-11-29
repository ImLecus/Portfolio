import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import '../dist/style.css'
import '../dist/output.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
)
