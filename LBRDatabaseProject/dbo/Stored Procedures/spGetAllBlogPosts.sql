CREATE PROCEDURE spGetAllBlogPosts
AS
	SELECT [BlogPostID],[Title],[Body],[PublishedOn]
	FROM [LBR].[dbo].[BlogPosts]
GO
