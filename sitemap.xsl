<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
				xmlns:html="http://www.w3.org/TR/REC-html40"
				xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
				xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<meta charset="utf-8"/>
				<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1"/>
				<title>网站地图</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no"/>
				<meta name="keywords" content="linyer,Linyer,GtLinyer,gtlinyer,sitemap,网站地图"/>
				<meta name="description" content="Linyer网站地图"/>
				<meta name="author" content="Linyer"/>
				<link rel="shortcut icon" href="./favicon.ico"/>
				<style type="text/css">
					body {
						font-size:13px;
					}
					table {
						width: 100%;
					}
					tr {
						border-bottom:5px black solid;
					}
					td {
						font-size:11px;
					}
					th {
						text-align:left;
						padding-right:30px;
						font-size:11px;
					}
					tr.even {
						background-color:whitesmoke;
					}
					a {
						color:black;
					}
				</style>
			</head>
			<body>
				<h1>网站地图</h1>
				<div id="content">
					<table cellpadding="5">
						<tr>
							<th>URL</th>
							<th>优先级</th>
							<th>更新频率</th>
							<th>最后更新时间</th>
						</tr>
						<xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'"/>
						<xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'"/>
						<xsl:for-each select="sitemap:urlset/sitemap:url">
						<tr>
							<xsl:if test="position() mod 2 != 0">
								<xsl:attribute name="class">ood</xsl:attribute>
							</xsl:if>
							<xsl:if test="position() mod 2 != 1">
								<xsl:attribute name="class">even</xsl:attribute>
							</xsl:if>
							<td>
								<xsl:variable name="itemURL">
									<xsl:value-of select="sitemap:loc"/>
								</xsl:variable>
								<a href="{$itemURL}" target="_blank">
									<xsl:value-of select="sitemap:loc"/>
								</a>
							</td>
							<td>
								<xsl:value-of select="concat(sitemap:priority*100,'%')"/>
							</td>
							<td>
								<xsl:value-of select="concat(translate(substring(sitemap:changefreq, 1, 1),concat($lower, $upper),concat($upper, $lower)),substring(sitemap:changefreq, 2))"/>
							</td>
							<td>
								<xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))"/>
							</td>
						</tr>
						</xsl:for-each>
					</table>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>