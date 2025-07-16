import Route from "./Route.js";

//Définir vos routes
export const allRoutes = [
    new Route("/", "Accueil", "../pages/home.html"),
    new Route("/galerie", "la galerie", "../pages/galerie.html"),
    new Route("/signin", "connexion", "../pages/signin.html"),
    new Route("/signup", "Inscription", "../pages/signup.html"),
];


//le titre s'affiche comme ceci : Route.titre - websitename
export const websitename = "Quai Antique";

