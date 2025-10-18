import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://vhqjiqyiqapbmtykxuun.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocWppcXlpcWFwYm10eWt4dXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk2MDY0MzksImV4cCI6MjA3NTE4MjQzOX0.8QqHo7Yi8DbnQQzIbBDXv3RErH_-NDkuuifSrd236QI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
