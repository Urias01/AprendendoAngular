import { HeaderData } from './header-data-model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _HeaderData = new BehaviorSubject<HeaderData>({
    title: 'Início',
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  get HeaderData(): HeaderData {
    return this._HeaderData.value
  }

  set HeaderData(HeaderData: HeaderData) {
    this._HeaderData.next(HeaderData)
  }
}
