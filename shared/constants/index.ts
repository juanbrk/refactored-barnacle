// Constantes compartidas

export const CATEGORIES = {
  EXPENSE: [
    { id: "tarjetas", name: "Tarjetas", icon: "💳", color: "#ef4444" },
    { id: "servicios", name: "Servicios", icon: "📱", color: "#3b82f6" },
    { id: "comida", name: "Comida", icon: "🍕", color: "#10b981" },
    { id: "salud", name: "Salud", icon: "🏥", color: "#8b5cf6" },
    { id: "esparcimiento", name: "Esparcimiento", icon: "🎉", color: "#f59e0b" },
    { id: "limpieza", name: "Limpieza", icon: "🧹", color: "#06b6d4" },
    { id: "cuidado", name: "Cuidado", icon: "👶", color: "#ec4899" },
    { id: "educacion", name: "Educación", icon: "📚", color: "#6366f1" },
    { id: "transporte", name: "Transporte", icon: "🚗", color: "#14b8a6" },
    { id: "impuestos", name: "Impuestos", icon: "📋", color: "#64748b" },
    { id: "extra", name: "Extra", icon: "➕", color: "#9ca3af" },
  ],
  INCOME: [
    { id: "sueldo", name: "Sueldo", icon: "💼", color: "#10b981" },
    { id: "alquiler", name: "Alquiler", icon: "🏠", color: "#3b82f6" },
    { id: "inversiones", name: "Inversiones", icon: "📈", color: "#8b5cf6" },
    { id: "venta_dolar", name: "Venta Dólar", icon: "💵", color: "#10b981" },
    { id: "trabajos", name: "Trabajos", icon: "💻", color: "#f59e0b" },
    { id: "otros", name: "Otros", icon: "➕", color: "#9ca3af" },
  ],
};

export const PAYMENT_METHODS = [
  { id: "efectivo", name: "Efectivo" },
  { id: "debito", name: "Débito" },
  { id: "credito", name: "Crédito" },
  { id: "transferencia", name: "Transferencia" },
  { id: "mercadopago", name: "MercadoPago" },
];

export const CURRENCIES = {
  ARS: { symbol: "$", name: "Peso Argentino" },
  USD: { symbol: "USD", name: "Dólar Estadounidense" },
};

export const DATE_FORMATS = {
  DISPLAY: "dd/MM/yyyy",
  API: "yyyy-MM-dd",
  FULL: "dd/MM/yyyy HH:mm:ss",
};

export const FIXED_EXPENSE_CATEGORIES = [
  "servicios",
  "impuestos",
  "salud",
  "educacion",
];
