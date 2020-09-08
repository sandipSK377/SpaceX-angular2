import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { BACKEND_URL_CONFIG } from '../backend.config';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  baseUrl = environment.baseUrl;
  launchListUrl = BACKEND_URL_CONFIG.launchList;
  constructor(private apiService: ApiService) { }

  getLaunches(queryUrl: string) {
    return this.apiService.get(this.baseUrl + this.launchListUrl + queryUrl);
  }
}
