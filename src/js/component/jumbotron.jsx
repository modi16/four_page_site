import React from "react";
import picture from "../../img/bacon.jpg";
export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<h1 className="display-4">A Warm Welcome to Bacon Store!</h1>
				<p className="lead">
					Bacon ipsum dolor amet kevin spare ribs flank ground round
					chuck bresaola tongue. Filet mignon drumstick jowl fatback
					venison short loin. Meatloaf pork belly tongue, jowl
					pastrami turducken flank pork. Alcatra bacon brisket, cow
					andouille doner beef ribs flank jerky leberkas tri-tip
					burgdoggen pork belly pastrami shoulder. Salami bresaola
					buffalo, ball tip leberkas pork belly shoulder
				</p>

				<img src={picture} className="img-circle" alt="Cinque Terre" />
			</div>
		);
	}
}
