import React from 'react'  //rafce = React Arrow Function Export Component
import estilosM from './main.module.css' //trabajamos con modulos, le pone un id a la clase automaticamente, con modulos evitamos que se pise



const Main = () => {  //con react las clases las ponemos con: className y funciona igual que una class
  return (
    
        <main className={estilosM.MainEstilo}>
            <section>

                <h2 style={{textAlign:'center'}}>Bienvenidos a Kiosko Amadeo</h2>

            </section>
        </main>

  )
}

export default Main