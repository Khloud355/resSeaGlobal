import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type BgAnimationKey = 'slideInUp' | 'fadeIn' | 'zoomIn';
@Injectable({
  providedIn: 'root',
})
export class MainLayoutService {
  backgroundImageSubject = new BehaviorSubject<string | null>(null);
  backgroundAnimationSubject = new BehaviorSubject<BgAnimationKey>('slideInUp');

  setBackground(image: string, animation: BgAnimationKey) {
    this.backgroundImageSubject.next(image);
    this.backgroundAnimationSubject.next(animation);
  }
}
