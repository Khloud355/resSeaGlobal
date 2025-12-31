import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MainLayoutService } from '../../../../layouts/main-layout/services/main-layout.service';
@Component({
  selector: 'app-patnership',

  templateUrl: './patnership.component.html',
  styleUrl: './patnership.component.scss',
})
export class PatnershipComponent implements OnInit {
  cards = [
    {
      id: 1,
      index: '01',
      name: 'Warner Bros. Discovery',
      image: '../../../../../assets/images/03_3.png',

      description: '',
    },
    {
      id: 2,
      index: '02',
      name: 'Al Ahli FC',
      image: '../../../../../assets/images/01.png',

      description: '',
    },
    {
      id: 3,
      index: '03',
      name: 'The Ocean Race',
      image: '../../../../../assets/images/02_2.png',
      description: '',
    },
    {
      id: 4,
      index: '04',
      name: 'Alula',
      image: '../../../../../assets/images/04_4.png',
      description: '',
    },
  ];
  constructor(
    private router: Router,
    private layoutService: MainLayoutService
  ) {}

  ngOnInit(): void {
    this.layoutService.backgroundImageSubject.next(null);
  }

  openPartnerDetails(partnerId: number) {
    this.router.navigate(['/rsg-analysis/partnerships/details', partnerId]);
  }
}
