import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { PartnerService } from '../../../services/partner.service';
import { partner } from '../../../../../shared/models/iPartner.model';
import { Location } from '@angular/common';
import { MainLayoutService } from '../../../../../layouts/main-layout/services/main-layout.service';
import { slideInUp } from '../../../../../shared/animations/side-in-up.animation';
@Component({
  selector: 'app-partnership-details',
  standalone: true,

  animations: [slideInUp],
  templateUrl: './partnership-details.component.html',
  styleUrl: './partnership-details.component.scss',
})
export class PartnershipDetailsComponent implements OnInit {
  patrnerId: number = 1;
  partnerData!: partner;
  show = true;
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private partnerservice: PartnerService,
    private location: Location,
    private layoutService: MainLayoutService
  ) {}

  ngOnInit(): void {
    this.patrnerId = Number(this.activateRoute.snapshot.paramMap.get('id'));
    this.getPartnerData();
  }

  openVision() {
    this.router.navigate(['/rsg-analysis/partnerships/vision', this.patrnerId]);
  }

  getPartnerData() {
    this.partnerservice.getPartnerById(this.patrnerId).subscribe((res) => {
      this.partnerData = res;
      this.layoutService.setBackground(res.image, 'slideInUp');
    });
  }

  back() {
    this.location.back();
    this.layoutService.setBackground('null', 'slideInUp');
  }
}
