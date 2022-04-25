import React from "react";

export default function Cards(props) {
  return (
    <div>
      <div className="card--body">
        <img className="card--img" src={props.img} alt="fuji" />
        <div className="card--desc">
          <div className="card--loc">
            <img
              className="card--loclogo"
              src={props.placeholder}
              alt="placeholder"
            />
            <h3 className="card--locTitle">{props.place}</h3>
            <a href={props.gmap} className="card--gmap" target="_blank">
              View On Google Maps
            </a>
          </div>

          <h1>{props.title}</h1>
          <h4>
            {props.startDate}-{props.enDdate}
          </h4>
          <p className="card--details">{props.desc}</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
