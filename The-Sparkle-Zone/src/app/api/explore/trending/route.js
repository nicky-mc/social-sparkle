// /src/app/api/explore/trending.js
import { supabase } from "../../../../utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("engagement_score", { ascending: false })
      .limit(10);

    if (error) throw error;

    res.status(200).json({ trending: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
