import { useState } from "react";
import Form from "./form";
import db from "./firebaseConfig";
import { onSnapshot, collection } from "@firebase/firestore";
import { doc, setDoc } from "firebase/firestore";


function App() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [dob, setDob] = useState("");
  const [qualification, setQualification] = useState("");
  const [branch, setBranch] = useState("");
  const [yearofpass, setYearofPass] = useState("");
  const [collegename, setCollegeName] = useState("");
  const [contactno, setContactNo] = useState("");
  const [emailid, setEmailID] = useState("");
  const [presentaddress, setPresentAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [jobapplied, setJobApplied] = useState("");
  const [candidateexpectationctc, setCandidateExpectationCTC] = useState("");
  const [careergap, setCareerGap] = useState("");
  const [month, setMonth] = useState("");
  const [yearofdegree, setYearofDegree] = useState("");
  
//States for front-end checked
const [checkReact, setCheckReact] = useState(false);
const [checkCss, setCheckCss] = useState(false);
const [checkBootstrap, setCheckBootstrap] = useState(false);
const [checkHtml, setCheckHtml] = useState(false);
const [checkJs, setCheckJs] = useState(false);

////States for back-end checked
const [checkPython,setCheckPython] = useState(false)

//States for input dates 

const [fromDate,setFromDate]= useState("")
const [toDate,setToDate]= useState("")



//State for  percent skills total matching
const [percentSkill , setPercentSkill] = useState(0)




function collectData() {
debugger
//Total Sum Skill matching calc --STARTS
    let totalSum=0
    let percentSkillMatching = 0
    
    if(jobapplied =="Front-End"){
    
      if(checkReact==true){
        totalSum++
      }
      if(checkCss==true){
        totalSum++
      }
      if(checkBootstrap==true){
        totalSum++
      }
      if(checkHtml==true){
        totalSum++
      }
      if(checkJs==true){
        totalSum++
      }
    
       
      percentSkillMatching = (totalSum / 5)*100
    
    
    }else if(jobapplied == "Back-End"){
      if(checkPython==true){
        totalSum++
      }
    
    
    
    
    
      percentSkillMatching = (totalSum / 4)*100
    
    }else if(jobapplied == "Full-Stack"){
    
    
    
    
      percentSkillMatching = (totalSum / 9)*100
    }else{
    
    
    
    
      percentSkillMatching = (totalSum / 1)*100
    }
     
    
    setPercentSkill(percentSkillMatching)
    
//Total Sum Skill matching calc --ENDS




//Days calculator starts --STARTS
    
    
    var getDaysLeft = function (date1, date2) {
      var daysDiffInMilliSec = Math.abs(new Date(date1) - new Date(date2));
      var daysLeft = daysDiffInMilliSec / (1000 * 60 * 60 * 24);   
      return daysLeft;
    };
    var dateDiff = getDaysLeft(fromDate, toDate); // pass your from date and to date states here
    console.log(dateDiff);

//Days calculator starts --ENDS



//sending the object to DB ---STARTS

    let Data = {
      CandidateName: name,
      Category: category,
      Dob: dob,
      FromDate :fromDate,
      ToDate : toDate,
      PercentSkills : percentSkill,
      Qualification: qualification,
      Branch: branch,
      yearofpass: yearofpass,
      CollegeName: collegename,
      contactNo: contactno,
      EmailID: emailid,
      presentAddress: presentaddress,
      Pincode: pincode,
      JobApplied: jobapplied,
      candidateExpectationCTC: candidateexpectationctc,
      CareerGap: careergap,
      Month: month,
      yearofDegree: yearofdegree
    };
    // cloud.collection("resumes").add(Data);
    async function sendData(){
let name= `2021${contactno}${yearofdegree}`
      const addData = await  setDoc(doc(db, "resumes", "2" ), Data);

    }
    sendData()


//sending the object to DB ---ENDS


//ALl logics end ---------------
  }

  return (
    <div className="grid-container">
      <h1>Resume Management System</h1>
      <div class="form-row">
        <div class="col-md-6 mb-6">
          <label>Candidate Name </label>
          <br></br>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6 mb-6">
          <label>Resume Category </label>
          <br></br>
          <input
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
      </div>
      <br></br>
      <div class="form-row">
        <div class="col-md-6 mb-6">
          <label>Date Of Birth </label>
          <br></br>
          <input
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6 mb-6">
          <label>Qualification </label>
          <br></br>
          <input
            onChange={(e) => {
              setQualification(e.target.value);
            }}
          />
        </div>
      </div>
      <br></br>
      <div class="form-row">
        <div class="col-md-6 mb-6">
          <label>Branch</label>
          <br></br>
          <input
            onChange={(e) => {
              setBranch(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6 mb-6">
          <label>Year Of Pass</label>
          <br></br>
          <input
            onchange={(e) => {
              setYearofPass(e.target.value);
            }}
          />
        </div>
      </div>
      <br></br>
      <div class="form-row">
        <div class="col-md-6 mb-6">
          <label>College Name</label>
          <br></br>
          <input
            onchange={(e) => {
              setCollegeName(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6 mb-6">
          <label>Contact No</label>
          <br></br>
          <input
            onchange={(e) => {
              setContactNo(e.target.value);
            }}
          />
        </div>
      </div>
      <br></br>
      <div class="form-row">
        <div class="col-md-6 mb-6">
          <label>Email-ID</label>
          <br></br>
          <input
            onchange={(e) => {
              setEmailID(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6 mb-6">
          <label>Present Address</label>
          <br></br>
          <input
            onchange={(e) => {
              setPresentAddress(e.target.value);
            }}
          />
        </div>
      </div>
      <br></br>
      <div class="form-row">
        <div class="col-md-6 mb-6">
          <label>Pincode</label>
          <br></br>
          <input
            onchange={(e) => {
              setPincode(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6 mb-6">
          <label>Job Applied</label>
          <br></br>
          <select  onChange={(e) => { 
              setJobApplied(e.target.value);
            }} class="form-select" aria-label="Default select example">
            <option selected>Select a Job Role</option>
            <option>Front-End</option>
            <option>Back-End</option>
            <option>Full-Stack</option>
            <option>Foreign-Placement</option>
        </select>
        </div>
      </div>
      <br></br>

              <p>What are the Skills You have Right now ?</p>
      {jobapplied == "Front-End" ? (
  <><div class="form-check1">
          <input  type="checkbox" onChange={(e)=>{setCheckReact(e.target.checked)}} value=""   />
          <label  >
            REACT
          </label>
          </div><div class="form-check">
          <input  type="checkbox" onChange={(e)=>{setCheckCss(e.target.checked)}} value=""  />
          <label  >
            CSS
          </label>
          </div><div class="form-check">
          <input  type="checkbox" onChange={(e)=>{setCheckBootstrap(e.target.checked)}} value=""   />
          <label  >
            BOOTSTRAP
          </label>
          </div><div>
            <input  type="checkbox" value="" onChange={(e)=>{setCheckHtml(e.target.checked)}}  />
            <label class="form-check-label" >
              HTML
            </label>
          </div><div class="form-check">
          <input class="form-check-input" type="checkbox" value="" onChange={(e)=>{setCheckJs(e.target.checked)}}   />
          <label class="form-check-label" for="flexCheckDefault">
            JAVASCRIPT
          </label>
          </div></>
) : jobapplied == "Back-End" ? (

  <><div class="form-check2">
  <input class="form-check-input" type="checkbox" value="" onChange={(e)=>{setCheckPython(e.target.checked)}}  />
  <label class="form-check-label" for="flexCheckDefault">
    PYTHON
  </label>

</div><div>
    <input  type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     JAVA
    </label>
  </div><div>
    <input  type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     REACT
    </label>
  </div><div>
    <input  type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     ANGULAR
    </label>
  </div></>
) : jobapplied == "Full-Stack" ? (

  <><div class="form-check">
  <input class="form-check-input" type="checkbox" value=""   />
  <label class="form-check-label" for="flexCheckDefault">
    PYTHON
  </label>

</div><div>
    <input class="form-check-input" type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     JAVA
    </label>
  </div>
  <div>
    <input class="form-check-input" type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     ANGULAR
    </label>
  </div>
  <div>
    <input class="form-check-input" type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     HTML
    </label>
  </div>
  <div>
    <input class="form-check-input" type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     CSS
    </label>
  </div>
  <div>
    <input class="form-check-input" type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     REACT
    </label>
  </div></>
) : jobapplied == "Foreign-Placement" ? (
<div>
    <input class="form-check-input" type="checkbox" value=""  />
    <label class="form-check-label" for="flexCheckDefault">
     DATA-ENTRY
    </label>
  </div>

) : (<p>Nothing selected</p>)}

<p>Approximate Salary You Will Get !!</p>
{jobapplied == "Front-End" ? (<p>Rs.30,000</p>) : jobapplied == "Back-End" ? (<p>Rs.35,000</p>) : jobapplied == "Full-Stack" ? (<p>Rs.50,000</p>) : jobapplied == "Foreign-Placement" ? (<p>Rs.1,00,000</p>) : (<p>Nothing selected</p>)}

{/* {jobapplied =="Front-End" ? (<p>{}</p>)} */}






<div class="form-row">
        <div class="col-md-6 mb-6">
          <label>Candidate Expectataion CTC</label>
          <br></br>
          <input
            onChange={(e) => {
              setCandidateExpectationCTC(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6 mb-6">
          <label>Career Gap</label>
          <br></br>
          <input
            onChange={(e) => {
              setCareerGap(e.target.value);
            }}
          />
        </div>
      </div>
      <br></br>


{jobapplied == "Front-End" ? (<p>{((30000-candidateexpectationctc)/30000)*100}%</p>) : (<p></p>)}
{jobapplied == "Back-End" ? (<p>{((35000-candidateexpectationctc)/35000)*100}%</p>) : (<p></p>)}
{jobapplied == "Full-Stack" ? (<p>{((50000-candidateexpectationctc)/50000)*100}%</p>) : (<p></p>)}
{jobapplied == "Foreign-Placement" ? (<p>{((100000-candidateexpectationctc)/100000)*100}%</p>) : (<p></p>)}



<p>Experience that you have</p>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    1st Job
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
  2nd Job
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
  3rd Job
  </label>
</div>
<p>Starting Date of Job</p>
<input type="date" onChange={(e)=>{ 
  setFromDate(e.target.value)}} />
<p>Ending Date of Job</p>
<input type="date" onChange={(e)=>{setToDate(e.target.value)}}/>

      
      <div class="form-row">
        <div class="col-md-6 mb-6">
          <label>Month</label>
          <br></br>
          <input
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          />
        </div>
        <div class="col-md-6 mb-6">
          <label>Year Of Degree</label>
          <br></br>
          <input
            onChange={(e) => {
              setYearofDegree(e.target.value);
            }}
          />
        </div>
      </div>
      <button onClick={collectData} type="submit" className="btn">
        submit
      </button>
      <br></br>
      <br></br>
      <Form />
    </div>
  );
}

export default App;
