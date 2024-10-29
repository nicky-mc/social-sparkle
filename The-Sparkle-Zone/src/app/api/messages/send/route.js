
// /src/app/api/messages/send.js
import { supabase } from '../../../utils/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { senderId, receiverId, content } = req.body;

  try {
    const { error } = await supabase
      .from('messages')
      .insert([{ sender_id: senderId, receiver_id: receiverId, content, timestamp: new Date() }]);

    if (error) throw error;

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
