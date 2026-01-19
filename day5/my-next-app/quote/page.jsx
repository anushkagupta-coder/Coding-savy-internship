import { supabase } from "@/lib/supabase/server";

export default async function Page() {
  const { data: quotes } = await supabase
    .from("quotes")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      {quotes.map((q) => (
        <p key={q.id}>{q.quote}</p>
      ))}
    </div>
  );
}
