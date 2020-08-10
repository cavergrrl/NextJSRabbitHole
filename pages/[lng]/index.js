import React from 'react';
import Head from 'next/head';
import useI18n from '../../hooks/use-i18n';
import { languages, contentLanguageMap } from '../../lib/i18n';
import InterviewState from "../../components/interviewState";

const Index = () => {
    const i18n = useI18n();

    return (
        <div id="app-root">
            <Head>
                <meta httpEquiv="content-language" content={contentLanguageMap[i18n.activeLocale]}/>
            </Head>
            <InterviewState />
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

export default Index;
