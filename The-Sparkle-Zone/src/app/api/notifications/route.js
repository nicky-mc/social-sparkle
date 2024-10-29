
// /src/app/api/notifications/index.js
import { supabase } from '../../../utils/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Retrieve notifications
    const { userId } = req.query;

    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('timestamp', { ascending: false });

      if (error) throw error;

      res.status(200).json({ notifications: data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'POST') {
    // Create new notification
    const { userId, content, type } = req.body;

    try {
      const { error } = await supabase
        .from('notifications')
        .insert([{ user_id: userId, content, type, timestamp: new Date() }]);

      if (error) throw error;

      res.status(200).json({ message: 'Notification created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
