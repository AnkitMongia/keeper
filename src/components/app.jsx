import React from "react";

import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import notes from "../notes";

function App(){
    return (<div>
        <Header />
        {notes.map( note => <Note title={note.title} content={note.content} />)}
        <Footer />
    </div>);
}

export default App;