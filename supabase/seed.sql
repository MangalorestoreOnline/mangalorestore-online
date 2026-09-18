-- ==============================================================================
-- MangaloreStore.Online - Seed Data
-- ==============================================================================

-- 1. Insert Root Categories
INSERT INTO public.categories (id, name, slug, description, sort_order) VALUES
('c1111111-1111-1111-1111-111111111111', 'Sweets & Desserts', 'sweets-and-desserts', 'Authentic Mangalorean halwa, laddoos and traditional sweets', 1),
('c2222222-2222-2222-2222-222222222222', 'Traditional Snacks', 'traditional-snacks', 'Crispy Kori Rotti, Banana Chips, Rice Rotti and Chakkuli', 2),
('c3333333-3333-3333-3333-333333333333', 'Health & Wellness', 'health-and-wellness', 'Herbal Kashaya, Ayurvedic oils, Keramruth wellness and honey', 3),
('c4444444-4444-4444-4444-444444444444', 'Pickles & Thokku', 'pickles-and-thokku', 'Spicy Mango, Tender Mango (Appemidi), Fish and Prawn Pickles', 4),
('c5555555-5555-5555-5555-555555555555', 'Spices & Masalas', 'spices-and-masalas', 'Laveena Kundapur Chicken Masala, Bafat Powder, Byadgi Chillies', 5),
('c6666666-6666-6666-6666-666666666666', 'Traditional Cookware', 'traditional-cookware', 'Cast iron Neer Dosa Tawa, Coconut Grater, Pavu & Seru', 6)
ON CONFLICT (id) DO NOTHING;

-- 2. Insert Sub-Categories
INSERT INTO public.categories (id, name, slug, description, parent_id, sort_order) VALUES
('c3333333-2222-1111-1111-111111111111', 'Keramruth Personal Care', 'keramruth-personal-care', 'Pure coconut oil derived skincare and haircare', 'c3333333-3333-3333-3333-333333333333', 1),
('c2222222-2222-1111-1111-111111111111', 'Papads & Sandige', 'papads-and-sandige', 'Jackfruit Papads, Rice Happala and Sandige', 'c2222222-2222-2222-2222-222222222222', 1)
ON CONFLICT (id) DO NOTHING;

-- 3. Insert Featured Products
INSERT INTO public.products (
    id, name, slug, description, short_description, sku, category_id,
    base_price, compare_price, is_variable, stock_quantity, is_in_stock,
    is_featured, is_active, weight_grams, images, tags
) VALUES
(
    'p1111111-1111-1111-1111-111111111111',
    'Authentic Mangalore Kori Rotti (Crispy Rice Wafers)',
    'authentic-mangalore-kori-rotti',
    'Ultra-thin, feather-light, crispy South Indian rice wafers made using pure coastal rice. The quintessential companion to fiery Kundapur or Mangalorean chicken curry (Kori Gassi).',
    'Ultra-thin, crispy rice wafers perfect with spicy chicken gassi.',
    'MSO-KR-500',
    'c2222222-2222-2222-2222-222222222222',
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
    'p2222222-2222-2222-2222-222222222222',
    'Vishnu Premium Pure Desi Cow Ghee',
    'vishnu-premium-pure-desi-cow-ghee',
    'Traditional bilona churned aromatic desi cow ghee. Packed with rich aroma, golden granular texture, and unmatched purity from coastal farms.',
    'Pure golden granular cow ghee made with traditional methods.',
    'MSO-VG-500',
    'c3333333-3333-3333-3333-333333333333',
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
    'p3333333-3333-3333-3333-333333333333',
    'Keramruth Pure Cold Pressed Virgin Coconut Oil',
    'keramruth-cold-pressed-virgin-coconut-oil',
    '100% natural, chemical-free cold pressed virgin coconut oil sourced directly from select coastal coconuts. Excellent for glowing skin and nourished hair.',
    '100% pure cold-pressed coastal virgin coconut oil.',
    'MSO-KM-VCO',
    'c3333333-2222-1111-1111-111111111111',
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
    'p4444444-4444-4444-4444-444444444444',
    'Laveena Special Kundapur Chicken Masala Powder',
    'laveena-kundapur-chicken-masala',
    'Secret heritage spice blend handcrafted with roasted Byadgi chillies, coriander, and coastal spices for rich color and authentic flavor.',
    'Heritage spice blend for authentic coastal Kundapur chicken.',
    'MSO-LM-250',
    'c5555555-5555-5555-5555-555555555555',
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
),
(
    'p5555555-5555-5555-5555-555555555555',
    'Traditional Heavy Cast Iron Neer Dosa Tawa',
    'cast-iron-neer-dosa-tawa',
    'Pre-seasoned heavy cast iron pan specially crafted for making lace-thin Neer Dosas, Appams and Rotis with crisp edges.',
    'Pre-seasoned heavy cast iron tawa for perfect Neer Dosa.',
    'MSO-CW-NDT',
    'c6666666-6666-6666-6666-666666666666',
    1250.00,
    1499.00,
    false,
    45,
    true,
    true,
    true,
    2200,
    '[{"url": "https://images.unsplash.com/photo-1584990347449-397ddc833d7b?auto=format&fit=crop&w=800&q=80", "alt": "Cast Iron Tawa", "sort_order": 0}]'::JSONB,
    ARRAY['cookware', 'cast iron', 'tawa', 'neer dosa']
)
ON CONFLICT (id) DO NOTHING;

-- 4. Product Variants
INSERT INTO public.product_variants (product_id, variant_name, variant_type, price, compare_price, stock_quantity, sku, sort_order) VALUES
('p2222222-2222-2222-2222-222222222222', '500 ml Jar', 'Size', 499.00, 550.00, 50, 'MSO-VG-500ML', 1),
('p2222222-2222-2222-2222-222222222222', '1000 ml (1L) Jar', 'Size', 950.00, 1050.00, 30, 'MSO-VG-1L', 2),
('p3333333-3333-3333-3333-333333333333', '250 ml Bottle', 'Size', 160.00, 185.00, 60, 'MSO-KM-250', 1),
('p3333333-3333-3333-3333-333333333333', '500 ml Bottle', 'Size', 299.00, 350.00, 60, 'MSO-KM-500', 2)
ON CONFLICT DO NOTHING;

-- 5. Sample Reviews
INSERT INTO public.reviews (product_id, rating, title, body, reviewer_name, reviewer_location, is_verified_purchase, is_approved) VALUES
('p1111111-1111-1111-1111-111111111111', 5, 'Brought back childhood memories!', 'Super crispy and thin Kori Rotti. Arrived in Mumbai without any breakage.', 'Priya Kulal', 'Mumbai', true, true),
('p2222222-2222-2222-2222-222222222222', 5, 'Unmatched Aroma and Granular Texture', 'The aroma of Vishnu Ghee filled my kitchen as soon as I opened the seal. Highly recommended!', 'Vajresh Kumar', 'Mangalore', true, true),
('p4444444-4444-4444-4444-444444444444', 5, 'Authentic Kundapur Taste in Kolkata', 'The chicken curry turned out exceptionally flavorful with perfect Byadgi color.', 'Harshith', 'Kolkata', true, true)
ON CONFLICT DO NOTHING;
