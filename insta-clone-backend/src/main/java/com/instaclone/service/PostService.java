package com.instaclone.service;

import org.springframework.stereotype.Service;


public interface PostService {
    boolean addPost(String imgPath, String imgCaption);
}
