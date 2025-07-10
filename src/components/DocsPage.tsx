import React from 'react';
import { Menu, X } from 'lucide-react';
import Nav from './shared/Nav';
import Footer from './shared/Footer';

function DocsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (isMobile) {
        setSidebarOpen(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav onNavigate={onNavigate} activePage="docs" mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Documentation Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-64 sm:w-80' : 'w-0'} transition-all duration-300 overflow-hidden bg-gray-50 border-r border-gray-200 min-h-screen fixed lg:relative z-10 lg:z-auto`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-black">Contents</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('introduction')}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700">Introduction</span>
              </button>
              
              <button
                onClick={() => scrollToSection('installation')}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700">Installation</span>
              </button>
              
              <button
                onClick={() => scrollToSection('usage')}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700">Usage</span>
              </button>
              
              <button
                onClick={() => scrollToSection('features')}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700">Features</span>
              </button>
              <button
                onClick={() => scrollToSection('exporting')}
                className="w-full text-left p-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span className="text-gray-700">Exporting</span>
              </button>
            </nav>
          </div>
        </div>

        {sidebarOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="px-4 py-8 sm:px-6 sm:py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-start gap-4 mb-8">
                {!sidebarOpen && (
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex-shrink-0"
                  >
                    <Menu className="w-5 h-5 text-gray-600" />
                  </button>
                )}
                <div>
                  <h1 className="text-2xl font-bold text-black sm:text-4xl mb-1">Documentation</h1>
                  <p className="text-base text-gray-600 sm:text-xl">
                    Everything you need to know about using OpenPoster effectively.
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {/* Introduction */}
                <section id="introduction" className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6">
                  <h2 className="text-xl sm:text-3xl font-semibold text-black mb-3">Introduction</h2>
                  <div className="space-y-3 text-gray-600">
                    <p>Welcome to the OpenPoster documentation. This guide will help you understand how to use OpenPoster effectively for managing and editing .ca files.</p>
                    
                    <h3 className="text-base sm:text-xl font-medium text-black">What is OpenPoster?</h3>
                    <p>OpenPoster is a powerful GUI tool designed to simplify the process of editing .ca files. Whether you're a beginner or an experienced user, OpenPoster provides the tools you need to work with .ca files efficiently.</p>
                    <p>OpenPoster is a collection of scripts to edit .ca files, all connected through a GUI powered by hope, dreams, and a bit of code.</p>
                    <p>Website: <a href="https://openposter.pages.dev/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">https://openposter.pages.dev/</a></p>
                  </div>
                </section>

                {/* Installation */}
                <section id="installation" className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6">
                  <h2 className="text-xl sm:text-3xl font-semibold text-black mb-3">Installation</h2>
                  <div className="space-y-3 text-gray-600">
                    <p>Installing OpenPoster is really simple. Get OpenPoster from the download page. Once it has downloaded, unzip it and open the folder in terminal.</p>
                    <p>If you've opened the right folder, you should see many files. We'll be focusing on <code>requirements.txt</code> and <code>app.py</code>.</p>
                    
                    <h3 className="text-base sm:text-xl font-medium text-black">Install Requirements</h3>
                    <p>Open terminal (MacOS), or command prompt (Windows). With your folder opened in terminal, run the following command:</p>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                      <code className="font-mono text-xs sm:text-sm text-black break-all">pip install -r requirements.txt --break-system-packages</code>
                    </div>
                    <p>If you can't run pip3, install it by running:</p>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                        <code className="font-mono text-xs sm:text-sm text-black break-all">python3 -m pip3 install --upgrade pip</code>
                    </div>
                    
                    <h3 className="text-base sm:text-xl font-medium text-black">Build the Application</h3>
                    <p>To build and run the OpenPoster app, execute:</p>
                    <div className="bg-gray-50 rounded-lg p-2 sm:p-3">
                        <code className="font-mono text-xs sm:text-sm text-black break-all">python3 app.py</code>
                    </div>
                  </div>
                </section>

                {/* Usage */}
                <section id="usage" className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6">
                  <h2 className="text-xl sm:text-3xl font-semibold text-black mb-3">Usage</h2>
                  <div className="space-y-3 text-gray-600">
                    <p>Now that OpenPoster is open and ready, let's make wallpapers. You'll be greeted by a welcome screen, with 2 buttons; "Create a new .ca file", and "Open .ca file".</p>
                    
                    <h3 className="text-base sm:text-xl font-medium text-black">Welcome Screen</h3>
                    <p>If you're a beginner, I would reccomend chosing "Open a .ca file". You can access a .ca file by unzipping a .tendies, and opening folders <code>descriptors/[UUID]/versions/[number]/contents/</code>.</p>
                    <p>In this folder, you'll see a folder ending in '.wallpaper', open it. You'll now be greeted by 3 folders (or files, on Macs with Mica installed). Open the folder that contains 'Floating', or 'Background' in its name. These files contain the main wallpaper content.</p>
                    <p className="mt-4 italic text-center text-gray-500">OpenPoster Interface Screenshot</p>
                    <p>Creating a .ca file is also an option, but if you're just looking to modify an existing wallpaper, I would suggest the steps above.</p>
                  </div>
                </section>

                {/* Features */}
                <section id="features" className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6">
                  <h2 className="text-xl sm:text-3xl font-semibold text-black mb-3">Features</h2>
                  <div className="space-y-5 text-gray-600">
                    <div>
                      <h3 className="text-lg sm:text-2xl font-medium text-black mb-2">Inspector</h3>
                      <p>The Inspector tool allows you to examine various keys and their values in your .ca files. You can inspect the following keys:</p>
                      <ul className="list-disc list-inside grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1 mt-2">
                          <li><code>name</code></li>
                          <li><code>type</code></li>
                          <li><code>keyPath</code></li>
                          <li><code>duration</code></li>
                          <li><code>beginTime</code></li>
                          <li><code>fillMode</code></li>
                          <li><code>repeatCount</code></li>
                          <li><code>calculationMode</code></li>
                          <li><code>values</code></li>
                          <li><code>keyTimes</code></li>
                          <li><code>states</code></li>
                      </ul>
                      <p className="mt-4 italic text-center text-gray-500">OpenPoster Interface Screenshot</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg sm:text-2xl font-medium text-black mb-2">Preview</h3>
                      <p>The Preview feature allows you to see the Base State's objects in your .ca files, such as:</p>
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        <li>Images</li>
                        <li>Text</li>
                        <li>And more elements</li>
                      </ul>
                      <p>With OpenPoster, you can view all the layers contained within the .ca file you're working with.</p>
                      <p className="mt-4 italic text-center text-gray-500">OpenPoster Interface Screenshot</p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-2xl font-medium text-black mb-2">Layers</h3>
                      <p>You can also add additional layers. For example, text layers.</p>
                      <p className="mt-2 italic text-center text-gray-500">Adding layers with OpenPoster</p>
                      <p className="mt-4">Then, you can change the text.</p>
                      <p className="mt-2 italic text-center text-gray-500">Adding a Text Layer</p>
                      <p className="mt-4">You can also add a Basic Layer (empty layer), or a Image Layer. You can edit the features of the layers (size, rotation, postiton, name, etc.) within OpenPoster's Inspector.</p>
                      <p className="mt-2 italic text-center text-gray-500">Changing properties inside the Inspector</p>
                    </div>
                  </div>
                </section>

                {/* Exporting */}
                <section id="exporting" className="bg-white border border-gray-200 rounded-2xl p-3 sm:p-6">
                  <h2 className="text-xl sm:text-3xl font-semibold text-black mb-3">Exporting</h2>
                  <div className="space-y-3 text-gray-600">
                    <p>Now, time for the easiest step. Exporting.</p>
                    <p>Once you're done editing your .ca files, you can head on over to the top right corner and hit 'Export'.</p>
                    <p className="mt-2 italic text-center text-gray-500">Exporting Panel</p>
                    <p className="mt-4">If you have Nugget open, you can click 'Export to Nugget'. Though, the safest option is to go with 'Export as .tendies'. This automatically compiles the .tendies file for you.</p>
                    <p className="font-semibold text-center mt-6">You've reached the end!.. For now.</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default DocsPage; 