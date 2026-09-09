<?xml version="1.0" encoding="UTF-8"?>
<!-- Cosmetic only: browsers apply this to render the raw sitemap XML as a
     readable page. Search engines and crawlers ignore the xml-stylesheet
     instruction entirely and parse the XML directly, so this has no effect
     on crawling or indexing. -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
<xsl:output method="html" encoding="UTF-8" indent="yes"/>
<xsl:template match="/">
<html lang="en-GB">
<head>
<meta charset="UTF-8"/>
<meta name="robots" content="noindex"/>
<title>XML Sitemap | Tamesis Plumbers</title>
<style>
  body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Inter, Arial, sans-serif; background:#F7F9FB; color:#1C1C1C; margin:0; padding:40px 24px 60px; }
  .wrap { max-width: 960px; margin: 0 auto; }
  h1 { color:#0B3C5D; font-size:1.4rem; margin:0 0 6px; }
  p.sub { color:#54646F; margin:0 0 24px; font-size:0.92rem; }
  table { width:100%; border-collapse: collapse; background:#fff; border:1px solid #E2E8EE; border-radius:10px; overflow:hidden; }
  th { text-align:left; background:#0B3C5D; color:#fff; font-size:0.78rem; text-transform:uppercase; letter-spacing:0.05em; padding:12px 16px; }
  td { padding:10px 16px; border-top:1px solid #E2E8EE; font-size:0.92rem; }
  tr:hover td { background:#F7F9FB; }
  a { color:#1F6FA5; text-decoration:none; word-break:break-all; }
  a:hover { text-decoration:underline; }
  .count { color:#54646F; font-size:0.85rem; margin-top:14px; }
</style>
</head>
<body>
<div class="wrap">
<h1>Tamesis Plumbers &#8212; XML Sitemap</h1>
<xsl:choose>
  <xsl:when test="sitemap:sitemapindex">
    <p class="sub">A sitemap index, listing the sitemap file(s) below.</p>
    <table>
      <tr><th>Sitemap file</th></tr>
      <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
        <tr><td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td></tr>
      </xsl:for-each>
    </table>
  </xsl:when>
  <xsl:otherwise>
    <p class="sub">Every page here is submitted to search engines for crawling.</p>
    <table>
      <tr><th>URL</th></tr>
      <xsl:for-each select="sitemap:urlset/sitemap:url">
        <tr><td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td></tr>
      </xsl:for-each>
    </table>
    <p class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</p>
  </xsl:otherwise>
</xsl:choose>
</div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
