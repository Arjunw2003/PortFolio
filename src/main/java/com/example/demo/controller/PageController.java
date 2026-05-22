package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ApiResponse;
import com.example.demo.model.User;
import com.example.demo.service.PageService;

@RestController
@RequestMapping("/api/contact")
public class PageController {

	@Autowired
	private PageService pageService;

	@GetMapping("/")
	public String showPage() {
		return "index";
	}

	@PostMapping("/save")
	public ResponseEntity<ApiResponse> saveContact(@RequestBody User contact) {

		try {

			User saveData = pageService.saveMessage(contact);

			ApiResponse response = new ApiResponse(HttpStatus.OK, "Message Sent Successfully", saveData);

			return ResponseEntity.ok(response);

		} catch (Exception e) {

			ApiResponse response = new ApiResponse(HttpStatus.INTERNAL_SERVER_ERROR,
					"Message Not Sent : " + e.getMessage(), null);

			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
		}
	}
}