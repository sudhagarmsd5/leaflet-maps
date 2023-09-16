import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { BASE_NOMINATIM_URL } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class NominatimService {


  constructor (private http: HttpClient) {
  }

  addressLookup (req?: any): Observable<any> {
    let url = `http://${BASE_NOMINATIM_URL}/search.php?q=${req}&format=json`;

    return this.http.get(url);
  }

}

// http://103.133.214.254/nominatim/search.php?q=tirupattur&format=geojson