'use client';

import { useState } from 'react';

// Note: Les métadonnées pour les composants client sont définies dans le layout parent

export default function Contact() {
  const [selectedDates, setSelectedDates] = useState<{[key: string]: string}>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateSlotChange = (date: string, slot: string) => {
    setSelectedDates(prev => ({
      ...prev,
      [date]: slot
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      serviceType: formData.get('serviceType') as string,
      pickupAddress: formData.get('pickupAddress') as string,
      deliveryAddress: formData.get('deliveryAddress') as string,
      description: formData.get('description') as string,
    };

    // Formater les créneaux sélectionnés
    const selectedSlots = Object.entries(selectedDates)
      .map(([date, slot]) => {
        const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('fr-FR', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        return `${formattedDate} - ${slot}`;
      })
      .join('\n');

    const serviceTypeText = {
      'transport-meubles': 'Transport de meubles',
      'livraison-leboncoin': 'Livraison LeBonCoin',
      'petit-demenagement': 'Petit déménagement',
      'transport-express': 'Transport express',
      'autre': 'Autre service'
    }[data.serviceType] || data.serviceType;

    // Construire le sujet et le corps de l'email
    const subject = `Nouvelle demande de devis VLT Services - ${data.name}`;
    const body = `NOUVELLE DEMANDE DE DEVIS VLT SERVICES

=== INFORMATIONS CLIENT ===
Nom : ${data.name}
Email : ${data.email}
Téléphone : ${data.phone}

=== DÉTAILS DE LA DEMANDE ===
Service demandé : ${serviceTypeText}

Adresse de récupération :
${data.pickupAddress}

Adresse de livraison :
${data.deliveryAddress}

Description détaillée :
${data.description}

=== DISPONIBILITÉS ===
${selectedSlots || 'Aucun créneau sélectionné'}

=== INFORMATIONS TECHNIQUES ===
Demande reçue le : ${new Date().toLocaleString('fr-FR')}
Source : Site web VLT Services

---
Répondez directement à ce client à : ${data.email}
Ou contactez-le par téléphone : ${data.phone}`;

    // Créer le lien mailto
    const mailtoLink = `mailto:victor.ltalamon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher le message de succès
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 8000);
  };

  // Fonctions pour le calendrier
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return firstDay === 0 ? 6 : firstDay - 1; // Convertir dimanche (0) en 6 pour semaine commençant lundi
  };

  const isDateAvailable = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    
    // Disponible à partir de demain
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    
    // Limiter à 3 mois dans le futur
    const maxDate = new Date(today);
    maxDate.setMonth(today.getMonth() + 3);
    
    return date >= tomorrow && date <= maxDate;
  };

  const formatDateForInput = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const monthName = currentMonth.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
    
    const days = [];
    const today = new Date();
    
    // Limites de navigation
    const minMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxMonth = new Date(today.getFullYear(), today.getMonth() + 3, 1);
    const canGoPrev = currentMonth > minMonth;
    const canGoNext = currentMonth < maxMonth;

    // Jours vides au début
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    // Jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      const dateStr = formatDateForInput(date);
      const isAvailable = isDateAvailable(date);
      const isSelected = selectedDate === dateStr;
      const hasSlot = selectedDates[dateStr];

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => {
            if (isAvailable) {
              setSelectedDate(isSelected ? '' : dateStr);
            }
          }}
          disabled={!isAvailable}
          className={`h-10 w-10 rounded-lg text-sm transition-colors ${
            !isAvailable
              ? 'text-gray-300 cursor-not-allowed'
              : isSelected
              ? 'bg-blue-600 text-white font-medium'
              : hasSlot
              ? 'bg-green-100 text-green-800 border border-green-300 hover:bg-green-200'
              : 'text-gray-700 hover:bg-blue-50 border border-gray-200 hover:border-blue-300'
          }`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
        {/* En-tête du calendrier */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => navigateMonth('prev')}
            disabled={!canGoPrev}
            className={`p-2 rounded-lg ${
              canGoPrev
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <h3 className="text-lg font-medium text-gray-900 capitalize">
            {monthName}
          </h3>
          
          <button
            type="button"
            onClick={() => navigateMonth('next')}
            disabled={!canGoNext}
            className={`p-2 rounded-lg ${
              canGoNext
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-gray-300 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Jours de la semaine */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(day => (
            <div key={day} className="h-8 flex items-center justify-center text-xs font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Grille des jours */}
        <div className="grid grid-cols-7 gap-1">
          {days}
        </div>

        {/* Légende */}
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-600">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
            Date sélectionnée
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-100 border border-green-300 rounded mr-2"></div>
            Créneau choisi
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-200 rounded mr-2"></div>
            Disponible
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact & Devis
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Décrivez votre projet et vos disponibilités. Je vous recontacte rapidement 
              avec un devis personnalisé !
            </p>
          </div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulaire */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Demande de Devis Gratuit
                </h2>

                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-700">
                        <strong>Demande transmise !</strong> Votre client email s'est ouvert avec la demande de devis. 
                        Envoyez l'email pour recevoir cette demande dans votre boîte mail.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder:text-gray-500 transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder:text-gray-500 transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder:text-gray-500 transition-colors"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  {/* Type de service */}
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                      Type de service *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 transition-colors"
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="transport-meubles">Transport de meubles</option>
                      <option value="livraison-leboncoin">Livraison LeBonCoin</option>
                      <option value="petit-demenagement">Petit déménagement</option>
                      <option value="transport-express">Transport express</option>
                      <option value="autre">Autre (préciser)</option>
                    </select>
                  </div>

                  {/* Adresses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="pickupAddress" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse de récupération *
                      </label>
                      <textarea
                        id="pickupAddress"
                        name="pickupAddress"
                        rows={3}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder:text-gray-500 transition-colors resize-none"
                        placeholder="Adresse complète, étage, code d'accès..."
                      />
                    </div>
                    <div>
                      <label htmlFor="deliveryAddress" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse de livraison *
                      </label>
                      <textarea
                        id="deliveryAddress"
                        name="deliveryAddress"
                        rows={3}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder:text-gray-500 transition-colors resize-none"
                        placeholder="Adresse complète, étage, code d'accès..."
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description détaillée *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900 placeholder:text-gray-500 transition-colors resize-none"
                      placeholder="Décrivez les objets à transporter, quantité, poids approximatif, particularités..."
                    />
                  </div>

                  {/* Créneaux de disponibilité */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Vos disponibilités *
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Choisissez une date dans le calendrier, puis sélectionnez votre créneau préféré.
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {/* Calendrier */}
                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-3">1. Choisir une date</h4>
                        {renderCalendar()}
                      </div>

                      {/* Créneaux horaires */}
                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-3">
                          2. Choisir un créneau
                          {selectedDate && (
                            <span className="text-sm font-normal text-gray-600 ml-2">
                              ({new Date(selectedDate + 'T00:00:00').toLocaleDateString('fr-FR', {
                                weekday: 'long',
                                day: 'numeric',
                                month: 'long'
                              })})
                            </span>
                          )}
                        </h4>
                        
                        {selectedDate ? (
                          <div className="space-y-3">
                            {['Matin (8h-12h)', 'Après-midi (14h-18h)', 'Soir (18h-20h)'].map((slot) => (
                              <label key={slot} className="flex items-center p-3 border-2 border-gray-200 rounded-lg hover:border-blue-300 transition-colors cursor-pointer">
                                <input
                                  type="radio"
                                  name="selectedSlot"
                                  value={slot}
                                  onChange={() => handleDateSlotChange(selectedDate, slot)}
                                  checked={selectedDates[selectedDate] === slot}
                                  className="w-4 h-4 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2"
                                />
                                <span className="ml-3 text-sm font-medium text-gray-900">{slot}</span>
                              </label>
                            ))}
                            
                            {selectedDates[selectedDate] && (
                              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                                <div className="flex items-center">
                                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  <span className="text-sm text-green-800">
                                    <strong>Créneau sélectionné :</strong> {selectedDates[selectedDate]}
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="p-6 border-2 border-gray-200 rounded-lg text-center text-gray-500">
                            <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <p className="text-sm">
                              Sélectionnez d'abord une date<br />
                              dans le calendrier ci-contre
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors text-lg"
                  >
                    Envoyer ma demande de devis
                  </button>
                </form>
              </div>
            </div>

            {/* Informations de contact */}
            <div className="lg:col-span-1">
              
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Direct</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <a href="tel:0619640661" className="text-gray-700 hover:text-blue-600 transition-colors">
                        <strong>06.19.64.06.61</strong>
                      </a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a href="mailto:victor.ltalamon@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                        <strong>victor.ltalamon@gmail.com</strong>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Zone d&apos;Intervention</h3>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-gray-700 text-sm">
                        <strong>Marseille et alentours</strong><br />
                        Aix-en-Provence, Aubagne, Vitrolles, Martigues...
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Délai de Réponse</h3>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700 text-sm">
                      <strong>Réponse sous 2h</strong><br />
                      En moyenne, 7j/7
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Horaires</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                      <span>Lundi - Samedi</span>
                      <span>8h - 20h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span>Sur demande</span>
                    </div>
                    <div className="mt-3 text-xs text-gray-500">
                      * Interventions d&apos;urgence possibles
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}