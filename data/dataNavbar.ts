
import {navbarTitleType} from '../model/navbarTitleType' 
import { movieTypes } from "./movieTypes"
import { seriesTypes } from "./seriesTypes"
export const dataTitleNavbar:navbarTitleType[] =[
    {id: 1, title: 'فیلیموتور',data:[]},
    {id: 2, title: 'فیلم', data: movieTypes},
    {id: 3, title: 'سریال', data: movieTypes},
    {id: 4, title: 'ایرانی',data:[]},
    {id: 5, title: 'کودک',data:[]},
    {id: 6, title: 'فیلیمومدرسه',data:[]},
    {id: 7, title: 'مجموعه ها', data: seriesTypes},
    {id: 8, title: 'جستجو',data:[]},
]