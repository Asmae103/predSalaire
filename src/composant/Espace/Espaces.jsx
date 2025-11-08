import React from 'react'

const espace = () => {
    const [activeTab, setActiveTab] = useState('seeker')
  return (
    <section className="espace">
      <h1>Espace utilisateurs</h1>
      <div className="tabs">
        <button className={activeTab === 'seeker' ? 'active' : ''} onClick={() => setActiveTab('seeker')}>Chercheur d'emploi</button>
        <button className={activeTab === 'recruiter' ? 'active' : ''} onClick={() => setActiveTab('recruiter')}>Recruteure</button>
      </div>
    </section>
  )
}
export default espace;
