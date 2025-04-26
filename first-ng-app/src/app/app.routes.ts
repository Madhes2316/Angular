import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        loadComponent : ()=>{
            return import('../app/home/home.component').then((m)=>{
                return m.HomeComponent;
            })
        }
    },
    {
        path:'home',
        pathMatch:'full',
        loadComponent : ()=>{
            return import('../app/home/home.component').then((m)=>{
                return m.HomeComponent;
            })
        }
    },
    {
        path:'todos',
        pathMatch:'full',
        loadComponent : ()=>{
            return import('../app/todos/todos.component').then((m)=>{
                return m.TodosComponent;
            })
        }
    },
];
