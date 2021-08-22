import React from 'react'
import NoImage from "../../assets/peb-noimage.svg";
import'./styles.scss'

type Props ={
    title:string
    icon?: string
}

const Category: React.FC<Props>=({title, icon})=> {
    return (
        <div className="peb-category">
            <div className="peb-category-left">
                <div className="peb-category-icon">
                    <img height="40px" src={icon || NoImage} alt="icon" />
                </div>
            </div>
            <div className="peb-category-right">
                <label className="peb-category-label">{title}</label>
            </div>
        </div>
    )
}

export default Category
