export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string | null;
  parent_id?: string | null;
  image_url?: string | null;
  sort_order: number;
  is_active: boolean;
  children?: Category[];
  created_at: string;
  updated_at: string;
}
