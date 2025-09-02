import React from 'react';
import { Shield, Package, CreditCard, RotateCcw, Scale, FileText } from 'lucide-react';

const TermeniConditiiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Termeni și Condiții</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Condițiile generale de utilizare pentru FrostBoyz
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Ultima actualizare: Ianuarie 2025</p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Rezumat Rapid</h2>
          <ul className="text-blue-800 dark:text-blue-300 space-y-2">
            <li>• Prin utilizarea site-ului nostru, acceptați acești termeni</li>
            <li>• Toate produsele sunt acoperite de garanția noastră</li>
            <li>• Returnările sunt acceptate în 14 zile de la livrare</li>
            <li>• Plățile sunt procesate securizat prin Stripe</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Company Information */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <FileText className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Informații despre Companie</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Denumirea comercială:</strong> FrostBoyz<br/>
                <strong>Sediul social:</strong> București, România<br/>
                <strong>Email:</strong> frostboyz.jewelry@gmail.com<br/>
                <strong>Telefon:</strong> +40 758848374
              </p>
              <p>
                FrostBoyz este o marcă înregistrată care comercializează bijuterii premium inspirate de cultura urbană.
              </p>
            </div>
          </section>

          {/* Terms of Use */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Scale className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Condiții de Utilizare</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Prin accesarea și utilizarea site-ului web FrostBoyz, acceptați să respectați acești termeni și condiții. 
                Dacă nu sunteți de acord cu oricare dintre acești termeni, vă rugăm să nu utilizați site-ul nostru.
              </p>
              <p>
                <strong>Utilizare permisă:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Navigarea și cumpărarea produselor pentru uz personal</li>
                <li>Crearea unui cont pentru gestionarea comenzilor</li>
                <li>Partajarea conținutului pe rețelele sociale</li>
              </ul>
              <p>
                <strong>Utilizare interzisă:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copierea sau reproducerea neautorizată a conținutului</li>
                <li>Utilizarea pentru scopuri comerciale fără acordul nostru</li>
                <li>Încercarea de a accesa sisteme sau date neautorizate</li>
              </ul>
            </div>
          </section>

          {/* Products and Orders */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Package className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Produse și Comenzi</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Disponibilitatea produselor:</strong> Toate produsele afișate pe site sunt supuse disponibilității stocului. 
                Ne rezervăm dreptul de a anula comenzile pentru produsele care nu mai sunt disponibile.
              </p>
              <p>
                <strong>Prețuri:</strong> Toate prețurile sunt afișate în RON și includ TVA. Prețurile pot fi modificate 
                fără notificare prealabilă, dar comenzile confirmate vor respecta prețul de la momentul plasării.
              </p>
              <p>
                <strong>Procesarea comenzilor:</strong> Comenzile sunt procesate în 1-2 zile lucrătoare. 
                Veți primi o confirmare prin email cu detaliile comenzii și informații de urmărire.
              </p>
              <p>
                <strong>Livrare:</strong> Oferim livrare gratuită pentru comenzile peste 150 RON. 
                Timpul de livrare este de 7-15 zile lucrătoare la nivel mondial.
              </p>
            </div>
          </section>

          {/* Payment */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <CreditCard className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Plăți</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Metode de plată acceptate:</strong> Acceptăm toate cardurile de credit și debit majore 
                prin procesatorul nostru securizat Stripe.
              </p>
              <p>
                <strong>Securitatea plăților:</strong> Toate tranzacțiile sunt criptate și procesate securizat. 
                Nu stocăm informațiile cardului dumneavoastră pe serverele noastre.
              </p>
              <p>
                <strong>Facturare:</strong> Cardul dumneavoastră va fi debitat la confirmarea comenzii. 
                Veți primi o factură electronică prin email.
              </p>
            </div>
          </section>

          {/* Returns and Warranty */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <RotateCcw className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Returnări și Garanție</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Politica de returnare:</strong> Oferim returnări în 14 zile de la data livrării. 
                Produsele trebuie să fie nepurtate, în starea originală, cu ambalajul original.
              </p>
              <p>
                <strong>Proces de returnare:</strong> Contactați echipa noastră la support@frostboyz.com 
                pentru a iniția o returnare. Vă vom furniza o etichetă de returnare prepaid.
              </p>
              <p>
                <strong>Garanție pe viață:</strong> Oferim garanție pe viață împotriva defectelor de fabricație. 
                Aceasta acoperă problemele structurale, dar nu uzura normală sau deteriorarea accidentală.
              </p>
              <p>
                <strong>Excluderi:</strong> Produsele personalizate sau gravate nu pot fi returnate, 
                cu excepția cazurilor în care sunt defecte.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Proprietate Intelectuală</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Toate conținuturile de pe acest site, inclusiv textele, imaginile, logo-urile, și designurile 
                sunt proprietatea FrostBoyz și sunt protejate de legile drepturilor de autor.
              </p>
              <p>
                Nu aveți dreptul să reproduceți, distribuiți sau utilizați aceste materiale fără 
                acordul nostru scris explicit.
              </p>
            </div>
          </section>

          {/* Liability */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Limitarea Răspunderii</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                FrostBoyz nu va fi responsabil pentru daune indirecte, incidentale sau consecutive 
                care rezultă din utilizarea produselor noastre sau a site-ului web.
              </p>
              <p>
                Răspunderea noastră maximă este limitată la valoarea produsului achiziționat.
              </p>
            </div>
          </section>

          {/* Applicable Law */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Legea Aplicabilă</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Acești termeni și condiții sunt guvernați de legile României. 
                Orice dispută va fi soluționată de instanțele competente din București, România.
              </p>
              <p>
                Pentru consumatori, se aplică prevederile Legii nr. 296/2004 privind Codul consumului, 
                cu modificările și completările ulterioare.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Contact</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Pentru întrebări legate de acești termeni și condiții, vă rugăm să ne contactați:
              </p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> frostboyz.jewelry@gmail.com</li>
                <li><strong>Telefon:</strong> +40 758848374</li>
                <li><strong>Program:</strong> Luni-Vineri, 9:00-18:00</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermeniConditiiPage;