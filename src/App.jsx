import { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar";
import StackedBarChart from "./components/StackedBarChart";
import DoughnutChart from "./components/DoughnutChart";

function App() {
  const [empContribution, setEmpContribution] = useState(50);
  const [retireAge, setRetireAge] = useState(60);

  return (
    <div className="App"> 
      <Navbar />
      <div className='container'>
        <div className='section1'>
          <div className='user-greeting'>
            <img className='profile-img' src="https://images.pexels.com/photos/9929131/pexels-photo-9929131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Profile Img" />
            <div>
              <h2 className='bitter hi-greeting'>Hi Mike,</h2>
              <span className='welcome-back'>welcome back.</span>
            </div>
          </div>
          <div className='account-data'>
            <span className='subheading'>Today</span>
            <div className='account-balance'>
              <h2>$19,892</h2>
              <span>Account Balance</span>
            </div>
            <div className="flex">
              <div className='year-to-date'>
                <h3>$4,000</h3>
                <span>Year-to-Date</span>
              </div>
              <div className='total-interest'>
                <h3>$1,892</h3>
                <span>Total Interest</span>
              </div>
            </div>
            <select id="acc-select" name="acc-select">
              <option value="">I want to</option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
          <div className='recent-transactions'>
            <span className='subheading'>Recent Transactions</span>
            <div className='transaction-item'>
              <span className='transaction-date'>2020-08-07</span>
              <p className='transaction-log'>Withdrawal Transfer to Bank-XXX11</p>
            </div>
            <hr />
            <div className='transaction-item'>
              <span className='transaction-date'>2020-07-21</span>
              <p className='transaction-log'>Withdrawal Transfer to Bank-XXX11</p>
            </div>
            <hr />
            <div className='transaction-item'>
              <span className='transaction-date'>2020-07-16</span>
              <p className='transaction-log'>Withdrawal Transfer to Bank-XXX11</p>
            </div>
            <hr />
          </div>
        </div>
        <div className='section2'>
          <div className='retirement-income'>
            <span className='subheading'>Retirement Income</span>
            <p className='starting-year bitter'>Starting Year 2056</p>
            <div className='retirement-data'>
              <div className='my-goals'>
                <span>$300,000</span>
                <p>My Goal</p>
                <hr />
              </div>
              <div className='g-ach-est-inc'>
                <div className='goals-achieved'>
                  <span>59%</span>
                  <p>Goal Achieved</p>
                  <hr />
                </div>
                <div className='est-income'>
                  <span>$300</span>
                  <p>Est. Monthly Income</p>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div className='contributions-overtime'>
            <span className='subheading'>Contributions Overtime</span>
            <StackedBarChart className='StackedBarChart' />
          </div>
          <div className='compare-to-peers'>
            <span className='subheading'>How do I compare to my peers?</span>
            <p className='small-grey'>These numbers represent current goal achievement</p>
            <div className='compare-to-peers-data'>
              <div className='age-salary-gender'>
                <div className='age'>
                  <span>Age: </span>
                  <select id="age-select" name="age-select">
                    <option value="under-30">Under 30</option>
                    <option value="31-to-60">31 to 60</option>
                    <option value="above-60">Above 60</option>
                  </select>
                </div>
                <hr />
                <div className='salary'>
                  <span>Salary: </span>
                  <select id="salary-select" name="salary-select">
                    <option value="K20-K30">K 20 - K 30</option>
                    <option value="K30-K40">K 30 - K 40</option>
                    <option value="K40-K50">K 40 - K 50</option>
                    <option value="above-K50">Above K 50</option>
                  </select>
                </div>
                <hr />
                <div className='gender'>
                  <span>Gender: </span>
                  <select id="gender-select" name="gender-select">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <hr />
              </div>
              <div className='compare-to-peers-chart'>
                <DoughnutChart chartData={[78, 22]} title="Average" />
                <DoughnutChart chartData={[95, 5]} title="Top" />
                <DoughnutChart chartData={[59, 41]} title="Me" />
              </div>
            </div>
          </div>
        </div>
        <div className='section3'>
          <span className='subheading'>Retirement Strategy</span>
          <div className='retirement-strategy-data-range'>
            <label>Employee Contribution</label>
            <div className='flex-space-between'>
              <input type="range" name="employee-contribution" id="employee-contribution" min="1" max="100" value={empContribution} onChange={(e) => setEmpContribution(e.target.value)} />
              <span>{empContribution}%</span>
            </div>
            <label>Retirement Age</label>
            <div className='flex-space-between'>
              <input type="range" name="retirement-age" id="retirement-age" min="35" max="75" value={retireAge} onChange={(e) => setRetireAge(e.target.value)} />
              <span>{retireAge}</span>
            </div>
            <hr />
            <div className='flex-space-between'>
              <p>Employer Contribution</p>
              <span>8.4%</span>
            </div>
            <div className='flex-space-between'>
              <p>Interest Rate</p>
              <span>5%</span>
            </div>
            <button className='update-btn'>Update</button>
          </div>
          <center>
            <a href="/Modern-Dashboard">View Help Docs &gt;</a>
          </center>
          <div className='additional-info'>
            <span>Are you considering a <br />
              <b>Housing Advance?</b>
            </span>
            <p>Limited time reduced interest.</p>
            <a href="/Modern-Dashboard">Learn More &gt;</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
