CREATE TABLE [dbo].[BlogPosts] (
    [BlogPostID]  INT            IDENTITY (1, 1) NOT NULL,
    [Title]       NVARCHAR (255) NOT NULL,
    [Body]        NVARCHAR (MAX) NOT NULL,
    [PublishedOn] DATETIME       CONSTRAINT [DF_Blog_PublishedOn] DEFAULT (getdate()) NOT NULL,
    CONSTRAINT [PK__BlogPosts_BlogPostID] PRIMARY KEY CLUSTERED ([BlogPostID] ASC)
);

