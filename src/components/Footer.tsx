import { MapPin, Headset, Mail, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/logo.svg" 
              alt="Nest Logo" 
              className="h-12 mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">Awesome grocery store website template</p>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</span>
              </p>
              <p className="flex items-center gap-2">
                <Headset className="h-4 w-4 text-primary flex-shrink-0" />
                <span><strong>Call Us:</strong> (+91) - 540-025-124553</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span><strong>Email:</strong> sale@Nest.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</span>
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Delivery Information</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Support Center</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Account</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Sign In</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">View Cart</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">My Wishlist</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Track My Order</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Help Ticket</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Shipping Details</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Compare products</a></li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Corporate</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Become a Vendor</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Farm Business</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Farm Careers</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Our Suppliers</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Accessibility</a></li>
              <li><a href="#" className="text-foreground hover:text-primary transition-colors">Promotions</a></li>
            </ul>
          </div>

          {/* Install App */}
          <div>
            <h4 className="font-bold text-base mb-4">Install App</h4>
            <p className="text-sm text-muted-foreground mb-3">From App Store or Google Play</p>
            <div className="flex flex-col gap-2 mb-4">
              <img 
                src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/app-store.jpg" 
                alt="App Store" 
                className="h-10 w-auto"
              />
              <img 
                src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/google-play.jpg" 
                alt="Google Play" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-3">Secured Payment Gateways</p>
            <img 
              src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/payment-method.png" 
              alt="Payment Methods" 
              className="w-full max-w-[200px]"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="text-muted-foreground">
              © 2024, <span className="text-primary font-bold">Nest</span> - HTML Ecommerce Template. All rights reserved
            </div>
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-primary font-bold">
                <Phone className="h-5 w-5" />
                <div>
                  <div className="text-lg">1900 - 6666</div>
                  <div className="text-xs text-muted-foreground font-normal">Working 8:00 - 22:00</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <Phone className="h-5 w-5" />
                <div>
                  <div className="text-lg">1900 - 8888</div>
                  <div className="text-xs text-muted-foreground font-normal">24/7 Support Center</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-primary font-bold">Follow Us</span>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors text-lg">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors text-lg">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors text-lg">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors text-lg">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors text-lg">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
