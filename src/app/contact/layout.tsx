import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Devis Gratuit Transport Marseille | VLT Services',
  description: 'Demandez votre devis gratuit de transport ou déménagement à Marseille. Formulaire simple, réponse rapide sous 2h, créneaux flexibles.',
  keywords: 'contact transport Marseille, devis gratuit déménagement, formulaire transport, réservation camion Marseille',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}