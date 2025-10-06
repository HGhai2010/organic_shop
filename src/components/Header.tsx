import { Search, ShoppingCart, User, Heart, BarChart3, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  return (
    <header className="w-full bg-background">
      {/* Top Bar */}
      <div className="border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center justify-between py-2 text-xs sm:text-sm">
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">My Account</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Wishlist</a>
              <a href="#" className="hidden sm:inline text-foreground hover:text-primary transition-colors">Order Tracking</a>
            </div>
            <div className="flex gap-4 sm:gap-6 items-center">
              <span className="hidden lg:inline text-foreground">
                Get great devices up to 50% off <a href="#" className="text-primary hover:underline">View details</a>
              </span>
              <span className="hidden md:inline text-foreground">
                Need help? Call Us: <b>1800 900</b>
              </span>
              <a href="#" className="text-foreground hover:text-primary transition-colors">English</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">USD</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-4 gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img 
                src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/logo.svg" 
                alt="Nest Logo" 
                className="h-10 sm:h-12"
              />
            </div>

            {/* Search Box */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <Select defaultValue="all">
                <SelectTrigger className="w-40 rounded-r-none border-r-0">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fruits">Fruits</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                  <SelectItem value="dairy">Dairy</SelectItem>
                </SelectContent>
              </Select>
              <div className="relative flex-1">
                <Input 
                  type="text" 
                  placeholder="Search for items..." 
                  className="rounded-l-none pr-10"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-4 sm:gap-6 text-sm">
              <a href="#" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors relative">
                <BarChart3 className="h-5 w-5" />
                <span className="hidden lg:inline">Compare</span>
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
              </a>
              <a href="#" className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors relative">
                <Heart className="h-5 w-5" />
                <span className="hidden lg:inline">Wishlist</span>
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden lg:inline">Cart</span>
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">2</span>
              </a>
              <a href="#" className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <User className="h-5 w-5" />
                <span className="hidden lg:inline">Account</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6 text-sm flex-wrap">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                <Menu className="h-4 w-4 mr-2" />
                Browse All Categories
              </Button>
              <a href="#" className="hidden lg:inline text-foreground hover:text-primary transition-colors font-medium">🔥 Hot Deals</a>
              <a href="#" className="hidden md:inline text-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#" className="hidden md:inline text-foreground hover:text-primary transition-colors font-medium">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">Shop</a>
              <a href="#" className="hidden lg:inline text-foreground hover:text-primary transition-colors font-medium">Vendors</a>
              <a href="#" className="hidden xl:inline text-foreground hover:text-primary transition-colors font-medium">Mega menu</a>
              <a href="#" className="hidden lg:inline text-foreground hover:text-primary transition-colors font-medium">Blog</a>
              <a href="#" className="hidden md:inline text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
            <div className="hidden lg:flex items-center gap-3 text-primary">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
              </svg>
              <div>
                <div className="font-bold text-lg">1900 - 888</div>
                <div className="text-xs text-muted-foreground">24/7 Support Center</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
