import { Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { LoginComponent } from './login.component';

const routeConfig: Routes = [
    {
        path: '',
        component: MediaComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];

export default routeConfig;