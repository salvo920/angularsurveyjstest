import { Component, OnInit } from "@angular/core";
import { Model } from "survey-core";
import { json } from "../../../assets/json/json";
// import "./survey.component.css";
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

		survey.onAfterRenderQuestion.add((sender, options) => {
			if (options.question.description) {
				// console.group("options")
				// console.log("options.question:", options.question.description)
				// options.htmlElement.children[0].children[3].children[0].children[0].classList.add('container-blue');
				// console.log("options.htmlElement:", options.htmlElement.children[0].children[3].children[0].children[0].classList)
				// console.log("options.question:", options.question.cssDescription)
				// console.log("options.question:", options.question)
				// // console.log("options.htmlElement:", options.htmlElement.style.backgroundColor = 'fucsia')
				// // console.log("options.htmlElement:", options.htmlElement.style)
				// console.log("options:", options)
				// // options.htmlElement.style.backgroundColor = 'green'
				// // options.question["style"].backgroundColor = 'green'
				// console.groupEnd()


				if (options.question.name === 'q1') {
					options.htmlElement.classList.add('bb');
				}

			}

		});
		survey.onComplete.add((sender, options) => {
			console.log(JSON.stringify(sender.data, null, 3));
		});
		this.model = survey;

	}


}


