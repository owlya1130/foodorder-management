import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuConfig = [{
    icon: 'table_chart',
    title: '報表查詢',
    url: '#'
  }, {
    icon: 'lunch_dining',
    title: '食材設定',
    url: '/ingredient-config'
  }, {
    icon: 'restaurant',
    title: '餐點分類設定',
    url: '/meal-classification-config'
  }, {
    icon: 'table_restaurant',
    title: '餐桌數量設定',
    url: '/dinning-table-config'
  }, {
    icon: 'schedule',
    title: '預約時間區塊設定',
    url: '/reservation-timeblock-config'
  }]
}
