import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://nyx-gallery-app.supabase.co', `${process.env.API_KEY} `) 