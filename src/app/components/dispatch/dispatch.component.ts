import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


class Market {
  marketId: number;
  name: string;
  gmtOffset: string;
  map: string;
}
@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.css']
})


export class DispatchComponent implements OnInit {

  // Data for DateTimes
  date:Date;

  public selectedMarkets: {marketId: number;
  name: string;
  gmtOffset: string;
  map: string;}[] = [{marketId: 101, gmtOffset: "-4", name: 'DFW - Dallas / Ft Worth', map: "Map URL Goes Here"}]
  

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
    this.selectedItems = [{ item_id: 101, item_text: 'DFW - Dallas / Ft Worth' }]
    this.dropdownList = [
      { item_id: 1, item_text: 'ATL - Atlanta'},
      { item_id: 100, item_text: 'CHI - Chicago' },
      { item_id: 2, item_text: 'CLE - Cleveland' },
      { item_id: 101, item_text: 'DFW - Dallas / Ft Worth' },
      { item_id: 3, item_text: 'CLS - Columbus' },
      { item_id: 200, item_text: 'DEN - Denver' },
      { item_id: 4, item_text: 'DET - Detroit' },
      { item_id: 102, item_text: 'HOU - Houston' },
      { item_id: 5, item_text: 'GRR - Grand Rapids' },
      { item_id: 6, item_text: 'MIA - Miami' },
      { item_id: 7, item_text: 'IND - Indianapolis' },
      { item_id: 8, item_text: 'NVA - Northern Virginia' },
      { item_id: 103, item_text: 'MKE - Milwaukee' },
      { item_id: 104, item_text: 'MSP - Minneapolis / St Paul' },
      { item_id: 9, item_text: 'WPB - West Palm Beach' },
      { item_id: 10, item_text: 'NSH - Nashville' },
      { item_id: 105, item_text: 'OKC - Oklahoma City' },
      { item_id: 201, item_text: 'DEN - Denver' },
      { item_id: 300, item_text: 'POR - Portland' }
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
    console.log(item);
    this.pushItemToSelectedMarkets(item);
  }

  onItemDeSelect(item: any) {
    let marketToRemove = this.selectedMarkets.findIndex(x => x.marketId === item.item_id);
    console.log(item.item_id);
    console.log(marketToRemove);
    this.selectedMarkets.splice(marketToRemove, 1);

  }

  // function to add a market to a 
  pushItemToSelectedMarkets(item){
    let newmarket = new Market();
    newmarket.marketId = item.item_id;
    this.setTimzoneBasedOnItemId(item.item_id, newmarket);
    newmarket.name = item.item_text;
    newmarket.map = "Map URL Goes Here";
    this.selectedMarkets.push(newmarket);
  }
  // Function to set timezone based on item_id
  setTimzoneBasedOnItemId(item_id: number, newmarket: Market){
    if (item_id < 100){
      newmarket.gmtOffset = '-4';
    }
    else if (item_id < 200){
      newmarket.gmtOffset = '-5';
    }
    else if (item_id < 300){
      newmarket.gmtOffset = '-6';
    }else if
    (item_id < 400){
      newmarket.gmtOffset = '-7';
    }
    else {
      newmarket.gmtOffset = '-4';
    }
  }
  defaultMarket(){

  }
}