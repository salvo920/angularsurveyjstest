import { Component, OnInit } from "@angular/core";
import { Model } from "survey-core";
import { json } from "./json";

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

		survey.onAfterRenderQuestion.add((sender, options) => {
			if (options.question.description) {
				console.group("options")
				console.log("options.question:", options.question.description)
				options.htmlElement.children[0].children[3].classList.add('container-blue');
				console.log("options.htmlElement:", options.htmlElement.children[0].children[3].classList)
				console.groupEnd()

			}
		});
		survey.onComplete.add((sender, options) => {
			console.log(JSON.stringify(sender.data, null, 3));
		});
		this.model = survey;

	}


}


