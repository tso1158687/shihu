import { Component, OnInit } from '@angular/core';
import { faCog, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { Shi } from './type/shi.type';
import { ShiList } from './data/shi-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faCog = faCog;
  faCaretRight = faCaretRight;
  currentIndex = 0;
  isShowDropdown = false;
  shiList: Shi[] = ShiList;

  ngOnInit() {
    this.currentIndex = this.selectRandomIndex();
  }

  toggleDropdown() {
    this.isShowDropdown = !this.isShowDropdown;
  }

  selectRandomIndex(): number {
    const shiLength = this.shiList.length;
    const randomNumber = Number((Math.random() * (shiLength - 1)).toFixed());
    return randomNumber;
  }
}
