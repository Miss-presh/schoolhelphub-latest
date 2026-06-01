"use client";

import React, { createContext, useContext, useState } from "react";

type Currency = "GBP" | "USD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  currencySymbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    if (typeof window === "undefined") return "GBP";
    const saved = localStorage.getItem("shh_currency");
    return saved === "GBP" || saved === "USD" ? saved : "GBP";
  });

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("shh_currency", newCurrency);
  };

  const currencySymbol = currency === "GBP" ? "£" : "$";

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencySymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be executed inside a CurrencyProvider Context.");
  return context;
}