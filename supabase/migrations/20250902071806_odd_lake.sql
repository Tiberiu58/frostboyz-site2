/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `subscribed_at` (timestamp)
      - `offer_sent` (boolean, default false)
      - `source` (text, optional - where they signed up from)
      - `user_id` (uuid, optional - if they're a registered user)

  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for authenticated users to read their own subscription data
    - Add policy for service role to insert new subscribers
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  offer_sent boolean DEFAULT false,
  source text DEFAULT 'website',
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy for users to view their own subscription
CREATE POLICY "Users can view their own newsletter subscription"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR email = auth.email());

-- Policy for service role to insert new subscribers
CREATE POLICY "Service role can insert newsletter subscribers"
  ON newsletter_subscribers
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy for service role to update newsletter subscribers
CREATE POLICY "Service role can update newsletter subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO service_role
  USING (true);

-- Create index for faster email lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_offer_sent ON newsletter_subscribers(offer_sent);