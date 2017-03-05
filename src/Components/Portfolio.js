import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
     if (this.props.data) {
        var portfolio = this.props.data.projects.map(function(project) {
            // portfolio is an array so we use map on the projects object to get each:
            var imageUrl = 'images/portfolio/' + project.image;
            return <div key={project.title} className="columns portfolio-item">
                  <div className="item-wrap">
                     <a href={project.modal} title="">
                        <img alt="" src={imageUrl} />
                        <div className="overlay">
                           <div className="portfolio-item-meta">
          					      <h5>{project.title}</h5>
                              <p>{project.category}</p>
          					   </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus"></i></div>
                     </a>
                  </div>
          		</div>
        });
        
        var modals = this.props.data.projects.map(function(mdl) {
           var imageUrl = 'images/portfolio/' + mdl.image;
           var modalId = mdl.modal.substr(1);
           return <div key={mdl.modal} id={modalId} className="popup-modal mfp-hide">
		      <img className="scale-with-grid" src={imageUrl} alt="" />
		      <div className="description-box">
			      <h4>{mdl.title}</h4>
			      <p>{mdl.category}</p>
               <span className="categories"><i className="fa fa-tag"></i>{mdl.tags}</span>
		      </div>
            <div className="link-box">
               <a href={mdl.url} target="_blank">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>
	      </div>
        });
     }
    return (
   <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
               {portfolio}
            </div>

         </div>


         {/* Modal Popup
	      --------------------------------------------------------------- */}

         {modals}

         <div id="modal-02" className="popup-modal mfp-hide">

		      <img className="scale-with-grid" src="images/portfolio/modals/m-console.jpg" alt="" />

		      <div className="description-box">
			      <h4>Console</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span className="categories"><i className="fa fa-tag"></i>Branding, Web Development</span>
		      </div>

            <div className="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-03" className="popup-modal mfp-hide">

		      <img className="scale-with-grid" src="images/portfolio/modals/m-judah.jpg" alt="" />

		      <div className="description-box">
			      <h4>Judah</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span className="categories"><i className="fa fa-tag"></i>Branding</span>
		      </div>

            <div className="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-04" className="popup-modal mfp-hide">

		      <img className="scale-with-grid" src="images/portfolio/modals/m-intothelight.jpg" alt="" />

		      <div className="description-box">
			      <h4>Into the Light</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span className="categories"><i className="fa fa-tag"></i>Photography</span>
		      </div>

            <div className="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-05" className="popup-modal mfp-hide">

		      <img className="scale-with-grid" src="images/portfolio/modals/m-farmerboy.jpg" alt="" />

		      <div className="description-box">
			      <h4>Farmer Boy</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span className="categories"><i className="fa fa-tag"></i>Branding, Webdesign</span>
		      </div>

            <div className="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-06" className="popup-modal mfp-hide">

		      <img className="scale-with-grid" src="images/portfolio/modals/m-girl.jpg" alt="" />

		      <div className="description-box">
			      <h4>Girl</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span className="categories"><i className="fa fa-tag"></i>Photography</span>
		      </div>

            <div className="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-07" className="popup-modal mfp-hide">

		      <img className="scale-with-grid" src="images/portfolio/modals/m-origami.jpg" alt="" />

		      <div className="description-box">
			      <h4>Origami</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span className="categories"><i className="fa fa-tag"></i>Branding, Illustration</span>
		      </div>

            <div className="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>

         <div id="modal-08" className="popup-modal mfp-hide">

		      <img className="scale-with-grid" src="images/portfolio/modals/m-retrocam.jpg" alt="" />

		      <div className="description-box">
			      <h4>Retrocam</h4>
			      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
               <span className="categories"><i className="fa fa-tag"></i>Webdesign, Photography</span>
		      </div>

            <div className="link-box">
               <a href="http://www.behance.net">Details</a>
		         <a className="popup-modal-dismiss">Close</a>
            </div>

	      </div>


      </div>

   </section>
    );
  }
}

export default Portfolio;
