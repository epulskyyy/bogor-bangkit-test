import React from "react"
import {Helmet} from "react-helmet-async";

type Props={
    title: string
}

export const Layout: React.FC<Props> = ({title,children}) => {
    return (<>
        <Helmet>
        <title>Pemulihan Ekonomi - {title}</title>
    </Helmet>{children}</>)
}