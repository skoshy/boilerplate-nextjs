
import { supabase } from 'src/lib/api/client';

export const signUp = async (email, password) => {
  const signUpResponse = await supabase.public.auth.signUp({
    email,
    password,
  });

  const id = signUpResponse.user.id;

  const insertResponse = await supabase.public
    .from('users')
    .insert([
      { id, email },
    ]);

  return {
    id,
    email,
  }
};
