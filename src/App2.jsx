import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';


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
        <form ref={form} onSubmit={(e) => onSubmitForm(e)} className='container'>
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
          <input className="form-check-input" type="radio" name="question3" id="gridRadios1" value="option1" checked={answers.question3 === 'option1'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios1">
          Male 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question3" id="gridRadios2" value="option2" checked={answers.question3 === 'option2'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios2">
          Female
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question3" id="gridRadios3" value="option3" checked={answers.question3 === 'option3'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios3">
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
          <input className="form-check-input" type="radio" name="question4" id="gridRadios1" value="option1" checked={answers.question4 === 'option1'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios1">
          20-30
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question4" id="gridRadios2" value="option2" checked={answers.question4 === 'option2'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios2">
          31-40 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question4" id="gridRadios3" value="option3" checked={answers.question4 === 'option3'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios3">
          41-50 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question4" id="gridRadios3" value="option4" checked={answers.question4 === 'option4'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios3">
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
          <input className="form-check-input" type="radio" name="question5" id="gridRadios1" value="option1" checked={answers.question5 === 'option1'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios1">
          General
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question5" id="gridRadios2" value="option2" checked={answers.question5 === 'option2'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios2">
          SC
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question5" id="gridRadios3" value="option3" checked={answers.question5 === 'option3'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios3">
          ST
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question5" id="gridRadios3" value="option4" checked={answers.question5 === 'option4'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios3">
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
          <input className="form-check-input" type="radio" name="question6" id="gridRadios1" value="option1" checked={answers.question6 === 'option1'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios1">
          Married
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question6" id="gridRadios2" value="option2" checked={answers.question6 === 'option2'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios2">
          Unmarried
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question6" id="gridRadios3" value="option3" checked={answers.question6 === 'option3'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios3">
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
          <input className="form-check-input" type="radio" name="question7" id="gridRadios1" value="option1" checked={answers.question7 === 'option1'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios1">
          Primary 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="gridRadios2" value="option2" checked={answers.question7 === 'option2'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios2">
          Secondary
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="gridRadios3" value="option3" checked={answers.question7 === 'option3'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios3">
          Higher secondary
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="gridRadios4" value="option4" checked={answers.question7 === 'option4'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios4">
          Graduate
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="gridRadios5" value="option5" checked={answers.question7 === 'option5'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios5">
          Post-graduate 
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="question7" id="gridRadios6" value="option6" checked={answers.question7 === 'option6'} onChange={(e) => handleChange(e)}/>
          <label className="form-check-label" htmlFor="gridRadios6">
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
  <input type="submit" value="Submit"  className='btn btn-primary mt-4' />

</form>

        
  )
}
