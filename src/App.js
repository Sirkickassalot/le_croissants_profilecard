import './App.css'
import ProfileCard from './components/ProfileCard'
import profiles from './fakeData'

function App () {
  
  return (
    <>
    <h2 style={{color:'whitesmoke', display: 'flex', justifyContent: 'center'}}>The Croissants</h2>
      {profiles.map(profile => (
        <ProfileCard 
          image={profile.image} 
          title={profile.title}
          name={profile.name}
          description={profile.description}
        />
      ))}

    </>
  )

}

export default App
