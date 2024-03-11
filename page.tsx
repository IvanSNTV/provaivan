import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Primo Banner Scorrevole */}
      <div className="banner-container" style={{ display: "none" }}>
        <div className="banner-text">
          <marquee behavior="scroll" direction="left" scrollamount="5">
            !!!! SCOPRI LA NOSTRA OFFERTA DEL MESE !!!!
          </marquee>
        </div>
      </div>

      {/* Secondo Banner Scorrevole */}
      <div className="banner-container" style={{ color: "#F55741", backgroundColor: "#f8b400" }}>
        <div className="banner-text" style={{ fontWeight: "bold" }}>
          <marquee behavior="scroll" direction="left" scrollamount="5">
            !!!! SCOPRI LA NOSTRA OFFERTA DEL MESE !!!!
          </marquee>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundImage: "url(https://pin.it/7x4ELSObL)" }}>
        {/* Barra di navigazione */}
        <nav className="navbar" style={{ marginLeft: "-740px", background: "#789", padding: "10px 20px", borderRadius: "8px" }}>
          {/* Aggiungiamo marginLeft per spostare la barra di navigazione a sinistra */}
          <ul className="nav-list flex space-x-6 text-lg font-bold">
            {/* Aggiungiamo spaziatura tra gli elementi e stile grassetto */}
            <li className="nav-item"><a href="#" className="nav-link" style={{ color: "orange" }}>Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link" style={{ color: "orange" }}>Contatti</a></li>
            <li className="nav-item"><a href="#" className="nav-link" style={{ color: "orange" }}>Pacchetti</a></li>
          </ul>
        </nav>
        <title>Be the event Malta</title> {/* Correggo qui l'attributo "title" */}

        {/* Contenuto principale */}
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          {/* Codice eliminato dalla riga 21 alla riga 37 */}

          <div className="mb-32 flex text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:flex-cols-4 lg:text-left">
            <a
              href="https://www.instagram.com/betheevent.eu/"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                A te la scelta!{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[40] text-sm opacity-80`}>
                Vuoi visitare Malta? Scopri i nostri fantastici pacchetti viaggio!.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Non sai cosa visitare ?{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Nessun problema ti aiuteremo nella tua scelta.
              </p>
            </a>

            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Contatta la nostra assistenza{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                Risolveremo ogni tuo dubbio.
              </p>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center py-8 bg-gray-900 text-white">
        <a href="https://www.instagram.com/betheevent.eu/" target="_blank" rel="noopener noreferrer" className="mr-4">
          <img src="https://www.instagram-brand.com/wp-content/uploads/2016/11/Instagram_AppIcon_Aug2017.png" alt="Instagram Logo" width="100" height="100" />
        </a>
        <a href="https://www.tiktok.com/@betheevent.eu" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/TikTok_logo.svg/240px-TikTok_logo.svg.png" alt="TikTok Logo" width="100" height="100" />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png" alt="WhatsApp Logo" width="100" height="100" />
        </a>
      </footer>
    </div>
  );
}
