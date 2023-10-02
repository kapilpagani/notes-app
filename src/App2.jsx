import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import emailjs from '@emailjs/browser';
import Header from './Header';


export default function App2() {
  let navigate = useNavigate();
  const form = useRef();

    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: '',
        question11: '',
        question12: '',
        question13: '',
        question14: '',
        question15: '',
    })

    const handleChange = (event) => {
      setAnswers({
        ...answers,
        [event.target.name]: event.target.value
      })
    }

    const onSubmitForm = (event) => {
      event.preventDefault();
        console.log(answers);
      //   emailjs.sendForm('service_cqibb8u', 'template_a8hiqmd', form.current, '3JRMenFFDFGdapZP5')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  

        navigate('success')
    }

    return (
      <>
      <Header />
        <form ref={form} onSubmit={(e) => onSubmitForm(e)} className='container col-md-9'>
  {/* <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={answers.question1}/>
  </div> */}
  <div className="form-group mt-5">
    <label htmlFor="question1">Name of the entrepreneur:</label>
    <input type="text" className="form-control" id="question1" name="question1" onChange={(e) => handleChange(e)} value={answers.question1}/>
  </div>
  <div className="form-group mt-2">
    <label htmlFor="question2">Name of the organization:</label>
    <input type="text" className="form-control" id="question2" name="question2" onChange={(e) => handleChange(e)} value={answers.question2}/>
  </div>
  

  <fieldset className="form-group mt-3">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question3" id="Male" value="Male" checked={answers.question3 === 'Male'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Male">
          Male 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question3" id="Female" value="Female" checked={answers.question3 === 'Female'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Female">
          Female
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question3" id="Other" value="Other" checked={answers.question3 === 'Other'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Other">
          Other
          </label>
        </div>
      </div>
    </div>
  </fieldset>

  <fieldset className="form-group mt-3">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Age</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question4" id="20-30" value="20-30" checked={answers.question4 === '20-30'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="20-30">
          20-30
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question4" id="31-40" value="31-40" checked={answers.question4 === '31-40'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="31-40">
          31-40 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question4" id="41-50" value="41-50" checked={answers.question4 === '41-50'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="41-50">
          41-50 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question4" id="Above 51" value="Above 51" checked={answers.question4 === 'Above 51'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Above 51">
          Above 51 
          </label>
        </div>
      </div>
    </div>
  </fieldset>

  <fieldset className="form-group mt-3">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Caste</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question5" id="General" value="General" checked={answers.question5 === 'General'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="General">
          General
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question5" id="SC" value="SC" checked={answers.question5 === 'SC'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="SC">
          SC
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question5" id="ST" value="ST" checked={answers.question5 === 'ST'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="ST">
          ST
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question5" id="OBC" value="OBC" checked={answers.question5 === 'OBC'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="OBC">
          OBC 
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  <fieldset className="form-group mt-3">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Marital status </legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question6" id="Married" value="Married" checked={answers.question6 === 'Married'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Married">
          Married
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question6" id="Unmarried" value="Unmarried" checked={answers.question6 === 'Unmarried'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Unmarried">
          Unmarried
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question6" id="Widow/ divorced" value="Widow/ divorced" checked={answers.question6 === 'Widow/ divorced'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Widow/ divorced">
          Widow/ divorced
          </label>
        </div>
      </div>
    </div>
  </fieldset>

  <fieldset className="form-group mt-3">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Education qualification :</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="Primary" value="Primary" checked={answers.question7 === 'Primary'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Primary">
          Primary 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="Secondary" value="Secondary" checked={answers.question7 === 'Secondary'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Secondary">
          Secondary
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="Higher secondary" value="Higher secondary" checked={answers.question7 === 'Higher secondary'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Higher secondary">
          Higher secondary
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="Graduate" value="Graduate" checked={answers.question7 === 'Graduate'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Graduate">
          Graduate
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="Post-graduate" value="Post-graduate" checked={answers.question7 === 'Post-graduate'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Post-graduate">
          Post-graduate 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="Doctoral" value="Doctoral" checked={answers.question7 === 'Doctoral'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="Doctoral">
          Doctoral
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  {/* 
  <div className="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div> */}


  {/* <button  className="btn btn-primary" onSubmit={(e) =>onSubmitForm(e)}>Save</button> */}
  <div class="text-center">
  <input type="submit" value="Submit"  className='btn btn-primary mt-4' />
</div>
  

</form>
</>

        
  )
}
