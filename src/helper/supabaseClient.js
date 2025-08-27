import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://efkgoecosbvrhltsxizp.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVma2dvZWNvc2J2cmhsdHN4aXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYyOTE5MDcsImV4cCI6MjA3MTg2NzkwN30.SFmk3ZPfmDje4IB2tWO3oh8MnE4VRsmKZGd4kDudjis";

const supabase = createClient( supabaseUrl, supabaseAnonKey );

export default supabase;