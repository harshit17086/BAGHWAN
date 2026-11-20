export default function MarketedBySection() {
  return (
    <section aria-labelledby="marketed-by-heading" className="bg-white px-6 py-12 text-[#1a2817] md:py-16">
      <div className="container mx-auto">
        <h2 id="marketed-by-heading" className="mb-8 text-3xl font-serif md:text-4xl">
          Marketed by
        </h2>
        <address className="grid grid-cols-1 gap-8 not-italic md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-2 text-base font-semibold">Phone</h3>
            <a href="tel:+918882824465" className="text-base underline-offset-4 hover:underline">
              8882824465
            </a>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold">Email</h3>
            <a href="mailto:info@ewdhotels.com" className="break-words text-base underline-offset-4 hover:underline">
              info@ewdhotels.com
            </a>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-2 text-base font-semibold">Address</h3>
            <p className="max-w-xl text-base leading-relaxed">
              Plot no 49, Nitikhand 1 Indirapuram, Indirapuram, Ghaziabad, Uttar Pradesh 201014
            </p>
          </div>
        </address>
      </div>
    </section>
  );
}
