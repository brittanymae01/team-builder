import React, { useState } from 'react'

function Form(props) {
    const [member, setMember] = useState({ name: '', email: '', role: '' })

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value });
        console.log(e.target.value);
    };

    const submitForm = e => {
        e.preventDefault();
        props.teamMember(member)
        setMember({ name: '', email: '', role: '' });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                value={member.name}
                onChange={handleChanges}
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='text'
                name='email'
                value={member.email}
                onChange={handleChanges}
            />
            <label htmlFor='role'>Role</label>
            <select
                id='role' name='role' onChange={handleChanges} value={member.role}>
                <option>Select One...</option>
                <option>FrontEnd</option>
                <option>Backend</option>
                <option>Designer</option>
            </select>
            <button type='submit'>Submit</button>


        </form>
    )
}

export default Form;