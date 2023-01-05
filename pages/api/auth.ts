import { supabaseClient } from "../../lib/supabaseClient";

export default function handler(req: any, res: any) {
  supabaseClient.auth.api.setAuthCookie(req, res);
}
