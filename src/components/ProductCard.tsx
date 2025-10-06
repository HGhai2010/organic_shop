import { ShoppingCart, Heart, Eye, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  badgeColor?: string;
}

const ProductCard = ({
  image,
  title,
  category,
  price,
  originalPrice,
  rating,
  reviews,
  badge,
  badgeColor = "bg-primary",
}: ProductCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden bg-secondary/20">
        {badge && (
          <Badge className={`absolute top-3 left-3 z-10 ${badgeColor} text-white`}>
            {badge}
          </Badge>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 shadow-md">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full h-10 w-10 shadow-md">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{category}</p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">
          {title}
        </h3>
        
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button size="sm" className="bg-secondary hover:bg-primary hover:text-primary-foreground text-primary transition-colors">
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
