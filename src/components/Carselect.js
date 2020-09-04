import React from 'react';

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			carCategory : [],
			carModel : [],
			selectedCarCategory : '--Choose CCategory--',
			selectedCarModel :    '--Choose Car Model--'
		};
		this.changeCarCategory = this.changeCarCategory.bind(this);
		this.changeCarModel = this.changeCarModel.bind(this);
	}
  
	componentDidMount() {
		this.setState({
			carCategory : [
                { name: 'Small', carModel: [ {name: 'Opel Corsa'}, {name: 'Toyota Yaris'},{name: 'Smart for Two'}]},
                { name: 'Premium', carModel: [ {name: 'Audi S8'}, {name: 'Jaguar XJR'},{name: 'BMW 750iL'}]},
                { name: 'Van', carModel: [ {name: 'Volkswagen Touran'}, {name: 'Renault Espace'},{name: 'Fiat Talento'}]},
			]
		});
	}
  
	changeCarCategory(event) {
		this.setState({selectedCarCategory: event.target.value});
		this.setState({carModel : this.state.carCategory.find(ctgry => ctgry.name === event.target.value).carModel});
	}

	changeCarModel(event) {
		this.setState({selectedCarModel: event.target.value});		
	}
	
	render() {
		return (
			<div id="container">				
				<div>
					<label>Car Category</label>					
                    <select placeholder="CarCategory" value={this.state.selectedCarCategory} onChange={this.changeCarCategory}>
						<option>--Choose CCategory--</option>
						{this.state.carCategory.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				<div>
					<label>Car Model</label>
					<select placeholder="CarModel" value={this.state.selectedCarModel} onChange={this.changeCarModel}>
						<option>--Choose CarModel--</option>
						{this.state.carModel.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
            </div>    
        )     	
	
	}
}

export default Dropdown;