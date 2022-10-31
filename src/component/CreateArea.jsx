import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
   
    const [note,setNote] = useState({
        title:"",
        content:""
    })
    
    function handleChange(e)
    {
        const { name,value }  = e.target;
        setNote((prevValue)=>{
           
           return { 
            ...prevValue,
            [name]:value
           }
        })
    }
    function submitNote(event)
    {   
       
        props.onAdd(note)
        setNote({title:"",content:""});
        event.preventDefault();
    }
    

  return (
    <div>
      <form className="create-note">
        <input value={note.title}  onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}> <AddIcon /> </button>
      </form>
    </div>
  );
}

export default CreateArea;
