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

  async function collectData() {
    let Data = {
      CandidateName: name,
      Category: category,
      Dob: dob,
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
    const addData = await setDoc(doc(db, "resumes", "1"), Data);

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
  <><div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
          <label class="form-check-label" for="flexCheckDefault">
            React
          </label>

        </div><div>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              HTML
            </label>
          </div></>
) : jobapplied == "Back-End" ? (

  <><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" for="flexCheckDefault">
    Python
  </label>

</div><div>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label class="form-check-label" for="flexCheckDefault">
     Java
    </label>
  </div></>
) : jobapplied == "Full-Stack" ? (

  <><div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"  />
  <label class="form-check-label" for="flexCheckDefault">
    Python
  </label>

</div><div>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label class="form-check-label" for="flexCheckDefault">
     Java
    </label>
  </div>
  <div>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label class="form-check-label" for="flexCheckDefault">
     React
    </label>
  </div></>
) : jobapplied == "Foreign-Placement" ? (
<div>
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label class="form-check-label" for="flexCheckDefault">
     Data-Entry
    </label>
  </div>

) : (<p>Nothing selected</p>)}


<p>Approximate Salary You Will Get !!</p>
{jobapplied == "Front-End" ? (<p>Rs.30,000</p>) : jobapplied == "Back-End" ? (<p>Rs.35,000</p>) : jobapplied == "Full-Stack" ? (<p>Rs.50,000</p>) : jobapplied == "Foreign-Placement" ? (<p>Rs.1,00,000</p>) : (<p>Nothing selected</p>)}

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
<input type="date" />
<p>Ending Date of Job</p>
<input type="date" />

      
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
