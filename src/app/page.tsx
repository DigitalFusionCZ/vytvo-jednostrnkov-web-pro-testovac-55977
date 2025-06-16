export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-zinc-800 text-white">
        <div className="text-center p-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono">
            Testovací Kavárna "U Kódu"
          </h1>
          <p className="text-xl md:text-2xl italic">
            Nejlepší káva pro vaše bugy.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg my-12">
        <h2 className="text-4xl font-bold mb-8 text-center font-mono">
          O Nás
        </h2>
        <p className="text-lg leading-relaxed text-center">
          Jsme Testovací Kavárna "U Kódu", místo, kde se vášeň pro vynikající kávu snoubí s láskou k programování. Věříme, že každý kód je lepší s dobrou kávou v ruce a jsme tu, abychom vám nabídli dokonalé prostředí pro vaše myšlenky, práci a relaxaci. Ať už jste vývojář, tester, nebo jen milovník dobré kávy, u nás najdete svůj kout. Jsme firemní prezentace, která klade důraz na minimalismus a kvalitu.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 bg-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-mono">
            Naše Služby
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Vynikající Káva</h3>
              <p>Široký výběr káv z celého světa, připravovaných s láskou a precizností.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Klidné Pracovní Prostředí</h3>
              <p>Ideální místo pro soustředěnou práci, studium nebo kódování.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Rychlé Wi-Fi</h3>
              <p>Stabilní a rychlé připojení k internetu pro všechny vaše online potřeby.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Malé Občerstvení</h3>
              <p>Ke kávě nabízíme i drobné, čerstvé občerstvení a dezerty.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Komunitní Akce</h3>
              <p>Pořádáme pravidelné workshopy a setkání pro IT komunitu.</p>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Podpora Bugů</h3>
              <p>Empatické a povzbuzující prostředí pro vaše nekonečné debugování.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 max-w-4xl mx-auto my-12">
        <h2 className="text-4xl font-bold mb-8 text-center font-mono">
          Kontakt
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="text-lg mb-4">
            Máte dotazy, návrhy nebo si jen chcete popovídat o kávě a kódu?
            Neváhejte nás kontaktovat!
          </p>
          <p className="text-2xl font-semibold">
            Email: <a href="mailto:test@kavarna.cz" className="text-blue-600 hover:underline">test@kavarna.cz</a>
          </p>
          <div className="mt-8 text-gray-600 text-sm">
            <p>&copy; 2024 Testovací Kavárna "U Kódu". Všechna práva vyhrazena.</p>
            <p>Minimalistický design pro maximální zážitek.</p>
          </div>
        </div>
      </section>
    </div>
  );
}