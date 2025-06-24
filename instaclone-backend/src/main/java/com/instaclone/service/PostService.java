package com.instaclone.service;

import com.instaclone.model.Post;
import org.springframework.stereotype.Service;

import java.util.List;


public interface PostService {
    boolean addPost(String imgPath, String imgCaption);
    List<Post> getAllPost();
}
