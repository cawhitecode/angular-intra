import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})
export class DispatchComponent implements OnInit {

  // Data for DateTimes
  date:Date;

  // Values to initialize multi-select options
  public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings = {}

  constructor() {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }

  ngOnInit() {
    this.selectedItems = [{ item_id: 2, item_text: 'CHI - Chicago' }]
    this.dropdownList = [
      { item_id: 1, item_text: 'ATL - Atlanta'},
      { item_id: 2, item_text: 'CHI - Chicago' },
      { item_id: 3, item_text: 'CLE - Cleveland' },
      { item_id: 4, item_text: 'DFW - Dallas / Ft Worth' },
      { item_id: 5, item_text: 'CLS - Columbus' },
      { item_id: 6, item_text: 'DEN - Denver' },
      { item_id: 7, item_text: 'DET - Detroit' },
      { item_id: 8, item_text: 'HOU - Houston' },
      { item_id: 9, item_text: 'GRR - Grand Rapids' },
      { item_id: 10, item_text: 'MIA - Miami' },
      { item_id: 11, item_text: 'IND - Indianapolis' },
      { item_id: 12, item_text: 'NVA - Northern Virginia' },
      { item_id: 13, item_text: 'MKE - Milwaukee' },
      { item_id: 14, item_text: 'MSP - Minneapolis / St Paul' },
      { item_id: 15, item_text: 'WPB - West Palm Beach' },
      { item_id: 16, item_text: 'NSH - Nashville' },
      { item_id: 17, item_text: 'OKC - Oklahoma City' },
      { item_id: 18, item_text: 'DEN - Denver' },
      { item_id: 19, item_text: 'POR - Portland' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  // setHours(d.getHours() - 2);

  onItemSelect(item: any) {
  let selected = this.selectedItems;
  console.log(item);
  }

  onItemDeSelect(item: any) {
    console.log(this.selectedItems);;
  }  

}