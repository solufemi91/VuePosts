

CREATE PROCEDURE spGetAllBlogPostComment
AS
	SELECT [CommentID],[BlogPostID],[Comment],[CommentedOn]
    FROM [LBR].[dbo].[BlogComment]
GO
