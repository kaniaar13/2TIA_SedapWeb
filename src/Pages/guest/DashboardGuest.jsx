import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from "../../components/guest/PageHeader";
import { Link } from "react-router-dom";

const DashboardGuest = () => {
  return (
    <div>
      <PageHeader title="Dashboard Guest" subtitle="Selamat datang di aplikasi Sedap!" />
      
      <Container className="mt-4">
        <Row>
          {/* Hero Section */}
          <Col md={12} className="text-center">
            <div className="hero-section">
              <img
                src="https://via.placeholder.com/1200x400.png?text=Sedap+Hero+Image"
                alt="Sedap Hero"
                className="img-fluid"
              />
              <h1>Selamat datang di Aplikasi Sedap!</h1>
              <p>Temukan berbagai produk lezat untuk menemani hari-harimu.</p>
            </div>
          </Col>
        </Row>

        {/* About Section */}
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <h2>Tentang Kami</h2>
            <p>
              Aplikasi Sedap adalah platform terbaik untuk menemukan dan membeli produk kuliner
              yang dapat memanjakan lidah Anda. Kami berkomitmen memberikan produk berkualitas tinggi
              dan pengalaman yang menyenangkan.
            </p>
          </Col>
        </Row>

        {/* Featured Products Section */}
        <Row className="mt-5">
          <Col md={12}>
            <h3>Produk Unggulan</h3>
            <Row>
              {/* Example Product */}
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/350x200.png?text=Product+Image" />
                  <Card.Body>
                    <Card.Title>Produk A</Card.Title>
                    <Card.Text>Rp 50.000</Card.Text>
                    <Button variant="primary">Beli Sekarang</Button>
                  </Card.Body>
                </Card>
              </Col>
              {/* More Products can be dynamically rendered here */}
            </Row>
          </Col>
        </Row>

        {/* Testimonials Section */}
        <Row className="mt-5">
          <Col md={12}>
            <h3>Testimoni Pengguna</h3>
            <Row>
              {/* Example Testimonial */}
              <Col md={4}>
                <div className="testimonial">
                  <img
                    src="https://avatar-placeholder.iran.liara.run/"
                    alt="User Avatar"
                    className="img-fluid rounded-circle"
                    width="80"
                  />
                  <p>"Produk yang sangat lezat dan pengirimannya cepat!"</p>
                  <p>- John Doe</p>
                </div>
              </Col>
              {/* More Testimonials can be dynamically rendered here */}
            </Row>
          </Col>
        </Row>

        {/* Footer Section */}
        <Row className="mt-5">
          <Col md={12} className="text-center">
            <div className="footer">
              <p>Kontak: info@sedap.com</p>
              <p>Ikuti kami di: 
                <Link to="https://www.instagram.com/sedap">Instagram</Link> | 
                <Link to="https://www.facebook.com/sedap">Facebook</Link>
              </p>
              <p>Partner kami: <img src="https://via.placeholder.com/150x50.png?text=Partner+Logo" alt="Partner Logo" /></p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardGuest;
