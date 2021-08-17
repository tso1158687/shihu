import { Component } from '@angular/core';
import { faCog, faCaretRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  faCog = faCog;
  faCaretRight = faCaretRight;
  currentIndex = 0;
  isShowDropdown = false;
  shiList = [
    {
      title: '錦瑟',
      author: '李商隱',
      content: [
        '錦瑟無端五十弦，一弦一柱思華年。',
        '莊生曉夢迷蝴蝶，望帝春心托杜鵑。',
        '滄海月明珠有淚，藍田日暖玉生煙。',
        '此情可待成追憶，只是當時已惘然。',
      ],
    },
    {
      title: '題西林壁',
      author: '蘇軾',
      content: [
        '橫看成嶺側成峰，遠近高低各不同。',
        '不識廬山真面目，只緣身在此山中。',
      ],
    },
  ];
  next(): void {
    this.currentIndex++;
  }

  showDropdown() {
    console.log('show fropdown')
    this.isShowDropdown = !this.isShowDropdown;
  }
}
