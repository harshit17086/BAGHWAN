export default function Footer() {
  return (
    <footer className="bg-[#F5F3ED] text-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} HUTS Construction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
