/*
  # Create Orders Table

  1. New Tables
    - `orders`
      - `id` (uuid, primary key) - Unique order identifier
      - `user_id` (uuid) - References auth.users, nullable for guest orders
      - `user_name` (text) - Customer name
      - `user_email` (text) - Customer email
      - `items` (jsonb) - Ordered food items with details
      - `total_amount` (decimal) - Total order amount
      - `payment_method` (text) - Payment method (GPay, Cash on Delivery)
      - `status` (text) - Order status (pending, completed, cancelled)
      - `created_at` (timestamptz) - Order timestamp
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `orders` table
    - Add policy for authenticated users to read their own orders
    - Add policy for authenticated users to create their own orders
    - Add policy for anonymous users to create orders (guest checkout)
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  user_name text NOT NULL,
  user_email text NOT NULL,
  items jsonb NOT NULL,
  total_amount decimal(10,2) NOT NULL,
  payment_method text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own orders"
  ON orders
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can create orders"
  ON orders
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Anonymous users can create orders"
  ON orders
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS orders_user_id_idx ON orders(user_id);
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC);