import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://hppwacjgikgagxbocwer.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwcHdhY2pnaWtnYWd4Ym9jd2VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0Njk1ODIsImV4cCI6MjAwOTA0NTU4Mn0.aEuRf4PC5WL-Y4Dv6gsubWb3xJ6sOZeBYlMr4CE-qeM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
