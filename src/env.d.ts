/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    // Set by src/middleware.ts once a request to /admin or /api/admin has a
    // valid session cookie. Pages and routes under those paths can read this
    // directly instead of re-verifying the cookie themselves.
    admin?: { id: string; email: string };
  }
}
