// /src/app/api/messages/retrieve.js
import { supabase } from "../../../../utils/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { userId, chatPartnerId } = req.query;

  try {
    const { data, error } = await supabase
      .from("messages")
      .select("sender_id, receiver_id, content, timestamp")
      .or(`sender_id.eq.${userId},receiver_id.eq.${chatPartnerId}`)
      .order("timestamp", { ascending: false });

    if (error) throw error;

    res.status(200).json({ messages: data });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
