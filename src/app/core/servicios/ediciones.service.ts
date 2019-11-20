import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Ediciones } from '../interfaces/ediciones';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EdicionesService {

  ediciones:Ediciones[] = [];

  constructor(private http: HttpClient) {
    
   }

  getRawEdiciones(id:number = 1617) : Observable<Ediciones[]>{
    this.ediciones = [];
    return this.http.get<any>(environment.bUrl_tc+'/categories?parent='+id).pipe(
      map(data => {        
        data.forEach(i => {
          let edicion:Ediciones;
          edicion = {
            id: i.id,
            nombre: i.name,
            descripcion: i.description,
            path: i.slug      
          };   
          this.ediciones.push(edicion);  
        }); 
        return this.ediciones;
      })
    );
  }

  getEdicionById(id:number) : Observable<Ediciones>{
    return this.http.get<any>(environment.bUrl_tc+'/categories/'+id).pipe(
      map(data => {        
          let edicion:Ediciones;
          edicion = {
            id: data.id,
            nombre: data.name,
            descripcion: data.description,
            path: data.slug      
          };   
        return edicion;
      })
    );
  }

  
}
