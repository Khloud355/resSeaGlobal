import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';
import {
  BgAnimationKey,
  MainLayoutService,
} from '../../services/main-layout.service';
import { slideInUp } from '../../../../shared/animations/side-in-up.animation';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarComponent,
    CommonModule,
    FooterComponent,
  ],
  animations: [slideInUp],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements AfterViewInit {
  backgroundImage = '../../../assets/images/red-sea-global-stock.webp';
  isSplitPage = false;
  bgAnimation!: BgAnimationKey;
  showBg = true;
  show = false;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private layoutservice: MainLayoutService,
    private cdr: ChangeDetectorRef
  ) {
    this.layoutservice.backgroundImageSubject.subscribe((res) => {
      this.backgroundImage = res ?? 'assets/images/red-sea-global-stock.webp';
    });

    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe(() => {
        let current = this.route.firstChild;
        while (current?.firstChild) {
          current = current.firstChild;
        }
        this.isSplitPage = !!current?.snapshot.data?.['splitLayout'];
      });
  }
  restartBg() {
    this.showBg = false;

    setTimeout(() => {
      this.showBg = true;
    }, 60);
  }
  ngAfterViewInit() {
    this.layoutservice.backgroundAnimationSubject.subscribe(() => {
      this.restartBg();
    });
  }
}
