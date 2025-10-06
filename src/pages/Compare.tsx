import { useCompare } from "@/contexts/CompareContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { X, ShoppingCart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Compare = () => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const navigate = useNavigate();

  if (compareList.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-6">
              <a href="/" className="text-primary hover:underline">Home</a>
              <span className="text-muted-foreground">›</span>
              <span className="text-muted-foreground">Compare</span>
            </div>

            <div className="bg-card border border-border rounded-lg p-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">No Products to Compare</h2>
              <p className="text-muted-foreground mb-6">
                You haven't added any products to compare yet. Browse our products and click the eye icon to add them to your compare list.
              </p>
              <Button onClick={() => navigate("/")}>
                Browse Products
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-6">
            <a href="/" className="text-primary hover:underline">Home</a>
            <span className="text-muted-foreground">›</span>
            <span className="text-muted-foreground">Compare</span>
          </div>

          {/* Page Header */}
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Compare Products</h1>
              <p className="text-muted-foreground">
                Comparing {compareList.length} {compareList.length === 1 ? 'product' : 'products'}
              </p>
            </div>
            <Button variant="outline" onClick={clearCompare}>
              Clear All
            </Button>
          </div>

          {/* Comparison Table */}
          <div className="bg-card border border-border rounded-lg overflow-hidden overflow-x-auto">
            <table className="w-full">
              <tbody>
                {/* Product Images and Remove Buttons */}
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground bg-secondary/20 w-48">Preview</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 text-center relative">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 h-8 w-8"
                        onClick={() => removeFromCompare(product.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </td>
                  ))}
                </tr>

                {/* Product Names */}
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground bg-secondary/20">Name</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 text-center">
                      <h3 className="font-semibold text-foreground">{product.title}</h3>
                    </td>
                  ))}
                </tr>

                {/* Category */}
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground bg-secondary/20">Category</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 text-center text-muted-foreground">
                      {product.category}
                    </td>
                  ))}
                </tr>

                {/* Price */}
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground bg-secondary/20">Price</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-xl font-bold text-primary">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Rating */}
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground bg-secondary/20">Rating</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4">
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">
                          ({product.reviews})
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Badge */}
                <tr className="border-b border-border">
                  <td className="p-4 font-semibold text-foreground bg-secondary/20">Status</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 text-center">
                      {product.badge && (
                        <span className={`inline-block px-3 py-1 rounded-full text-sm text-white ${product.badgeColor}`}>
                          {product.badge}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>

                {/* Add to Cart Buttons */}
                <tr>
                  <td className="p-4 font-semibold text-foreground bg-secondary/20">Buy</td>
                  {compareList.map((product) => (
                    <td key={product.id} className="p-4 text-center">
                      <Button className="w-full gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </Button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Compare;
