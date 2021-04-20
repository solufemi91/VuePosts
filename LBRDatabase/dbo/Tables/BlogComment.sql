CREATE TABLE [dbo].[BlogComment] (
    [CommentID]   INT            IDENTITY (1, 1) NOT NULL,
    [BlogPostID]  INT            NOT NULL,
    [Comment]     NVARCHAR (MAX) NOT NULL,
    [CommentedOn] DATETIME       CONSTRAINT [DF_BlogComment_CommentedOn] DEFAULT (getdate()) NOT NULL,
    CONSTRAINT [PK__BlogComment_CommentID] PRIMARY KEY CLUSTERED ([CommentID] ASC),
    CONSTRAINT [FK_BlogComment_Blog] FOREIGN KEY ([BlogPostID]) REFERENCES [dbo].[BlogPosts] ([BlogPostID])
);

