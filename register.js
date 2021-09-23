if ("serviceWorker" in  navigator) {
    //Registramos el service worker
    navigator.serviceWorker.register("./sw.js");
}
