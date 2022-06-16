import React from 'react';
import logo from './logo.svg';
import './App.css';
const errorMessage = 'There is an error in the form, please check it! 😥'
const successMessage = '🧮 Your monthly mortgage payment will be: '
function App() {

  // The interest rate of our loan
  
  const calculateMortgagePayment = () => {
    const amountInput = document.getElementById('amount-input') as HTMLInputElement
    const interestRateInput = document.getElementById('interest-rate-input') as HTMLInputElement
    const lengthOfLoanInput = document.getElementById('length-of-loan-input') as HTMLInputElement
    const calculateBtn = document.getElementById('calculate-btn') as HTMLInputElement
    const resetBtn = document.getElementById('reset-btn') as HTMLInputElement
    const mortgageFinalResult = document.getElementById('mortgage-final-result') as HTMLInputElement
    const borrowedMoney = amountInput!.value
    const lengthOfLoan: any = parseFloat(lengthOfLoanInput.value) * 12
    const interestRate = interestRateInput!.value
    const calculedInterest: any = parseFloat(interestRate) / 100
    const interestReady = calculedInterest / 12

    const percentage = interestReady
    const percentagePlusOne = interestReady + 1
    const exponentiationOperator = (percentagePlusOne ** lengthOfLoan)
    const firstDividend = percentage * exponentiationOperator
    const secondDividend = exponentiationOperator - 1
    const division = firstDividend / secondDividend
    const mortgage = borrowedMoney
    const quotas: any = parseFloat(mortgage) * division

    mortgageFinalResult.textContent = successMessage + quotas.toFixed(2)
    mortgageFinalResult.classList.add('success-message')
    calculateBtn.classList.add('form-success')
    calculateBtn.setAttribute('disabled', 'disabled')
    resetBtn.style.display = 'block'
  }
  React.useEffect(() => {
    setTimeout(() => {
      const amountInput = document.getElementById('amount-input') as HTMLInputElement
      const interestRateInput = document.getElementById('interest-rate-input') as HTMLInputElement
      const lengthOfLoanInput = document.getElementById('length-of-loan-input') as HTMLInputElement
      const calculateBtn = document.getElementById('calculate-btn') as HTMLInputElement
      const resetBtn = document.getElementById('reset-btn') as HTMLInputElement
      const mortgageFinalResult = document.getElementById('mortgage-final-result') as HTMLInputElement

      amountInput.addEventListener('focusout', function (e) {
        if (!amountInput.validity.valid) {
          amountInput.classList.add('error')
        } else {
          amountInput.classList.remove('error');
        }
      })
      interestRateInput.addEventListener('focusout', function (e) {
        if (!interestRateInput.validity.valid) {
          interestRateInput.classList.add('error')
        } else {
          interestRateInput.classList.remove('error');
        }
      })
      lengthOfLoanInput.addEventListener('focusout', function (e) {
        if (!lengthOfLoanInput.validity.valid) {
          lengthOfLoanInput.classList.add('error')
        } else {
          lengthOfLoanInput.classList.remove('error');
        }
      });
      calculateBtn.addEventListener('click', function (e) {
        if (amountInput.validity.valid && interestRateInput.validity.valid && lengthOfLoanInput.validity.valid) {
          calculateMortgagePayment()
        } else {
          mortgageFinalResult.textContent = errorMessage
          mortgageFinalResult.classList.add('error-message')
          calculateBtn.classList.add('form-error')
          if (!amountInput.validity.valid) {
            amountInput.classList.add('error')
          }
          if (!interestRateInput.validity.valid) {
            interestRateInput.classList.add('error')
          }
          if (!lengthOfLoanInput.validity.valid) {
            lengthOfLoanInput.classList.add('error')
          }
        }
      });
      resetBtn.addEventListener('click', function () {
        resetBtn.style.display = 'none'
        mortgageFinalResult.textContent = ''
        calculateBtn.removeAttribute('disabled')
        calculateBtn.classList.remove('form-success')
      })
    }, 600)
    /*  setInterval(() => {
       let d = new Date(); //object of date()
       let hr = d.getHours();
       let min = d.getMinutes();
       let sec = d.getSeconds();
       let hr_rotation = 30 * hr + min / 2; //converting current time
       let min_rotation = 6 * min;
       let sec_rotation = 6 * sec;
       let session = "AM";
       let hh: any = d.getHours();
       let mm: any = d.getMinutes();
       let ss: any = d.getSeconds();
       if (hh == 0) {
         hh = 12;
       }
       if (hh > 12) {
         hh = hh - 12;
         session = "PM";
       }
 
       hh = (hh < 10) ? "0" + hh : hh;
       mm = (mm < 10) ? "0" + mm : mm;
       ss = (ss < 10) ? "0" + ss : ss;
 
       let time = hh + ":" + mm + ":" + ss + " " + session;
       let clock = document.getElementById("clock");
       //clock!.value = time;
       let hour = document.getElementById("hour");
       let minute = document.getElementById("minute");
       let second = document.getElementById("second");
       hour!.style.transform = `rotate(${hr_rotation}deg)`;
       minute!.style.transform = `rotate(${min_rotation}deg)`;
       second!.style.transform = `rotate(${sec_rotation}deg)`;
     }, 1000); */



  }, [])
  return (
    <div className="App">
      {/*   <div id="clockContainer">
        <div id="hour"></div>
        <div id="minute"></div>
        <div id="second"></div>
      </div>
    
      <div id="clock"></div> */}
      <main className="mortgage-form-wrapper">
        <header>
          <h1>Mortgage calculator 🧮</h1>
        </header>
        <form id="mortgage-form" action="" className="mortgage-form">
          <div className="mortgage-form--row">
            <label htmlFor="amount-input">Principal loan amount</label>
            <input type="number" name="amount-input" id="amount-input" min="50000" placeholder="Min 50000" required />
            <p className="mortgage-form--help">Min 50000</p>
          </div>
          <div className="mortgage-form--row">
            <label htmlFor="interest-rate-input">Interest rate</label>
            <input type="number" name="amount-input" id="interest-rate-input" min="1" max="20" placeholder="Min 1% max 20%" required />
            <p className="mortgage-form--help">Min 1% max 20%, without '%' symbol</p>
          </div>
          <div className="mortgage-form--row">
            <label htmlFor="length-of-loan-input">Length of loan</label>
            <input type="number" name="amount-input" id="length-of-loan-input" min="1" max="40" placeholder="Min 1 year, max 40 years" required />
            <p className="mortgage-form--help">Min 1 year, max 40 years</p>
          </div>
          <div className="mortgage-form--row mortgage-form--row__button-wrapper">
            <button type="button" id="calculate-btn">Calculate</button>
            <button type="reset" id="reset-btn" className="reset-btn">Reset</button>
          </div>
        </form>
        <p className="motgage-result"><span id="mortgage-final-result"></span></p>
      </main>
    </div>
  );
}

export default App;
