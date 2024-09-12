// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabase = createClient(
    "https://rsboqalvpnuvzhbvqwjf.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzYm9xYWx2cG51dnpoYnZxd2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNzExODYsImV4cCI6MjA0MTY0NzE4Nn0.-_kSDM4kxKUNpIHdoMlfa9IKjRNzcoDAlPakJihOdm8"
  );

export default supabase;
