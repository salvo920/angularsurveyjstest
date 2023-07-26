import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// nuovi

import { SurveyModule } from "survey-angular-ui";
import { SurveyComponent } from "./components/survey/survey.component";
import { RadiogroupWithImageQuestion } from "./components/custom-radiogroup/custom-radiogroup.component";

@NgModule({
	declarations: [AppComponent, SurveyComponent, RadiogroupWithImageQuestion],
	imports: [BrowserModule, SurveyModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }



