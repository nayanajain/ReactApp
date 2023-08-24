import React, {useState} from "react";

const ReactHooks = () => {
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('');
    // const [gender, setGender] = useState('');
    // const [listSel, setListSel] = useState('');
    // const [tc, setTc]=useState(false);

    const [submitval, setSubmitVal] = useState({});

    const handleFormsInput =(event) => {
        const uname = event.target.name;
        const value = event.target.value;
        //const {uname, value}=event.target;
        
        setSubmitVal(values => ({...values, [uname]: value}));

     }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(submitval);

    }

    
    // const [ischecked, setischecked] = useState(new Array(skills.length).fill(false));
    // const handleName =(event) => {
    //     setName(event.target.value)
    // }
    // const handleDescription =(event) => {
    //     setDescription(event.target.value)
    // }
    // const handleTC =(event) => {
    //     setTc(!event.target.value);
    // }
    // const handleGender =(event) => {
    //     setGender(event.target.value)
    //}
    // const handleSkills =(event) => {
    //     setischecked(!ischecked);
    // }

    
    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input name="name" value={submitval.name} type="text" onChange={handleFormsInput} />
            <label>Description</label>
            <textarea name="description" value={submitval.description} type="text" onChange={handleFormsInput} />
            <p>Input Value : {submitval.description}</p>
             <label>Gender</label>
            <input value="Male" type="radio" name="gender" onChange={handleFormsInput} /> <label>Male</label>
            <input value="Female" type="radio" name="gender" onChange={handleFormsInput} /><label>Female</label>
            <input value="Other" type="radio" name="gender" onChange={handleFormsInput} /><label>Other</label>
            <p>Selected Value : {submitval.gender}</p>
            {/* <label>Skills</label>
            <input value="Java" type="checkbox" name="skills" checked={ischecked} onChange={handleSkills} /> <label>Java</label>
            <input value="React" type="checkbox" name="skills" checkd={ischecked} onChange={handleSkills} /><label>React</label>
            <input value="Automation" type="checkbox" name="skills" checked={ischecked} onChange={handleSkills} /><label>Automation</label>
    <p>Selected Value : {skills && {skills}}</p> */}
            <label>Select University</label>
            <select name="University" value={submitval.listSel} onChange={handleFormsInput}>
                <option>
                    RTU, Kota
                </option>
                <option n>
                    RGPV
                </option>
                <option>
                    GTU
                </option>
            </select>
            <h1>{submitval.listSel}</h1>
           <button type="submit">Submit</button>
           
        </form>
       
    );
}

export default ReactHooks;
