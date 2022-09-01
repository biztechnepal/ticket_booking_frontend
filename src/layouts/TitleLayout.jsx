import React from "react"
import Head from 'next/head'
import Footer from "src/components/Footer"

function TitleLayout({ children, title }) {
    return (
        <React.Fragment>
            <Head>
                <title>{title} | Dashboard</title>
                {/* <link rel='icon' href='/icon-192x192.png' /> */}
                <link rel="shortcut icon" type="image/x-icon" href="/icon-192x192.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
            </Head>
            {children}
        </React.Fragment>
    )
}

export default TitleLayout
