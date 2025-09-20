import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos de VLT Services - Transporteur Déménageur Marseille',
  description: 'Découvrez VLT Services, votre transporteur de confiance à Marseille. Camion 9m³, service personnalisé, avis clients Google, disponibilité 7j/7.',
  keywords: 'transporteur Marseille, déménageur professionnel, camion 9m3 Marseille, avis clients transport, VLT Services',
};

export default function APropos() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À Propos de VLT Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Votre partenaire de confiance pour tous vos besoins de transport et déménagement à Marseille
            </p>
          </div>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Une histoire de passion et de service
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Basé à Marseille, VLT Services est né de ma passion pour le service client et mon goût 
              du travail bien fait. Spécialisé dans le transport de meubles et les petits déménagements, 
              j&apos;accompagne particuliers et professionnels dans leurs projets avec un service personnalisé, 
              rapide et à prix accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon engagement</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Disponibilité maximale</h4>
                    <p className="text-gray-600">
                      Service 7j/7 avec interventions possibles en urgence selon mon planning
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Tarifs accessibles</h4>
                    <p className="text-gray-600">
                      Grille tarifaire transparente et compétitive, devis gratuit systématique
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Soin et protection</h4>
                    <p className="text-gray-600">
                      Manipulation soigneuse de vos biens avec matériel de protection professionnel
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">En quelques chiffres</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9m³</div>
                  <div className="text-gray-600">Volume camion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7j/7</div>
                  <div className="text-gray-600">Disponibilité</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2h</div>
                  <div className="text-gray-600">Réponse devis</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon véhicule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mon Camion de 9m³
            </h2>
            <p className="text-lg text-gray-600">
              Véhicule parfaitement adapté au transport de meubles et aux déménagements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Galerie photos du camion */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/interieur_camion.jpg" 
                  alt="Intérieur du camion VLT Services - Espace de chargement 9m³"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/exterieur_camion_1.jpg" 
                    alt="Camion VLT Services vue extérieure 1"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/exterieur_camion_2.jpg" 
                    alt="Camion VLT Services vue extérieure 2"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/exterieur_et_victor.jpg" 
                  alt="Victor et son camion VLT Services - Transporteur Marseille"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Caractéristiques techniques</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Volume utile</span>
                    <span className="text-blue-600 font-semibold">9 m³</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Charge utile</span>
                    <span className="text-blue-600 font-semibold">1,2 tonne</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Dimensions intérieures</span>
                    <span className="text-blue-600 font-semibold">L 2,45m × l 1,8m × H 1,8m</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">Équipements</span>
                    <span className="text-blue-600 font-semibold">Sangles, couvertures</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Idéal pour :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobilier complet d&apos;un studio
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Canapés, armoires, électroménager
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Objets volumineux LeBonCoin
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Déménagements partiels
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}