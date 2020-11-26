import getConfig from 'next/config';
import { createClient } from '@supabase/supabase-js';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export const supabase = (() => {
  let publicClient: ReturnType<typeof createClient> = null;
  let privateClient: ReturnType<typeof createClient> = null;

  return {
    get public() {
      if (!publicClient) publicClient = createClient(publicRuntimeConfig.SUPABASE_API_URL, publicRuntimeConfig.SUPABASE_CLIENT_KEY);
      return publicClient;
    },
    get private() {
      if (!serverRuntimeConfig.SUPABASE_SERVICE_KEY) {
        throw new Error('No service key, maybe you are not in server mode?')
      }

      if (!privateClient) privateClient = createClient(publicRuntimeConfig.SUPABASE_API_URL, serverRuntimeConfig.SUPABASE_SERVICE_KEY);
      return privateClient;
    }
  };
})();
