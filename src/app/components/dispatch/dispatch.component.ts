import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

interface DoNotServiceCustomer {
  reason: string;
  name: string;
  car: string;
  phone: string;
  vin: string;
}

// Object for each market card to pull info from
class Market {
  marketId: number;
  name: string;
  gmtOffset: string;
  map: string;
  DoNotServiceList: Array<DoNotServiceCustomer>;
}

let example = [{name: "Example Last", car: "Ford Focus", vin: '555343abc', reason: "Being Dumb", phone: "555-555-2234"}];

@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})


export class DispatchComponent implements OnInit {

  // Data for DateTimes
  date:Date;

  public selectedMarkets: Array<Market> = [{marketId: 1001, gmtOffset: "-4", name: 'DFW - Dallas / Ft Worth', map: "Map URL Goes Here", DoNotServiceList: example }]
  

  // Values to initialize multi-select options
  public dropdownList = [];
  public selectedItems = [];
  public dropdownSettings = {};


  constructor() {
    setInterval(() => {
      this.date = new Date()
    }, 1000)
   }

  ngOnInit() {
    this.selectedItems = [{ item_id: 1001, item_text: 'DFW - Dallas / Ft Worth' }]
    this.dropdownList = [
      { item_id: 1, item_text: 'ATL - Atlanta'},
      { item_id: 1000, item_text: 'CHI - Chicago' },
      { item_id: 2, item_text: 'CLE - Cleveland' },
      { item_id: 1001, item_text: 'DFW - Dallas / Ft Worth' },
      { item_id: 3, item_text: 'CLS - Columbus' },
      { item_id: 2000, item_text: 'DEN - Denver' },
      { item_id: 4, item_text: 'DET - Detroit' },
      { item_id: 1002, item_text: 'HOU - Houston' },
      { item_id: 5, item_text: 'GRR - Grand Rapids' },
      { item_id: 6, item_text: 'MIA - Miami' },
      { item_id: 7, item_text: 'IND - Indianapolis' },
      { item_id: 8, item_text: 'NVA - Northern Virginia' },
      { item_id: 1003, item_text: 'MKE - Milwaukee' },
      { item_id: 104, item_text: 'MSP - Minneapolis / St Paul' },
      { item_id: 9, item_text: 'WPB - West Palm Beach' },
      { item_id: 10, item_text: 'NSH - Nashville' },
      { item_id: 1005, item_text: 'OKC - Oklahoma City' },
      { item_id: 2001, item_text: 'DEN - Denver' },
      { item_id: 3000, item_text: 'POR - Portland' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }
  // setHours(d.getHours() - 2);

  onItemSelect(item: any) {
    this.pushItemToSelectedMarkets(item);
  }

  // Function to Add All markets to both Arrays
  onAllItemSelect()
  {
    for (let market of this.dropdownList){
      this.pushItemToSelectedMarkets(market);
      }
  }
 

  // On dropdown DeSelect finds index of item to be removed and removes from selected markets
  onItemDeSelect(item: any) {
    let marketToRemove = this.selectedMarkets.findIndex(x => x.marketId === item.item_id);
    this.selectedMarkets.splice(marketToRemove, 1);

  }

  // Function to remove all selected items from both Arrays
  onAllItemDeSelect()
  {
    this.selectedItems = []
    this.selectedMarkets = [];
  }

  // Function to add a market to selected Markets
  pushItemToSelectedMarkets(item){
    let newmarket = new Market();
    newmarket.marketId = item.item_id;
    this.setTimzoneBasedOnItemId(item.item_id, newmarket);
    newmarket.name = item.item_text;
    newmarket.map = "Map URL Goes Here";
    this.selectedMarkets.push(newmarket);
  }
  // Function to set timezone based on item_id to be used in html to offset based on GMT
  setTimzoneBasedOnItemId(item_id: number, newmarket: Market){
    if (item_id < 1000){
      newmarket.gmtOffset = '-4';
    }
    else if (item_id < 2000){
      newmarket.gmtOffset = '-5';
    }
    else if (item_id < 3000){
      newmarket.gmtOffset = '-6';
    }else if
    (item_id < 4000){
      newmarket.gmtOffset = '-7';
    }
    else {
      newmarket.gmtOffset = '-4';
    }
  }
}