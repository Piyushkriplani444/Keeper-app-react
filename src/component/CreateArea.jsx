import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpected ,setExpect] = useState(false);

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
    function expand()
    {
        setExpect(true);
    }

  return (
    <div>
      <form className="create-note">
        { isExpected &&
        <input value={note.title}  onChange={handleChange} name="title" placeholder="Title" />
        }
        <textarea onClick={expand} value={note.content} 
        onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpected?3:1} />
         <Zoom in={isExpected} >
        <Fab onClick={submitNote}> <AddIcon /> </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
