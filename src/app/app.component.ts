import { Component, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

import {CustomComponent} from './custom.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  closeResult: string;
 
  @ViewChild('content') content :CustomComponent;
  constructor(private viewContainerRef: ViewContainerRef, private modalService: NgbModal) {
  }
 //bind the DataManager instance to dataSource property
  public data: DataManager = new DataManager({
    url: 'http://services.odata.org/V4/Northwind/Northwind.svc/Customers',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
  });
  // maps the appropriate column to fields property
  public fields: Object = { value: 'ContactName' };
  //bind the Query instance to query property
  public query: Query = new Query().select(['ContactName', 'CustomerID']);
  //set the placeholder to dropdownlist input
  public text: string = "Find a customer";
  public width: string = "300px";
  // bind the open event handler
  

}