import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              VLT Services
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-blue-100">
              Déménagement & Transport de Meubles à Marseille
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Votre partenaire de confiance pour tous vos besoins de transport
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
