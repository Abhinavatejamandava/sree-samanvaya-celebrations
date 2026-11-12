CREATE TABLE public.service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date date,
  location text,
  guests text,
  budget text,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.service_requests TO service_role;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;