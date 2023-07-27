export const json = {
	"title": "Road Signs Quiz",
	"pages": [
		// {
		// 	"name": "startPage",
		// 	"elements": [
		// 		{
		// 			"type": "boolean",
		// 			"name": "termsOfUse",
		// 			"titleLocation": "hidden",
		// 			"hideNumber": true,
		// 			"renderAs": "checkbox",
		// 			"label": "I agree with the disclaimer",
		// 			"isRequired": true,
		// 			"requiredErrorText": "You must agree with the disclaimer."
		// 		}
		// 	]
		// },
		{
			"name": "p1",
			"elements": [
				{
					"type": "radiogroup",
					"name": "q1",
					"startWithNewLine": false,
					"title": "THIS IS THE SHAPE AND COLOR OF A ___ SIGN",
					"customDescription": "desc test",
					"renderAs": "description",
					"image": "../assets/img/jhipster.png",
					"correctAnswer": "doNotEnter",
					"choices": [
						{
							"value": "stop",
							"text": "Stop"
						},
						{
							"value": "wrongWay",
							"text": "Wrong Way"
						},
						{
							"value": "yield",
							"text": "Yield"
						},
						{
							"value": "doNotEnter",
							"text": "Do not enter"
						}
					]
				},
				{
					"type": "radiogroup",
					"name": "q1",
					"startWithNewLine": false,
					"title": "THIS IS THE SHAPE AND COLOR OF A ___ SIGN",
					"description": "description test container blue",
					"renderAs": "radiogroup-with-image",
					"image": "../assets/img/jhipster.png",
					"correctAnswer": "doNotEnter",
					"choices": [
						{
							"value": "stop",
							"text": "Stop"
						},
						{
							"value": "wrongWay",
							"text": "Wrong Way"
						},
						{
							"value": "yield",
							"text": "Yield"
						},
						{
							"value": "doNotEnter",
							"text": "Do not enter"
						}
					]
				}
			]
		},
		{
			"name": "p1",
			"elements": [
				{
					"type": "radiogroup",
					"name": "q1",
					"startWithNewLine": false,
					"title": "THIS IS THE SHAPE AND COLOR OF A ___ SIGN",
					"customDescription": "description test container blue",
					"renderAs": "description",
					"image": "../assets/img/jhipster.png",
					"correctAnswer": "doNotEnter",
					"choices": [
						{
							"value": "stop",
							"text": "Stop"
						},
						{
							"value": "wrongWay",
							"text": "Wrong Way"
						},
						{
							"value": "yield",
							"text": "Yield"
						},
						{
							"value": "doNotEnter",
							"text": "Do not enter"
						}
					]
				}
			]
		},
		{
			"name": "p1",
			"elements": [
				{
					"type": "radiogroup",
					"name": "q1",
					"startWithNewLine": false,
					"title": "THIS IS THE SHAPE AND COLOR OF A ___ SIGN",
					"description": "description test container blue",
					"renderAs": "radiogroup-with-image",
					"image": "../assets/img/jhipster.png",
					"correctAnswer": "doNotEnter",
					"choices": [
						{
							"value": "stop",
							"text": "Stop"
						},
						{
							"value": "wrongWay",
							"text": "Wrong Way"
						},
						{
							"value": "yield",
							"text": "Yield"
						},
						{
							"value": "doNotEnter",
							"text": "Do not enter"
						}
					]
				}
			]
		},
		{
			"name": "p1",
			"elements": [
				{
					"type": "radiogroup",
					"name": "q1",
					"startWithNewLine": false,
					"title": "radiogroup normal",
					"description": "description test container blue",
					"image": "../assets/img/jhipster.png",
					"correctAnswer": "doNotEnter",
					"choices": [
						{
							"value": "stop",
							"text": "Stop"
						},
						{
							"value": "wrongWay",
							"text": "Wrong Way"
						},
						{
							"value": "yield",
							"text": "Yield"
						},
						{
							"value": "doNotEnter",
							"text": "Do not enter"
						}
					]
				}
			]
		}
	],
	"firstPageIsStarted": true,
};