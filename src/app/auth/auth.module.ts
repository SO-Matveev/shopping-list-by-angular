import { SharedModule } from "../shared/share.module";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild({ path: "", component: AuthComponent }),
    SharedModule,
  ],
})
export class AuthModule {}
