import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from "../../../src/components/firebase/firebaseConfig";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./form.scss"



const Formulario = ({cart,total,clear,handleId}) => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');


  const handleSubmit = (event) => {

    event.preventDefault();  //para prevenir el evento del submit (para que no se recargue)

    const order = { //es un objeto que contiene (buyer,items,total y date)

      buyer: {nombre: nombre, apellido: apellido, email: email, telefono: telefono},
      items: cart,
      total: total,
      date:  serverTimestamp(),


    };

    const ordersCollection = collection(db,'orders'); //llamamos a la base de datos y creamos "orders"

    addDoc(ordersCollection, order) //metodo para agregar un documento (referencia de la colección y el objeto que vamos a insertar en orders)
    .then((res) => {

      handleId(res.id);  //código de compra
      clear(); //para vaciar el carrito una vez enviemos los datos

    });

};

  const handleChangeNombre = (event) => {

    setNombre(event.target.value); //si queremos acceder al nombre y accedemos a su valor, seteamos su valor

  }

  const handleChangeApellido = (event) => {

    setApellido(event.target.value); //si queremos acceder al apellido y accedemos a su valor, seteamos su valor

  }

  const handleChangeEmail = (event) => {

    setEmail(event.target.value); //si queremos acceder al apellido y accedemos a su valor, seteamos su valor

  }

  const handleChangeTelefono = (event) => {

    setTelefono(event.target.value); //si queremos acceder al apellido y accedemos a su valor, seteamos su valor

  }


  return (
    <div>
      <Form className='formularioFlex' onSubmit={handleSubmit}>
      <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control className='fw-bolder' type="text" placeholder="Nombre" name="nombre" value={nombre} onChange={handleChangeNombre} required/>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Label>Apellido</Form.Label>
        <Form.Control className='fw-bolder' type="text" placeholder="Apellido"  name="apellido" value={apellido} onChange={handleChangeApellido} required/>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control className='fw-bolder' type="email" placeholder="Email"  name="email" value={email} onChange={handleChangeEmail} required/>
      </Form.Group>

      <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
        <Form.Label>Telefono</Form.Label>
        <Form.Control className='fw-bolder' type="tel" placeholder="Telefono"  name="telefono" value={telefono} onChange={handleChangeTelefono} required/>
      </Form.Group>

      <Button variant="dark" type="submit" className='fw-bolder'>
        Finalizar compra
      </Button>
    </Form>
    </div>
  )
}

export default Formulario