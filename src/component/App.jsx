import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
   const [notes,setNotes] = useState([])

   function AddItem(InputNote)
   {
      setNotes(prevValue => {
        return  [...prevValue,InputNote]
      });
   }
   function deletItem(id)
   {
      setNotes(prevValue=>{
         return prevValue.filter((item,index)=>{ return index!==id });
      })
   }

  return (
    <div>
      <Header />
      <CreateArea onAdd={AddItem} />
      { notes.map((noteItem,index) =>  <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deletItem}  />  ) }
      <Footer />
    </div>
  );
}

export default App;
