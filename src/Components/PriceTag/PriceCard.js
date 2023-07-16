import React from "react";

function PriceCard({data=[]}){
    return (
    
        
        <div className="col-lg-4">
          <div className="card mb-5 mb-lg-0">
            <div className="card-body">
              <h5 className="card-title text-muted text-uppercase text-center">{data.priceType}</h5>
              <h6 className="card-price text-center">${data.pricing}<span className="period">/month</span></h6>
              <hr/>
              <ul className="fa-ul">
                {
                  data.features.map((d)=>(
                    <li
                     key={`pricing-card-list-item-${data.pricing}-${d.feature}`}
                     className={d.isAvailable ? "":"text-muted"}>
                      <span className="fa-li">
                        <i className={`fas ${d.isAvailable ? "fa-check" : "fa-times"}`}></i>
                        </span>{d.feature}
                        </li>
                  ))
                }
    
              </ul>
              <div className="d-grid">
                <a  className="btn btn-primary text-uppercase">Button</a>
              </div>
            </div>
          </div>
        </div>

      
    );
}

export default PriceCard;
