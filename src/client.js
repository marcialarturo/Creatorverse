import { createClient } from '@supabase/supabase-js'
const URL = 'https://spcaagxwqtanolcsmckk.supabase.co'
const API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwY2FhZ3h3cXRhbm9sY3NtY2trIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMzI4MzcsImV4cCI6MjAzNjkwODgzN30.0PpK4jIy6SBMJpGoBaWwzLgfcIHnog_3K-tJu6WXmwg'
// const API_KEY = `process.env.REACT_APP_SUPABASE_URL`

export const supabase = createClient(URL, API_KEY)
