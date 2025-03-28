import ProfileCard from "./ProfileCard"

function App() {

  return (
    <>
      
        <section className="hero is-dark">
          <div className="hero-body">
            <p className="title">Personal Digital Asistents</p>
          </div>
        </section>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCard 
                title="SIRI"
                handle="@siri"
                image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWavQKwpdAOSvp5bdk9kbE-leCCjvsv5YhRA&s"
                />
                
              </div>
              <div className="column is-4">
                <ProfileCard 
                 title="CORTANA"
                 handle="@vision genesis"
                 image ="https://upload.wikimedia.org/wikipedia/commons/4/4d/Microsoft_Cortana_logo.png"/>
                
              </div>
              <div className="column is-4">
                <ProfileCard  
                 title="BIXVI"
                 handle="@BixVi"
                 image ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bixby_logo.svg/2560px-Bixby_logo.svg.png"/>
                
              </div>
            </div>
          </section>
        </div>
      </>
  )
}

export default App
