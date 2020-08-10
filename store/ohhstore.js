import React from 'react';
import LandingDataProvider from './providers/LandingDataProvider';

export default function OHHStore({ children }) {

    return (
        <LandingDataProvider>
            {/*    <PageTransitionContext.Provider value={[pageTransitionData, setPageTransitionData]}>*/}
                    {children}
                {/*</PageTransitionContext.Provider>*/}
        </LandingDataProvider>
    );
};
