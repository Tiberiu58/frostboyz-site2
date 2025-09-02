/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `user_id` (uuid, optional foreign key to users)
      - `source` (text, tracks signup source)
      - `offer_sent` (boolean, tracks if welcome offer was sent)
      - `subscribed_at` (timestamp, when they subscribed)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for service role to insert/update subscribers
    - Add policy for authenticated users to view their own subscription

  3. Indexes
    - Index on email for fast lookups
    - Index on offer_sent for marketing queries
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  source text DEFAULT 'website',
  offer_sent boolean DEFAULT false,
  subscribed_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_offer_sent ON newsletter_subscribers(offer_sent);

-- RLS Policies
CREATE POLICY "Service role can insert newsletter subscribers"
  ON newsletter_subscribers
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE POLICY "Service role can update newsletter subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO service_role
  USING (true);

CREATE POLICY "Users can view their own newsletter subscription"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR email = auth.email());