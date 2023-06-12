import { Component, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Dialog } from 'primeng/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 10rem;
      }

      p {
          margin: 0;
      }

      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 6rem;
      }
  `,
  ],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  @ViewChild('dlg', { static: true }) dlg: Dialog;

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.dlgstyle = {
      width: '50vw',
    };
    this.top = 0;
  }

  dlgstyle: any;
  top: number;
  interval: any;

  displayModal: boolean;

  displayBasic: boolean;

  displayBasic2: boolean;

  displayMaximizable: boolean;

  displayPosition: boolean;

  position: string;

  showModalDialog() {
    this.displayModal = true;
  }

  showBasicDialog() {
    this.displayBasic = true;
    this.interval = setInterval(() => {
      this.top = this.top + 50;
      if (this.top == 500) {
        clearInterval(this.interval);
      }
      this.dlgstyle = {
        width: '50vw',
        top: this.top + 'px',
      };
      //this.dlg.container.style.top = this.top + 'px';
    }, 500);
  }

  showBasicDialog2() {
    this.displayBasic2 = true;
  }

  showMaximizableDialog() {
    this.displayMaximizable = true;
  }

  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }
}
