import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {RouterLink} from '@angular/router-deprecated';
import {ActionBar} from '../../action-bar/components/action-bar';

@Component({
  selector: 'home-view',
  directives: [RouterLink, ActionBar],
  templateUrl: 'client/dev/home/templates/home-view.html',
  styleUrls: ['client/dev/home/styles/home-view.css']
})
export class HomeView {}