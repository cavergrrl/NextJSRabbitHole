import React from 'react';
import {defaults} from 'react-sweet-state';
import {produce} from 'immer';
import Head from 'next/head';
import OHHStore from '../store/ohhstore';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import I18n from '../lib/i18n'
import theme from '../lib/theme';
import '../styles.scss';

export default function RabbitHoleApp(props) {
    const { Component, pageProps } = props;

    defaults.mutator = (currentState, producer) => produce(currentState, producer);

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Next JS Rabbit Hole</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
                    <OHHStore>
                        <Component {...pageProps} />
                    </OHHStore>
                </I18n>
            </ThemeProvider>
        </React.Fragment>
    );
};
