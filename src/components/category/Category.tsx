import React from 'react'
import MakananImage from "../../assets/img/makanan.png"
import BusanaImage from "../../assets/img/busana.png"
import'./styles.scss'

type Props ={
    title:string
    icon?: string
}

const Category: React.FC<Props>=({title, icon})=> {
    return (
        <div className="peb-category" style={{background:`url(${title.includes("makanan")?MakananImage:title.includes("busana")?BusanaImage:BusanaImage})`}}>
            <div className="peb-category-left">
                <div className="peb-category-icon">
                </div>
            </div>
            <div className="peb-category-right">
                <label className="peb-category-label">{title}</label>
            </div>
        </div>
    )
}

export default Category
