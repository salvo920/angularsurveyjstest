import { Component } from "@angular/core";
import { QuestionRadiogroupModel, RendererFactory, Serializer } from "survey-core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";

@Component({
  selector: "sv-ng-custom-radiogroup",
  templateUrl: "./custom-radiogroup.component.html"
})
export class RadiogroupWithImageQuestion extends QuestionAngular<QuestionRadiogroupModel> { }

Serializer.addProperty("radiogroup", { name: "image" });

RendererFactory.Instance.registerRenderer(
  "radiogroup",
  "radiogroup-with-image",
  "sv-radiogroup-with-image"
);
AngularComponentFactory.Instance.registerComponent(
  "sv-radiogroup-with-image",
  RadiogroupWithImageQuestion
);