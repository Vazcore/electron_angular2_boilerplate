import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
import { NgFor } from 'angular2/common';

@Component({
	selector: 'app',
	template: `
		<div>Hola, App</div>
	`
})
export class App {}

bootstrap(App);