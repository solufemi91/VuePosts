--/****** Script for SelectTopNRows command from SSMS  ******/
--SELECT TOP (1000) [CommentID]
--      ,[BlogPostID]
--      ,[Comment]
--      ,[CommentedOn]
--  FROM [LBR].[dbo].[BlogComment]

CREATE PROCEDURE spGetAllBlogPostComment
AS
	SELECT [CommentID]
      ,[BlogPostID]
      ,[Comment]
      ,[CommentedOn]
  FROM [LBR].[dbo].[BlogComment]
