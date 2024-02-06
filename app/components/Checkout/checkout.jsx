'use client'
import { useGlobalContext } from '@/app/Context/store';
import { initMercadoPago } from "@mercadopago/sdk-react";
import { Wallet } from "@mercadopago/sdk-react";
import { useEffect, useState } from 'react';
import styles from './checkout.module.css';
import { Suspense } from 'react';

initMercadoPago("TEST-fd35b829-6906-4d8c-a5af-e9d26976c69e");

export default function Checkout() {
  const { products, setProducts, total, setTotal } = useGlobalContext()
  const [preferenceId, setPreferenceId] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const buy = () => {
    loadWallet()
    console.log('Dados para compra:', formData);
  };

  const onRemove = ({ event, product }) => {
    event.preventDefault();

    const existingProductIndex = products.findIndex(
      (p) => p.description === product.description && p.size === product.size
    );

    if (existingProductIndex !== -1) {
      const updatedProducts = [...products];

      if (updatedProducts[existingProductIndex].quantity > 1) {
        updatedProducts[existingProductIndex].quantity -= 1;
      } else {
        updatedProducts.splice(existingProductIndex, 1);
      }

      setProducts(updatedProducts);
    }
  };

  const loadWallet = () => {
      fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer TEST-5478545679359546-071217-c2defb4b6ce26c85472e5c9928ee6557-204596992'
        },
        body: JSON.stringify({
          'back_urls': {},
          'differential_pricing': {
            'id': 204596992
          },
          'expires': false,
          'items': products,
          'marketplace': '5478545679359546',
          'marketplace_fee': null,
          'metadata': null,
          'payer': {
            'name': formData.name,
            'email': formData.email,
            'phone': {
              'number': formData.phone
            },
            'identification': {},
            'address': {
              'street_number': null
            }
          },
        })
      })
        .then(async (response) => {
          const data = await response.json()
          console.log(data);
          setPreferenceId(data.id);
        })
        .catch((error) => {
          console.error(error.status);
        });
  }

  useEffect(() => {
  }, [products]);

  return (
    <div className={styles.containerListProducts}>
      <h3>Carrinho</h3>
      <strong>ATENÇÃO: Os produtos serão entregues em dias e locais de treino</strong>
      <ul>
        {products.map((product, index) => (
          <li className={styles.ListProduct} key={index}>
            <span>{product.quantity}x {product.title} {product.description} R${product.unit_price.toFixed(2)}</span>
            <button
              onClick={(event) => onRemove({ event, product })}
            >Remover</button>
          </li>
        ))}
      </ul>
      <div>
      <label>
        Nome:
        <input
          type="text"
          id="input-name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          id="input-email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Telefone:
        <input
          type="tel"
          id="input-phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </label>
      </div>
      {
        products.length > 0 && preferenceId ? (
          <Suspense>
            <Wallet initialization={{ preferenceId: preferenceId }} />
          </Suspense>
        ) : products.length > 0 && !preferenceId ? (
          <>
            <button onClick={buy}>Comprar</button>
            <h4>Por favor preencha seus dados</h4>
          </>
        ) : products.length <= 0 ? (
          <h4>Nenhum produto adicionado</h4>
        ) : null
      }
    </div>
  )
}