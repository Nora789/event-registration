import { Component } from '@angular/core';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ngbd-popover-config',
    templateUrl: './popover-config.html',
    providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers
})
export class NgbdPopoverConfig {
    constructor(config: NgbPopoverConfig) {
        // customize default values of popovers used by this component tree
        config.placement = 'bottom';
        config.triggers = 'mouseenter';
    }

  public signOut(): void {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }  
}