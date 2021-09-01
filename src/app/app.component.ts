import { Component, OnInit } from '@angular/core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Shi } from './type/shi.type';
import { ShiList } from './data/shi-list';
import { themeList } from './data/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  faCog = faCog;
  faGithub = faGithub;
  currentIndex = 0;
  isShowDropdown = false;
  shiList: Shi[] = ShiList;
  themeList = themeList;
  currentTheme = this.themeList[ Number((Math.random() * ( this.themeList.length - 1)).toFixed())];
  // currentTheme = this.themeList[ this.themeList.length-1];


  ngOnInit(): void {
    this.currentIndex = this.selectRandomIndex();
  }

  getClassName(): string {
    return this.currentTheme.color;
  }

  toggleDropdown(): void {
    this.isShowDropdown = !this.isShowDropdown;
  }

  selectRandomIndex(): number {
    const shiLength = this.shiList.length;
    const randomNumber = Number((Math.random() * (shiLength - 1)).toFixed());
    return randomNumber;
  }
}
