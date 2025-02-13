import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http :HttpClient) { }

  baseurl="https://localhost:7206/api/categories"


getCategories(){
  return this.http.get<CategoryModel[]>(this.baseurl)
}
}
