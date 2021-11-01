/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Modal } from "antd";
import React, { useRef, useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useSelector } from "react-redux";
import { RootState } from "../../../models/RootState";
// import "../styles/reactFlicking.css";

export default function ProductImages() {
  const { dataId } = useSelector((state: RootState) => state.product);
  const [imageId, setimageId] = useState(1);

  const [openImage, setopenImage] = useState(false);
  const [content, setcontent] = useState("");

  const onClickLinkImage = (l: any) => {
    setopenImage(true);
    setcontent(l);
  };
  let imageUrl = [];

  const ref: any = useRef(null);
  for (const key in dataId?.data?.url_gambar) {
    const element = dataId?.data?.url_gambar[key];
    if (element !== "") {
      imageUrl.push(element);
    }
  }
  function slideImage() {
    const dw = ref.current?.clientWidth;
    return `translateX(${-(imageId - 1) * dw}px)`;
  }
  const onClickImage = (id: any) => {
    console.log(id);
    setimageId(id);
  };

  const onClose = () => {
    setopenImage(false);
    setcontent("");
  };
  return (
    <>
      <Modal
        visible={openImage}
        onOk={onClose}
        onCancel={onClose}
        centered
        footer={null}
        className="modal-image-product"
      >
        <ReactImageMagnify
          {...{
            enlargedImagePosition: "over",
            smallImage: {
              isFluidWidth: true,
              src: content,
            },
            largeImage: {
              src: content,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </Modal>
      <div className="product-imgs">
        <div className="img-display">
          <div
            className="img-showcase"
            ref={ref}
            style={{ transform: slideImage() }}
          >
            {imageUrl?.map((v: any, k: any) => (
              <img
                src={v}
                alt="image"
                key={k + 1}
                onClick={() => onClickLinkImage(v)}
              />
            ))}
          </div>
        </div>
        <div className="img-select">
          {imageUrl?.map((v: any, k: any) => (
            <div
              className="img-item"
              key={k + 1}
              onClick={() => onClickImage(k + 1)}
            >
              <a href="#" data-id={k + 1}>
                <img src={v} alt="shoe image" />
              </a>
            </div>
          ))}
        </div>
        <div id="myresult" className="img-zoom-result"></div>
      </div>
    </>
  );
}
