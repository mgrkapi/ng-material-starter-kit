import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChipModel } from '../models/chip.model';

@Injectable()
export class ChipsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ChipModel[]> {
    return this._httpClient.get<ChipModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }
}
