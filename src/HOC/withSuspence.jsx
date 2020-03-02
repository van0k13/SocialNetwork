import Preloader from "../components/common/preloader/preloader"
import React, { Suspense } from 'react'

const withSuspense = (Component) => {
    return (props) => {
        return <Suspense fallback={<Preloader />}>
            <Component {...props} />
        </Suspense>
    }
}

export default withSuspense;