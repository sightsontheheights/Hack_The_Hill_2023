import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Flag from "../Flag/Flag";

const Result = ({ results }) => {
  var State;
  if (results == " ") {
    State = 0;
  } else if (results.percentage == 0) {
    State = 1;
  } else if (0 < results.percentage && results.percentage <= 33) {
    State = 2;
  } else if (33 < results.percentage && results.percentage <= 52) {
    State = 3;
  } else if (52 < results.percentage && results.percentage <= 70) {
    State = 4;
  } else if (70 < results.percentage && results.percentage <= 79) {
    State = 5;
  } else if (79 < results.percentage && results.percentage < 100) {
    State = 6;
  } else if (results.percentage == 100) {
    State = 7;
  }

  if (State == 0) {
    return (
      <div>
        <p></p>
      </div>
    );
  }
  if (State == 1) {
    return (
      <div>
        <h3>Analysis</h3>
        <p>
          <strong>No Caution</strong> - This email appears to be safe, and there
          are no known security issues or concerns associated with it.
        </p>
        <div className="flagOutput">
          <Flag prop={2}></Flag>
          <Flag prop={2}></Flag> No Spam Content Detected <br></br>
          <Flag prop={2}></Flag>
          <Flag prop={2}></Flag> No Malicious URL's Detected <br></br>
        </div>
      </div>
    );
  }
  if (State == 2) {
    return (
      <div>
        <h3>Analysis</h3>
        <p>
          <strong>Low Caution</strong> - This email is mostly safe, with little
          minor security issues or concerns that you should be aware of.
        </p>
        <div className="flagOutput">
          <Flag prop={2}></Flag> No Spam Content Detected <br></br>
          <Flag prop={2}></Flag> No Malicious URL's Detected <br></br>
        </div>
      </div>
    );
  }
  if (State == 3) {
    return (
      <div>
        <h3>Analysis</h3>
        <p>
          <strong>Moderate Caution</strong> - This email has very few potential
          security risks, but you do not need to exercise caution before opening
          any links or attachments.
        </p>
        <div className="flagOutput">
          <Flag prop={3}></Flag> Potential Spam Content Detected <br></br>
          <Flag prop={2}></Flag> No Malicious URL's Detected <br></br>
        </div>
      </div>
    );
  }

  if (State == 4) {
    return (
      <div>
        <h3>Analysis</h3>
        <p>
          <strong>Moderately High Caution</strong> - This email has a few
          security risks, and it is likely a spam email.
        </p>
        <div className="flagOutput">
          <Flag prop={1}></Flag> Spam Content Detected <br></br>
          <Flag prop={2}></Flag> No Malicious URL's Detected <br></br>
        </div>
      </div>
    );
  }

  if (State == 5) {
    return (
      <div>
        <h3>Analysis</h3>
        <p>
          <strong>Severe Caution</strong> - This email is highly suspicious, and
          you should not open any links or attachments until you have thoroughly
          investigated the source and content of the email, it is also likely a
          spam phishing email.
        </p>
        <div className="flagOutput">
          <Flag prop={1}></Flag> Spam Content Detected <br></br>
          <Flag prop={1}></Flag> Malicious URL's Detected <br></br>
        </div>
      </div>
    );
  }
  if (State == 6) {
    return (
      <div>
        <h3>Analysis</h3>
        <p>
          <strong>Critical Caution</strong> - This email contains a confirmed
          threat, and you should delete it immediately without opening any links
          or attachments, it is highly likely to be a spam phishing email.
        </p>
        <div className="flagOutput">
          <Flag prop={1}></Flag> Spam Content Detected <br></br>
          <Flag prop={1}></Flag> Malicious URL's Detected <br></br>
        </div>
      </div>
    );
  }

  if (State == 7) {
    return (
      <div>
        <h3>Analysis</h3>
        <p>
          <strong>Extreme Caution</strong> - This email poses an imminent
          threat, and you should report it to your email provider, IT department
          or cybersecurity team immediately, it is a confirmed spam phishing
          email.
        </p>
        <div className="flagOutput">
          <Flag prop={1}></Flag>
          <Flag prop={1}></Flag> Spam Content Detected <br></br>
          <Flag prop={1}></Flag>
          <Flag prop={1}></Flag> Malicious URL's Detected <br></br>
        </div>
      </div>
    );
  }
};

export default Result;
