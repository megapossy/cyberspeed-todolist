import { createClient } from '@supabase/supabase-js'

const url = 'https://xyhicacikdhcmqiwpdmh.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5aGljYWNpa2RoY21xaXdwZG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxMjcxNjksImV4cCI6MjAyMDcwMzE2OX0.7r4ltxC7Dyz9DeOqPBHe0K0fCuyZstpiZdGSgVp3Z4s'

export const client = createClient(url, key)

