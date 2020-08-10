import React, {useState} from 'react';
import {useLandingDataContext} from "../store/providers/LandingDataProvider";

const LandingContent = () => {
    const { landingData } = useLandingDataContext();
    console.log("in landingContent.....landingData:", landingData);
    // const starWarsCharacter = landingData

    return (
        <div>
            Display results...
        </div>
    )
}

export default LandingContent;
