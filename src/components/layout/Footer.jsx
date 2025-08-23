
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">
      <Container className="py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold">BIIB Architects</h4>
          <p className="text-gray-400 mt-2">
            Downloadable house plans, plan modifications, and professional
            support.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Link to="/catalog" className="hover:text-white">
            Catalog
          </Link>
          <Link to="/services" className="hover:text-white">
            Services
          </Link>
          <Link to="/tutorials" className="hover:text-white">
            Tutorials
          </Link>
          <Link to="/account" className="hover:text-white">
            Account
          </Link>
        </div>
        <div className="text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} BIIB Architects. All rights reserved.
          </p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-white">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link to="/terms" className="hover:text-white">
              Terms
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
