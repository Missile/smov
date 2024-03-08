window.__CONFIG__ = {
  // The URL for the CORS proxy, the URL must NOT end with a slash!
  VITE_CORS_PROXY_URL: ["https://sudo-proxy0.netlify.app", "https://sudo-proxy1.up.railway.app", "https://sudo-proxy2.up.railway.app", "https://sudo-proxy3.up.railway.app", "https://sudo-proxy4.netlify.app", "https://sudo-worker-1.cooperransom08.workers.dev", "https://sudo-worker-2.cooperransom08.workers.dev", "https://sudo-worker-3.cooperransom08.workers.dev", "https://sudo-proxy9.netlify.app", "https://sudo-proxy10.up.railway.app"],

  // The READ API key to access TMDB
  VITE_TMDB_READ_API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZTljNGE2ZDE1ZDFiODZiNzdlMWQyYmI5ZGY0MzdmYyIsInN1YiI6IjY1YjNmMWI0NTk0Yzk0MDE2MzNkZDBjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kAX7TkbKuJkNty6IsjcCLnoENFicVZn6d6DkLQsy3p8",

  // The DMCA email displayed in the footer, null to hide the DMCA link
  VITE_DMCA_EMAIL: "sudo-flix@proton.me",

  // Whether to disable hash-based routing, leave this as false if you don't know what this is
  VITE_NORMAL_ROUTER: true,

  // The backend URL to communicate with, defaults to the movie-web hosted one at backend.movie-web.app
  VITE_BACKEND_URL: "https://sudo-flix-backend.lol", // "https://mw-backend.lonelil.com",

  // Maybe do this at a later date
  //VITE_TURNSTILE_KEY: "3x00000000000000000000FF", // https://movie-web.github.io/docs/proxy/configuration

  // A comma separated list of disallowed IDs in the case of a DMCA claim - in the format "series-<id>" and "movie-<id>"
  VITE_DISALLOWED_IDS: "",
};
