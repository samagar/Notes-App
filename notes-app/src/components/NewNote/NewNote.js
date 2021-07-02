import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NewNote = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredNote, setEnteredNote] = useState('');
    const [enteredCategory, setEnteredCategory] = useState('');
    const [enteredTags, setEnteredTags] = useState('');

/*  const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredNote: '',
        enteredCategory: '',
        enteredTags: '',
     });
 */
    const titleChandler = (event) => {
        setEnteredTitle(event.target.value)
    };
/*          setUserInput((prevState) => {
                return{...prevState,
                enteredTitle: event.target.value };
            });
*/
    const noteChandler = (event) => {
        setEnteredNote(event.target.value)
    };    
        
    const categoryChandler = (event) => {
        setEnteredCategory(event.target.value)
    };

    const tagsChandler= (event) => {
        setEnteredTags(event.target.value)
    };

    const submitChandler = (event) => {
        event.preventDefault();  /* to prevent default page load on submit*/

        const submitData = {
            title: enteredTitle,
            note: enteredNote,
            category: enteredCategory,
            tags: enteredTags
        };


        console.log(submitData);
        setEnteredTitle('');
        setEnteredNote('');
        setEnteredCategory('');
        setEnteredTags(''); 
    };
    
    /*<ReactQuill theme="snow" value={enteredNote} onChange={noteChandler}/> */
    return (
        <div className="new-note">
            <form onSubmit={submitChandler}> 
            <div className="new-note-ctl">
                <label>Title</label>
                <input type='text' 
                value={enteredTitle}
                onChange={titleChandler}/>
            </div>
            <div className="new-note-ctl">
                <label>Note</label>
                <input type='text'
                value={enteredNote}
                onChange={noteChandler}/>
            </div>
            <div className="new-note-ctl">
                <label>Category</label>
                <input type='text' 
                value={enteredCategory}
                onChange={categoryChandler}/>
            </div>
            <div className="new-note-ctl">
                <label>Tags</label>
                <input type='text' 
                value={enteredTags}
                onChange={tagsChandler}/>
            </div>
            <div className="new-note-ctl">
                <button type="submit">Create Note</button>
            </div>
            </form>
        </div>
  )
};

export default NewNote;