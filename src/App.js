import { Button, Stack, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [isPrincipleValid,setIsPrincipleValid] = useState(true)
  const[isRateValid,setIsRateValid] = useState(true)
  const[isYearValid,setIsYearValid] = useState(true)

  const validateInput = (e) =>{
    const {name,value} = e.target
    // logic tocheck number validation - regular expression : /^[0-9]+$/
    if(!!value.match(/^[0-9]+$/)){
      if(name==="principle"){
        setPrinciple(value)
        setIsPrincipleValid(true)
      }else if(name==='rate'){
        setRate(value)
        setIsRateValid(true)
      }else if(name==='year'){
        setYear(value)
        setIsYearValid(true)
      }
    }else{
      if(name=="principle"){
        setPrinciple(value)
        setIsPrincipleValid(false)
      }else if(name=='rate'){
        setRate(value)
        setIsRateValid(false)
      }else if(name=='year'){
        setYear(value)
        setIsYearValid(false)
      }
    }
  }

  const handleCalculate = (e)=> {
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the form completely!!!!!!!")
    }else{
      setInterest(principle*rate*year/100)
    }
  }

  const handleReset = () =>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)

  }
  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center 
    align-items-center w-100 bg-dark'>
      <div style={{ width: '500px' }} className='bg-light p-5 rounded'>
        <h3>Simple Interest app</h3>
        <p>Calculate your simple interest Easily</p>
        <div className="interest-card w-100 bg-warning mt-5 d-flex justify-center align-item-center
        flex-column text-dark rounded shadow">
          <h1 style={{ textAlign: 'center' }}>₹ {interest} </h1>
          <p className='fw-bolder' style={{ textAlign: 'center' }}>Total Simple Interst</p>
        </div>

        <form onSubmit={handleCalculate}>
          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic1" label="₹ Principle Amount" variant="outlined" 
            value={principle || ""} name='principle' onChange={(e)=>validateInput(e)}/>
            <div>
              {
                !isPrincipleValid &&
                <div className='mb-3 text-danger fw-bolder'>
                  *Invalid User Input
                </div>
              }
            </div>
          </div>
          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic2" label="Rate of interest (p.a)%" variant="outlined"
            value={rate || ""} name='rate' onChange={(e)=>validateInput(e)} />
            <div>
              {
                !isRateValid &&
                <div className='mb-3 text-danger fw-bolder'>
                  *Invalid User Input
                </div>
              }
            </div>
          </div>
          <div className='mt-3'>
            <TextField className='w-100' id="outlined-basic3" label="Time Period (Yr)" variant="outlined" 
            value={year || ""} name='year' onChange={(e)=>validateInput(e)}/>
            <div>
              {
                !isYearValid &&
                <div className='mb-3 text-danger fw-bolder'>
                  *Invalid User Input
                </div>
              }
            </div>
          </div>
          <br />
          <Stack direction="row" spacing={2}>
            <Button style={{ height: '70px', width: '200px' }} type='submit' variant="contained"
            disabled={isPrincipleValid && isRateValid && isYearValid?false:true}
            >Calculate</Button>
            <Button style={{ height: '70px', width: '200px' }} onClick={handleReset} variant="outlined">Reset</Button>
          </Stack>

        </form>
      </div>
    </div>
  );
}

export default App;
