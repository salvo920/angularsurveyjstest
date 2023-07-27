import { Component, OnInit } from "@angular/core";
import { Model } from "survey-core";
import { json } from "../../../assets/json/json";
// import "./survey.component.scss";
// import "survey-core/modern.min.css";

@Component({
	// tslint:disable-next-line:component-selector
	selector: "component-survey",
	templateUrl: "./survey.component.html",
	styleUrls: ["./survey.component.scss"]
})
export class SurveyComponent implements OnInit {
	model!: Model;
	ngOnInit() {
		const survey = new Model(json);

		survey.onComplete.add((sender, options) => {
			console.log(JSON.stringify(sender.data, null, 3));
		});
		this.model = survey;

	}


}


