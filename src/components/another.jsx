import React from "react";
import pic02 from '../img/pic02.jpg'
import pic03 from '../img/pic03.jpg'
import pic05 from '../img/pic05.jpg'
function Another() {
  return(
    <section className="another">
			<div className="another-container">
				<h2>Другие мои работы</h2>
				<div className="images-flex">
					<img src={pic02}/>
					<img src={pic03}/>
					<img src={pic05}/>
				</div>  
			</div>
		</section>
  )
}
export default Another;