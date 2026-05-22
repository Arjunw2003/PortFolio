package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;

@Service
public class PageService {
	
	@Autowired
	 private UserRepo userRepo;

	public User saveMessage(User user) {
		return userRepo.save(user);
	}

}
