import './Home.css'
import pencil from '../../assets/pencil.jpg'
import ProductCard from './productCard';

function Home() {

  const products = [
    { id: 1, title: 'Product 1', image: pencil, description: 'Description 1' },
    { id: 2, title: 'Product 2', image: pencil, description: 'Description 2' },
    { id: 3, title: 'Product 3', image: pencil, description: 'Description 3' },
    { id: 4, title: 'Product 4', image: pencil, description: 'Description 4' },
    { id: 5, title: 'Product 5', image: pencil, description: 'Description 5' },
    // Add more product data as needed
  ];

  return (
    <>
      <div className="landing-page">
        <div className="buttons-container">
          <div className="button signup-button">Sign Up</div>
          <div className="button login-button"><a href="/login">Login</a></div>
        </div>
      <header>
        <h1>Welcome to Stationary Shop</h1>
        <p>Your one-stop shop for all things stationery!</p>
      </header>
      <main>
        <section className="products">
          <h2>Featured Products</h2>
          {/* Display featured products */}
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {/* Repeat the structure for other featured products */}
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at
            purus tortor.
          </p>
          {/* Add more content about the stationary shop */}
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Email: info@stationaryshop.com</p>
          <p>Phone: +1234567890</p>
          {/* Add more contact information */}
        </section>
      </main>
      <footer className='footer'>
        <p>&copy; 2023 Stationary Shop. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Home;