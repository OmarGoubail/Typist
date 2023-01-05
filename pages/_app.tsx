import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { supabaseClient } from "../lib/supabaseClient";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
