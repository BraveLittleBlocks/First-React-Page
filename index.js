import React from "react"
import ReactDOM from "react-dom"


function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function MainContent(){
    return(
        <>
        <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React is used in many modern websites.</li>
                <li>React is a core technology in Web3</li>
            </ol>
        </>
    )
}

function Footer(){
    return(
        <footer>
                <small>© 2023 Brave Little Blocks. All rights reserved.</small>
            </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))