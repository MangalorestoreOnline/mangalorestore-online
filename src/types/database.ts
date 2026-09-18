export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          phone: string | null;
          email: string | null;
          role: "customer" | "admin";
          loyalty_points: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          phone?: string | null;
          email?: string | null;
          role?: "customer" | "admin";
          loyalty_points?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          phone?: string | null;
          email?: string | null;
          role?: "customer" | "admin";
          loyalty_points?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      addresses: {
        Row: {
          id: string;
          customer_id: string;
          full_name: string;
          phone: string;
          address_line1: string;
          address_line2: string | null;
          city: string;
          state: string;
          pincode: string;
          is_default: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          customer_id: string;
          full_name: string;
          phone: string;
          address_line1: string;
          address_line2?: string | null;
          city: string;
          state: string;
          pincode: string;
          is_default?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          customer_id?: string;
          full_name?: string;
          phone?: string;
          address_line1?: string;
          address_line2?: string | null;
          city?: string;
          state?: string;
          pincode?: string;
          is_default?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          parent_id: string | null;
          image_url: string | null;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          parent_id?: string | null;
          image_url?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          parent_id?: string | null;
          image_url?: string | null;
          sort_order?: number;
          is_active?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          short_description: string | null;
          sku: string | null;
          barcode: string | null;
          category_id: string | null;
          base_price: number;
          compare_price: number | null;
          is_variable: boolean;
          stock_quantity: number;
          is_in_stock: boolean;
          is_featured: boolean;
          is_active: boolean;
          weight_grams: number;
          images: Json;
          tags: string[];
          meta_title: string | null;
          meta_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          short_description?: string | null;
          sku?: string | null;
          barcode?: string | null;
          category_id?: string | null;
          base_price: number;
          compare_price?: number | null;
          is_variable?: boolean;
          stock_quantity?: number;
          is_in_stock?: boolean;
          is_featured?: boolean;
          is_active?: boolean;
          weight_grams?: number;
          images?: Json;
          tags?: string[];
          meta_title?: string | null;
          meta_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          short_description?: string | null;
          sku?: string | null;
          barcode?: string | null;
          category_id?: string | null;
          base_price?: number;
          compare_price?: number | null;
          is_variable?: boolean;
          stock_quantity?: number;
          is_in_stock?: boolean;
          is_featured?: boolean;
          is_active?: boolean;
          weight_grams?: number;
          images?: Json;
          tags?: string[];
          meta_title?: string | null;
          meta_description?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      product_variants: {
        Row: {
          id: string;
          product_id: string;
          variant_name: string;
          variant_type: string;
          price: number;
          compare_price: number | null;
          stock_quantity: number;
          sku: string | null;
          sort_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          variant_name: string;
          variant_type?: string;
          price: number;
          compare_price?: number | null;
          stock_quantity?: number;
          sku?: string | null;
          sort_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          variant_name?: string;
          variant_type?: string;
          price?: number;
          compare_price?: number | null;
          stock_quantity?: number;
          sku?: string | null;
          sort_order?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          id: string;
          order_number: string;
          customer_id: string | null;
          customer_email: string;
          customer_phone: string;
          customer_name: string;
          status: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
          payment_status: "pending" | "paid" | "failed" | "refunded";
          payment_method: "razorpay" | "cod";
          razorpay_order_id: string | null;
          razorpay_payment_id: string | null;
          razorpay_signature: string | null;
          subtotal: number;
          discount_amount: number;
          shipping_amount: number;
          tax_amount: number;
          total: number;
          shipping_address: Json;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          order_number?: string;
          customer_id?: string | null;
          customer_email: string;
          customer_phone: string;
          customer_name: string;
          status?: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
          payment_status?: "pending" | "paid" | "failed" | "refunded";
          payment_method?: "razorpay" | "cod";
          razorpay_order_id?: string | null;
          razorpay_payment_id?: string | null;
          razorpay_signature?: string | null;
          subtotal?: number;
          discount_amount?: number;
          shipping_amount?: number;
          tax_amount?: number;
          total?: number;
          shipping_address?: Json;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          order_number?: string;
          customer_id?: string | null;
          customer_email?: string;
          customer_phone?: string;
          customer_name?: string;
          status?: "pending" | "confirmed" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";
          payment_status?: "pending" | "paid" | "failed" | "refunded";
          payment_method?: "razorpay" | "cod";
          razorpay_order_id?: string | null;
          razorpay_payment_id?: string | null;
          razorpay_signature?: string | null;
          subtotal?: number;
          discount_amount?: number;
          shipping_amount?: number;
          tax_amount?: number;
          total?: number;
          shipping_address?: Json;
          notes?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      order_items: {
        Row: {
          id: string;
          order_id: string;
          product_id: string | null;
          variant_id: string | null;
          product_name: string;
          variant_name: string | null;
          quantity: number;
          unit_price: number;
          total_price: number;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          order_id: string;
          product_id?: string | null;
          variant_id?: string | null;
          product_name: string;
          variant_name?: string | null;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          order_id?: string;
          product_id?: string | null;
          variant_id?: string | null;
          product_name?: string;
          variant_name?: string | null;
          quantity?: number;
          unit_price?: number;
          total_price?: number;
          image_url?: string | null;
        };
        Relationships: [];
      };
      cart_items: {
        Row: {
          id: string;
          customer_id: string;
          product_id: string;
          variant_id: string | null;
          quantity: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          customer_id: string;
          product_id: string;
          variant_id?: string | null;
          quantity?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          customer_id?: string;
          product_id?: string;
          variant_id?: string | null;
          quantity?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      wishlist_items: {
        Row: {
          id: string;
          customer_id: string;
          product_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          customer_id: string;
          product_id: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          customer_id?: string;
          product_id?: string;
        };
        Relationships: [];
      };
      reviews: {
        Row: {
          id: string;
          product_id: string;
          customer_id: string | null;
          rating: number;
          title: string | null;
          body: string;
          reviewer_name: string;
          reviewer_location: string | null;
          is_verified_purchase: boolean;
          is_approved: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          product_id: string;
          customer_id?: string | null;
          rating: number;
          title?: string | null;
          body: string;
          reviewer_name: string;
          reviewer_location?: string | null;
          is_verified_purchase?: boolean;
          is_approved?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          product_id?: string;
          customer_id?: string | null;
          rating?: number;
          title?: string | null;
          body?: string;
          reviewer_name?: string;
          reviewer_location?: string | null;
          is_verified_purchase?: boolean;
          is_approved?: boolean;
        };
        Relationships: [];
      };
      coupons: {
        Row: {
          id: string;
          code: string;
          description: string | null;
          type: "percentage" | "fixed";
          value: number;
          min_order_value: number | null;
          max_uses: number | null;
          used_count: number;
          expires_at: string | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          code: string;
          description?: string | null;
          type: "percentage" | "fixed";
          value: number;
          min_order_value?: number | null;
          max_uses?: number | null;
          used_count?: number;
          expires_at?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          code?: string;
          description?: string | null;
          type?: "percentage" | "fixed";
          value?: number;
          min_order_value?: number | null;
          max_uses?: number | null;
          used_count?: number;
          expires_at?: string | null;
          is_active?: boolean;
        };
        Relationships: [];
      };
      blogs: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string;
          author_name: string | null;
          image_url: string | null;
          is_published: boolean;
          published_at: string | null;
          meta_title: string | null;
          meta_description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt?: string | null;
          content: string;
          author_name?: string | null;
          image_url?: string | null;
          is_published?: boolean;
          published_at?: string | null;
          meta_title?: string | null;
          meta_description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string | null;
          content?: string;
          author_name?: string | null;
          image_url?: string | null;
          is_published?: boolean;
          published_at?: string | null;
          meta_title?: string | null;
          meta_description?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
      loyalty_transactions: {
        Row: {
          id: string;
          customer_id: string;
          order_id: string | null;
          type: "earned" | "redeemed";
          points: number;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          customer_id: string;
          order_id?: string | null;
          type: "earned" | "redeemed";
          points: number;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          customer_id?: string;
          order_id?: string | null;
          type?: "earned" | "redeemed";
          points?: number;
          description?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {};
    Functions: {
      deduct_order_stock: {
        Args: {
          target_order_id: string;
        };
        Returns: void;
      };
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
  };
}
