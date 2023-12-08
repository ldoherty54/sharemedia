import { Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { LoginComponent } from './login.component';
import { UploadComponent } from './upload.component';
import { DetailsComponent } from './details.component'
import { UserDetailsComponent } from './userdetails.component';

const routeConfig: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'upload',
        component: UploadComponent,
    },
    {
        path: 'media',
        component: MediaComponent,
    },
    {
        path: "media/:id",
        component: DetailsComponent,
    },
    {
        path: "users",
        component: UserDetailsComponent,
    }

];

export default routeConfig;