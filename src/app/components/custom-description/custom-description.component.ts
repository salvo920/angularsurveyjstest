import { Component } from "@angular/core";
import { QuestionRadiogroupModel, RendererFactory, Serializer } from "survey-core";
import { AngularComponentFactory, QuestionAngular, SurveyHeaderComponent, TextQuestionComponent } from "survey-angular-ui";

@Component({
	selector: "finv-description",
	templateUrl: "./custom-description.component.html",
	styleUrls: ["./custom-description.component.scss"]
})
export class CustomDescription extends QuestionAngular<QuestionRadiogroupModel> { }

// Add a property to the Survey class
// Serializer.addProperty("question", {
// 	name: "customDescription",
// 	category: "general",
// 	visibleIndex: 0
// });

RendererFactory.Instance.registerRenderer(
	"radiogroup",
	"description",
	"sv-finv-description"
);
AngularComponentFactory.Instance.registerComponent(
	"sv-finv-description",
	CustomDescription
);