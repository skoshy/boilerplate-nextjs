
import { supabase } from 'src/api/client';

export const signUp = async (email, password) => {
  const signUpResponse = await supabase.public.auth.signUp({
    email,
    password,
  });

  const id = signUpResponse.user.id;

  return {
    id,
    email,
  }
};
