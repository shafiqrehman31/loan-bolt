export default function Brands() {
  const brands = [
    { logo: "/img/brands/1.svg", alt: "Brand 1" },
    { logo: "/img/brands/2.svg", alt: "Brand 2" },
    { logo: "/img/brands/3.svg", alt: "Brand 3" },
    { logo: "/img/brands/4.svg", alt: "Brand 4" }
  ];

  return (
    <div className="mil-brands mil-p-0-160">
      <div className="container">
        <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
          Join over 7,000 satisfied customers who enjoy our service!
        </h5>
        <div className="row justify-content-center">
          {brands.map((brand, index) => (
            <div key={index} className="col-6 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src={brand.logo} alt={brand.alt} className="mil-up" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}