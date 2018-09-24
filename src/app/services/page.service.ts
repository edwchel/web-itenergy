import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

// tslint:disable-next-line:import-blacklist
import 'rxjs';

@Injectable()

export class PageService {

  constructor(private http: Http) {}

  getData( url: string) {
    return this.http.get(url).map((res: Response) => res.json());
  }
}
