import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home";
import { AboutComponent } from "./pages/about";
import { ProductsComponent } from "./pages/products";
import { ContactComponent } from "./pages/contact";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
];
