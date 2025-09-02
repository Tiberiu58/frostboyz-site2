import React from 'react';
import { Shield, Database, Eye, Settings, Lock, Globe } from 'lucide-react';

const PoliticaConfidentialitateePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Politica de Confidențialitate</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Cum colectăm, utilizăm și protejăm datele dumneavoastră personale
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Ultima actualizare: Ianuarie 2025</p>
        </div>

        {/* Quick Summary */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-12">
          <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Rezumat Rapid</h2>
          <ul className="text-blue-800 dark:text-blue-300 space-y-2">
            <li>• Colectăm doar datele necesare pentru procesarea comenzilor</li>
            <li>• Nu vindem informațiile personale către terți</li>
            <li>• Datele sunt criptate și stocate securizat</li>
            <li>• Aveți dreptul să accesați, corectați sau ștergeți datele</li>
          </ul>
        </div>

        <div className="space-y-12">
          {/* Data Controller */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">1. Operatorul de Date</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Operatorul de date:</strong> FrostBoyz<br/>
                <strong>Sediul:</strong> București, România<br/>
                <strong>Contact DPO:</strong> privacy@frostboyz.com<br/>
                <strong>Telefon:</strong> +40 758848374
              </p>
              <p>
                Suntem responsabili pentru asigurarea că datele dumneavoastră personale sunt prelucrate 
                în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și 
                Legea nr. 190/2018 privind măsurile de punere în aplicare a GDPR.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Database className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">2. Ce Date Colectăm</h2>
            </div>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Date de Identificare</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Nume și prenume</li>
                  <li>Adresa de email</li>
                  <li>Numărul de telefon</li>
                  <li>Adresa de livrare</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Date de Plată</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Informații despre card (procesate securizat prin Stripe)</li>
                  <li>Istoricul comenzilor</li>
                  <li>Facturi și chitanțe</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Date Tehnice</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Adresa IP</li>
                  <li>Tipul de browser și dispozitiv</li>
                  <li>Paginile vizitate și timpul petrecut</li>
                  <li>Cookie-uri și tehnologii similare</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Eye className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">3. Cum Utilizăm Datele</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Baza legală pentru prelucrare:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contract:</strong> Pentru procesarea comenzilor și furnizarea serviciilor</li>
                <li><strong>Interes legitim:</strong> Pentru îmbunătățirea site-ului și prevenirea fraudelor</li>
                <li><strong>Consimțământ:</strong> Pentru comunicări marketing și cookie-uri opționale</li>
                <li><strong>Obligație legală:</strong> Pentru conformitatea fiscală și contabilă</li>
              </ul>
              <p>
                <strong>Scopurile prelucrării:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Procesarea și livrarea comenzilor</li>
                <li>Furnizarea suportului pentru clienți</li>
                <li>Îmbunătățirea produselor și serviciilor</li>
                <li>Comunicări marketing (cu consimțământul dumneavoastră)</li>
                <li>Respectarea obligațiilor legale</li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Globe className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">4. Partajarea Datelor</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Parteneri de încredere:</strong> Partajăm datele doar cu partenerii necesari pentru 
                funcționarea serviciilor:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Stripe:</strong> Pentru procesarea securizată a plăților</li>
                <li><strong>Servicii de livrare:</strong> Pentru livrarea comenzilor</li>
                <li><strong>Supabase:</strong> Pentru stocarea securizată a datelor</li>
              </ul>
              <p>
                <strong>Nu vindem datele:</strong> Nu vindem, nu închiriem și nu partajăm informațiile 
                dumneavoastră personale cu terți pentru scopuri de marketing fără consimțământul explicit.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Settings className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">5. Drepturile Dumneavoastră</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Conform GDPR și legislației române, aveți următoarele drepturi:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Dreptul de acces:</strong> Să solicitați o copie a datelor personale</li>
                <li><strong>Dreptul de rectificare:</strong> Să corectați informațiile inexacte</li>
                <li><strong>Dreptul la ștergere:</strong> Să solicitați ștergerea datelor ("dreptul de a fi uitat")</li>
                <li><strong>Dreptul la portabilitate:</strong> Să primiți datele într-un format structurat</li>
                <li><strong>Dreptul de opoziție:</strong> Să vă opuneți prelucrării pentru marketing</li>
                <li><strong>Dreptul de retragere a consimțământului:</strong> Să vă retrageți consimțământul oricând</li>
              </ul>
              <p>
                Pentru exercitarea acestor drepturi, contactați-ne la privacy@frostboyz.com. 
                Vom răspunde în maximum 30 de zile.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <div className="flex items-center mb-6">
              <Lock className="h-6 w-6 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">6. Securitatea Datelor</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Măsuri de securitate implementate:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Criptare SSL pentru toate transmisiile de date</li>
                <li>Stocare securizată în cloud cu controale de acces</li>
                <li>Audituri regulate de securitate</li>
                <li>Formare a angajaților privind protecția datelor</li>
                <li>Backup-uri regulate și planuri de recuperare</li>
              </ul>
              <p>
                <strong>Retenția datelor:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Date de cont:</strong> Până la ștergerea contului</li>
                <li><strong>Istoricul comenzilor:</strong> 7 ani (conformitate fiscală)</li>
                <li><strong>Date de marketing:</strong> Până la retragerea consimțământului</li>
                <li><strong>Date analitice:</strong> Maximum 2 ani</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Cookie-uri</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Utilizăm cookie-uri pentru a îmbunătăți experiența dumneavoastră pe site. 
                Cookie-urile sunt fișiere mici de text stocate pe dispozitivul dumneavoastră.
              </p>
              <p>
                <strong>Tipuri de cookie-uri utilizate:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Cookie-uri necesare:</strong> Esențiale pentru funcționarea site-ului</li>
                <li><strong>Cookie-uri analitice:</strong> Pentru înțelegerea utilizării site-ului</li>
                <li><strong>Cookie-uri de marketing:</strong> Pentru afișarea de reclame relevante</li>
                <li><strong>Cookie-uri funcționale:</strong> Pentru funcționalități îmbunătățite</li>
              </ul>
              <p>
                Puteți gestiona preferințele pentru cookie-uri prin banner-ul nostru de consimțământ 
                sau prin setările browser-ului dumneavoastră.
              </p>
            </div>
          </section>

          {/* Changes */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Modificări ale Politicii</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Ne rezervăm dreptul de a actualiza această politică de confidențialitate. 
                Vă vom notifica despre modificările importante prin email sau prin afișarea 
                unei notificări pe site-ul nostru.
              </p>
              <p>
                Vă recomandăm să verificați periodic această pagină pentru a fi la curent 
                cu cele mai recente informații despre practicile noastre de confidențialitate.
              </p>
            </div>
          </section>

          {/* Contact for Privacy */}
          <section className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg text-white p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Întrebări despre Confidențialitate?</h3>
              <p className="text-lg mb-6">
                Aveți întrebări despre practicile noastre de confidențialitate sau doriți să vă exercitați drepturile?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@frostboyz.com"
                  className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contactați Echipa de Confidențialitate
                </a>
                <a
                  href="/contact"
                  className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact General
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PoliticaConfidentialitateePage;