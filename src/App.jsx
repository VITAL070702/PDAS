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
                title="Siri"
                handle="@siri"
                image ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQySxmPfYLTLVKi_Q-Lqhcx2sqbPqYefYIX3DxYXG1wA1Z8cwk9L7BpSlvuHQ4YK_geISA&usqp=CAU"
                />
                
              </div>
              <div className="column is-4">
                <ProfileCard 
                 title="Siri"
                 handle="@vision genesis"
                 image ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FMicrosoft_Cortana&psig=AOvVaw2DOKHXNKw_YT422Glvqsz6&ust=1743215476681000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDX0evdq4wDFQAAAAAdAAAAABAE"/>
                
              </div>
              <div className="column is-4">
                <ProfileCard  
                 title="Siri"
                 handle="@BixVi"
                 image ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.androidpolice.com%2Fwhat-is-samsung-bixby%2F&psig=AOvVaw2j3EH5j-CVoXVollNIYxWW&ust=1743215497879000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOjN-_ndq4wDFQAAAAAdAAAAABAE"/>
                
              </div>
            </div>
          </section>
        </div>
      </>
  )
}

export default App
