import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronDown, Grid3x3, List, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  {
    id: 1,
    image: product1,
    title: "Seeds of Change Organic Quinoa, Brown",
    category: "Snack",
    price: 28.85,
    originalPrice: 32.8,
    rating: 4,
    reviews: 4,
    badge: "Hot",
    badgeColor: "bg-orange-500",
  },
  {
    id: 2,
    image: product2,
    title: "All Natural Italian-Style Chicken Meatballs",
    category: "Hodo Foods",
    price: 52.85,
    originalPrice: 55.8,
    rating: 4,
    reviews: 3.5,
    badge: "Sale",
    badgeColor: "bg-blue-500",
  },
  {
    id: 3,
    image: product3,
    title: "Angie's Boomchickapop Sweet & Salty",
    category: "Snack",
    price: 48.85,
    originalPrice: 52.8,
    rating: 4,
    reviews: 3.5,
    badge: "New",
    badgeColor: "bg-primary",
  },
  {
    id: 4,
    image: product4,
    title: "Foster Farms Takeout Crispy Classic",
    category: "Hodo Foods",
    price: 17.85,
    originalPrice: 19.8,
    rating: 4,
    reviews: 4,
    badge: "Hot",
    badgeColor: "bg-orange-500",
  },
  {
    id: 5,
    image: product5,
    title: "Blue Diamond Almonds Lightly Salted",
    category: "Snack",
    price: 23.85,
    originalPrice: 25.8,
    rating: 4,
    reviews: 3.5,
    badge: "Sale",
    badgeColor: "bg-blue-500",
  },
  {
    id: 6,
    image: product6,
    title: "Chobani Complete Vanilla Greek Yogurt",
    category: "Hodo Foods",
    price: 54.85,
    originalPrice: 55.8,
    rating: 5,
    reviews: 5,
    badge: "Best Sale",
    badgeColor: "bg-red-500",
  },
  {
    id: 7,
    image: product1,
    title: "Canada Dry Ginger Ale – 2 L Bottle",
    category: "Hodo Foods",
    price: 32.85,
    originalPrice: 33.8,
    rating: 4,
    reviews: 3.5,
    badge: "Hot",
    badgeColor: "bg-orange-500",
  },
  {
    id: 8,
    image: product2,
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    category: "Snack",
    price: 35.85,
    rating: 4,
    reviews: 3.5,
    badge: "New",
    badgeColor: "bg-primary",
  },
  {
    id: 9,
    image: product3,
    title: "Gorton's Beer Battered Fish Fillets",
    category: "Hodo Foods",
    price: 23.85,
    rating: 4,
    reviews: 3.5,
    badge: "Sale",
    badgeColor: "bg-blue-500",
  },
  {
    id: 10,
    image: product4,
    title: "Haagen-Dazs Caramel Cone Ice Cream",
    category: "Cream",
    price: 22.85,
    originalPrice: 24.8,
    rating: 4,
    reviews: 3.5,
    badge: "Best Sale",
    badgeColor: "bg-red-500",
  },
  {
    id: 11,
    image: product5,
    title: "Italian-Style Chicken Meatballs Premium",
    category: "Snack",
    price: 17.85,
    rating: 4,
    reviews: 3.5,
    badge: "Hot",
    badgeColor: "bg-orange-500",
  },
  {
    id: 12,
    image: product6,
    title: "Nestle Original Coffee-Mate Creamer",
    category: "Hodo Foods",
    price: 32.85,
    rating: 4,
    reviews: 3.5,
    badge: "New",
    badgeColor: "bg-primary",
  },
];

const Index = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [itemsPerPage, setItemsPerPage] = useState("50");

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return b.id - a.id;
      case "featured":
      default:
        return 0;
    }
  });

  // Limit products based on items per page
  const displayedProducts = sortedProducts.slice(0, parseInt(itemsPerPage));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <a href="#" className="text-primary hover:underline">Home</a>
            <span className="text-muted-foreground">›</span>
            <a href="#" className="text-primary hover:underline">Shop</a>
            <span className="text-muted-foreground">›</span>
            <span className="text-muted-foreground">Shop Grid – Right Sidebar</span>
          </div>

          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Category</h1>
            <p className="text-muted-foreground">We have <span className="text-primary font-semibold">29</span> products available for you</p>
          </div>

          {/* Filters Bar */}
          <div className="bg-card border border-border rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Show" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="20">Show: 20</SelectItem>
                  <SelectItem value="50">Show: 50</SelectItem>
                  <SelectItem value="100">Show: 100</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Sort by: Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Release Date</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12 mb-8">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="default" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">4</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
