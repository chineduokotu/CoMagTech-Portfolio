import { NextResponse } from "next/server";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const robots = `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`;

export function GET() {
  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
