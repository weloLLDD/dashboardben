import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>

          <iframe 
            title="Content Frame 5"
          style={{
               background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "350px",

          }}
          
           src="https://charts.mongodb.com/charts-bensales-suirxyj/embed/charts?id=9ef67a13-4a8b-46e4-85cd-06d755a54d13&maxDataAge=3600&theme=light&autoRefresh=true">
          </iframe>
        
       

          {/* rapport */}

   
        </article>
      </div>
    </div>
  );
};
 
export default SaleStatistics;
