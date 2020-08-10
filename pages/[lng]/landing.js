import React from 'react';
import Head from "next/head";
import {contentLanguageMap, languages} from "../../lib/i18n";
import useI18n from "../../hooks/use-i18n";
import {useLandingDataContext} from '../../store/providers/LandingDataProvider';
import LandingContent from '../../components/landingContent';

const Landing = () => {
    const i18n = useI18n();
    const { landingData } = useLandingDataContext();
    console.log("?????", landingData);

    return (
        <div id="landing-root">
            <Head>
                <meta httpEquiv="content-language" content={contentLanguageMap[i18n.activeLocale]}/>
            </Head>

            <LandingContent />
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

export default Landing;
