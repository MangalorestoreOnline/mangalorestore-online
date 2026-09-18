export interface ProductImage {
  url: string;
  alt?: string;
  sort_order?: number;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  variant_name: string;
  variant_type: string;
  price: number;
  compare_price?: number | null;
  stock_quantity: number;
  sku?: string | null;
  sort_order?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  short_description?: string | null;
  sku?: string | null;
  barcode?: string | null;
  category_id?: string | null;
  category?: {
    id: string;
    name: string;
    slug: string;
  } | null;
  base_price: number;
  compare_price?: number | null;
  is_variable: boolean;
  stock_quantity: number;
  is_in_stock: boolean;
  is_featured: boolean;
  is_active: boolean;
  weight_grams?: number;
  images: ProductImage[];
  tags: string[];
  meta_title?: string | null;
  meta_description?: string | null;
  variants?: ProductVariant[];
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  product_id: string;
  customer_id?: string | null;
  rating: number;
  title?: string | null;
  body: string;
  reviewer_name: string;
  reviewer_location?: string | null;
  is_verified_purchase: boolean;
  is_approved: boolean;
  created_at: string;
}
