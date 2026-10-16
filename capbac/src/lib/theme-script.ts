export const THEME_KEY = "capbac:theme";

/** Script exécuté avant l'affichage pour éviter un flash de mauvais thème. */
export const THEME_SCRIPT = `(function(){try{var p=localStorage.getItem("${THEME_KEY}")||"dark";var l=p==="light"||(p==="system"&&matchMedia("(prefers-color-scheme: light)").matches);document.documentElement.classList.toggle("light",l)}catch(e){}})()`;
