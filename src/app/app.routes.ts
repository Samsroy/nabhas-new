import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home";
import { AboutComponent } from "./pages/about";
import { ProductsComponent } from "./pages/products";
import { ContactComponent } from "./pages/contact";
import { DisposablesComponent } from "./pages/disposables";
import { RetailComponent } from "./pages/retail";
import { FoodCafesComponent } from "./pages/food-cafes";
import { TechnologiesComponent } from "./pages/technologies";
import { HealthcareComponent } from "./pages/healthcare";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "services/disposables", component: DisposablesComponent },
  { path: "services/retail", component: RetailComponent },
  { path: "services/food-cafes", component: FoodCafesComponent },
  { path: "services/technologies", component: TechnologiesComponent },
  { path: "services/healthcare", component: HealthcareComponent },
];
