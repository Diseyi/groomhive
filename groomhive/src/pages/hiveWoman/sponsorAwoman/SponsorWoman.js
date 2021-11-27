import React from 'react'
import SubmitButton from '../../../components/submitButton/SubmitButton';
import "./SponsorWoman.css";

const SponsorWoman = () => {
    return (
        <div className="sponsor-woman">
      <h2 className="sponsorwoman-title" >Sponsor A Woman in Tech </h2>
      <p className="p-sponsorwoman" >
      Help us to reach more young talented female minds.
Help us close the gender gap in the tech industry.
Help us achieve more in a short while.
      </p>
      <SubmitButton value="Sponsor a HiveWoman" id="sponsorwoman-button" />
      
    </div>
    )
}

export default SponsorWoman
