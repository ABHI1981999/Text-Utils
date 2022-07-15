import React ,{useState} from 'react'
function Textarea(props) {
    const [Text, setText] = useState('');

    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const cToUC =()=>{
        const upperText = Text.toUpperCase();
        setText(upperText);
        props.showalert('Converted to Upper Case','success');
    }
    const cToLC =()=>{
        const lowerText = Text.toLowerCase();
        setText(lowerText);
        props.showalert('Converted to Lower Case','success');
    }
    const clearAll =()=>{
        setText("");
        props.showalert('Cleared Text area','warning');
    }
    const removespace =()=>{
        setText(Text.trim().replace(/,+/g,",").replace(/\s+/g,' '));
        props.showalert('Removed Extra spaces/commas','success');
    }
    const numberOfWords = Text.split(' ').filter(element => {
        return element !== '';
      }).length;
      const numberOfChar = Text.length;

    return (
        <div className='container '>
            <div className="mb-3">
                <h2><label htmlFor="exampleFormControlTextarea1" className="form-label my-3">Enter your text here...</label></h2>
                <textarea className="form-control fs-5  text" onChange={handleOnChange} value={Text} id={`${props.textid}`} rows="10"></textarea>
            </div>
            <button disabled={Text.length===0} type="button" onClick={cToUC} className="btn btn-primary">Convert to UpperCase</button>
            <button disabled={Text.length===0} type="button" onClick={cToLC} className="btn btn-primary mx-5">Convert to LowerCase</button>
            <button disabled={Text.length===0} type="button" onClick={clearAll} className="btn btn-primary ">Clear TextArea</button>
            <button disabled={Text.length===0} type="button" onClick={removespace} className="btn btn-primary mx-5">Remove extra space/comma</button>
            <h3 className='my-2'>Number of Words = {numberOfWords}</h3>
            <h3 className='my-2'>Number of characters = {numberOfChar}</h3>
        </div>
    )
}

export default Textarea
