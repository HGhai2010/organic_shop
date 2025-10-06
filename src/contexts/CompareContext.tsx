import React, { createContext, useContext, useState, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
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

interface CompareContextType {
  compareList: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: number) => void;
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareList, setCompareList] = useState<Product[]>([]);
  const { toast } = useToast();

  const addToCompare = (product: Product) => {
    if (compareList.find(p => p.id === product.id)) {
      toast({
        title: "Already in compare list",
        description: `${product.title} is already in your compare list`,
        duration: 3000,
      });
      return;
    }

    if (compareList.length >= 4) {
      toast({
        title: "Compare list is full",
        description: "You can only compare up to 4 products",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    setCompareList([...compareList, product]);
    toast({
      title: "Added to compare list",
      description: `${product.title} - $${product.price.toFixed(2)}`,
      duration: 3000,
    });
  };

  const removeFromCompare = (productId: number) => {
    setCompareList(compareList.filter(p => p.id !== productId));
    toast({
      title: "Removed from compare list",
      duration: 2000,
    });
  };

  const clearCompare = () => {
    setCompareList([]);
    toast({
      title: "Compare list cleared",
      duration: 2000,
    });
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
};
