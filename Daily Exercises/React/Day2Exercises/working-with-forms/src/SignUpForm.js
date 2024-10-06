import { Component, useState } from 'react'

export default function SignUpForm() {

    const [person, setPerson] = useState({firstname:"", lastname:"", email:"", dateofbirth:"", ismale:"", isfemale:"", country:"", likespineapple:"", likesliquorice:""})
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(person));

        // log values from controlled inputs
    }

    const inputChange = (e) => {
        const target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        //console.log(e.target.name + e.target.value);
        setPerson({ ...person, [name]: value });
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name="firstname" value={person.firstname} placeholder='First Name' onChange={inputChange}/>

                <input type="text" name="lastname" value={person.lastname} placeholder='Last Name' onChange={inputChange}/>

                <input type="email" name="email" value={person.email} placeholder='Email' onChange={inputChange} />

                <input type="date" name="dateofbirth" value={person.dateofbirth} placeholder='Date of Birth' onChange={inputChange} />

                <br />

                <label>
                    <input name="ismale" type='radio' checked={person.ismale} onChange={inputChange}></input>
                    Male
                </label>

                <label>
                    <input name="isfemale" type='radio' checked={person.isfemale} onChange={inputChange}></input>
                    Female
                </label>

                <br />

                <select name='country' value={person.country} onChange={inputChange}>
                    <option value=''>Select Country</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='MO'>Mexico</option>
                </select>

                <br />

                <label>
                    <input name="likespineapple" type='checkbox' checked={person.likespineapple} onChange={inputChange} />
                    Likes Pineapple
                </label>

                <label>
                    <input name="likesliquorice" type='checkbox' checked={person.likesliquorice} onChange={inputChange} />
                    Likes Liquorice
                </label>

                <br />
                
                <button>Submit</button>
            </form>
            <div>
            <textarea id="data" placeholder='Display controlled component values' readOnly value={JSON.stringify(person)} rows="10" cols="50"></textarea>
            </div>
        </div>
    )
}

// class SignUpForm extends Component {

//     state = {

//     }

//     handleSubmit = (event) => {
//         event.preventDefault()

//         console.log(this.state)
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>

//                     <input placeholder='First Name' />

//                     <input placeholder='Last Name' />

//                     <input placeholder='Email' type="email" />

//                     <input placeholder='Date of Birth' type="date" />

//                     <br />

//                     <label>
//                         <input type='radio'></input>
//                         Male
//                     </label>

//                     <label>
//                         <input type='radio'></input>
//                         Female
//                     </label>

//                     <br />

//                     <select name='country'>
//                         <option value=''>Select Country</option>
//                         <option value='US'>United States</option>
//                         <option value='CA'>Canada</option>
//                         <option value='MO'>Mexico</option>
//                     </select>

//                     <br />

//                     <label>
//                         <input type='checkbox' />
//                         Likes Pineapple
//                     </label>

//                     <label>
//                         <input type='checkbox' />
//                         Likes Liquorice
//                     </label>

//                     <br />
                    
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }