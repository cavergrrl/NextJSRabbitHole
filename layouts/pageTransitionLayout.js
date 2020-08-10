import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {PageTransitionContext} from '../store/ohhstore';
import PageTransitionHeader from '../components/header/pageTransitionHeader';

const useStyles = makeStyles((theme) => ({
    rootPageTransitionLayout: {
        color: '#091a29',
        marginTop: '40px',
    },
}));

const PageTransitionLayout = (props) => {
    const [ pageTransitionData, setPageTransitionData ] = useContext(PageTransitionContext);

    const classes = useStyles();

    return (
        <div id="page-transition-layout">
            {Object.keys(pageTransitionData).length > 0 &&
            <>
                <PageTransitionHeader />

                <Grid container justify="center" alignItems="stretch" spacing={2} className={classes.rootPageTransitionLayout} >
                    <Grid item md={12} xs={12}>
                        <div id="page-transition-layout-content">
                            {props.children}
                        </div>
                    </Grid>
                </Grid>
            </>
            }
        </div>
    )
}

export default PageTransitionLayout;
