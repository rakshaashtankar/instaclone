package com.instaclone.controller;

import com.instaclone.model.Post;
import com.instaclone.service.PostServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@RestController
@RequestMapping("/api/instaclone")
@CrossOrigin(origins = "*")
public class PostController {

    @Autowired
    private PostServiceImpl postServiceImpl;

    @Value("${upload.dir}")
    private String uploadDirectory;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadPost(@RequestParam("file") MultipartFile file,
                                        @RequestParam("caption") String caption) {
        if(file.isEmpty()) {
            return new ResponseEntity<>("PLease upload the image.", HttpStatus.BAD_REQUEST);
        }
        if(caption == null || caption.trim().isEmpty()) {
            return new ResponseEntity<>("Caption is required.", HttpStatus.BAD_REQUEST);
        }
        try{
            String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
            Path filePath = Paths.get(uploadDirectory, fileName);
            Files.write(filePath, file.getBytes());
            String imagePath = "/uploads/" + fileName;
            boolean isAdded = postServiceImpl.addPost(imagePath, caption);
            if(isAdded) {
                return new ResponseEntity<>("Uploaded Successfully.", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Uploading failed.", HttpStatus.BAD_REQUEST);
            }
        } catch (IOException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }


}
