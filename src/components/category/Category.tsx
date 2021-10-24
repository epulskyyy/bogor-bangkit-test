import React from 'react'
import MakananImage from "../../assets/img/makanan.png"
import BusanaImage from "../../assets/img/busana.png"
import'./styles.scss'
import history from '../../utils/history'

type Props ={
    title:string
    icon?: string
    idCategory:any
}

const Category: React.FC<Props>=({title, icon, idCategory})=> {
    const searchProduct = (name: any) => {
        history.push({
          search: `category=${idCategory}&per_page=10&sort=&product_name=&umkm=&page=${1}`,
          pathname: "search",
        });
      };
    return (
        <div onClick={searchProduct} className="peb-category" style={{background:`url(${title.includes("makanan")?MakananImage:title.includes("busana")?BusanaImage:BusanaImage})`}}>
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
