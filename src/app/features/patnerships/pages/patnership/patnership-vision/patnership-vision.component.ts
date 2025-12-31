import { slideInUp } from './../../../../../shared/animations/side-in-up.animation';
import { Component, OnInit } from '@angular/core';
import { fadeInDelay } from '../../../../../shared/animations/fade-in.animation';
import { PartnerService } from '../../../services/partner.service';
import { vision } from '../../../../../shared/models/iVision.model';
import { ActivatedRoute, Router } from '@angular/router';

import { MainLayoutService } from '../../../../../layouts/main-layout/services/main-layout.service';
import { slideInRight } from '../../../../../shared/animations/slide-in-right.animation';

@Component({
  selector: 'app-patnership-vision',
  standalone: true,
  imports: [],
  animations: [slideInRight, fadeInDelay],
  templateUrl: './patnership-vision.component.html',
  styleUrl: './patnership-vision.component.scss',
})
export class PatnershipVisionComponent implements OnInit {
  vision!: vision;
  visionId: number = 1;

  constructor(
    private partnerService: PartnerService,
    private route: ActivatedRoute,
    private router: Router,
    private mainLayoutService: MainLayoutService
  ) {}
  ngOnInit(): void {
    this.visionId = Number(this.route.snapshot.paramMap.get('id'));
    this.getVisions();
  }
  getVisions() {
    this.partnerService.getVisions(this.visionId).subscribe((res: any) => {
      this.vision = res;
      this.mainLayoutService.setBackground(res.image, 'slideInUp');
    });
  }

  back() {
    this.router.navigate(['/rsg-analysis/partnerships']);
    this.mainLayoutService.setBackground('null', 'slideInUp');
  }
}
