import { createClient } from "@supabase/supabase-js";
import { pharmacyKey, supabaseUrl } from "./api";

export const supabase = createClient(supabaseUrl, pharmacyKey);
