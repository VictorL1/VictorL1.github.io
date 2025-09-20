import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarifs Transport & Déménagement Marseille | VLT Services',
  description: 'Tarifs transparents : 40€ + 35€/h pour transport meubles et déménagement à Marseille. Devis gratuit, prix accessibles, aucune surprise.',
  keywords: 'tarif déménagement Marseille, prix transport meubles, devis gratuit transport, 40 euros déménagement, pas cher Marseille',
};

export default function Tarifs() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Tarifs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tarification transparente et accessible pour tous vos besoins de transport. 
              Pas de surprise, que des prix justes !
            </p>
          </div>
        </div>
      </section>

      {/* Tarification principale */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tarif de base */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tarification Standard</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">40€</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Forfait de base</div>
                <p className="text-gray-600 text-sm">
                  Frais de déplacement + stationnement
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">35€</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">Par heure</div>
                <p className="text-gray-600 text-sm">
                  Tarif dégressif selon la durée
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Zone de tarification standard</h3>
              <p className="text-gray-600">
                <strong>Marseille intra-muros</strong> : 1er au 16ème arrondissement
              </p>
              <p className="text-sm text-gray-500 mt-2">
                * Tarifs valables pour les trajets dans Marseille et proche banlieue
              </p>
            </div>
          </div>

          {/* Exemples de tarifs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Exemples de Prestations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Livraison LeBonCoin</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">75€ - 110€</div>
                <p className="text-gray-600 text-sm mb-4">
                  Selon distance et temps de chargement
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Récupération chez vendeur</li>
                  <li>• Transport sécurisé</li>
                  <li>• Livraison à domicile</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Studio (25m²)</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">110€ - 180€</div>
                <p className="text-gray-600 text-sm mb-4">
                  Déménagement complet 3-5h
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chargement + transport</li>
                  <li>• Protection des meubles</li>
                  <li>• Déchargement</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Transport Meuble</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">75€ - 110€</div>
                <p className="text-gray-600 text-sm mb-4">
                  Canapé, armoire, électroménager
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sangles de sécurité</li>
                  <li>• Couvertures protection</li>
                  <li>• Manutention soigneuse</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tarification selon distance */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Tarification selon la Zone
            </h2>
            
            <div className="bg-white border rounded-xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Zone</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Villes</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Supplément</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Zone 1</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Marseille (1er-16ème)</td>
                      <td className="px-6 py-4 text-sm text-green-600 font-medium">Tarif standard</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Zone 2</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Aubagne, La Ciotat, Cassis</td>
                      <td className="px-6 py-4 text-sm text-blue-600 font-medium">+15€</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Zone 3</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Aix-en-Provence, Salon</td>
                      <td className="px-6 py-4 text-sm text-blue-600 font-medium">+30€</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">Zone 4</td>
                      <td className="px-6 py-4 text-sm text-gray-600">Avignon, Arles, Nîmes</td>
                      <td className="px-6 py-4 text-sm text-purple-600 font-medium">Devis sur mesure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Services supplémentaires */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Services Supplémentaires
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Options incluses</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Chargement et déchargement
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Protection par sangles et couvertures
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Manutention
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Services payants</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Montage/démontage simple</span>
                    <span className="font-medium">+30€</span>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>

          {/* Notes importantes */}
          <div className="bg-gray-100 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informations importantes</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• <strong>Paiement :</strong> Espèces ou virement (Wero, Lydia) à la livraison</li>
              <li>• <strong>Devis gratuit :</strong> Estimation avant intervention</li>
              <li>• <strong>Disponibilité :</strong> 7j/7 selon planning, réservation conseillée</li>
              <li>• <strong>Annulation :</strong> Gratuite jusqu&apos;à 2h avant l&apos;intervention</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d&apos;un devis personnalisé ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Décrivez votre projet et recevez une estimation précise
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}