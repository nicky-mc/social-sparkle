// /pages/api/profile/index.js
import { supabase } from "../../../utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { userId } = req.query;

  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("id, bio, profile_picture_url, followers_count, following_count")
      .eq("id", userId)
      .single();

    if (error) throw error;

    res.status(200).json({ profile: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
