import { SharedModule } from "../shared/share.module";

@NgModule({
  declaration: [ShoppingListComponent, ShoppingEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: "", component: ShoppingListComponent }]),
    SharedModule,
  ],
})
export class ShoppingListModule {}
