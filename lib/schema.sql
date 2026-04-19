-- Pramaan Supabase Schema
-- Run this in Supabase SQL Editor

-- Seller leads table
CREATE TABLE IF NOT EXISTS seller_leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  brand_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,  
  phone text NOT NULL,
  product_type text NOT NULL,
  location text NOT NULL,
  description text,
  website text
);

-- Career applications table
CREATE TABLE IF NOT EXISTS career_applications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  track text NOT NULL,
  why_pramaan text NOT NULL,
  proud_problem text NOT NULL,
  build_first text NOT NULL,
  portfolio_link text
);

-- Enable Row Level Security
ALTER TABLE seller_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the public forms)
CREATE POLICY "Allow anonymous inserts on seller_leads"
  ON seller_leads FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts on career_applications"
  ON career_applications FOR INSERT
  TO anon
  WITH CHECK (true);
