import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import notes from "../notes";
function App(){
   return ( <div>
        <Header />
        {notes.map(note => <Notes key={note.key} title={note.title} content={note.content} />)}
        <Footer />
        </div>
       );

};
export default App;