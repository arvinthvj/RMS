import "./styles.css";
import { useState } from "react";
import db from "./firebaseConfig";
import { onSnapshot, collection } from "@firebase/firestore";


function Form() {
  const [recievingData, setRecievingData] = useState([]);

  

  onSnapshot(collection(db, "resumes"), (snapshot) => {
    setRecievingData(snapshot.docs.map((doc) => doc.data()));
  });

  return (
    <div>
      <table id="customer">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Resume_category</th>
            <th scope="col">DOB</th>
            <th scope="col">Qualification</th>
            <th scope="col">Branch</th>
            <th scope="col">Year_of_Pass</th>
            <th scope="col">College_Name</th>
            <th scope="col">Contact_No</th>
            <th scope="col">Email_ID</th>
            <th scope="col">Present_Address</th>
            <th scope="col">Pincode</th>
            <th scope="col">Job_Applied</th>
            <th scope="col">Career_Gap</th>
            <th scope="col">Year_of_Degree</th>
            <th scope="col">Candidate_Expectation_CTC</th>
          </tr>
        </thead>
        <tbody>
          {recievingData.map((e) => (
            <tr>
              <td>{e.Name}</td>
              <td>{e.Category}</td>
              <td>{e.Dob}</td>
              <td>{e.Qualification}</td>
              <td>{e.Branch}</td>
              <td>{e.Year_of_Pass}</td>
              <td>{e.College_Name}</td>
              <td>{e.Contact_No}</td>
              <td>{e.Email_ID}</td>
              <td>{e.Present_Address}</td>
              <td>{e.Pincode}</td>
              <td>{e.Job_Applied}</td>
              <td>{e.Career_Gap}</td>
              <td>{e.Year_of_Degree}</td>
              <td>{e.Candidate_Expectation_CTC}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Form;
