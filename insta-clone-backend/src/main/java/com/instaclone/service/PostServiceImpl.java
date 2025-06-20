package com.instaclone.service;

import com.instaclone.model.Post;
import com.instaclone.repository.PostRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@AllArgsConstructor
public class PostServiceImpl implements PostService{

    private final PostRepository postRepository;

    @Override
    public boolean addPost(String imgPath, String imgCaption) {
        try{
            if (Objects.nonNull(imgPath) && !imgPath.trim().isEmpty()
                && Objects.nonNull(imgCaption) && !imgCaption.trim().isEmpty()) {
                Post newPost = new Post();
                newPost.setImgPath(imgPath);
                newPost.setImgCaption(imgCaption);
                postRepository.save(newPost);
                return true;
            } else {
                return false;
            }
        } catch (NullPointerException e) {
            throw new RuntimeException("Data insufficient." + e.getMessage(), e);
        }
    }

    @Override
    public List<Post> getAllPost() {
        List<Post> allPost = postRepository.findAll();
        if(!allPost.isEmpty()) {
            return allPost;
        } else {
            throw new RuntimeException("No post added.");
        }

    }
}
