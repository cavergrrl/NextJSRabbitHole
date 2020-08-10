import React, {useState} from 'react';
import useI18n from '../../hooks/use-i18n';
import {contentLanguageMap, languages} from '../../lib/i18n';
import Head from 'next/head';
import {makeStyles} from '@material-ui/core/styles';
import PageTransitionLayout from '../../layouts/pageTransitionLayout';
import PageTransitionContent from '../../components/pageTransition/pageTransitionContent';

const useStyles = makeStyles((theme) => ({
    rootPageTransition: {
        color: '#091a29',
        height: '100%',
    },
}));

const PageTransition = () => {
    const i18n = useI18n();

    const [isTransitionDone, setIsTransitionDone] = useState(false);

    const classes = useStyles();

    return (
        <div id="page-transition" className={classes.rootPageTransition}>
            <Head>
                <meta httpEquiv="content-language" content={contentLanguageMap[i18n.activeLocale]}/>
            </Head>

            <PageTransitionLayout>
                <PageTransitionContent />
            </PageTransitionLayout>
        </div>
    )
}


export async function getStaticProps({ params }) {
    const { default: lngDict = {} } = await import(
        `../../locales/${params.lng}.json`
        )

    return {
        props: { lng: params.lng, lngDict },
    }
}

export async function getStaticPaths() {
    return {
        paths: languages.map((l) => ({ params: { lng: l } })),
        fallback: false,
    }
}

export default PageTransition;
