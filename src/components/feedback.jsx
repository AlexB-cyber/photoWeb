import React from "react";

function Feedback() {
  return(
    <section className="feedback">
			<div className="container">
				<div className="feedback-content">
					<h1>Связаться со мной</h1>
					<form>
						<label id="name_I">Имя</label>
						<input type="text" id="name_i"/>
						<label id="email_I">Почта</label>
						<input type="text" id="email_i"/>	
						<label id="messege_I">Сообщение</label>
						<textarea id="messege_i"> </textarea> 
						<button>Отправить</button>
					</form>
				</div>
			</div>
	
		</section>
  )
}
export default Feedback;