import { z } from "zod";

export const AddressSchema = z.object({
  full_name: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid 10-digit mobile number is required").max(15),
  address_line1: z.string().min(5, "Address Line 1 is required"),
  address_line2: z.string().optional(),
  city: z.string().min(2, "City is required"),
  state: z.string().min(2, "State is required"),
  pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
});

export const CreateOrderSchema = z.object({
  customer_name: z.string().min(2, "Name is required"),
  customer_email: z.string().email("Valid email is required"),
  customer_phone: z.string().min(10, "Phone number is required"),
  shipping_address: AddressSchema,
  payment_method: z.enum(["razorpay", "cod"]).default("razorpay"),
  notes: z.string().optional(),
  coupon_code: z.string().optional(),
  items: z.array(
    z.object({
      product_id: z.string().uuid(),
      variant_id: z.string().uuid().nullable().optional(),
      quantity: z.number().int().positive(),
    })
  ).min(1, "Order must contain at least one item"),
});

export const VerifyPaymentSchema = z.object({
  order_id: z.string().uuid(),
  razorpay_order_id: z.string(),
  razorpay_payment_id: z.string(),
  razorpay_signature: z.string(),
});

export const ProductInputSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  slug: z.string().min(2, "Slug is required"),
  description: z.string().optional(),
  short_description: z.string().optional(),
  sku: z.string().optional(),
  category_id: z.string().uuid().nullable().optional(),
  base_price: z.number().nonnegative(),
  compare_price: z.number().nonnegative().optional().nullable(),
  is_variable: z.boolean().default(false),
  stock_quantity: z.number().int().nonnegative().default(0),
  is_in_stock: z.boolean().default(true),
  is_featured: z.boolean().default(false),
  is_active: z.boolean().default(true),
  weight_grams: z.number().int().nonnegative().default(0),
  images: z.array(
    z.object({
      url: z.string().url(),
      alt: z.string().optional(),
      sort_order: z.number().optional(),
    })
  ).default([]),
  tags: z.array(z.string()).default([]),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
});
