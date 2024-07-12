import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nrtazkpzgpqsbymhmfdj.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ydGF6a3B6Z3Bxc2J5bWhtZmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA4MDk5MzAsImV4cCI6MjAzNjM4NTkzMH0.Hy2aXjmdXokjRlBEFqItu-wlPOnGsixLzuYdiS6TW9E'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


