import React, {createContext, useContext, useState, useEffect}  from 'react';
import axios from "axios";

const LandingContext = createContext();
export const useLandingDataContext = () => useContext(LandingContext);

const initialState = {
    character: {},
    characterId: null,
    loading: true,
    error: null
}

export default function LandingDataProvider({ children }) {
    const [landingData, setLandingData] = useState(initialState);

    const addCharacterId = (charId) => {
        if (charId) {
            setLandingData({
                ...landingData,
                characterId: charId,
            });
            console.log("LandingDataProvider:addCharacterId...landingData:", landingData);
        }
    };

    useEffect(() => {
        console.log("LandingDataProvider:useEffect>>>BEGIN:landing data:", landingData);
        if (landingData.characterId) {
            retrieveLandingData()
                .then( resp => {
                    console.log("LandingDataProvider:useEffect>>>END:resp:", resp);
                    console.log("LandingDataProvider:useEffect>>>END:landingData.character:", landingData.character);
                });
        }
    }, [landingData.characterId]);

    async function retrieveLandingData() {
        const url = process.env.CHARACTER_API_URL + landingData.characterId;

        try {
            const response = await axios.get(url, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                crossDomain: true,
                crossOrigin: true,
            });
            console.log("LandingDataProvider:retrieveLandingData...response:", response);
            var data = await response.data;
            console.log("LandingDataProvider:retrieveLandingData...data:", data);
            setLandingData({
                ...landingData,
                character: data,
                loading: false,
            });
            console.log("LandingDataProvider:retrieveLandingData...landingData.character:", landingData.character);
            return landingData;
        }
        catch (e) {
            console.log("Interview API data unknown error:", e);

            setLandingData( {
                ...landingData,
                loading: false,
                error: e
            });
        }
    }

    return (
        <LandingContext.Provider value={{ landingData, addCharacterId: addCharacterId }}>
            {children}
        </LandingContext.Provider>
    );
}