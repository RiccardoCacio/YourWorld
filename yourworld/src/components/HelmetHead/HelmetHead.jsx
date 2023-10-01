import React from 'react'
import { Helmet } from 'react-helmet';


const HelmetHead = ({ titlePage, description, keywords }) => {
    return (
        <>
            <Helmet>
                <title>Your World - {titlePage} </title>
                {/* description */}
                <meta name="description" content={description} />
                {/* keywords */}
                <meta name="keywords" content={keywords} />
            </Helmet>
        </>
    )
}

export default HelmetHead
