import axios from 'axios';

const landingDataActions = {
    loadLandingData: policyNum => async ({ setState, getState }) => {
        if (getState().loading === true) return;

        setState({
            loading: true,
            policyNumber: policyNum
        })

        var testPolicyNumber = '9876543210';
        console.log("landingData.actions:loadLandingData...TEST:policyNum:", testPolicyNumber);
        const url = process.env.INTERVIEW_BASE_API_URL + 'session/' + testPolicyNumber;

        try {
            const response = await axios.get(url, {
                headers: {
                    'Accept': '*/*',
                    'Content-Type': 'application/json'
                },
                crossDomain: true,
                crossOrigin: true,
            });
            console.log("landingData.actions:loadLandingData...response:", response);
            var data = await response.data;
            console.log("landingData.actions:loadLandingData...data:", data);
            setState( {
                loading: false,
                landingData: data,
            });
            console.log("LandingDataProvider:retrieveLandingData...landingData:", landingData);
            return landingData;
        }
        catch (e) {
            console.log("Interview API error:", e);
        }

        setState(landingData => {
            policyNumber: policyNum
        });
    },
};

export default landingDataActions;