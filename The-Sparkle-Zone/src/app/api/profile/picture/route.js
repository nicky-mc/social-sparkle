
// /pages/api/profile/picture.js
import { supabase } from '../../../utils/supabaseClient';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { userId, profilePictureUrl } = req.body;

  try {
    const { error } = await supabase
      .from('profiles')
      .update({ profile_picture_url: profilePictureUrl })
      .eq('id', userId);

    if (error) throw error;

    res.status(200).json({ message: 'Profile picture updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
