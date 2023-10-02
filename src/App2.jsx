import React, { useState } from 'react'

export default function App2() {

    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
    })

    const handleChange = (event) => {
      setAnswers({
        ...answers,
        [event.target.name]: event.target.value
      })
    }

    const onSubmitForm = (event) => {
      event.preventDefault();
        console.log(answers)
    }

    return (
    <div className='container'>
        <form onSubmit={(e) => onSubmitForm(e)}>
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

{/* <input type="submit" value="Submit"  className='btn btn-primary' onSubmit={(e) => onSubmitForm(e)}/> */}
        
    </div>
  )
}
