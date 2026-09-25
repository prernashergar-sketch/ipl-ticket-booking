


import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://funuzsyqpuqbgbxgawsp.supabase.co";
const supabaseKey = "sb_publishable_hLMOhmXIIISXU6hqdb4vug_RjCiLvQn";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

