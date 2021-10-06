import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination, AutoPlay, Fade } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "./reactFlicking.css";

/**
 * Create banner with master key.
 * @param {Object} data to be list banner
 * @return {Component} Banner Components
 */

type Props = {
  data: Array<object>;
};

const Banner: React.FC<Props> = ({ data }) => {

  const _plugins = [
    new Fade(),
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true }),
    new Pagination({ type: "bullet" }),
  ];
  return (
    <>
      <Flicking
        circular={true}
        plugins={_plugins}
        resizeOnContentsReady={true}
        adaptive={true}
      >
        <div className="flicking-panel has-background-white has-text-dark is-size-1 card card-panel">
          <img
            className="panel-image" alt=""
            src="https://static.vecteezy.com/system/resources/previews/000/175/898/original/vector-super-offer-advertising-banner-template-with-colorful-waves.jpg"
          />
        </div>
        <div className="flicking-panel has-background-white has-text-dark is-size-1 card card-panel">
          <img
            className="panel-image" alt=""
            src="https://static.vecteezy.com/system/resources/previews/000/175/898/original/vector-super-offer-advertising-banner-template-with-colorful-waves.jpg"
          />
        </div>
        <div className="flicking-panel has-background-white has-text-dark is-size-1 card card-panel">
          <img
            className="panel-image" alt=""
            src="https://static.vecteezy.com/system/resources/previews/000/175/898/original/vector-super-offer-advertising-banner-template-with-colorful-waves.jpg"
          />
        </div>

        <ViewportSlot>
          <div className="flicking-pagination "></div>
        </ViewportSlot>
      </Flicking>
    </>
  );
};

export default Banner;
