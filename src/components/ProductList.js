import React from 'react';
import { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const ProductList = () => {
    const handleSelect = (eventKey) => console.log(`selected ${eventKey}`);
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products")

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setProducts(data));
    }, [url])
    
    
    return (
       <section className='product-section'>
        <Nav className="filter"variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link id="lang" onClick={() => setUrl("http://localhost:8000/products")}>
          All Topics
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="lang" onClick={() => setUrl("http://localhost:8000/products?lang_like=html")}>
          HTML
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="lang" onClick={() => setUrl("http://localhost:8000/products?lang_like=CSS")}>
          CSS
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="lang" onClick={() => setUrl("http://localhost:8000/products?lang_like=Javascript")}>
          Javascript
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link id="lang" onClick={() => setUrl("http://localhost:8000/products?lang_like=React")}>
          React
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Filters" id="nav-dropdown">
        <NavDropdown.Item onClick={() => setUrl("http://localhost:8000/products?_sort=price&_order=asc")} eventKey="4.1">Sort(Low to High)</NavDropdown.Item>
        <NavDropdown.Item onClick={() => setUrl("http://localhost:8000/products?_sort=price&_order=desc")}>Sort (High to Low)</NavDropdown.Item>
        <NavDropdown.Item  onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</NavDropdown.Item>
        
        <NavDropdown.Item onClick={() => setUrl("http://localhost:8000/products?in_stock=false")}>Out of Stock</NavDropdown.Item>
      </NavDropdown>
    </Nav>

        <div className='container'>
        
        
        {
            products.map((product) => (
                
                    <div className='card' key={product.id}>
                    <p className='id'>{product.id}</p>
                    <p className='name'>{product.name}</p>
                    <p className='info'>
                        <span>${product.price}</span>
                        <span className={product.in_stock ? "instock" : "unavailable"}> {product.in_stock ? "In Stock" : "Out of stock"}</span>
                    </p>
                </div>

                
                
            ))
        }
        </div>
       </section>
      )
    }
