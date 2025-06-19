import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { About } from './page/about/about';
import { Service } from './service1/service/service';
import { Contact } from './page/contact/contact';


import { Cyber } from './service1/cyber/cyber';
import { Ai } from './service1/ai/ai';
import { It } from './service1/it/it';
import { CloudComponent } from './service1/cloud.component/cloud.component';
 

export const routes: Routes = [{path: '',component:Home},{path: 'home',component:Home},{path: 'about',component:About },{path:'services',component:Service},{path:'contact',component:Contact},{path:'cloud',component:CloudComponent} ,{path:'cyber',component:Cyber},
 {path:'it',component:It},{path:'ai',component:Ai}   ]        

 