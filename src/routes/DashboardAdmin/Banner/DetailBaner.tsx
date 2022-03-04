import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../models/RootState'

const DetailBaner = () => {
    const auth = useSelector((state:RootState) => state.auth)
    console.log('====================================');
    console.log(auth);
    console.log('====================================');
    return (
        <div>
            
        </div>
    )
}

export default DetailBaner
