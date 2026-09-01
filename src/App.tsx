import { useState, useEffect } from 'react';
import { LockScreen } from './components/LockScreen';
import { Header } from './components/Header';
import { AdPlayer } from './components/AdPlayer';
import { AvatarSection } from './components/AvatarSection';
import { MechanismsSection } from './components/MechanismsSection';
import { InvisibleStructureSection } from './components/InvisibleStructureSection';
import { AuditSection } from './components/AuditSection';

export function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState('ads');

  useEffect(() => {
    const saved = localStorage.getItem('dossie_auth_token');
    if (saved && saved.startsWith('unlocked_')) {
      setIsUnlocked(true);
    }
  }, []);

  const handleLock = () => {
    localStorage.removeItem('dossie_auth_token');
    setIsUnlocked(false);
  };

  if (!isUnlocked) {
    return <LockScreen onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <div className="min-h-screen bg-[#05070B] text-[#F5F5F7] selection:bg-blue-600 selection:text-white pb-20">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLock={handleLock}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-10">
        {activeTab === 'ads' && <AdPlayer />}
        {activeTab === 'avatar' && <AvatarSection />}
        {activeTab === 'mechanisms' && <MechanismsSection />}
        {activeTab === 'funnel' && <InvisibleStructureSection />}
        {activeTab === 'audit' && <AuditSection />}
      </main>
    </div>
  );
}

export default App;
