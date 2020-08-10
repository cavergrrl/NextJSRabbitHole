import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useLandingDataContext} from '../store/providers/LandingDataProvider';
import LandingHeader from '../components/header/landingHeader';

const useStyles = makeStyles((theme) => ({
    rootLandingLayout: {
        color: '#091a29',
    },
}));

const LandingLayout = (props) => {
    const { landingData } = useLandingDataContext();

    const classes = useStyles();

    return (
        <div id="landing-layout-root">
            {Object.keys(landingData).length > 0 &&
                <>
                    <LandingHeader/>

                    <Grid container justify="center" spacing={2} className={classes.rootLandingLayout}>
                        <Grid item md={10} xs={12}>
                            <Grid container spacing={1}>
                                <Grid item md={12} xs={12}>
                                    <div id="landing-layout-content">
                                        {props.children}
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
        </div>
    )
}

export default LandingLayout;
