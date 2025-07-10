import React from 'react';
import { Download, Star, Award, Heart, Code } from 'lucide-react';
import Nav from './shared/Nav';
import Footer from './shared/Footer';

function HomePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Nav onNavigate={onNavigate} activePage="home" mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <section className="px-6 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              <span>v0.0.4 Beta 1 Coming Soon!</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-black leading-tight">
              OpenPoster
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 font-normal">Edit .ca files on Mac, Windows, and Linux</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto px-4">
              A collection of scripts to edit .ca files, all connected through a GUI powered by hope, dreams, and a bit of code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-4">
              <a 
                href="https://github.com/openposter/OpenPoster/releases" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-gray-800 transform hover:scale-105 transition-all duration-200"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Latest</span>
              </a>
              
              <a 
                href="https://discord.com/invite/keXt4ghSvn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 border-2 border-gray-200 hover:border-black transition-all duration-200"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
                  <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.078.036c-.21.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.487 0-.163-.393-.405-.874-.617-1.249a.073.073 0 00-.078-.036 19.733 19.733 0 00-4.886 1.515.07.07 0 00-.032.028C.533 9.046-.319 13.58.099 18.058a.082.082 0 00.031.056c2.053 1.507 4.041 2.422 5.993 3.03a.077.077 0 00.084-.027c.462-.63.873-1.295 1.226-1.994a.076.076 0 00-.042-.106c-.653-.248-1.274-.55-1.872-.892a.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.078-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.1.246.198.372.291a.077.077 0 01-.008.128 12.253 12.253 0 01-1.872.892.076.076 0 00-.041.106c.353.698.764 1.362 1.225 1.993a.076.076 0 00.084.028c1.961-.606 3.949-1.521 6.002-3.029a.077.077 0 00.031-.055c.5-5.177-.838-9.674-3.548-13.66a.06.06 0 00-.031-.029zM9.04 15.468a1.635 1.635 0 01-1.637-1.635c0-.902.736-1.635 1.637-1.635.9 0 1.635.734 1.635 1.635 0 .9-.735 1.635-1.635 1.635zm6.92 0a1.635 1.635 0 01-1.635-1.635c0-.902.736-1.635 1.635-1.635.9 0 1.635.734 1.635 1.635 0 .9-.735 1.635-1.635 1.635z"/>
                </svg>
                <span>Join Discord</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-12 sm:pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <img 
              src="/openposter-app.png" 
              alt="OpenPoster interface" 
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section id="demo" className="px-4 sm:px-6 py-12 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-4xl font-bold text-black">See OpenPoster in Action</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Watch how developers use OpenPoster to efficiently edit and manage their .ca configuration files.
            </p>
            
            <div className="aspect-video">
              <iframe 
                className="w-full h-full rounded-2xl shadow-2xl" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="credits" className="px-4 sm:px-6 py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold text-black mb-4">Credits</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Meet the OpenPoster Team
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <a 
              href="https://github.com/retronbv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer block"
            >
              <img 
                src="https://github.com/retronbv.png" 
                alt="retronbv"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4" style={{display: 'none'}}>
                <Code className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">retronbv</h3>
              <p className="text-gray-600 mb-4">Owner, Developer</p>
              <p className="text-sm text-gray-500">
                Owner of OpenPoster, developer of OpenPoster's layer functions.
              </p>
            </a>

            <a 
              href="https://github.com/enkeii64" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer block"
            >
              <img 
                src="https://github.com/enkeii64.png" 
                alt="enkeii64"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 object-cover" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4" style={{display: 'none'}}>
                <Heart className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">enkei64</h3>
              <p className="text-gray-600 mb-4">Co-founder, Main Developer</p>
              <p className="text-sm text-gray-500">
                Main Developer of OpenPoster, developing the GUI, layer functions, website, and more.
              </p>
            </a>

            <a 
              href="https://github.com/itme12s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer block sm:col-span-2 lg:col-span-1"
            >
              <img 
                src="https://github.com/itme12s.png" 
                alt="ItMe12s"
                className="w-16 sm:w-20 h-16 sm:h-20 rounded-full mx-auto mb-4 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-16 sm:w-20 h-16 sm:h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4" style={{display: 'none'}}>
                <Award className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">ItMe12s</h3>
              <p className="text-gray-600 mb-4">Co-founder, Developer</p>
              <p className="text-sm text-gray-500">
              Developer of OpenPoster, helping with QoL additions and layer functions.
              </p>
            </a>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-xl sm:text-2xl font-semibold text-black mb-8">Special Thanks</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <SpecialThanksCard
                username="AnhNguyenlost13"
                description="Building and Compiling OpenPoster files"
              />
              <SpecialThanksCard
                username="superEVILFACE"
                description="Former Developer"
              />
              <SpecialThanksCard
                username="leminlimez"
                description="Nugget, signing builds"
              />
              <SpecialThanksCard
                username="squairdev"
                description="OpenPoster support, former website developer"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface SpecialThanksCardProps {
  username: string;
  description: string;
}

function SpecialThanksCard({ username, description }: SpecialThanksCardProps) {
  return (
    <a 
      href={`https://github.com/${username}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="text-center hover:bg-gray-50 p-3 rounded-lg transition-colors flex flex-col items-center"
    >
      <img 
        src={`https://github.com/${username}.png`} 
        alt={username}
        className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-2" style={{display: 'none'}}>
        <Code className="w-6 h-6 text-white" />
      </div>
      <div className="text-sm sm:text-lg font-medium text-black">{username}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </a>
  );
}

export default HomePage; 