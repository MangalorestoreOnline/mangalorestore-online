-- ==============================================================================
-- MangaloreStore.Online - Seed Data
-- ==============================================================================

-- 1. Insert Root Categories
INSERT INTO public.categories (id, name, slug, description, sort_order) VALUES
('11111111-1111-4111-8111-111111111111', 'Sweets & Desserts', 'sweets-and-desserts', 'Authentic Mangalorean halwa, laddoos and traditional sweets', 1),
('22222222-2222-4222-8222-222222222222', 'Traditional Snacks', 'traditional-snacks', 'Crispy Kori Rotti, Banana Chips, Rice Rotti and Chakkuli', 2),
('33333333-3333-4333-8333-333333333333', 'Health & Wellness', 'health-and-wellness', 'Herbal Kashaya, Ayurvedic oils, Keramruth wellness and honey', 3),
('44444444-4444-4444-8444-444444444444', 'Pickles & Thokku', 'pickles-and-thokku', 'Spicy Mango, Tender Mango (Appemidi), Fish and Prawn Pickles', 4),
('55555555-5555-4555-8555-555555555555', 'Spices & Masalas', 'spices-and-masalas', 'Laveena Kundapur Chicken Masala, Bafat Powder, Byadgi Chillies', 5),
('66666666-6666-4666-8666-666666666666', 'Traditional Cookware', 'traditional-cookware', 'Cast iron Neer Dosa Tawa, Coconut Grater, Pavu & Seru', 6)
ON CONFLICT (id) DO NOTHING;

-- 2. Insert Featured Products
INSERT INTO public.products (
    id, name, slug, description, short_description, sku, category_id,
    base_price, compare_price, is_variable, stock_quantity, is_in_stock,
    is_featured, is_active, weight_grams, images, tags
) VALUES
(
    'a1111111-1111-4111-8111-111111111111',
    'Authentic Mangalore Kori Rotti (Crispy Rice Wafers)',
    'authentic-mangalore-kori-rotti',
    'Ultra-thin, feather-light, crispy South Indian rice wafers made using pure coastal rice. The quintessential companion to fiery Kundapur or Mangalorean chicken curry (Kori Gassi).',
    'Ultra-thin, crispy rice wafers perfect with spicy chicken gassi.',
    'MSO-KR-500',
    '22222222-2222-4222-8222-222222222222',
    160.00,
    190.00,
    false,
    150,
    true,
    true,
    true,
    500,
    '[{"url": "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80", "alt": "Kori Rotti", "sort_order": 0}]'::JSONB,
    ARRAY['kori rotti', 'mangalorean', 'crispy rotti', 'bestseller']
),
(
    'a2222222-2222-4222-8222-222222222222',
    'Vishnu Premium Pure Desi Cow Ghee',
    'vishnu-premium-pure-desi-cow-ghee',
    'Traditional bilona churned aromatic desi cow ghee. Packed with rich aroma, golden granular texture, and unmatched purity from coastal farms.',
    'Pure golden granular cow ghee made with traditional methods.',
    'MSO-VG-500',
    '33333333-3333-4333-8333-333333333333',
    499.00,
    550.00,
    true,
    80,
    true,
    true,
    true,
    500,
    '[{"url": "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80", "alt": "Vishnu Ghee", "sort_order": 0}]'::JSONB,
    ARRAY['ghee', 'cow ghee', 'pure', 'vishnu ghee']
),
(
    'a3333333-3333-4333-8333-333333333333',
    'Keramruth Pure Cold Pressed Virgin Coconut Oil',
    'keramruth-cold-pressed-virgin-coconut-oil',
    '100% natural, chemical-free cold pressed virgin coconut oil sourced directly from select coastal coconuts. Excellent for glowing skin and nourished hair.',
    '100% pure cold-pressed coastal virgin coconut oil.',
    'MSO-KM-VCO',
    '33333333-3333-4333-8333-333333333333',
    299.00,
    350.00,
    true,
    120,
    true,
    true,
    true,
    500,
    '[{"url": "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80", "alt": "Keramruth Coconut Oil", "sort_order": 0}]'::JSONB,
    ARRAY['keramruth', 'coconut oil', 'skincare', 'haircare']
),
(
    'a4444444-4444-4444-8444-444444444444',
    'Laveena Special Kundapur Chicken Masala Powder',
    'laveena-kundapur-chicken-masala',
    'Secret heritage spice blend handcrafted with roasted Byadgi chillies, coriander, and coastal spices for rich color and authentic flavor.',
    'Heritage spice blend for authentic coastal Kundapur chicken.',
    'MSO-LM-250',
    '55555555-5555-4555-8555-555555555555',
    180.00,
    210.00,
    false,
    200,
    true,
    true,
    true,
    250,
    '[{"url": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80", "alt": "Laveena Masala", "sort_order": 0}]'::JSONB,
    ARRAY['masala', 'chicken masala', 'kundapur', 'spices']
)
ON CONFLICT (id) DO NOTHING;

-- 3. Product Variants
INSERT INTO public.product_variants (product_id, variant_name, variant_type, price, compare_price, stock_quantity, sku, sort_order) VALUES
('a2222222-2222-4222-8222-222222222222', '500 ml Jar', 'Size', 499.00, 550.00, 50, 'MSO-VG-500ML', 1),
('a2222222-2222-4222-8222-222222222222', '1000 ml (1L) Jar', 'Size', 950.00, 1050.00, 30, 'MSO-VG-1L', 2),
('a3333333-3333-4333-8333-333333333333', '250 ml Bottle', 'Size', 160.00, 185.00, 60, 'MSO-KM-250', 1),
('a3333333-3333-4333-8333-333333333333', '500 ml Bottle', 'Size', 299.00, 350.00, 60, 'MSO-KM-500', 2)
ON CONFLICT DO NOTHING;
